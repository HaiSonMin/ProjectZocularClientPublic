"use client";

import React from "react";
import Steps from "../../common/steps";

interface Step {
	id: number;
	label: string;
}

interface ProfessionalRegistrationStepsProps {
	currentStep: number;
}

const steps: Step[] = [
	{id: 1, label: "Business Information"},
	{id: 2, label: "Address Information"},
	{id: 3, label: "Professional Information"},
];

const ProfessionalRegistrationSteps: React.FC<
	ProfessionalRegistrationStepsProps
> = ({currentStep}) => {
	return <Steps currentStep={currentStep} steps={steps}/>;
};

export default ProfessionalRegistrationSteps;
