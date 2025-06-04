"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";
import { Checkbox } from "@/components/ui/checkbox/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form/form";
import { Button } from "@/components/ui/buttons/button";
import { login } from "@/apis/common";
import { useAuthStore } from "@/app/stores/useAuth";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().min(1, { message: "Username or email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
  rememberMe: z.boolean().optional(),
});

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const { setUser } = useAuthStore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      try {
        const response = await login(values);

        if (response?.statusCode === 200 && response?.metadata) {
          router.replace("/");
          toast.success(response?.message);
        } else {
          toast.error(response?.message);
        }
      } catch (error: any) {
        console.error("[Login Error]", error);
        toast.error(error.message || "Có lỗi xảy ra, vui lòng thử lại");
      }
    });
  }
  console.log("isPending", isPending);

  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-orange-500 mb-2">Sign In</h1>

      <p className="mb-8 text-gray-600">
        Don&apos;t have an account?
        <Link href="/signup" className="text-green-500 ml-1 hover:underline">
          Sign Up
        </Link>
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormControl>
                  <input
                    placeholder="Your username or email address"
                    className="w-full border-0 border-b border-gray-300 focus:border-gray-500 outline-none py-1 px-0 transition-colors h-[40px]"
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
              <FormItem className="space-y-1">
                <FormControl>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="w-full border-0 border-b border-gray-300 focus:border-gray-500 outline-none py-1 px-0 transition-colors h-[40px]"
                      {...field}
                    />
                    <button
                      type="button"
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                      tabIndex={-1}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between mt-8">
            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border-gray-400 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">
                    Remember me
                  </FormLabel>
                </FormItem>
              )}
            />

            <Link
              href="/forgot-password"
              className="text-orange-500 text-sm hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-black text-white hover:bg-gray-800 mt-8 disabled:opacity-50"
          >
            {isPending ? "Signing In…" : "Sign In"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
