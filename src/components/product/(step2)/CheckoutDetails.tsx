"use client";

import React from "react";
import OrderSummary from "./OrderSummary";
import ContactForm from "@/components/product/(step2)/ContactForm";
import { z } from "zod";
import { checkoutSchema } from "@/app/stores/types";

type CheckoutFormData = z.infer<typeof checkoutSchema>;

interface IProps {
  nextStep: () => void;
}

const CheckoutDetails: React.FC<IProps> = ({ nextStep }) => {
  const handleCheckout = (data: CheckoutFormData) => {
    nextStep();
  };
  return (
    <>
      <div className="mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 rounded-lg shadow-md">
        <div className=" bg-gray-50 rounded-lg col-span-2">
          <ContactForm onCheckout={handleCheckout} />
        </div>
        <div className="border p-6 rounded-lg shadow-md bg-white h-fit">
          <OrderSummary />
        </div>
      </div>
    </>
  );
};

export default CheckoutDetails;
