"use client";

import type React from "react";

import { FunctionComponent, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { ChevronDown } from "lucide-react";
import { Button } from "../ui/buttons/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form/form";
import { Textarea } from "../ui/textarea/textarea";
import { Input } from "../ui/input/input";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
];

const storeFormSchema = z.object({
  logoImage: z.any().optional(),
  mainImage: z.any().optional(),
  image: z.any().optional(),
  title: z.string().min(1, { message: "Title is required" }),
  mainContent: z.string().min(1, { message: "Main content is required" }),
  content: z.string().min(1, { message: "Content is required" }),
  storeName: z.string().min(1, { message: "Store name is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  phone: z.string().min(1, { message: "Phone is required" }),
  webstoreLink: z.string().min(1, { message: "Webstore link is required" }),
  themeColor: z.string().min(1, { message: "Theme color is required" }),
});

type StoreFormValues = z.infer<typeof storeFormSchema>;

type WebstoreThemeFormProps = {};

const WebstoreThemeForm: FunctionComponent<WebstoreThemeFormProps> = () => {
  const [logoImageName, setLogoImageName] = useState<string | null>(null);
  const [mainImageName, setMainImageName] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string | null>(null);

  const form = useForm<StoreFormValues>({
    resolver: zodResolver(storeFormSchema),
    defaultValues: {
      title: "",
      mainContent: "",
      content: "",
      storeName: "",
      address: "",
      phone: "",
      webstoreLink: "",
      themeColor: "",
    },
  });

  function onSubmit(data: StoreFormValues) {
    console.log(data);
    // Handle form submission
  }

  function handlePreview() {
    const data = form.getValues();
    console.log("Preview data:", data);
    // Handle preview functionality
  }

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: any,
    setFileName: (name: string | null) => void
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      field.onChange(file);
    } else {
      setFileName(null);
      field.onChange(null);
    }
  };

  return (
    <div className="mt-16">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Logo Image */}
          <FormField
            control={form.control}
            name="logoImage"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  LOGO IMAGE<span className="text-red-500">*</span>
                </FormLabel>
                <div className="flex items-center gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="h-10 px-4 py-2 bg-white"
                    onClick={() =>
                      document.getElementById("logo-image-upload")?.click()
                    }
                  >
                    Choose File
                  </Button>
                  <Input
                    id="logo-image-upload"
                    type="file"
                    accept=".jpg,.jpeg,.png,.gif"
                    className="hidden"
                    onChange={(e) =>
                      handleFileChange(e, field, setLogoImageName)
                    }
                  />
                  <span className="text-sm text-gray-500">
                    {logoImageName ? logoImageName : "No file selected"}{" "}
                    (jpg,gif and png)
                  </span>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Main Image */}
          <FormField
            control={form.control}
            name="mainImage"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  MAIN IMAGE<span className="text-red-500">*</span>
                </FormLabel>
                <div className="flex items-center gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="h-10 px-4 py-2 bg-white"
                    onClick={() =>
                      document.getElementById("main-image-upload")?.click()
                    }
                  >
                    Choose File
                  </Button>
                  <Input
                    id="main-image-upload"
                    type="file"
                    accept=".jpg,.jpeg,.png,.gif"
                    className="hidden"
                    onChange={(e) =>
                      handleFileChange(e, field, setMainImageName)
                    }
                  />
                  <span className="text-sm text-gray-500">
                    {mainImageName ? mainImageName : "No file selected"}{" "}
                    (jpg,gif and png)
                  </span>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image */}
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    IMAGE<span className="text-red-500">*</span>
                  </FormLabel>
                  <div className="flex items-center gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="h-10 px-4 py-2 bg-white"
                      onClick={() =>
                        document.getElementById("image-upload")?.click()
                      }
                    >
                      Choose File
                    </Button>
                    <Input
                      id="image-upload"
                      type="file"
                      accept=".jpg,.jpeg,.png,.gif"
                      className="hidden"
                      onChange={(e) => handleFileChange(e, field, setImageName)}
                    />
                    <span className="text-sm text-gray-500">
                      {imageName ? imageName : "No file selected"} (jpg,gif and
                      png)
                    </span>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    TITLE <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Content" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Main Content */}
            <FormField
              control={form.control}
              name="mainContent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    MAIN CONTENT <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Main Content"
                      className="h-24"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Content */}
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    CONTENT <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Content"
                      className="h-24"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Store Name */}
          <FormField
            control={form.control}
            name="storeName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  STORE NAME <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Store Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Address */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    ADDRESS<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    PHONE<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Phone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Webstore Link */}
          <FormField
            control={form.control}
            name="webstoreLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  WEBSTORE LINK <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Webstore Link" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Theme Color */}
          <FormField
            control={form.control}
            name="themeColor"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  THEME COLOR <span className="text-red-500">*</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Theme Color" />
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="blue">Blue</SelectItem>
                    <SelectItem value="green">Green</SelectItem>
                    <SelectItem value="red">Red</SelectItem>
                    <SelectItem value="purple">Purple</SelectItem>
                    <SelectItem value="orange">Orange</SelectItem>
                    <SelectItem value="black">Black</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              type="submit"
              className="bg-black text-white hover:bg-black/90 w-full sm:w-1/2"
            >
              Save
            </Button>
            <Button
              type="button"
              variant="outline"
              className="border-gray-300 w-full sm:w-1/2"
              onClick={handlePreview}
            >
              Preview
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default WebstoreThemeForm;
