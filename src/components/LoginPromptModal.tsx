"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoginPromptModal: React.FC = () => {
  const isLoginPromptOpen = false;

  return (
    <AnimatePresence>
      {isLoginPromptOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative bg-white p-6 rounded-lg shadow-lg max-w-md w-[90%] text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-bold text-black mb-4">Please log in</h2>
            <p className="text-gray-600 mb-6">
              Log in to keep going with what you're doing.
            </p>

            <motion.button
              className="bg-black text-white px-6 py-2 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Log in
            </motion.button>

            <motion.button
              className="absolute top-3 right-3 text-black text-xl"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
              aria-label="Close modal"
            >
              ❌
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginPromptModal;
