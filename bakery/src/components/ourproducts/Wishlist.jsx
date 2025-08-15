import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useWishlist } from "../context/WishlistContext";
import CenteredImage from "../home/CenteredImage";

function HeartIcon({ filled }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={filled ? "red" : "none"}
      stroke={filled ? "red" : "currentColor"}
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

export default function WishlistPage() {
  const { wishlist, toggleWishlist, isInWishlist, clearWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return <p className="p-8 text-center text-xl">Your wishlist is empty.</p>;
  }

  return (
    <section className="overflow-x-hidden bg-[#fff6f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#e28542]">Your Wishlist</h1>
          <button
            onClick={clearWishlist}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Remove All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {wishlist.map((product, index) => (
            <motion.div
              key={product.id}
              className="relative border rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 bg-white cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1 } }}
              whileHover={{ scale: 1.05 }}
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleWishlist(product);
                }}
                className="absolute top-3 right-3 z-10 bg-white rounded-full p-2 shadow hover:scale-110 transition-transform duration-200"
              >
                <HeartIcon filled={isInWishlist(product.id)} />
              </button>

              <Link to={`/products/${product.categoryId}/${product.id}`} className="block">
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
      </div>
      <CenteredImage />
    </section>
  );
}
