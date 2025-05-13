"use client";

import { FunctionComponent, useState } from "react";
import Webstore from "./webstore";
import WebstoreContent from "./webstore-content";
import WebstoreThemeForm from "./webstore-theme-form";
import RewardsCard from "./rewards-card";
import WebstoreOrder from "./webstore-order";
import CustomerUser from "./customer-user";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs/tabs";

const tabs = [
  { value: "webstore", label: "Webstore" },
  { value: "webstore-products", label: "Webstore Products" },
  { value: "webstore-theme", label: "Webstore Theme" },
  { value: "webstore-order", label: "Webstore Order" },
  { value: "customer", label: "Customer User" },
  { value: "rewards", label: "Rewards and Redemptions" },
];

type ProductCatalogProps = {};

const ProductCatalog: FunctionComponent<ProductCatalogProps> = () => {
  const [activeTab, setActiveTab] = useState("webstore");

  return (
    <div className="flex flex-col mx-auto space-y-8 max-w-7xl">
      <h1 className="my-10 text-4xl font-bold text-center">Professional</h1>

      <Tabs
        defaultValue="webstore"
        className="w-full"
        onValueChange={setActiveTab}
      >
        <TabsList className="grid w-full h-auto grid-cols-2 text-black bg-transparent border-b border-none lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={`py-2 rounded-none border-b-2 shadow-none ${
                activeTab === tab.value
                  ? "border-b-[3px] border-black"
                  : "border-transparent"
              } data-[state=active]:bg-transparent data-[state=active]:text-black data-[state=active]:shadow-none`}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="webstore">
          <Webstore setActiveTab={setActiveTab} />
        </TabsContent>

        <TabsContent value="webstore-products">
          <WebstoreContent />
        </TabsContent>

        <TabsContent value="webstore-theme">
          <WebstoreThemeForm />
        </TabsContent>

        <TabsContent value="webstore-order">
          <WebstoreOrder />
        </TabsContent>

        <TabsContent value="customer">
          <CustomerUser />
        </TabsContent>

        <TabsContent value="rewards">
          <div className="flex items-center justify-center p-8">
            <RewardsCard
              totalPoints={2000}
              tier="Premier"
              onConfirmRedemption={() => {}}
              transactions={[
                {
                  points: 1000,
                  content: "Purchase at ZocuShield",
                  date: "2024-01-01",
                },
                {
                  points: 1000,
                  content: "Purchase at ZocuShield",
                  date: "2024-01-01",
                },
                {
                  points: 1000,
                  content: "Purchase at ZocuShield",
                  date: "2024-01-01",
                },
              ]}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductCatalog;
