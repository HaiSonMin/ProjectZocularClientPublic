"use client";

import {FunctionComponent, useState} from "react";
import {BusinessInformationForm} from "./business-information-form";
import {ProfessionalInformationForm} from "./professional-information-form";
import {AddressInformationForm} from "./address-information-form";
import {parseAsInteger, useQueryState} from "nuqs";
import ProfessionalRegistrationSteps from "./professional-registration-steps";
import toast from "react-hot-toast";
import userApi from "@/services/client/modules/user-api";
import {useRouter} from "next/navigation";
import {routes} from "@/constant/route";

type ProfessionalRegistrationProps = {};

const ProfessionalRegistration: FunctionComponent<
	ProfessionalRegistrationProps
> = () => {
	const router = useRouter();
	const [step, setStep] = useQueryState("step", parseAsInteger.withDefault(1));
	
	const [formData, setFormData] = useState({
		name: "",
		bussiness_specialty: "",
		website_url: "",
		email: "",
		phone: "",
		fax: "",
		business_address: {
			address_line1: "",
			address_line2: "",
			city: "",
			zip_code: "",
			state: "",
			country: "",
		},
		billing_address: {
			address_line1: "",
			address_line2: "",
			city: "",
			zip_code: "",
			state: "",
			country: "",
		},
		shipping_address: {
			address_line1: "",
			address_line2: "",
			city: "",
			zip_code: "",
			state: "",
			country: "",
		},
		professional_user: {
			first_name: "",
			last_name: "",
			email: "",
			password: "",
			mobile_phone: "",
			telephone: "",
			birth_year: "",
			job_title: "",
			gender: "",
			license_number: "",
			license_state: "",
			address: {
				address_line1: "",
				address_line2: "",
				city: "",
				zip_code: "",
				state: "",
				country: "",
			},
		},
	});
	
	const {mutate: registerProfessional, isPending} =
		userApi.useRegisterProfessional({
			onSuccess: (data) => {
				toast.success("Signup successful!");
				router.push(routes.loginProfessional);
			},
			onError: (err: any) => {
				console.log("11", err);
				toast.error(err.response.data.message || "Login failed!");
			},
		});
	
	const updateFormData = (step: number, data: any) => {
		if (step === 1) {
			// Business Information
			setFormData((prev) => ({
				...prev,
				name: data.name,
				bussiness_specialty: data.bussiness_specialty,
				website_url: data.website_url,
				email: data.email,
				phone: data.phone,
				fax: data.fax,
			}));
			setStep(2);
		} else if (step === 2) {
			// Address Information
			setFormData((prev) => ({
				...prev,
				business_address: data.business_address,
				billing_address: data.billing_address,
				shipping_address: data.shipping_address,
			}));
			setStep(3);
		} else if (step === 3) {
			// Professional Information
			setFormData((prev) => ({
				...prev,
				professional_user: {
					first_name: data.first_name,
					last_name: data.last_name,
					email: data.email,
					password: data.password,
					mobile_phone: data.mobile_phone,
					telephone: data.telephone,
					birth_year: data.birth_year,
					job_title: data.job_title,
					gender: data.gender,
					license_number: data.license_number,
					license_state: data.license_state,
					address: data.address,
				},
			}));
			
			// Format the final data and submit
			const finalData = {
				name: formData.name,
				username: data.email,
				email: formData.email,
				password: data.password,
				role: "USER" as const,
				bussiness_specialty: formData.bussiness_specialty,
				website_url: formData.website_url,
				phone: formData.phone,
				fax: formData.fax,
				business_address: formData.business_address,
				billing_address: formData.billing_address,
				shipping_address: formData.shipping_address,
				professional_user: {
					first_name: data.first_name,
					last_name: data.last_name,
					email: data.email,
					password: data.password,
					mobile_phone: data.mobile_phone,
					telephone: data.telephone,
					birth_year: parseInt(data.birth_year),
					job_title: data.job_title,
					gender: data.gender,
					license_number: data.license_number,
					license_state: data.license_state,
					address: data.address,
				},
			};
			
			registerProfessional(finalData);
		}
	};
	
	return (
		<div className="max-w-4xl mx-auto px-8">
			<h1 className="text-4xl font-bold text-center mb-10">
				Professional Registration
			</h1>
			
			<div className="mb-10">
				<ProfessionalRegistrationSteps currentStep={step}/>
			</div>
			
			{step === 1 && (
				<BusinessInformationForm onSubmit={(data) => updateFormData(1, data)}/>
			)}
			{step === 2 && (
				<AddressInformationForm onSubmit={(data) => updateFormData(2, data)}/>
			)}
			{step === 3 && (
				<ProfessionalInformationForm
					onSubmit={(data) => updateFormData(3, data)}
				/>
			)}
		</div>
	);
};

export default ProfessionalRegistration;
