import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import img1 from '../../assets/images/choose1.PNG';
import img2 from '../../assets/images/choose2.PNG';
import img3 from '../../assets/images/choose3.PNG';
import img4 from '../../assets/images/choose4.PNG';
import img5 from '../../assets/images/choose5.PNG';


const cards = [
  {
    img: img1,
    title: 'Fresh Handcrafted Daily',
    desc: 'Every Morning Our bakers start early to bring you the freshest breads, pastries, and cakes - mades from scratch using real, wholesome ingredients.',
  },
  {
    img: img2,
    title: 'Locally Sourced Ingredients',
    desc: 'We partner with local farms and suppliers to ensure the highest quality and support our community.',
  },
  {
    img: img3,
    title: 'Unique & Custom Creations ',
    desc: 'From Classic croissants to custom birthday cakes, we bake with creativity and care-tailored to your tastes and special occasions.',
  },
  {
    img: img4,
    title: 'Warm Welcoming Atmosphere',
    desc: 'We are more than just a bakery-we are your neighborhood spot for sweet treats, good coffee, and friendly smiles.',
  },
  {
    img: img5,
    title: 'Passion for Excellence',
    desc: 'Baking is our passion, and it shows in every detail-from the golden crust to the last crumb.',
  },
   
];

export default function WhatWeBelieveIn() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="bg-[#fff6f0] w-full py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#e28542]"
        >
          WHAT WE BELIEVE IN
        </motion.h2>
       
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 * idx }}
            className="bg-white border border-[#D99A6C] rounded-xl p-6 flex flex-col items-center text-center shadow-md min-h-[300px]"
          >
           <div className="w-20 h-20 bg-[#D99A6C] rounded-full flex items-center justify-center mb-4 border border-[#D99A6C]">
        <img
          src={card.img}
          alt={card.title}
          className="w-12 h-12 object-contain"
        />
      </div>
        <h3 className="text-2xl font-semibold text-[#D99A6C] mb-2">
                {card.title}
              </h3>

            {/* ✅ Separated Text Division */}
            <div className="flex flex-col items-center flex-grow bg-white rounded-xl  p-2">
            
              <p className="text-black text-xl font-medium leading-tight">
                {card.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
