"use client";

import React from "react";
import Steps from "../common/steps";

interface Step {
  id: number;
  label: string;
}

interface CheckoutStepsProps {
  currentStep: number;
}

const steps: Step[] = [
  { id: 1, label: "Shopping cart" },
  { id: 2, label: "Checkout details" },
  { id: 3, label: "Order complete" },
];

const CheckoutSteps: React.FC<CheckoutStepsProps> = ({ currentStep }) => {
  return <Steps currentStep={currentStep} steps={steps} />;
};

export default CheckoutSteps;
