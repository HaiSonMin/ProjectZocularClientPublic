"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/(OutApp)/Button";
import { checkoutSchema } from "@/app/store/types";
import InputField from "@/components/ui/(OutApp)/InputField";
import { RadioGroup } from "@/components/ui/(OutApp)/RadioGroup";
import { Card, CardContent } from "@/components/ui/(OutApp)/Cart";

type CheckoutFormData = z.infer<typeof checkoutSchema>;
type PaymentMethod = CheckoutFormData["paymentMethod"];

interface IProps {
  onCheckout: (data: CheckoutFormData) => void;
}

export default function CheckoutForm({ onCheckout }: IProps) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });
  const onSubmit = (data: CheckoutFormData) => {
    onCheckout(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto space-y-6">
      {/* Contact Information */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-lg font-semibold">Contact Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <InputField
                error={errors?.firstName?.message}
                label="First Name"
                typeInput="2"
                {...register("firstName")}
                placeholder="First name"
              />
            </div>
            <div>
              <InputField
                error={errors?.lastName?.message}
                label="Last Name"
                typeInput="2"
                {...register("lastName")}
                placeholder="Last name"
              />
            </div>
          </div>
          <div>
            <InputField
              error={errors?.phoneNumber?.message}
              label="Phone Number"
              typeInput="2"
              {...register("phoneNumber")}
              placeholder="Phone number"
            />
          </div>
          <div>
            <InputField
              error={errors?.email?.message}
              label="Email Address"
              typeInput="2"
              {...register("email")}
              placeholder="Your Email"
            />
          </div>
        </CardContent>
      </Card>

      {/* Shipping Address */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-lg font-semibold">Shipping Address</h2>
          <div>
            <InputField
              error={errors?.streetAddress?.message}
              label="Street Address"
              typeInput="2"
              {...register("streetAddress")}
              placeholder="Street Address"
            />
          </div>
          <div>
            <InputField
              error={errors?.country?.message}
              label="Country"
              typeInput="2"
              {...register("country")}
              placeholder="country"
            />
          </div>
          <div>
            <InputField
              error={errors?.townCity?.message}
              label="Town / City"
              typeInput="2"
              {...register("townCity")}
              placeholder="Town / City"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <InputField
                error={errors?.state?.message}
                label="State"
                typeInput="2"
                {...register("state")}
                placeholder="State"
              />
            </div>
            <div>
              <InputField
                error={errors?.zipCode?.message}
                label="Zip Code"
                typeInput="2"
                {...register("zipCode")}
                placeholder="Zip Code"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Method */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-lg font-semibold">Payment Method</h2>
          <RadioGroup
            value={watch("paymentMethod")}
            onChange={(val) => setValue("paymentMethod", val as PaymentMethod)}
            options={[
              { value: "creditCard", label: "Pay by Card Credit" },
              { value: "paypal", label: "Paypal" },
            ]}
          />
          <div className="space-y-4 mt-4">
            <div>
              <InputField
                error={errors?.cardNumber?.message}
                label="Card Number"
                typeInput="2"
                {...register("cardNumber")}
                placeholder="1234 1234 1234"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <InputField
                  error={errors?.expiryDate?.message}
                  label="Expiration Date"
                  typeInput="2"
                  {...register("expiryDate")}
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <InputField
                  error={errors?.cvc?.message}
                  label="CVC"
                  typeInput="2"
                  {...register("cvc")}
                  placeholder="CVC code"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-black text-white py-2 rounded-md"
      >
        Place Order
      </Button>
    </form>
  );
}
