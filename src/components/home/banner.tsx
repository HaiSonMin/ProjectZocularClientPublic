"use client";
import { motion } from "framer-motion";

const Banner = () => (
  <motion.section
    className="relative w-full h-[500px] flex items-center justify-center text-center overflow-hidden p-4 md:p-10"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <img
        src="/images/home/banner-01.jpg"
        alt="Banner"
        className="w-full h-full object-cover"
      />
    </div>
  </motion.section>
);

export default Banner;
