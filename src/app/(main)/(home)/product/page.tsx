"use client";

import React, { useState } from "react";
import CheckoutSteps from "@/components/product/CheckoutSteps";
import ShoppingCart from "@/components/product/(step1)/ShoppingCart";
import CheckoutDetails from "@/components/product/(step2)/CheckoutDetails";
import ThankYouPage from "@/components/product/(step3)/ThankYouPage";

enum CheckoutStep {
  CART = 1,
  DETAILS = 2,
  THANK_YOU = 3,
}

const CheckoutProcess: React.FC = () => {
  const [step, setStep] = useState<CheckoutStep>(CheckoutStep.CART);

  const nextStep = () =>
    setStep((prev) =>
      prev < CheckoutStep.THANK_YOU ? ((prev + 1) as CheckoutStep) : prev
    );

  const renderStep = () => {
    switch (step) {
      case CheckoutStep.CART:
        return <ShoppingCart nextStep={nextStep} />;
      case CheckoutStep.DETAILS:
        return <CheckoutDetails nextStep={nextStep} />;
      case CheckoutStep.THANK_YOU:
        return <ThankYouPage />;
      default:
        return <ShoppingCart nextStep={nextStep} />;
    }
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <CheckoutSteps currentStep={step} />
      {renderStep()}
    </div>
  );
};

export default CheckoutProcess;
