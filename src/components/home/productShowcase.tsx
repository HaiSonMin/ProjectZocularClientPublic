"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ProductProps = {
  image: string;
  title: string;
  description: string;
  link: string;
  index: number;
};

const ProductCard: React.FC<ProductProps> = ({
  image,
  title,
  description,
  link,
  index,
}) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>
      <h3 className="text-lg font-bold mt-4">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
      <motion.a
        href={link}
        className="mt-4 px-6 py-2 bg-black text-white rounded-lg text-sm font-semibold shadow-md"
        whileHover={{ scale: 1.1, backgroundColor: "#FF7d00" }}
        whileTap={{ scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        SHOP NOW
      </motion.a>
    </motion.div>
  );
};

type Product = Omit<ProductProps, "index">;

const ProductGrid: React.FC = () => {
  const products: Product[] = [
    {
      image: "/images/home/productShowCase/01.png",
      title: "Healthy eyes start with healthy lids!",
      description: "“Why we love zocufoam by zocular?”",
      link: "#",
    },
    {
      image: "/images/home/productShowCase/02.png",
      title: "Healthy eyes start with healthy lids!",
      description: "Why we love zocufoam by zocular",
      link: "#",
    },
    {
      image: "/images/home/productShowCase/03.png",
      title: "Say goodbye to eye makeup!",
      description: "“Makeup-free without harsh rubbing”",
      link: "#",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <ProductCard key={index} index={index} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
