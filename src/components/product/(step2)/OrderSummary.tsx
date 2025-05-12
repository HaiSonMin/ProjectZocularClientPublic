"use client";

import { useCartStore } from "@/stores/useCartStore";
import React, { useState } from "react";

const OrderSummary: React.FC = () => {
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(25.0);

  const { cart } = useCartStore();

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const total = subtotal - discount;

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Order summary</h2>
      <div className="space-y-4">
        {cart.map((product) => (
          <div key={product.id} className="flex items-center justify-between">
            <img
              src={product.image}
              alt={product.name}
              className="w-12 h-12 object-cover"
            />
            <div className="flex-1 px-4 w-4">
              <p className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                {product.name}
              </p>
            </div>
            <span className="font-medium">${product.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center space-x-2 border-t pt-4">
        <input
          type="text"
          placeholder="Enter coupon"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className="border p-2 rounded flex-1"
        />
        <button className="bg-black text-white px-4 py-2 rounded">Apply</button>
      </div>
      <div className="mt-4 text-sm flex justify-between items-center">
        <span className="flex items-center space-x-2 text-green-500">
          <span className="font-medium">JenkateMW</span>
          <span>-${discount.toFixed(2)}</span>
          <button className="text-xs text-green-600 underline">[Remove]</button>
        </span>
      </div>
      <div className="mt-4 border-t pt-4 text-sm space-y-2">
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="font-medium">Free</span>
        </div>
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
      </div>
      <div className="mt-4 border-t pt-4 text-lg font-bold flex justify-between">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </>
  );
};

export default OrderSummary;
