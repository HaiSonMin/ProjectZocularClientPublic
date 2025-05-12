"use client";
import { useCartStore } from "@/stores/useCartStore";
import React from "react";

const OrderReceived = () => {
  const order = {
    code: "#0123_45678",
    date: "October 19, 2023",
    total: "$1,345.00",
    paymentMethod: "Credit Card",
    products: [
      {
        id: 1,
        name: "ZocuShield Syringe",
        quantity: 2,
        image: "/images/product1.png",
      },
      {
        id: 2,
        name: "ZocuWipe Towelette",
        quantity: 2,
        image: "/images/product2.png",
      },
      {
        id: 3,
        name: "ZocuShield & ZocuFoam Combo",
        quantity: 1,
        image: "/images/product3.png",
      },
    ],
  };
  const { cart } = useCartStore();

  return (
    <div className="bg-white px-8 py-14 rounded-lg shadow-lg max-w-md mx-auto text-center my-8 sm:my-16">
      <h2 className="text-xl font-semibold text-gray-500 flex justify-center items-center gap-2">
        Thank you! 🎉
      </h2>
      <h1 className="text-2xl font-bold mt-2">Your order has been received</h1>
      <div className="flex justify-center gap-6 mt-6">
        {cart.map((product) => (
          <div key={product.id} className="relative mx-2">
            <img
              src={product.image}
              alt={product.name}
              className="w-14 h-14 object-cover rounded-lg"
            />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
              {product.quantity}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-6 text-gray-600 text-sm">
        <div className="flex justify-between border-t pt-4">
          <span>Order code:</span>
          <span className="font-semibold">{order.code}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span>Date:</span>
          <span className="font-semibold">{order.date}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span>Total:</span>
          <span className="font-semibold">{order.total}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span>Payment method:</span>
          <span className="font-semibold">{order.paymentMethod}</span>
        </div>
      </div>
      <button className="mt-6 bg-black text-white px-6 py-3 rounded text-sm font-semibold">
        Purchase history
      </button>
    </div>
  );
};

export default OrderReceived;
