import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import "swiper/css";
import "swiper/css/navigation";
import { Toaster } from "react-hot-toast";
import LoginPromptModal from "@/components/LoginPromptModal";
import { getMe } from "@/apis/common";
import { AuthInitializer } from "@/components/AuthInitializer";

const geistSans = localFont({
  src: [
    {
      path: "../fonts/GeistVF.woff",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-geist-mono",
});
const geistMono = localFont({
  src: [
    {
      path: "../fonts/GeistMonoVF.woff",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-geist-mono",
});
export const metadata: Metadata = {
  title: "Zocular",
  description: "Zucorlar",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const meResponse = await getMe();

  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-center" reverseOrder={false} />
        <LoginPromptModal />

        <AuthInitializer
          user={
            meResponse?.statusCode === 200 ? meResponse?.metadata ?? null : null
          }
        />
        {children}
      </body>
    </html>
  );
}
