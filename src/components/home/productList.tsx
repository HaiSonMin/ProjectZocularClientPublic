"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export type ProductType = {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
  price: number;
  rating: number;
  isBestseller: boolean;
  category: string;
};

export type ProductProps = {
  product: ProductType;
  index: number;
  handleAddToCart?: (product: ProductType) => void;
};

export const ProductCard: React.FC<ProductProps> = ({
  product,
  index,
  handleAddToCart,
}) => {
  const { image, title, description, link, price, rating, isBestseller } =
    product;

  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col items-center text-center min-h-[400px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="relative w-full h-48">
        <Image src={image} alt={title} layout="fill" objectFit="contain" />
        {isBestseller && (
          <span className="absolute px-2 py-1 text-xs font-semibold text-white bg-orange-500 top-2 left-2">
            Bestseller
          </span>
        )}
      </div>
      <h3 className="mt-4 overflow-hidden text-lg font-bold line-clamp-2 text-ellipsis">
        {title}
      </h3>
      <p className="mt-2 overflow-hidden text-sm text-gray-600 line-clamp-2 text-ellipsis">
        {description}
      </p>
      <p className="mt-2 font-semibold text-black">{price}</p>
      <div className="flex items-center mt-2">
        <span className="text-lg text-yellow-400">
          {"★".repeat(Math.floor(rating))}
        </span>
        <span className="text-lg text-gray-400">
          {"☆".repeat(5 - Math.floor(rating))}
        </span>
        <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
      </div>
      <motion.button
        onClick={() => handleAddToCart?.(product)}
        className="mt-4 px-2 sm:px-6  py-2 bg-black text-white rounded-lg text-[12px] font-semibold shadow-md"
        whileHover={{ scale: 1.1, backgroundColor: "#FFA500" }}
        whileTap={{ scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        ADD TO CART
      </motion.button>
    </motion.div>
  );
};

const ProductGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

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

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <>
      <div className="container px-6 py-12 mx-auto">
        <div className="flex justify-center pb-4 mb-6 space-x-8 text-lg font-bold border-b border-gray-300">
          {categories.map((category) => (
            <button
              key={category}
              className={`relative px-2 py-1 transition-all duration-300 ${
                selectedCategory === category
                  ? "text-black font-bold"
                  : "text-gray-500 hover:text-black"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
              {selectedCategory === category && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black"></span>
              )}
            </button>
          ))}
        </div>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} index={index} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg min-h-[400px] flex items-center justify-center">
            Không có sản phẩm phù hợp
          </p>
        )}
      </div>
      <div className="flex items-center justify-center w-full">
        <motion.a
          href={"/"}
          className="px-6 py-2 my-2 text-sm font-semibold text-white bg-black rounded-md shadow-md sm:my-6 sm:text-lg"
          whileHover={{ scale: 1.1, backgroundColor: "#FFA500" }}
          whileTap={{ scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          SHOP ALL BESTSELLER
        </motion.a>
      </div>
    </>
  );
};

export default ProductGrid;
