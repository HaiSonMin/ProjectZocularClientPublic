"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Luis Rojas",
    text: "Zocular products have changed the way I treat infectious and inflammatory lid diseases in my patients...",
    image: "/images/home/doctor/01.png",
  },
  {
    name: "Dr. Shane Swatts",
    text: "Zocular has emerged as a significant asset in my practice for treating ocular surface disease...",
    image: "/images/home/doctor/02.png",
  },
  {
    name: "Dr. Edward Jaccoma",
    text: "Zocular products are safe, comfortable, effective, easy to use and easy to explain...",
    image: "/images/home/doctor/03.png",
  },
];

const DoctorTestimonials = () => {
  return (
    <div className="px-4 md:px-12 py-10">
      <h2 className="text-center text-2xl font-bold mb-6">
        WHAT DOCTORS SAY ABOUT ZOCULAR
      </h2>
      <Swiper
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        loop={true}
        className="w-full"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-lg mx-auto h-[350px] flex flex-col justify-between">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-500" />
                ))}
              </div>
              <div className="text-lg italic flex-grow">
                “{testimonial.text}”
              </div>
              <div className="mt-4 flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mb-2"
                />
                <h3 className="text-base font-semibold">{testimonial.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DoctorTestimonials;
