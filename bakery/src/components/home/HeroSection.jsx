
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import slide1 from '../../assets/images/slide1.jpg'
import slide2 from '../../assets/images/slide2.jpg'
import slide3 from '../../assets/images/slide3.PNG'
import slide4 from '../../assets/images/slide4.PNG'


const slides = [
  {
    id: 1,
    title: "Baked with Love, Served with Joy",
    description:
      "Freshly baked breads, cakes, and pastries made daily with the finest ingredients.",
    button: "EXPLORE NOW",
    image: slide1,
    color: "rgba(215, 252, 252, 0.8)",
  },
  {
    id: 2,
    title: "Sweet Moments, Freshly Made",
    description: "Freshly Baked Breads.",
    button: "EXPLORE NOW",
    image: slide2,
    color: "rgba(255, 230, 234, 0.8)",
  },
  {
    id: 3,
    title: "Fresh Local, Handmade",
    description:
      "Indulge in the freshness and flavor of our daily baked delicacies.",
    button: "EXPLORE NOW",
    image: slide3,
    color: "rgba(185, 237, 183, 0.8)",
  },
  {
    id: 4,
    title: "Your Neighbourhood Bakery",
    description:
      "Indulge in the freshness and flavor of our daily baked delicacies.",
    button: "EXPLORE NOW",
    image: slide4,
    color: "rgba(255, 255, 255, 1)",
  },
];

export default function HeroSection({ animation = "fade" }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);

  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    slideLeft: {
      initial: { x: 60, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: -60, opacity: 0 },
    },
    slideRight: {
      initial: { x: -60, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: 60, opacity: 0 },
    },
  }[animation];

  return (
    <section className="relative w-full h-[86vh] md:h-[90vh] overflow-hidden bg-[#fff6f0]">
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.img
          key={slides[current].id + "-bg"}
          src={slides[current].image}
          alt={slides[current].title}
          initial={variants.initial}
          animate={variants.animate}
          exit={variants.exit}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Slight dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Full-height overlay panel attached to top */}
      <div className="absolute top-0 left-10 h-full z-10 flex">
        <div className="w-full md:w-[70%] max-w-[960px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].id + "-panel"}
              initial={variants.initial}
              animate={variants.animate}
              exit={variants.exit}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="w-full h-[70%] px-6 md:px-12 py-10 md:py-16 shadow-xl flex flex-col justify-center"
              style={{
                 backgroundColor: slides[current].color,
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 60px), 50% 100%, 0 calc(100% - 60px))",
              }}
            >
              <h1 className="text-[26px] md:text-[42px] leading-tight font-extrabold text-[#2b2b2b] mb-4">
                {slides[current].title}
              </h1>
              <p className="text-[14px] md:text-[18px] text-[#2b2b2b] mb-6 max-w-[520px]">
                {slides[current].description}
              </p>
              <Link to="/products/cakes">
              <button
                className="inline-block px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base font-semibold"
                style={{
                  background: "#f9d649",
                  color: "black",
                }}
              >
                
                {slides[current].button}
              </button>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}