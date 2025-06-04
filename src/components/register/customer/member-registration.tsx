"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PlacesAutocomplete from "../../common/places-autocomplete";
import { Button } from "@/components/ui/buttons/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form/form";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-gronp/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select/select";
import { Checkbox } from "@/components/ui/checkbox/checkbox";
import { Separator } from "@/components/ui/separator/separator";
import { Input } from "@/components/ui/input/input";
import Image from "next/image";

const formSchema = z
  .object({
    firstName: z.string().min(2, { message: "First name is required" }),
    lastName: z.string().min(2, { message: "Last name is required" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string(),
    phone: z.string().optional(),
    mobile: z
      .string()
      .min(10, { message: "Mobile number is required for verification" }),
    birthYear: z.string({ required_error: "Please select a birth year" }),
    gender: z.enum(["male", "female"], {
      required_error: "Please select a gender",
    }),
    addressLine1: z.string().min(1, { message: "Address line 1 is required" }),
    addressLine2: z.string().optional(),
    city: z.string().min(1, { message: "City is required" }),
    state: z.string().min(1, { message: "State is required" }),
    zipCode: z.string().min(1, { message: "Zip code is required" }),
    country: z.string().min(1, { message: "Country is required" }),
    newsletter: z.boolean().optional(),
    termsAccepted: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function MemberRegistration() {
  const [countryCode, setCountryCode] = useState("+1");

  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      mobile: "",
      birthYear: "",
      gender: "male",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      newsletter: false,
      termsAccepted: false,
    },
  });

  // Generate years for dropdown (from current year - 100 to current year - 18)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 83 }, (_, i) =>
    (currentYear - 18 - i).toString()
  );

  return (
    <div className="max-w-4xl mx-auto px-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        Member Registration
      </h1>

      <Form {...form}>
        <form className="space-y-8 max-w-5xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-600 font-medium">
                      FIRST NAME <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="First Name"
                        className="h-10"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-600 font-medium">
                      LAST NAME <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Last Name"
                        className="h-10"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-600 font-medium">
                      EMAIL <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        type="email"
                        className="h-10"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-600 font-medium">
                      PASSWORD <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Password"
                        type="password"
                        className="h-10"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-600 font-medium">
                      CONFIRM PASSWORD <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Confirm Password"
                        type="password"
                        className="h-10"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-600 font-medium">
                      PHONE
                    </FormLabel>
                    <FormControl>
                      <div className="flex">
                        <div className="flex items-center border rounded-l-md px-3 bg-gray-100">
                          <span className="flex items-center gap-1">
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%205198.jpg-w3X5ceICcozPwIhSYGPFFD4HGLDMkk.jpeg"
                              alt="US Flag"
                              className="w-6 h-4"
                            />
                            <span className="text-sm">{countryCode}</span>
                          </span>
                        </div>
                        <Input
                          placeholder="Phone"
                          className="rounded-l-none h-10"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="text-gray-600 font-medium flex items-center leading-[19px]">
                      MOBILE <span className="text-red-500">*</span>{" "}
                      <FormDescription className="text-xs text-green-600 mt-0 ml-2">
                        (FOR ACCOUNT VERIFICATION)
                      </FormDescription>
                    </FormLabel>
                    <FormControl>
                      <div className="flex !mt-[13px]">
                        <div className="flex items-center border rounded-l-md px-3 bg-gray-100">
                          <span className="flex items-center gap-1">
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%205198.jpg-w3X5ceICcozPwIhSYGPFFD4HGLDMkk.jpeg"
                              alt="US Flag"
                              className="w-6 h-4"
                            />
                            <span className="text-sm">{countryCode}</span>
                          </span>
                        </div>
                        <Input
                          placeholder="Mobile"
                          className="rounded-l-none h-10"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="birthYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-600 font-medium">
                      BIRTH YEAR <span className="text-red-500">*</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-10">
                          <SelectValue placeholder="None Selected" />
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
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-gray-600 font-medium">
                      GENDER <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex gap-4"
                      >
                        <div className="flex items-center space-x-2 border rounded-md p-2 px-4 w-full h-10">
                          <RadioGroupItem value="male" id="male" />
                          <label
                            htmlFor="male"
                            className="font-medium leading-[19px]"
                          >
                            Male
                          </label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-md p-2 px-4 w-full h-10">
                          <RadioGroupItem value="female" id="female" />
                          <label
                            htmlFor="female"
                            className="font-medium leading-[19px]"
                          >
                            Female
                          </label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Separator className="my-8" />

          <div>
            <h2 className="text-2xl font-bold mb-6">Address Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="addressLine1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-600 font-medium">
                      ADDRESS LINE 1 <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Address Line 1"
                        className="h-10"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="addressLine2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-600 font-medium">
                      ADDRESS LINE 2
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Address Line 2"
                        className="h-10"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-600 font-medium">
                      CITY <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="City" className="h-10" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-600 font-medium">
                      STATE <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="State" className="h-10" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-600 font-medium">
                      ZIP CODE <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <PlacesAutocomplete
                        onPlaceSelected={(place) => {
                          const addressComponents =
                            place.address_components || [];
                          const getAddressComponent = (type: string) => {
                            return (
                              addressComponents.find((component) =>
                                component.types.includes(type)
                              )?.long_name || ""
                            );
                          };

                          form.setValue(
                            "addressLine1",
                            getAddressComponent("street_number") +
                              " " +
                              getAddressComponent("route")
                          );
                          form.setValue(
                            "city",
                            getAddressComponent("locality")
                          );
                          form.setValue(
                            "state",
                            getAddressComponent("administrative_area_level_1")
                          );
                          form.setValue(
                            "zipCode",
                            getAddressComponent("postal_code")
                          );
                          form.setValue(
                            "country",
                            getAddressComponent("country")
                          );
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-600 font-medium">
                      COUNTRY <span className="text-red-500">*</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="in">India</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="space-y-4 pt-4 max-w-[447px] mx-auto">
            <FormField
              control={form.control}
              name="newsletter"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-gray-600">
                      Yes, keep me up to date on your news and promotions
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="termsAccepted"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-gray-600">
                      <span className="text-red-500">*</span> I have read and
                      accept the{" "}
                      <Link
                        href="/terms"
                        className="text-orange-500 font-medium"
                      >
                        Terms and Conditions
                      </Link>
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-center w-full pb-10">
            <Button
              type="submit"
              className="bg-black hover:bg-black/80 text-white px-8 py-2 rounded w-[400px]"
            >
              Register
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
