"use client";

import Steps from "@/components/common/steps";
import React from "react";

interface Step {
  id: number;
  label: string;
}

interface BookingStepsProps {
  currentStep: number;
}

const steps: Step[] = [
  { id: 1, label: "Booking Information" },
  { id: 2, label: "Checkout details" },
  { id: 3, label: "Booking complete" },
];

const BookingSteps: React.FC<BookingStepsProps> = ({ currentStep }) => {
  return <Steps currentStep={currentStep} steps={steps} />;
};

export default BookingSteps;
