"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
import * as z from "zod";

import { useState, useEffect } from "react";
import { parseAsInteger } from "nuqs";
import { useQueryState } from "nuqs";
import { Button } from "@/components/ui/buttons/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select/select";
import { Switch } from "@/components/ui/Switch/Switch";
import { Input } from "@/components/ui/input/input";

const addressSchema = z.object({
  address_line1: z.string().min(1, { message: "Address line 1 is required" }),
  address_line2: z.string().optional(),
  city: z.string().min(1, { message: "City is required" }),
  zip_code: z.string().min(1, { message: "Zip code is required" }),
  state: z.string().min(1, { message: "State is required" }),
  country: z.string().min(1, { message: "Country is required" }),
});

const formSchema = z.object({
  business_address: addressSchema,
  billing_address: addressSchema,
  shipping_address: addressSchema,
  sameAsBusiness: z.object({
    billing: z.boolean().default(false),
    shipping: z.boolean().default(false),
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface AddressInformationFormProps {
  onSubmit: (data: FormValues) => void;
}

const AddressFields = ({
  prefix,
  disabled = false,
  form,
}: {
  prefix: "business_address" | "billing_address" | "shipping_address";
  disabled?: boolean;
  form: UseFormReturn<FormValues>;
}) => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="md:col-span-2">
        <FormField
          control={form.control}
          name={`${prefix}.address_line1`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs uppercase font-medium">
                Address Line 1 <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Address Line 1"
                  {...field}
                  className="h-10"
                  disabled={disabled}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="md:col-span-2">
        <FormField
          control={form.control}
          name={`${prefix}.address_line2`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs uppercase font-medium">
                Address Line 2
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Address Line 2"
                  {...field}
                  className="h-10"
                  disabled={disabled}
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
          name={`${prefix}.zip_code`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs uppercase font-medium">
                Zip Code <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Zip Code"
                  {...field}
                  className="h-10"
                  disabled={disabled}
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
          name={`${prefix}.city`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs uppercase font-medium">
                City <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="City"
                  {...field}
                  className="h-10"
                  disabled={disabled}
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
          name={`${prefix}.state`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs uppercase font-medium">
                State <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="State"
                  {...field}
                  className="h-10"
                  disabled={disabled}
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
          name={`${prefix}.country`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs uppercase font-medium">
                Country <span className="text-red-500">*</span>
              </FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={disabled}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger className="h-10">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="USA">United States</SelectItem>
                  <SelectItem value="CAN">Canada</SelectItem>
                  <SelectItem value="MEX">Mexico</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  </>
);

export function AddressInformationForm({
  onSubmit,
}: AddressInformationFormProps) {
  const [step, setStep] = useQueryState("step", parseAsInteger.withDefault(1));

  const [sameAsBusiness, setSameAsBusiness] = useState({
    billing: false,
    shipping: false,
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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
      sameAsBusiness: {
        billing: false,
        shipping: false,
      },
    },
  });

  // Update billing address when "Same As Business Address" is toggled
  useEffect(() => {
    if (sameAsBusiness.billing) {
      const businessAddress = form.getValues("business_address");
      form.setValue("billing_address", businessAddress);
    }
  }, [sameAsBusiness.billing, form]);

  // Update shipping address when "Same As Business Address" is toggled
  useEffect(() => {
    if (sameAsBusiness.shipping) {
      const businessAddress = form.getValues("business_address");
      form.setValue("shipping_address", businessAddress);
    }
  }, [sameAsBusiness.shipping, form]);

  const handleSubmit = (values: FormValues) => {
    // Include the sameAsBusiness state in the form values
    const formData = {
      ...values,
      sameAsBusiness,
    };
    onSubmit(formData);
  };

  const toggleSameAsBusiness = (
    type: "billing" | "shipping",
    value: boolean
  ) => {
    setSameAsBusiness((prev) => ({
      ...prev,
      [type]: value,
    }));
    form.setValue(`sameAsBusiness.${type}`, value);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <div className="space-y-8">
            {/* Business Address */}
            <div>
              <h2 className="text-xl font-bold mb-4">Business Address</h2>
              <AddressFields prefix="business_address" form={form} />
            </div>

            {/* Billing Address */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Billing Address</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Same As Business Address</span>
                  <Switch
                    checked={sameAsBusiness.billing}
                    onCheckedChange={(checked: boolean) =>
                      toggleSameAsBusiness("billing", checked)
                    }
                  />
                </div>
              </div>
              <AddressFields
                prefix="billing_address"
                disabled={sameAsBusiness.billing}
                form={form}
              />
            </div>

            {/* Shipping Address */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Shipping Address</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Same As Business Address</span>
                  <Switch
                    checked={sameAsBusiness.shipping}
                    onCheckedChange={(checked: boolean) =>
                      toggleSameAsBusiness("shipping", checked)
                    }
                  />
                </div>
              </div>
              <AddressFields
                prefix="shipping_address"
                disabled={sameAsBusiness.shipping}
                form={form}
              />
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
              Next
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
