"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  { image: "/images/home/catelogyImage/01.png", title: "RADIANCE BOOSTERS" },
  { image: "/images/home/catelogyImage/02.png", title: "RADIANCE BOOSTERS" },
  { image: "/images/home/catelogyImage/03.png", title: "BALANCING FAVORITES" },
  { image: "/images/home/catelogyImage/04.png", title: "BALANCING FAVORITES" },
];

const CategoryImages: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-12 py-6">
      {categories.map((category, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden rounded-lg cursor-pointer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-64">
            <Image
              sizes=""
              src={category.image}
              alt={category.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 ease-in-out"
            />
          </div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 ease-in-out"
            whileHover={{ opacity: 1 }}
          />
          <motion.span
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-bold transition-all duration-500"
            whileHover={{ y: -10, color: "#FFD700" }}
          >
            {category.title}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
};

export default CategoryImages;
