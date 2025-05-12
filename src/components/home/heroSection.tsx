"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Biến chứa nội dung
const titleText = "ACHIEVE MAXIMUM RESULT";
const descriptionText =
  "Zocular products contain our unique okra-infused Zocusome micelles that gently lift and clear the oil, debris, and residue on your eyelid margins to make your eyes and skin appear more natural and healthy!";

// Variants cho hiệu ứng từng chữ
const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between bg-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {titleText.split("").map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              custom={i}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        {/* Mô tả chạy từng chữ */}
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          {descriptionText.split(" ").map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-1"
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              custom={i}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {word}
            </motion.span>
          ))}
        </p>

        <motion.a
          href="#"
          className="mt-4 px-2 sm:px-6  py-2 bg-black text-white rounded-lg text-[12px] font-semibold shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.1, backgroundColor: "#FFA500" }}
          whileTap={{ scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          SHOP NOW
        </motion.a>
      </div>

      <motion.div
        className="relative mt-8 md:mt-0 w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          src="/images/home/hero-product.png"
          alt="Zocular Products"
          width={500}
          height={300}
          className="object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
