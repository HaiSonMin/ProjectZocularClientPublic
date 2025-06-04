"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { ProductCard, ProductType } from "@/components/home/productList";
import { FaArrowRight } from "react-icons/fa6";

type SectionState = {
  howToUse: boolean;
  packaging: boolean;
  ingredients: boolean;
  reviews: boolean;
};

const ProductDetail = () => {
  const [isOpen, setIsOpen] = useState<SectionState>({
    howToUse: false,
    packaging: false,
    ingredients: false,
    reviews: false,
  });
  const products: ProductType[] = [
    {
      id: 1,
      image: "/images/home/productList/01.png",
      title: "ZocuLash Eyelash Enhancing Serum",
      description: "Like small jewels in shiny brass",
      link: "/product",
      price: 55.95,
      rating: 4.6,
      isBestseller: true,
      category: "Skincare",
    },
    {
      id: 2,
      image: "/images/home/productList/02.png",
      title: "ZocuShield Syringe",
      description: "Dry eye specialists recommend",
      link: "/product",
      price: 55.95,
      rating: 4.6,
      isBestseller: true,
      category: "Medical",
    },
    {
      id: 3,
      image: "/images/home/productList/03.png",
      title: "ZocuZap Complete Skincare 15 CT",
      description: "Bodies with the penetrating",
      link: "/product",
      price: 24.95,
      rating: 4.6,
      isBestseller: true,
      category: "Skincare",
    },
    {
      id: 4,
      image: "/images/home/productList/04.png",
      title: "ZocuShield & ZocuFoam Combo",
      description: "Maximal therapeutic effects",
      link: "/product",
      price: 97.95,
      rating: 4.6,
      isBestseller: true,
      category: "Medical",
    },
  ];

  const [quantity, setQuantity] = useState<number>(1);

  const toggleSection = (section: keyof SectionState) => {
    setIsOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleQuantityChange = (action: "increase" | "decrease") => {
    if (action === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const productImageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };
  const CustomPrevButton = () => (
    <button className="swiper-button-prev custom-swiper-button">
      <svg
        className="w-5 h-5 text-gray-600 hover:text-gray-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );

  const CustomNextButton = () => (
    <button className="swiper-button-next custom-swiper-button">
      <svg
        className="w-5 h-5 text-gray-600 hover:text-gray-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
      className="bg-white shadow-md rounded-lg max-w-6xl mx-auto   p-4 mb-5"
    >
      <div className=" flex items-center justify-center ">
        <motion.div
          className=" w-full  overflow-hidden flex flex-col md:flex-row"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.div
            className="w-full md:w-1/2 p-6 flex flex-col items-center"
            variants={productImageVariants}
          >
            <Image
              width={350}
              height={440}
              src="/images/product/product-1.jpg" // Thay bằng đường dẫn hình ảnh thực tế
              alt="Zocular Wipe Product"
              className="w-full max-w-xs mb-6 rounded-lg shadow-sm"
            />
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              slidesPerView={3}
              className="w-full max-w-xs"
            >
              <SwiperSlide>
                <Image
                  width={135}
                  height={135}
                  src="/images/product/product-1.jpg" // Thay bằng đường dẫn hình ảnh thực tế
                  alt="Testimonial 1"
                  className="w-full h-24 object-cover shadow-sm rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={135}
                  height={135}
                  src="/images/product/product-2.jpg" // Thay bằng đường dẫn hình ảnh thực tế
                  alt="Testimonial 2"
                  className="w-full h-24 object-cover shadow-sm rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={135}
                  height={135}
                  src="/images/product/product-3.jpg" // Thay bằng đường dẫn hình ảnh thực tế
                  alt="Testimonial 3"
                  className="w-full h-24 object-cover shadow-sm rounded-lg"
                />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <Image
                  width={135}
                  height={135}
                  src="/images/product/product-4.jpg" // Thay bằng đường dẫn hình ảnh thực tế
                  alt="Testimonial 4"
                  className="w-full h-24 object-cover shadow-sm rounded-lg"
                />
              </SwiperSlide>
              <CustomPrevButton />
              <CustomNextButton />
            </Swiper>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 p-6 flex flex-col"
            variants={sectionVariants}
          >
            <h1 className="text-2xl font-bold mb-2">Zocular Wipe</h1>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500">★★★★★</span>
              <span className="ml-2 text-gray-600">11 Reviews</span>
            </div>

            <p className="text-gray-600 mb-4">
              Each ZocuWipe™ towellette is infused with our soothing Zokrex™
              solution that delivers activated okra polysaccharide complexes to
              your eyelids to provide instant relief. Each box contains 30
              towelletes for 1 month of treatment.
            </p>

            <p className="text-lg font-semibold text-gray-800 mb-4">
              $45.95
              <span className="text-sm text-gray-500 ml-2">
                (vui lòng đăng nhập tại đây nếu bạn là nhà cung cấp hoặc chuyên
                gia)
              </span>
            </p>

            {/* Phần điều chỉnh số lượng và Wishlist */}
            <motion.div
              className="mt-6 flex items-center space-x-4"
              variants={sectionVariants}
            >
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => handleQuantityChange("decrease")}
                  className="px-3 py-2 text-gray-600 hover:text-gray-800"
                >
                  −
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("increase")}
                  className="px-3 py-2 text-gray-600 hover:text-gray-800"
                >
                  +
                </button>
              </div>
              <button className="text-gray-600 hover:text-gray-800">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </motion.div>

            <motion.button
              className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
              variants={sectionVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Add to Cart
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="max-w-6xl w-full bg-white  overflow-hidden ">
        {/* How to Use */}
        <motion.div variants={sectionVariants}>
          <button
            onClick={() => toggleSection("howToUse")}
            className="w-full text-left font-semibold text-gray-800 flex justify-between items-center py-2 border-b"
          >
            How to use
            <span>{isOpen.howToUse ? "−" : ">"}</span>
          </button>
          {isOpen.howToUse && (
            <motion.div
              className="text-gray-600 mt-2 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              Remove ZocuWipe towellette from its packaging and unfold. Place
              the towellette across your index and middle finger and gently
              scrub across the lash line for 10-15 seconds with closed eyes.
              Rinse thoroughly after using ZocuWipe™. One towellette can be used
              for both eyes. No rinsing needed after using ZocuWipe™.
            </motion.div>
          )}
        </motion.div>

        {/* Packaging */}
        <motion.div variants={sectionVariants}>
          <button
            onClick={() => toggleSection("packaging")}
            className="w-full text-left font-semibold text-gray-800 flex justify-between items-center py-2 border-b"
          >
            Packaging
            <span>{isOpen.packaging ? "−" : ">"}</span>
          </button>
          {isOpen.packaging && (
            <motion.div
              className="text-gray-600 mt-2 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              Width: 9&quot;, Height: 1 1/8&quot;, Length: 6 1/8&quot;
              <br />
              Weight: 7.8 oz
              <br />
              Package: 1
            </motion.div>
          )}
        </motion.div>

        {/* Ingredients */}
        <motion.div variants={sectionVariants}>
          <button
            onClick={() => toggleSection("ingredients")}
            className="w-full text-left font-semibold text-gray-800 flex justify-between items-center py-2 border-b"
          >
            Ingredients
            <span>{isOpen.ingredients ? "−" : ">"}</span>
          </button>
          {isOpen.ingredients && (
            <motion.div
              className="text-gray-600 mt-2 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              [List ingredients here]
            </motion.div>
          )}
        </motion.div>

        {/* Reviews */}
        <motion.div variants={sectionVariants}>
          <button
            onClick={() => toggleSection("reviews")}
            className="w-full text-left font-semibold text-gray-800 flex justify-between items-center py-2 border-b"
          >
            Reviews
            <span>{isOpen.reviews ? "−" : ">"}</span>
          </button>
          {isOpen.reviews && (
            <motion.div
              className="text-gray-600 mt-2 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              [Review content or count here]
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      <motion.div>
        <motion.div className="flex items-center  justify-between mt-5">
          <h3 className="text-[20px] font-bold ">You might also like</h3>
          <div className="flex items-center gap-1 border-b border-[#141718] ">
            <span>More Products</span>
            <FaArrowRight />
          </div>
        </motion.div>
        <motion.div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 mt-4">
          {products.map((product, index) => (
            <ProductCard key={index} index={index} product={product} />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const swiperButtonStyles = `
  .custom-swiper-button {
    @apply absolute top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md;
  }
  .swiper-button-prev {
    @apply left-2;
  }
  .swiper-button-next {
    @apply right-2;
  }
`;

if (typeof window !== "undefined") {
  const styleSheet = new CSSStyleSheet();
  styleSheet.replaceSync(swiperButtonStyles);
  document.adoptedStyleSheets = [styleSheet];
}

export default ProductDetail;
