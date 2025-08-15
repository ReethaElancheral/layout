import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import cake from '../../assets/images/maincake.PNG'
import pastry from '../../assets/images/mainpastry.PNG'
import sweet from '../../assets/images/mainsweet.PNG'
import giftbox from '../../assets/images/maingiftbox.PNG'
import savouries from '../../assets/images/mainsavouries.PNG'
import breads from '../../assets/images/mainbread.PNG'
import cookies from '../../assets/images/maincookies.PNG'
import creamroll from '../../assets/images/mainroll.PNG'
import muffins from '../../assets/images/mainmuffin.PNG'
import chips from '../../assets/images/mainchips.PNG'
import chocolates from '../../assets/images/mainchocolates.PNG'
import rusk from '../../assets/images/mainrusk.PNG'
import CenteredImage from '../home/CenteredImage';


const categories = [
  { id: 'cakes', name: 'CAKES', typesCount: 20, imageUrl: cake },
  { id: 'pastries', name: 'PASTRIES', typesCount: 12, imageUrl: pastry },
  { id: 'sweets', name: 'SWEETS', typesCount: 25, imageUrl: sweet },
  { id: 'giftbox', name: 'GIFT BOX', typesCount: 10, imageUrl: giftbox },
  { id: 'savouries', name: 'SAVOURIES', typesCount: 34, imageUrl: savouries },
  { id: 'breads', name: 'BREADS', typesCount: 14, imageUrl: breads },
  { id: 'cookies', name: 'COOKIES & BISCUITS', typesCount: 19, imageUrl: cookies },
  { id: 'creamroll', name: 'CREAM ROLL', typesCount: 4, imageUrl: creamroll},
  { id: 'muffins', name: 'MUFFINS & FRUIT CAKES', typesCount: 18, imageUrl: muffins},
  { id: 'chips', name: 'CHIPS', typesCount: 5, imageUrl: chips },
  { id: 'chocolates', name: 'CHOCOLATES', typesCount: 10, imageUrl: chocolates },
  { id: 'rusk', name: 'RUSK', typesCount: 7, imageUrl: rusk },

];

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

export default function CategoriesPage() {
  return (
     <section className="overflow-x-hidden bg-[#fff6f0]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#e28542]">OUR PRODUCTS</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-white"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            whileHover={{ scale: 1.05 }}
          >
            <Link to={`/products/${category.id}`} aria-label={`View ${category.name} products`}>
              <div className="w-full h-54 overflow-hidden">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center bg-[#F3E5AB] h-full">
                <h2 className="text-3xl font-semibold text-black">{category.name}</h2>
                <p className="text-black mt-1 text-xl font-semibold">{category.typesCount} Types</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <CenteredImage/>
    </div>
    </section>
  );
}
