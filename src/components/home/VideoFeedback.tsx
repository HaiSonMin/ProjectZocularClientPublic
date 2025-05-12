"use client";

import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const videos = [
  {
    id: "7397044213390642452",
    product: {
      name: "ZOCUSHIELD SYRINGE",
      price: "$55.95",
      image: "/images/home/product.png",
    },
  },
  {
    id: "7352538948733783301",
    product: {
      name: "ZOCUFOAM CLEANSER",
      price: "$39.99",
      image: "/images/home/product.png",
    },
  },
  {
    id: "7472421760764284215",
    product: {
      name: "ZOCUWIPE REFRESH",
      price: "$19.99",
      image: "/images/home/product.png",
    },
  },
  {
    id: "7438343704450108674",
    product: {
      name: "ZOCULAR ZEST",
      price: "$45.50",
      image: "/images/home/product.png",
    },
  },
];

const iframeStyle: any = {
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  position: "absolute",
  border: 0,
};

const TikTokVideo = () => {
  return (
    <div className="px-4 md:px-12 relative">
      <h2 className="text-center text-2xl font-bold mb-6">
        MOST LOVED BY OUR COMMUNITY
      </h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        loop={false}
        className="w-full"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            <div className="relative w-full h-[550px] rounded-lg overflow-hidden shadow-md">
              <iframe
                src={`https://www.tiktok.com/embed/${video.id}`}
                style={iframeStyle}
                allowFullScreen
                scrolling="no"
                allow="encrypted-media"
              ></iframe>
            </div>
            <div className="mt-4 text-center flex justify-center items-center">
              <img
                src={video.product.image}
                alt={video.product.name}
                className="w-12 h-12 mb-2"
              />
              <div>
                <h3 className="text-base font-semibold">
                  {video.product.name}
                </h3>
                <p className="text-gray-600 text-sm">{video.product.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TikTokVideo;
