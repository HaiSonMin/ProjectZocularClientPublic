import ToasterDisplay from "@/components/ui/notifications/ToasterDisplay";
import "./globals.scss";
import type { Metadata } from "next";
import localFont from "next/font/local";

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
  title: "Automation Socials",
  description: "BoDevops developer",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ToasterDisplay />
      </body>
    </html>
  );
}
