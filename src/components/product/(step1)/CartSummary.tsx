"use client";

import { formatCurrency } from "@/utils";

import { useState } from "react";
import { Label } from "@/components/ui/label/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-gronp.tsx/radio-group";
import { useCartStore } from "@/stores/useCartStore";

type ShippingMethod = "free" | "express";

export const CartSummary: React.FC<{ onCheckout: () => void }> = ({
  onCheckout,
}) => {
  const { cart } = useCartStore();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>("free");

  const total = shippingMethod === "express" ? subtotal + 15 : subtotal;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
      <RadioGroup
        value={shippingMethod}
        onValueChange={(value) => setShippingMethod(value as ShippingMethod)}
      >
        <Label className="flex items-center space-x-2 border p-4 bg-gray-50 rounded h-[52px] cursor-pointer">
          <RadioGroupItem value="free" id="free" className="border-gray-400" />
          <Label htmlFor="free" className="font-medium">
            Free Shipping
          </Label>
        </Label>

        <Label className="flex items-center space-x-2 border p-4 rounded h-[52px] cursor-pointer">
          <RadioGroupItem
            value="express"
            id="express"
            className="border-gray-400"
          />
          <Label htmlFor="express" className="font-medium">
            Express Shipping
          </Label>
        </Label>
      </RadioGroup>
      <div className="mt-4 flex justify-between font-semibold text-lg">
        <span>Total:</span>
        <span>{formatCurrency(total)}</span>
      </div>
      <button
        onClick={onCheckout}
        className="mt-4 w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-200"
      >
        Checkout
      </button>
    </div>
  );
};
