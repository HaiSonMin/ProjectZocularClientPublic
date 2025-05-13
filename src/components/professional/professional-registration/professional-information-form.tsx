"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {Button} from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {parseAsInteger} from "nuqs";
import {useQueryState} from "nuqs";

const professionalFormSchema = z.object({
	first_name: z.string().min(1, {message: "First name is required"}),
	last_name: z.string().min(1, {message: "Last name is required"}),
	email: z.string().email({message: "Please enter a valid email address"}),
	password: z
		.string()
		.min(8, {message: "Password must be at least 8 characters"}),
	mobile_phone: z.string().min(1, {message: "Mobile number is required"}),
	telephone: z.string().min(1, {message: "Phone number is required"}),
	birth_year: z.string().min(1, {message: "Birth year is required"}),
	job_title: z.string().min(1, {message: "Job title is required"}),
	gender: z.string().min(1, {message: "Gender is required"}),
	license_number: z.string().min(1, {message: "License number is required"}),
	license_state: z.string().min(1, {message: "License state is required"}),
	address: z.object({
		address_line1: z.string().min(1, {message: "Address line 1 is required"}),
		address_line2: z.string().optional(),
		city: z.string().min(1, {message: "City is required"}),
		zip_code: z.string().min(1, {message: "Zip code is required"}),
		state: z.string().min(1, {message: "State is required"}),
		country: z.string().min(1, {message: "Country is required"}),
	}),
});

type ProfessionalFormValues = z.infer<typeof professionalFormSchema>;

interface ProfessionalInformationFormProps {
	onSubmit: (data: ProfessionalFormValues) => void;
}

export function ProfessionalInformationForm({
	                                            onSubmit,
                                            }: ProfessionalInformationFormProps) {
	const [step, setStep] = useQueryState("step", parseAsInteger.withDefault(1));
	const currentYear = new Date().getFullYear();
	const years = Array.from({length: 100}, (_, i) =>
		(currentYear - i).toString()
	);
	
	const form = useForm<ProfessionalFormValues>({
		resolver: zodResolver(professionalFormSchema),
		defaultValues: {
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
	
	return (
		<div>
			<h2 className="text-2xl font-bold mb-6">Professional Information</h2>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* First Name */}
						<div>
							<FormField
								control={form.control}
								name="first_name"
								render={({field}) => (
									<FormItem>
										<FormLabel className="text-xs uppercase font-medium">
											First Name <span className="text-red-500">*</span>
										</FormLabel>
										<FormControl>
											<Input
												placeholder="First Name"
												{...field}
												className="h-10"
											/>
										</FormControl>
										<FormMessage/>
									</FormItem>
								)}
							/>
						</div>
						
						{/* Last Name */}
						<div>
							<FormField
								control={form.control}
								name="last_name"
								render={({field}) => (
									<FormItem>
										<FormLabel className="text-xs uppercase font-medium">
											Last Name <span className="text-red-500">*</span>
										</FormLabel>
										<FormControl>
											<Input
												placeholder="Last Name"
												{...field}
												className="h-10"
											/>
										</FormControl>
										<FormMessage/>
									</FormItem>
								)}
							/>
						</div>
						
						{/* Job Title */}
						<div>
							<FormField
								control={form.control}
								name="job_title"
								render={({field}) => (
									<FormItem>
										<FormLabel className="text-xs uppercase font-medium">
											Job Title <span className="text-red-500">*</span>
										</FormLabel>
										<FormControl>
											<Input
												placeholder="Job Title"
												{...field}
												className="h-10"
											/>
										</FormControl>
										<FormMessage/>
									</FormItem>
								)}
							/>
						</div>
						
						{/* Birth Year */}
						<div>
							<FormField
								control={form.control}
								name="birth_year"
								render={({field}) => (
									<FormItem>
										<FormLabel className="text-xs uppercase font-medium">
											Birth Year <span className="text-red-500">*</span>
										</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<FormControl>
												<SelectTrigger className="h-10">
													<SelectValue placeholder="Select birth year"/>
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{years.map((year) => (
													<SelectItem key={year} value={year}>
														{year}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormMessage/>
									</FormItem>
								)}
							/>
						</div>
						
						{/* License Number */}
						<div>
							<FormField
								control={form.control}
								name="license_number"
								render={({field}) => (
									<FormItem>
										<FormLabel className="text-xs uppercase font-medium">
											License Number <span className="text-red-500">*</span>
										</FormLabel>
										<FormControl>
											<Input
												placeholder="License Number"
												{...field}
												className="h-10"
											/>
										</FormControl>
										<FormMessage/>
									</FormItem>
								)}
							/>
						</div>
						
						{/* License State */}
						<div>
							<FormField
								control={form.control}
								name="license_state"
								render={({field}) => (
									<FormItem>
										<FormLabel className="text-xs uppercase font-medium">
											License State <span className="text-red-500">*</span>
										</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<FormControl>
												<SelectTrigger className="h-10">
													<SelectValue placeholder="License State"/>
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="AL">Alabama</SelectItem>
												<SelectItem value="AK">Alaska</SelectItem>
												<SelectItem value="AZ">Arizona</SelectItem>
												{/* Add more states as needed */}
											</SelectContent>
										</Select>
										<FormMessage/>
									</FormItem>
								)}
							/>
						</div>
						
						{/* Email */}
						<div>
							<FormField
								control={form.control}
								name="email"
								render={({field}) => (
									<FormItem>
										<FormLabel className="text-xs uppercase font-medium">
											Email <span className="text-red-500">*</span>
										</FormLabel>
										<FormControl>
											<Input placeholder="Email" {...field} className="h-10"/>
										</FormControl>
										<FormMessage/>
									</FormItem>
								)}
							/>
						</div>
						
						{/* Mobile Phone */}
						<div>
							<FormField
								control={form.control}
								name="mobile_phone"
								render={({field}) => (
									<FormItem>
										<FormLabel className="text-xs uppercase font-medium">
											Mobile Phone <span className="text-red-500">*</span>
										</FormLabel>
										<FormControl>
											<Input
												placeholder="Mobile Phone"
												{...field}
												className="h-10"
											/>
										</FormControl>
										<FormMessage/>
									</FormItem>
								)}
							/>
						</div>
						
						{/* Telephone */}
						<div>
							<FormField
								control={form.control}
								name="telephone"
								render={({field}) => (
									<FormItem>
										<FormLabel className="text-xs uppercase font-medium">
											Telephone <span className="text-red-500">*</span>
										</FormLabel>
										<FormControl>
											<Input
												placeholder="Telephone"
												{...field}
												className="h-10"
											/>
										</FormControl>
										<FormMessage/>
									</FormItem>
								)}
							/>
						</div>
						
						{/* Gender */}
						<div>
							<FormField
								control={form.control}
								name="gender"
								render={({field}) => (
									<FormItem>
										<FormLabel className="text-xs uppercase font-medium">
											Gender <span className="text-red-500">*</span>
										</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<FormControl>
												<SelectTrigger className="h-10">
													<SelectValue placeholder="Select gender"/>
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="male">Male</SelectItem>
												<SelectItem value="female">Female</SelectItem>
												<SelectItem value="other">Other</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage/>
									</FormItem>
								)}
							/>
						</div>
						
						{/* Password */}
						<div>
							<FormField
								control={form.control}
								name="password"
								render={({field}) => (
									<FormItem>
										<FormLabel className="text-xs uppercase font-medium">
											Password <span className="text-red-500">*</span>
										</FormLabel>
										<FormControl>
											<Input
												type="password"
												placeholder="Password"
												{...field}
												className="h-10"
											/>
										</FormControl>
										<FormMessage/>
									</FormItem>
								)}
							/>
						</div>
						
						{/* Address */}
						<div className="md:col-span-2">
							<h3 className="text-lg font-medium mb-4">Address</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="md:col-span-2">
									<FormField
										control={form.control}
										name="address.address_line1"
										render={({field}) => (
											<FormItem>
												<FormLabel className="text-xs uppercase font-medium">
													Address Line 1 <span className="text-red-500">*</span>
												</FormLabel>
												<FormControl>
													<Input
														placeholder="Address Line 1"
														{...field}
														className="h-10"
													/>
												</FormControl>
												<FormMessage/>
											</FormItem>
										)}
									/>
								</div>
								
								<div className="md:col-span-2">
									<FormField
										control={form.control}
										name="address.address_line2"
										render={({field}) => (
											<FormItem>
												<FormLabel className="text-xs uppercase font-medium">
													Address Line 2
												</FormLabel>
												<FormControl>
													<Input
														placeholder="Address Line 2"
														{...field}
														className="h-10"
													/>
												</FormControl>
												<FormMessage/>
											</FormItem>
										)}
									/>
								</div>
								
								<div>
									<FormField
										control={form.control}
										name="address.zip_code"
										render={({field}) => (
											<FormItem>
												<FormLabel className="text-xs uppercase font-medium">
													Zip Code <span className="text-red-500">*</span>
												</FormLabel>
												<FormControl>
													<Input
														placeholder="Zip Code"
														{...field}
														className="h-10"
													/>
												</FormControl>
												<FormMessage/>
											</FormItem>
										)}
									/>
								</div>
								
								<div>
									<FormField
										control={form.control}
										name="address.city"
										render={({field}) => (
											<FormItem>
												<FormLabel className="text-xs uppercase font-medium">
													City <span className="text-red-500">*</span>
												</FormLabel>
												<FormControl>
													<Input
														placeholder="City"
														{...field}
														className="h-10"
													/>
												</FormControl>
												<FormMessage/>
											</FormItem>
										)}
									/>
								</div>
								
								<div>
									<FormField
										control={form.control}
										name="address.state"
										render={({field}) => (
											<FormItem>
												<FormLabel className="text-xs uppercase font-medium">
													State <span className="text-red-500">*</span>
												</FormLabel>
												<FormControl>
													<Input
														placeholder="State"
														{...field}
														className="h-10"
													/>
												</FormControl>
												<FormMessage/>
											</FormItem>
										)}
									/>
								</div>
								
								<div>
									<FormField
										control={form.control}
										name="address.country"
										render={({field}) => (
											<FormItem>
												<FormLabel className="text-xs uppercase font-medium">
													Country <span className="text-red-500">*</span>
												</FormLabel>
												<Select
													onValueChange={field.onChange}
													defaultValue={field.value}
												>
													<FormControl>
														<SelectTrigger className="h-10">
															<SelectValue placeholder="Select country"/>
														</SelectTrigger>
													</FormControl>
													<SelectContent>
														<SelectItem value="USA">United States</SelectItem>
														<SelectItem value="CAN">Canada</SelectItem>
														<SelectItem value="MEX">Mexico</SelectItem>
													</SelectContent>
												</Select>
												<FormMessage/>
											</FormItem>
										)}
									/>
								</div>
							</div>
						</div>
					</div>
					
					<div className="flex justify-center mt-8 gap-4">
						<Button
							type="button"
							variant="outline"
							className="min-w-[120px] h-12 border-gray-300 hover:bg-gray-50"
							onClick={() => setStep(step - 1)}
						>
							Back
						</Button>
						<Button
							type="submit"
							className="bg-black text-white hover:bg-black/90 min-w-[120px] h-12"
						>
							Submit
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}
