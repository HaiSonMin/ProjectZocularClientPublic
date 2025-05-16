"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { formatCurrency } from "@/utils";
import { CartItem } from "@/app/stores/types";

export const CartItemComponent: React.FC<{ item: CartItem }> = ({ item }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="grid grid-cols-6 sm:grid-cols-7 md:grid-cols-6 items-center border-b py-4 hover:bg-gray-100 transition duration-200 rounded-lg px-0 sm:px-4 pl-0">
      <div className="block sm:flex items-center space-x-4 col-span-3 sm:col-span-4 md:col-span-3">
        <Image
          src={item.image}
          alt={item.name}
          width={64}
          height={64}
          className="object-cover rounded-md w-12 h-12 md:w-16 md:h-16"
        />
        <div className="!m-0">
          <h4 className="font-semibold text-sm sm:text-base ">{item.name}</h4>
          <button
            onClick={() => setShowConfirm(true)}
            className="text-red-500 text-sm hover:underline"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="px-1 sm:px-3 py-1 border rounded-md hover:bg-gray-200 transition">
          -
        </button>
        <span className="mx-3 font-semibold">{item.quantity}</span>
        <button className="px-1 sm:px-3 border rounded-md hover:bg-gray-200 transition">
          +
        </button>
      </div>
      <div className="text-center text-sm sm:text-base">
        {formatCurrency(item.price)}
      </div>
      <div className="text-center font-semibold text-sm sm:text-base">
        {formatCurrency(item.price * item.quantity)}
      </div>
      <AnimatePresence>
        {showConfirm && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <p className="mb-4">Are you sure you want to remove this item?</p>
              <button
                onClick={() => {
                  setShowConfirm(false);
                }}
                className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
              >
                Yes
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="bg-gray-300 px-4 py-2 rounded-md"
              >
                No
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
