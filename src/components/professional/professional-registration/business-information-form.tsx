"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useState } from "react";
import { useQueryState } from "nuqs";
import { parseAsInteger } from "nuqs";
import { Input } from "@/components/ui/input/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form/form";
import { Button } from "@/components/ui/buttons/button";

const businessFormSchema = z.object({
  name: z.string().min(1, { message: "Business name is required" }),
  bussiness_specialty: z
    .string()
    .min(1, { message: "Business specialty is required" }),
  website_url: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(1, { message: "Business phone is required" }),
  fax: z.string().optional(),
});

type BusinessFormValues = z.infer<typeof businessFormSchema>;

interface BusinessInformationFormProps {
  onSubmit: (data: BusinessFormValues) => void;
}

export function BusinessInformationForm({
  onSubmit,
}: BusinessInformationFormProps) {
  const [countryCode, setCountryCode] = useState("+1");

  const [step, setStep] = useQueryState("step", parseAsInteger.withDefault(1));

  const form = useForm<BusinessFormValues>({
    resolver: zodResolver(businessFormSchema),
    defaultValues: {
      name: "",
      bussiness_specialty: "",
      website_url: "",
      email: "",
      phone: "",
      fax: "",
    },
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Business Information</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase font-medium">
                      Business Name <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Business Name"
                        {...field}
                        className="h-10"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="bussiness_specialty"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase font-medium">
                      Business Specialty <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ex: ophthalmologist, dermatologist, optometrist, etc."
                        {...field}
                        className="h-10"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="website_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase font-medium">
                      Website URL
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="www.yourwebsite.com"
                        {...field}
                        className="h-10"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase font-medium">
                      Business Email <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Business Email"
                        {...field}
                        className="h-10"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase font-medium">
                      Business Phone <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <div className="flex">
                        <div className="flex items-center border rounded-l-md px-3 bg-gray-50">
                          <div className="w-6 h-4 relative overflow-hidden mr-1">
                            <div
                              className="absolute inset-0 bg-blue-900"
                              style={{
                                width: "30%",
                                height: "40%",
                                top: 0,
                                left: 0,
                              }}
                            ></div>
                            <div
                              className="absolute"
                              style={{
                                width: "30%",
                                height: "40%",
                                top: 0,
                                left: 0,
                              }}
                            >
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-white text-[4px]">★</div>
                              </div>
                            </div>
                            <div className="absolute inset-0 flex flex-col">
                              <div className="h-[8.33%] bg-red-600"></div>
                              <div className="h-[8.33%] bg-white"></div>
                              <div className="h-[8.33%] bg-red-600"></div>
                              <div className="h-[8.33%] bg-white"></div>
                              <div className="h-[8.33%] bg-red-600"></div>
                              <div className="h-[8.33%] bg-white"></div>
                              <div className="h-[8.33%] bg-red-600"></div>
                              <div className="h-[8.33%] bg-white"></div>
                              <div className="h-[8.33%] bg-red-600"></div>
                              <div className="h-[8.33%] bg-white"></div>
                              <div className="h-[8.33%] bg-red-600"></div>
                              <div className="h-[8.33%] bg-white"></div>
                            </div>
                          </div>
                          <span className="text-sm">+1</span>
                        </div>
                        <Input
                          className="rounded-l-none h-10"
                          placeholder="Business Phone"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="fax"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase font-medium">
                      Business Fax
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="XXX-XXX-XXX"
                        {...field}
                        className="h-10"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              type="submit"
              className="bg-black text-white hover:bg-black/90 min-w-[120px] h-12"
            >
              Next
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
