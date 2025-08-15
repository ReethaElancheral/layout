import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import customer1 from "../../assets/images/testimonial1.PNG";
import customer2 from "../../assets/images/testimonial2.PNG";
import Arrow from '../../assets/images/arrow.PNG'

export default function CustomerTestimonials() {
  const testimonials = [
    {
      id: 1,
      image: customer1,
      quote:
        "A hidden gem with real passion behind every bake. You can taste the quality in every bite. it's clear they care deeply about their craft. —Daniel.K., Chef & Culinary enthusiast.",
    },
    {
      id: 2,
      image: customer2,
      quote:
        "The Kids love the cookies  - and so do I! We stop by after school for their chocolate chip cookies soft, gooey and always fresh. —Lena W., Mom of Two.",
    },
  ];

  return (
    <section className="w-full py-12 bg-[#fff6f0]">
        <h2 className="text-[#e28542] text-center font-semibold text-4xl sm:text-3xl mb-10">OUR CUSTOMERS LOVE</h2>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, index) => (
          <motion.div
  key={t.id}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.2 }}
  viewport={{ once: true }}
  className="bg-white px-6 py-10 rounded-xl shadow-md flex flex-col items-center text-center max-w-sm mx-auto min-h-[400px] border border-gray-400"
>
  {/* Image */}
  <div className="w-20 h-20 rounded-full overflow-hidden mb-5">
    <img
      src={t.image}
      alt={t.name}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Quote in centered container */}
  <div className="flex-1 flex items-center">
    <p className="text-black text-xl font-semibold">"{t.quote}"</p>
  </div>

</motion.div>

        ))}
      </div>
     <div className="flex items-center justify-center mt-10 gap-2">
  <h2 className="text-black font-semibold text-2xl sm:text-3xl">
    Direct Visits Chat items Available
  </h2>
  <img
    src={Arrow} 
    alt="Arrow"
    className="w-16 h-6 object-contain"
  />
</div>



    </section>
  );
}
