"use client";

import { FunctionComponent, useState } from "react";
import { Award } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/buttons/button";
import { Input } from "../ui/input/input";
import { Dialog, DialogContent } from "../ui/dialog/dialog";

interface CustomerDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  customer?: {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    points: number;
    orders: {
      orderNumber: string;
      date: string;
      total: string;
    }[];
  };
}

const CustomerDetailsModal: FunctionComponent<CustomerDetailsModalProps> = ({
  isOpen,
  onClose,
  customer,
}: CustomerDetailsModalProps) => {
  const [notes, setNotes] = useState("");

  if (!customer) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="min-w-[1200px] p-0 gap-0">
        <div className="p-20 flex flex-col md:flex-row gap-16">
          {/* Left Column - Customer Info */}
          <div className="md:w-1/3 space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 rounded-full overflow-hidden bg-gray-100">
                <Image
                  src="/images/avatar.png"
                  alt={customer.name}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-medium text-gray-800">
                {customer.name}
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-gray-500 mb-1">Email:</p>
                <p>{customer.email}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Phone:</p>
                <p>{customer.phone}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Address:</p>
                <p>{customer.address}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Award className="h-6 w-6 text-emerald-500" />
              <span className="text-emerald-500 text-xl font-medium">
                {customer.points} Points
              </span>
            </div>

            <div>
              <Input
                placeholder="Notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full border-gray-300"
              />
            </div>
          </div>

          {/* Right Column - Order History */}
          <div className="md:w-2/3">
            <div className="border-b pb-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="font-medium">Order History</div>
                <div className="font-medium">Date</div>
                <div className="font-medium text-right">Total</div>
              </div>
            </div>

            <div className="max-h-[300px] overflow-y-auto">
              {customer.orders.map((order, index) => (
                <div key={index} className="py-4 border-b">
                  <div className="grid grid-cols-3 gap-4">
                    <div>{order.orderNumber}</div>
                    <div>{order.date}</div>
                    <div className="text-right">${order.total}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 p-6 pt-4">
          <Button className="bg-black text-white hover:bg-black/90 sm:flex-1">
            Send Email
          </Button>
          <Button variant="outline" className="sm:flex-1">
            View Points
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CustomerDetailsModal;
