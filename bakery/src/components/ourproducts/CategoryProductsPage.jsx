
import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useWishlist } from '../context/WishlistContext';
import { categoriesData } from '../data/productsData';
import CenteredImage from '../home/CenteredImage';

function HeartIcon({ filled }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={filled ? 'red' : 'none'}
      stroke={filled ? 'red' : 'currentColor'}
      strokeWidth={2}
      viewBox="0 0 24 24"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
      />
    </svg>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
};


export default function CategoryProductsPage() {
  const { categoryId } = useParams();
  const location = useLocation();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const queryParams = new URLSearchParams(location.search);
  const search = queryParams.get("search")?.toLowerCase() || "";

  const products = categoriesData[categoryId];

  if (!products) {
    return <p className="p-8 text-center text-xl">Category not found</p>;
  }

  // Filter if search exists
  const filteredProducts = search
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(search) ||
          p.description.toLowerCase().includes(search)
      )
    : products;

  const categoryTitle = categoryId.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <section className="overflow-x-hidden bg-[#fff6f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#fff6f0]">
        <h1 className="text-4xl font-bold text-center mb-10">
          {search ? `Search results for "${search}" in ${categoryTitle}` : categoryTitle}
        </h1>

        {filteredProducts.length === 0 ? (
          <p className="text-center text-xl">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="relative border rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 bg-white cursor-pointer"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover={{ scale: 1.05 }}
              >
                {/* Wishlist Button */}
                <button
                  onClick={(e) => {
                      e.stopPropagation();
                    e.preventDefault();
                    // toggleWishlist(product);
                    toggleWishlist({ ...product, categoryId });
                  }}
                  className="absolute top-3 right-3 z-10 bg-white rounded-full p-2 shadow hover:scale-110 transition-transform duration-200"
                  aria-label={
                    isInWishlist(product.id)
                      ? `Remove ${product.name} from wishlist`
                      : `Add ${product.name} to wishlist`
                  }
                >
                  <HeartIcon filled={isInWishlist(product.id)} />
                </button>

                {/* Product Link */}
                <Link to={`/products/${categoryId}/${product.id}`} className="block">
                  <div className="w-full h-[320px] overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 text-center bg-[#F3E5AB] h-full">
                    <h2 className="text-3xl text-black font-bold">{product.name}</h2>
                    <p className="text-black font-semibold mt-1 text-xl">
                      FROM ₹{product.basePrice} PER KG
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      <CenteredImage />
    </section>
  );
}
