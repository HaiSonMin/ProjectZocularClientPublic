"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

const collections = [
  { name: "AGELESS", icon: "/images/home/conllection/01.png" },
  { name: "ORMEDIC", icon: "/images/home/conllection/02.png" },
  { name: "DAILY PREVENTION", icon: "/images/home/conllection/03.png" },
  { name: "IMAGE MD", icon: "/images/home/conllection/04.png" },
  { name: "the MAX", icon: "/images/home/conllection/05.png" },
  { name: "ILUMA", icon: "/images/home/conllection/06.png" },
  { name: "PREVENTION+", icon: "/images/home/conllection/07.png" },
];

const CollectionSlider = () => {
  return (
    <div className="px-4 md:px-12 relative py-8">
      <h2 className="text-center text-2xl font-bold mb-6">
        EXPLORE OUR COLLECTIONS
      </h2>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        navigation={{ nextEl: ".next", prevEl: ".prev" }}
        modules={[Navigation]}
        className="w-full"
      >
        {collections.map((collection, index) => (
          <SwiperSlide key={index} className="!flex flex-col items-center">
            <img
              src={collection.icon}
              alt={collection.name}
              className="w-12 h-12 mb-2"
            />
            <p className="text-sm font-medium text-center">{collection.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="prev absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white shadow-md rounded-full">
        <ChevronLeft size={24} />
      </button>
      <button className="next absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white shadow-md rounded-full">
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default CollectionSlider;
