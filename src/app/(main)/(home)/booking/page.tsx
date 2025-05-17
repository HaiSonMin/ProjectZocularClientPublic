"use client";

import BookingInformation from "@/components/booking/BookingInformation";
import BookingSteps from "@/components/booking/BookingSteps";

import React, { useState } from "react";

enum BookingStep {
  BOOKING = 1,
  DETAILS = 2,
  THANK_YOU = 3,
}

const CheckoutProcess: React.FC = () => {
  const [step, setStep] = useState<BookingStep>(BookingStep.BOOKING);

  const nextStep = () =>
    setStep((prev) =>
      prev < BookingStep.THANK_YOU ? ((prev + 1) as BookingStep) : prev
    );

  const renderStep = () => {
    switch (step) {
      case BookingStep.BOOKING:
        return <BookingInformation />;

      default:
        return <BookingInformation />;
    }
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <h1 className="my-10 text-4xl font-bold text-center">Booking details</h1>

      <BookingSteps currentStep={step} />

      {renderStep()}
    </div>
  );
};

export default CheckoutProcess;
