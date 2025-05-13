"use client";

import { FunctionComponent, useState } from "react";

import { ChevronDown, ChevronUp, Search } from "lucide-react";
import CustomerDetailsModal from "./customer-details-modal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select/select";
import { Input } from "../ui/input/input";
import { Button } from "../ui/buttons/button";

interface Customer {
  id: number;
  name: string;
  email: string;
  joinedDate: string;
  orders: number;
  rewards: number;
  phone: string;
  address: string;
  points: number;
  orderHistory: {
    orderNumber: string;
    date: string;
    total: string;
  }[];
}

type CustomerUserProps = {};

const CustomerUser: FunctionComponent<CustomerUserProps> = () => {
  const [customers] = useState<Customer[]>([
    {
      id: 1,
      name: "Dr. Luis Rojas",
      email: "luis_rojas@gmail.com",
      joinedDate: "22/03/2025",
      orders: 25,
      rewards: 10000,
      phone: "0123456789",
      address: "350 5th Ave, New York, NY 10118, USA",
      points: 10000,
      orderHistory: [
        { orderNumber: "#123_456789", date: "12/03/2025", total: "111.9" },
        { orderNumber: "#123_456789", date: "12/03/2025", total: "111.9" },
        { orderNumber: "#120_368366", date: "20/02/2025", total: "243.8" },
        { orderNumber: "#120_368366", date: "20/02/2025", total: "243.8" },
        { orderNumber: "#006_636786", date: "08/01/2025", total: "325.5" },
        { orderNumber: "#006_636786", date: "08/01/2025", total: "325.5" },
      ],
    },
    {
      id: 2,
      name: "Dr.Shane Swatts",
      email: "shane_swatts@gmail.com",
      joinedDate: "15/02/2025",
      orders: 15,
      rewards: 6000,
      phone: "0123456789",
      address: "350 5th Ave, New York, NY 10118, USA",
      points: 6000,
      orderHistory: [
        { orderNumber: "#123_456789", date: "12/03/2025", total: "111.9" },
        { orderNumber: "#120_368366", date: "20/02/2025", total: "243.8" },
        { orderNumber: "#006_636786", date: "08/01/2025", total: "325.5" },
      ],
    },
    {
      id: 3,
      name: "Dr. Edward Jaccoma",
      email: "edward_jaccoma@gmail.com",
      joinedDate: "10/01/2025",
      orders: 5,
      rewards: 2000,
      phone: "0123456789",
      address: "350 5th Ave, New York, NY 10118, USA",
      points: 2000,
      orderHistory: [
        { orderNumber: "#123_456789", date: "12/03/2025", total: "111.9" },
        { orderNumber: "#123_456789", date: "12/03/2025", total: "111.9" },
        { orderNumber: "#120_368366", date: "20/02/2025", total: "243.8" },
        { orderNumber: "#120_368366", date: "20/02/2025", total: "243.8" },
        { orderNumber: "#006_636786", date: "08/01/2025", total: "325.5" },
        { orderNumber: "#006_636786", date: "08/01/2025", total: "325.5" },
      ],
    },
  ]);

  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleRowExpansion = (id: number) => {
    if (expandedRow === id) {
      setExpandedRow(null);
    } else {
      setExpandedRow(id);
    }
  };

  const openCustomerDetails = (customer: Customer) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full">
      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center mt-14">
        <div className="relative w-full sm:w-80">
          <Input
            type="text"
            placeholder="Search Customers"
            className="pl-10 pr-4 py-2 w-full"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
        <Select>
          <SelectTrigger className="w-full sm:w-40">
            <SelectValue placeholder="Status Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-4 font-medium text-gray-900">Name</th>
              <th className="text-left py-4 font-medium text-gray-900">
                Email
              </th>
              <th className="text-left py-4 font-medium text-gray-900">
                Joined Date
              </th>
              <th className="text-left py-4 font-medium text-gray-900">
                Orders
              </th>
              <th className="text-left py-4 font-medium text-gray-900">
                Rewards
              </th>
              <th className="text-left py-4 font-medium text-gray-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b border-gray-200">
                <td className="py-4">{customer.name}</td>
                <td className="py-4">{customer.email}</td>
                <td className="py-4">{customer.joinedDate}</td>
                <td className="py-4">{customer.orders}</td>
                <td className="py-4">{customer.rewards}</td>
                <td className="py-4">
                  <Button
                    variant={
                      expandedRow === customer.id ? "outline" : "default"
                    }
                    className={`flex items-center gap-1 ${
                      expandedRow === customer.id
                        ? "bg-white text-gray-900"
                        : "bg-black text-white hover:bg-black/90"
                    }`}
                    onClick={() => {
                      openCustomerDetails(customer);
                    }}
                  >
                    {expandedRow === customer.id ? (
                      <>
                        Hide Details <ChevronUp className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        View Details <ChevronDown className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <nav className="flex items-center gap-1">
          <Button
            variant="outline"
            size="sm"
            className="bg-gray-200 hover:bg-gray-300"
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
        </nav>
      </div>

      {/* Customer Details Modal */}
      {selectedCustomer && (
        <CustomerDetailsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          customer={{
            id: selectedCustomer.id,
            name: selectedCustomer.name,
            email: selectedCustomer.email,
            phone: selectedCustomer.phone,
            address: selectedCustomer.address,
            points: selectedCustomer.points,
            orders: selectedCustomer.orderHistory,
          }}
        />
      )}
    </div>
  );
};

export default CustomerUser;
