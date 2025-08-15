import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import commonimg from '../../assets/images/common.png'

const CommonQuestions = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#fff6f0]"
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0 }}
        className="text-center text-[#e28542] font-semibold text-4xl sm:text-3xl mb-10 uppercase"
      >
        COMMON QUESTION FOR CUSTOMERS
      </motion.h3>

      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 text-black text-2xl sm:text-xl font-medium leading-relaxed"
        >
          <div className="mb-6">
            <strong className="block mb-1">1. What kind of content do you post on your blog?</strong>
            <p>
              We share a variety of content including baking tips, behind-the-scenes stories from our bakery, seasonal updates, recipes, product highlights, and community events.
            </p>
            <hr className="my-3 border-t border-dotted border-gray-300" />
          </div>

          <div className="mb-6">
            <strong className="block mb-1">2. How often do you update the blog?</strong>
            <p>
              We aim to post new content at least once or twice a month. Check back regularly or subscribe to our newsletter for updates!
            </p>
            <hr className="my-3 border-t border-dotted border-gray-300" />
          </div>

          <div className="mb-6">
            <strong className="block mb-1">3. Can I request a blog topic or recipe?</strong>
            <p>
              Absolutely! We love hearing from our readers. If there's a recipe or topic you’d like us to cover, feel free to contact us or leave a comment on a blog post.
            </p>
            <hr className="my-3 border-t border-dotted border-gray-300" />
          </div>

          <div className="mb-6">
            <strong className="block mb-1">4. Are the recipes you share easy to follow for beginners?</strong>
            <p>
              Yes! We include clear instructions, tips, and sometimes even step-by-step photos to help bakers of all levels enjoy the process.
            </p>
            <hr className="my-3 border-t border-dotted border-gray-300" />
          </div>

          <div className="mb-6">
            <strong className="block mb-1">5. Do you feature guest posts or collaborations?</strong>
            <p>
              We’re open to collaborating with local chefs, food
            </p>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex-1 max-w-md rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={commonimg}
            alt="Colorful macarons on a plate"
            className="w-full h-auto object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CommonQuestions;
