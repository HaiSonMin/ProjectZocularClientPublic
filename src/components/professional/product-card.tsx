import Image from "next/image";
import { Star } from "lucide-react";
import { Product } from "./mockData";
import { FunctionComponent } from "react";
import { Button } from "../ui/buttons/button";

type ProductCardProps = {
  product: Product;
};

const ProductCard: FunctionComponent<ProductCardProps> = (props) => {
  const { product } = props;

  return (
    <div className="flex flex-col">
      <div className="relative">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={300}
          className="object-contain w-full h-auto"
        />
        {product.bestseller && (
          <div className="absolute top-0 right-0 px-2 py-1 text-xs text-white bg-orange-500">
            Bestseller
          </div>
        )}
      </div>
      <div className="flex flex-col mt-4 space-y-2">
        <h3 className="font-bold text-lg min-h-[56px] line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="font-semibold">${product.price.toFixed(2)}</p>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : i + 0.5 <= product.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-500">{product.rating}</span>
        </div>
        <Button
          variant="outline"
          className="mt-2 border-gray-300 hover:bg-gray-100 hover:text-gray-900"
        >
          ADD TO STORE
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
