"use client";

import React from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <motion.div
      className="relative px-4 md:px-12 py-10 bg-white flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.img
        src="/images/home/newLetter-01.png"
        alt="okra left"
        className="absolute left-6 bottom-3 w-60"
        initial={{ opacity: 0, x: 0, rotate: -10 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      <motion.img
        src="/images/home/newLetter-02.png"
        alt="okra right"
        className="absolute right-6 bottom-3 w-60"
        initial={{ opacity: 0, x: 0, rotate: 10 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />

      <motion.h2
        className="text-2xl font-bold z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Join Our Newsletter
      </motion.h2>
      <motion.p
        className="text-gray-600 mt-2  z-10"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Sign up for deals, new products and promotions
      </motion.p>

      <motion.div
        className="mt-6 flex w-full max-w-lg border border-gray-300 rounded-full overflow-hidden z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <input
          type="email"
          placeholder="Email address"
          className="flex-1 p-3 focus:outline-none"
        />
        <button className="px-6 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition-all">
          Signup
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Newsletter;
