import { products } from "./mockData";
import ProductCard from "./product-card";

import { ShoppingCart } from "lucide-react";
import { FunctionComponent, useState } from "react";

import { Checkbox } from "../ui/checkbox/checkbox";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination/pagination";
import { Label } from "../ui/label/label";
import { Button } from "../ui/buttons/button";

type WebstoreProps = {
  setActiveTab: (tab: string) => void;
};

const Webstore: FunctionComponent<WebstoreProps> = (props) => {
  const { setActiveTab } = props;
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="mt-16">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination className="pt-4 mt-8 border-t">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage((prev) => Math.max(prev - 1, 1));
              }}
            />
          </PaginationItem>
          {[1, 2, 3].map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(page);
                }}
                isActive={currentPage === page}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage((prev) => Math.min(prev + 1, 3));
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <div className="flex items-center justify-between mt-8 w-[60%] mx-auto">
        <div className="flex items-center space-x-2 w-[30%]">
          <Checkbox
            id="all"
            checked={selectAll}
            onCheckedChange={(checked) => setSelectAll(!!checked)}
          />
          <Label htmlFor="all">All</Label>
        </div>
        <div className="flex items-center space-x-4 w-[70%]">
          <Button
            className="w-full px-8 text-white bg-black hover:bgContinue-gray-800"
            onClick={() => setActiveTab("webstore-content")}
          >
            Continue
          </Button>
          <div className="flex items-center justify-center w-8 h-8 bg-white border rounded-full">
            <ShoppingCart className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webstore;
