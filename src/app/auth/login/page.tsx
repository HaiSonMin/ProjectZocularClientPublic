"use client";

import { useState } from "react";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { routes } from "@/constants/routes";
import { Label } from "@/components/ui/label/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-gronp/radio-group";
import { Button } from "@/components/ui/buttons/button";
import { AccountType } from "@/app/types/auth";

export default function Page() {
  const [accountType, setAccountType] = useState<AccountType>("customer");

  const router = useRouter();

  const redirectTo =
    accountType === "customer"
      ? routes.loginCustomer
      : routes.loginProfessional;

  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-orange-500 mb-6">Sign In</h1>

      <p className="mb-6 text-gray-600">
        Don’t have an accout yet?
        <Link href="/signin" className="text-green-500 ml-1 hover:underline">
          Sign Up
        </Link>
      </p>

      <RadioGroup
        value={accountType}
        onValueChange={(value) => setAccountType(value as AccountType)}
        className="space-y-4"
      >
        <Label className="flex items-center space-x-2 border p-4 bg-gray-50 rounded h-[52px] cursor-pointer">
          <RadioGroupItem
            value="customer"
            id="customer"
            className="border-gray-400"
          />
          <Label htmlFor="customer" className="font-medium">
            I am a Customer
          </Label>
        </Label>

        <Label className="flex items-center space-x-2 border p-4 rounded h-[52px] cursor-pointer">
          <RadioGroupItem
            value="professional"
            id="professional"
            className="border-gray-400"
          />
          <Label htmlFor="professional" className="font-medium">
            I am a Professional
          </Label>
        </Label>
      </RadioGroup>

      <Button
        className="w-full mt-6 bg-black text-white hover:bg-gray-800 h-[48px]"
        onClick={() => router.push(redirectTo)}
      >
        Continue
      </Button>
    </div>
  );
}
