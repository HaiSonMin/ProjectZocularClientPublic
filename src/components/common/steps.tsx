"use client";

import React from "react";
import {Check} from "lucide-react";
import clsx from "clsx";

interface Step {
	id: number;
	label: string;
}

interface StepsProps {
	currentStep: number;
	steps: Step[];
}

// Hàm giúp lấy className cho từng bước
const getStepStyle = (currentStep: number, stepId: number) => {
	if (currentStep > stepId) return "bg-green-500";
	if (currentStep === stepId) return "bg-gray-900";
	return "bg-gray-300";
};

const Steps: React.FC<StepsProps> = ({currentStep, steps}) => {
	return (
		<div className="flex items-center justify-center w-full max-w-2xl mx-auto mt-6">
			{steps.map((step) => (
				<div
					key={step.id}
					className="flex flex-1 flex-col items-center relative mx-2 sm:mx-4"
				>
					<div className="flex justify-start items-center gap-2 w-full">
						{/* Icon */}
						<div
							className={clsx(
								"w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-white font-bold",
								getStepStyle(currentStep, step.id)
							)}
							aria-label={`Step ${step.id}`}
						>
							{currentStep > step.id ? <Check size={20}/> : step.id}
						</div>
						
						<span
							className={clsx("text-sm font-semibold", {
								"text-green-500": currentStep > step.id,
								"text-gray-800": currentStep === step.id,
								"text-gray-500": currentStep < step.id,
							})}
						>
              {step.label}
            </span>
					</div>
					
					{currentStep >= step.id && (
						<div
							className={clsx(
								"w-full h-[2px] mt-2",
								currentStep === step.id ? "bg-gray-900" : "bg-green-500"
							)}
						></div>
					)}
				</div>
			))}
		</div>
	);
};

export default Steps;
