import BannerAd from "@/components/home/BannerAd";

import Footer from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <BannerAd />
      <div className="mt-[86px]">{children}</div>
      <Footer />
    </div>
  );
}
