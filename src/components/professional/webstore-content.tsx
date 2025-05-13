"use client";

import { FunctionComponent, useState } from "react";
import Image from "next/image";
import { X, Minus, Plus } from "lucide-react";

import { Button } from "../ui/buttons/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination/pagination";
import { cartItems } from "./mockData";
import { Input } from "../ui/input/input";

type WebstoreContentProps = {};

const WebstoreContent: FunctionComponent<WebstoreContentProps> = () => {
  const [items, setItems] = useState(cartItems);
  const [currentPage, setCurrentPage] = useState(1);
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const calculateSubtotal = (price: number, quantity: number) => {
    return (price * quantity).toFixed(1);
  };

  return (
    <div className="mt-16">
      <div className="grid grid-cols-4 gap-4 py-4 border-b">
        <div className="font-medium">Product</div>
        <div className="font-medium text-right">Quantity</div>
        <div className="font-medium text-right">Price</div>
        <div className="font-medium text-right">Subtotal</div>
      </div>

      {items.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-4 gap-4 py-6 border-b items-center"
        >
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <button
                onClick={() => removeItem(item.id)}
                className="flex items-center text-gray-500 text-sm mt-1 hover:text-gray-700"
              >
                <X className="w-3 h-3 mr-1" />
                Remove
              </button>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <div className="flex items-center border rounded">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-none"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <Input
                // type="number"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, Number.parseInt(e.target.value) || 1)
                }
                className="h-8 w-10 text-center border-0 rounded-none"
              />
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-none"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          </div>

          <div className="text-right">${item.price.toFixed(2)}</div>

          <div className="text-right font-medium">
            ${calculateSubtotal(item.price, item.quantity)}
          </div>
        </div>
      ))}

      <div className="flex justify-between mt-8">
        <Button variant="outline" className="px-8">
          Back
        </Button>
        <Button className="bg-black text-white hover:bg-gray-800 px-8">
          Save
        </Button>
      </div>

      <Pagination className="mt-8">
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
    </div>
  );
};

export default WebstoreContent;
