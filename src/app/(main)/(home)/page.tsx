import ProductShowcase from "@/components/home/productShowcase";
import ProductList from "@/components/home/productList";
import CategoryImages from "@/components/home/catelogyImage";
import HeroSection from "@/components/home/heroSection";
import CollectionSlider from "@/components/home/conllection";
import ResultsDrivenSolutions from "@/components/home/ResultsDrivenSolutions";
import DoctorTestimonials from "@/components/home/DoctorTestimonials";
import SkinServices from "@/components/home/SkinServices";
import Newsletter from "@/components/home/Newsletter";
import dynamic from "next/dynamic";
import React from "react";
import Banner from "@/components/home/banner";

const VideoFeedback = dynamic(() => import("@/components/home/VideoFeedback"), {
  ssr: false,
});

export default function page() {
  return (
    <>
      <Banner />
      <ProductShowcase />
      <ProductList />
      <CategoryImages />
      <HeroSection />
      <VideoFeedback />
      <CollectionSlider />
      <ResultsDrivenSolutions />
      <DoctorTestimonials />
      <SkinServices />
      <Newsletter />
    </>
  );
}
