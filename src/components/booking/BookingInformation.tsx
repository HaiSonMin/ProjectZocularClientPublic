"use client";

import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form/form";
import { Input } from "@/components/ui/input/input";
import { Button } from "../ui/buttons/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { DatePicker } from "../ui/calendar/datePicker";
import { TimePicker } from "../ui/calendar/timePicker";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  additionalInfo: z
    .string()
    .min(1, { message: "Additional information is required" }),
  selectDate: z
    .date()
    .nullable()
    .refine((val) => val !== null, { message: "Please select a date" })
    .transform((date) => (date ? date.toISOString() : null)),
  selectTime: z.string().min(1, { message: "Select time is required" }),
});

type FormData = z.infer<typeof formSchema>;

const BookingInformation: React.FC = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      additionalInfo: "",
      selectDate: null,
      selectTime: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Submitted business info:", data);
  };

  return (
    <div className="w-[596px] mx-auto my-10">
      <h2 className="text-xl font-medium  mb-6">Contact Infomation</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase font-medium">
                      First Name <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="First name"
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
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase font-medium">
                      Last Name <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Last name"
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
                      Phone number <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Phone numer"
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
                      Email address <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your email"
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
          <div>
            <FormField
              control={form.control}
              name="additionalInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs uppercase font-medium">
                    Additional information{" "}
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Additional information"
                      {...field}
                      className="h-10"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <FormField
                control={form.control}
                name="selectDate"
                render={({ field }) => (
                  <FormItem>
                    <DatePicker
                      value={field.value ? new Date(field.value) : undefined} // Now typed as Date | undefined
                      onChange={(date) => field.onChange(date)} // Passes Date | undefined
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="selectTime"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <TimePicker
                        value={field.value}
                        onChange={field.onChange}
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
              className="bg-black text-white hover:bg-black/90 min-w-[120px] h-12 w-full"
            >
              Confirm
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default BookingInformation;
