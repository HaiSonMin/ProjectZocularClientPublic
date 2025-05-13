import React from "react";
import Image from "next/image";

export default function NoAuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="block md:flex md:w-1/2 justify-center items-center bg-gray-100 ">
        <div className="w-full flex justify-center items-center">
          <Image
            src="/images/auth/bg-auth.png"
            alt="Auth Background"
            width={500}
            height={500}
            className=" w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
          />
        </div>
      </div>
      <div className="flex items-center justify-center bg-white w-full md:w-1/2">
        {children}
      </div>
    </div>
  );
}
