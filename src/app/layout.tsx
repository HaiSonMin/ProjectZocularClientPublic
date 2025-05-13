import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import "swiper/css";
import "swiper/css/navigation";
import { Toaster } from "react-hot-toast";
import LoginPromptModal from "@/components/LoginPromptModal";
import Providers from "@/components/providers";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-center" reverseOrder={false} />
        <LoginPromptModal />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
