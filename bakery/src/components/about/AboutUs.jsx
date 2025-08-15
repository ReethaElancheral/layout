import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import about1 from "../../assets/images/about1.png";
import about2 from "../../assets/images/about2.png";
import WhatWeBelieveIn from "./WhatWeBelieve";
import bottomimg from "../../assets/images/aboutbottom.png";

export default function AboutUs() {
  const { ref: row1Ref, inView: row1InView } = useInView({
    triggerOnce: true,
    threshold: 0.12,
  });
  const { ref: row2Ref, inView: row2InView } = useInView({
    triggerOnce: true,
    threshold: 0.12,
  });

  // vertical + scale animation (no horizontal movement)
  const popIn = {
    hidden: { opacity: 0, y: 20, scale: 0.995 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.65, ease: "easeOut" },
    },
  };

  return (
    <section className="overflow-x-hidden bg-[#fff6f0]">
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {/* Row 1 */}
        <div ref={row1Ref} className="overflow-hidden">
          <h2 className="text-center text-xl text-[#e28542] sm:text-2xl lg:text-3xl font-bold mb-6">
            ABOUT US
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-[65%_35%] gap-8 items-center">
            <motion.div
              variants={popIn}
              initial="hidden"
              animate={row1InView ? "visible" : "hidden"}
              className="space-y-4"
            >
              <p className="text-black font-semibold text-2xl text-center">
                Baking From the Heart Since 2012 At Cherii Bakery, every loaf,
                pastry and cake tells a story. What started as a small kitchen
                passion has blossomed into a community favourite. We belive in
                using time-honored recipes, fresh local ingredients, and a
                generous sprinkle of love in every bite.
              </p>
              <p className="text-black font-semibold text-2xl text-center">
                Our Mission is to bring joy through handcrafted baked goods made
                daily with care and dedication. Whether it's your morning bread
                or a special occasion cake, we treat each creation as if it's
                for family.
              </p>
              <p className="text-black font-semibold text-2xl text-center">
                We are proud to serve our neighborhood, support local formers,
                and bake a little happiness into everyday.
              </p>
            </motion.div>

            <motion.div
              variants={popIn}
              initial="hidden"
              animate={row1InView ? "visible" : "hidden"}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={about1}
                alt="Our Bakery"
                className="w-full max-w-[350px] h-full object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </div>

        {/* Row 2 */}
        <div ref={row2Ref} className="overflow-hidden">
          <h2 className="text-center text-xl text-[#e28542] sm:text-2xl lg:text-3xl font-bold mb-6">
            OUR STORY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-8 items-center">
            <motion.div
              variants={popIn}
              initial="hidden"
              animate={row2InView ? "visible" : "hidden"}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={about2}
                alt="Baking process"
                className="w-full h-full object-cover max-w-[350px] rounded-2xl"
              />
            </motion.div>

            <motion.div
              variants={popIn}
              initial="hidden"
              animate={row2InView ? "visible" : "hidden"}
              className="space-y-4"
            >
              <p className="text-black font-semibold text-2xl text-center">
                Cherii bakery began as a home kitchen dream and quickly became a
                beloved neighborhood tresure. Founded on the values of quality,
                community, and home made charm. We bake everything fresh each
                day using family recipes and locally sourced ingredients.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <WhatWeBelieveIn />

      <div className="max-w-7xl mx-auto px-4 py-8 bg-[#f4e4a8] rounded-xl mb-10">
        <h2 className="text-3xl font-semibold text-center mb-4 text-[#e28542]">
          MEET THE BAKERY
        </h2>
        <p className="text-black text-center text-xl font-medium">
          Our team is made up of passionate bakers who bring skill, creativity,
          and care to every product. From our Head Baker to our pastry chefs,
          everyone shares a commitment to quality and customer happiness.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[65%_35%] gap-8 items-center mb-10">
        <motion.div
          variants={popIn}
          initial="hidden"
          animate={row1InView ? "visible" : "hidden"}
          className="space-y-4"
        >
          <h2 className="text-3xl font-semibold text-center mb-4 text-[#e28542]">
            COME VISIT US
          </h2>
          <p className="text-black font-semibold text-2xl text-center">
            We are serving smiles across Tamilnadu with many <br />
            franchise location!
          </p>
          <p className="text-black font-semibold text-2xl text-center">
            Drop by your nearest branch and enjoy our fresh,
            <br /> handcrafted treats.
          </p>

          <div className="px-10 py-10 ml-10">
            <h2 className="text-3xl font-semibold text-left mb-4 text-[#e28542]">
              HEAD OFFICE:
            </h2>
            <p className="text-black font-semibold text-2xl text-left">
              Cherry Bakery,
            </p>
            <p className="text-black font-semibold text-2xl text-left">
              No.45, Anna salai, T.Nagar,
            </p>
            <p className="text-black font-semibold text-2xl text-left">
              Chennai-600 017
            </p>
            <p className="text-black font-semibold text-2xl text-left">
              Tamilnadu, India.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={popIn}
          initial="hidden"
          animate={row1InView ? "visible" : "hidden"}
          className="overflow-hidden rounded-2xl"
        >
          <img
            src={bottomimg}
            alt="Our Bakery"
            className="w-full max-w-[350px] h-[400px] object-cover rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
