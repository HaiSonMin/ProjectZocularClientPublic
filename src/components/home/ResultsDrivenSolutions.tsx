import Image from "next/image";
import React from "react";

const products = [
  {
    name: "IMAGE MD® POWER C SERUM",
    description:
      "94% reported product helped restore firmness & elasticity. 89% agreed skin appeared brighter.",
    image: "/images/home/resultsDrivenSolutions/01.jpeg",
  },
  {
    name: "ACNE SPOT TREATMENT",
    description:
      "77% reported that skin looks clear in just 3 days. 92% reported it minimizes the appearance of redness.",
    image: "/images/home/resultsDrivenSolutions/02.jpeg",
  },
  {
    name: "RESTORING EYE MASKS",
    description:
      "Visible results following a 5-day application. Improve the appearance of fine lines around eyes in minutes.",
    image: "/images/home/resultsDrivenSolutions/03.jpeg",
  },
  {
    name: "ANTIOXIDANT SERUM",
    description:
      "91% agreed that skin feels more hydrated. 90% reported that skin appears healthier.",
    image: "/images/home/resultsDrivenSolutions/04.jpeg",
  },
  {
    name: "SMOOTHING CLOUD CREAM",
    description:
      "97% reported that skin feels smoother. 98% agreed that skin feels more moisturized and product locks in hydration.",
    image: "/images/home/resultsDrivenSolutions/05.jpeg",
  },
];

const ResultsDrivenSolutions = () => {
  return (
    <div className="px-4 md:px-12 py-12">
      <h2 className="text-center text-2xl font-bold mb-6">
        RESULTS DRIVEN SOLUTIONS
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-full h-72 overflow-hidden rounded-lg shadow-md">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-600 text-sm mt-2 px-2">
              {product.description}
            </p>
            <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg">
              SHOP NOW
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsDrivenSolutions;
