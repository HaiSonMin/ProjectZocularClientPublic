import Image from "next/image";
import { FunctionComponent } from "react";
import { ProductCard, ProductType } from "../home/productList";
import Banner from "../home/banner";
import Map from "../common/map";
import { Button } from "../ui/buttons/button";

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
  {
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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

type WebstoreOrderProps = {};

const WebstoreOrder: FunctionComponent<WebstoreOrderProps> = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Logo Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">LOGO</h1>
        <div className="flex space-x-6">
          <span className="text-sm">Introduce</span>
          <span className="text-sm">Products</span>
          <span className="text-sm">Store Us</span>
        </div>
      </div>

      <hr className="border-gray-300 mb-6" />

      {/* Hero Banner */}
      <Banner />

      {/* Maximum Result Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16 max-w-[90%] mx-auto mt-10">
        <div className="md:w-1/2 relative w-full h-[300px]">
          <Image
            src="/images/home/productShowCase/01.png"
            alt="Eye Treatment"
            layout="fill"
            sizes="100vw"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 text-center">
          <h2 className="text-2xl font-bold mb-4">ACHIEVE MAXIMUM RESULT</h2>
          <p className="text-center">
            Zocular products contain our unique okra-infused Zocusome micelles
            that gently lift and clear the oil, debris, and residue on your
            eyelid margins to make your eyes and skin appear more natural and
            healthy!
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">PRODUCTS</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} index={index} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-2">
          <Button
            variant="outline"
            size="sm"
            className="bg-black text-white hover:bg-black/90"
          >
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            &gt;
          </Button>
          <Button variant="outline" size="sm">
            &gt;&gt;
          </Button>
        </div>
      </div>

      {/* Store Us Section */}
      <div className="mb-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold mb-8">STORE US</h2>
            <div>
              <h3 className="font-bold mb-4">FULL STORE NAME</h3>
              <div className="mb-4">
                <p className="text-sm font-bold">Address:</p>
                <p className="text-sm">350 5th Ave, New York, NY 10118, USA</p>
              </div>
              <div className="mb-4">
                <p className="text-sm font-bold">Phone:</p>
                <p className="text-sm">0123456789</p>
              </div>
              <div className="mb-4">
                <p className="text-sm font-bold">Website:</p>
                <p className="text-sm">www.fullstorename.com</p>
              </div>
              <Button
                variant="outline"
                className="w-full bg-black text-white hover:bg-black/90"
              >
                See nearest webstore
              </Button>
            </div>
          </div>

          <div className="md:w-2/3">
            <Map />
          </div>
        </div>
      </div>
    </main>
  );
};

export default WebstoreOrder;
