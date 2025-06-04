"use client";

import React, { useState } from "react";
import { Ticket } from "lucide-react";

import { CartItemComponent } from "./CartForm";
import { CartSummary } from "./CartSummary";
import { Input } from "@/components/ui/(OutApp)/input";
import { Button } from "@/components/ui/(OutApp)/Button";
import { CartItem } from "@/app/stores/types";

interface IProps {
  nextStep: () => void;
}

const ShoppingCart = ({ nextStep }: IProps) => {
  const cart: Array<{ id: string; [key: string]: any }> = [];
  const [coupon, setCoupon] = useState("");
  const handleApply = () => {};
  const handleCheckout = () => {
    nextStep();
  };

  return (
    <>
      <div className="mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 rounded-lg shadow-md">
        <div className=" bg-gray-50 rounded-lg col-span-2">
          <div className="grid  grid-cols-6 sm:grid-cols-7 md:grid-cols-6 font-semibold text-gray-700 border-b pb-2 mb-4">
            <span className="col-span-3 sm:col-span-4 md:col-span-3">
              Product
            </span>
            <span className="text-center">Quantity</span>
            <span className="text-center">Price</span>
            <span className="text-center">Subtotal</span>
          </div>
          {cart.length > 0 ? (
            cart.map((item) => (
              <CartItemComponent key={item.id} item={item as any} />
            ))
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}
        </div>
        <div className="border p-6 rounded-lg shadow-md bg-white h-fit">
          <CartSummary onCheckout={handleCheckout} />
        </div>
      </div>
      <div className="bg-gray-50 p-6">
        <div className="flex flex-col gap-2 w-fit">
          <h3 className="text-lg font-semibold">Have a coupon?</h3>
          <p className="text-gray-500">
            Add your code for an instant cart discount
          </p>

          <div className="flex border border-gray-300 rounded-md overflow-hidden  ">
            <span className="flex items-center px-3 bg-gray-100 border-r">
              <Ticket size={20} className="text-gray-500" />
            </span>
            <Input
              value={coupon}
              type="text"
              placeholder="Coupon Code"
              onChange={(e) => setCoupon(e.target.value)}
              className="flex-1 border-none focus:ring-0"
            />
            <Button onClick={handleApply} className="rounded-none">
              Apply
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
