"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  { title: "REGIMEN BUILDER", image: "/images/home/skinService/01.png" },
  { title: "PRO TIPS & VIDEOS", image: "/images/home/skinService/02.png" },
  {
    title: "CHAT WITH AN ESTHETICIAN",
    image: "/images/home/skinService/03.png",
  },
  { title: "BOOK A TREATMENT", image: "/images/home/skinService/04.png" },
];

const SkinServices = () => {
  return (
    <motion.div
      className="px-4 md:px-12 py-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-center text-2xl font-bold mb-6">SKIN SERVICES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg h-[350px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkinServices;
