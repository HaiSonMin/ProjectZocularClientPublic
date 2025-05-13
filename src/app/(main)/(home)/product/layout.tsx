import React, { PropsWithChildren } from "react";

import ProductLayout from "@/app/layouts/ProductLayout";

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <div className="py-6">
      <ProductLayout>{children}</ProductLayout>
    </div>
  );
}
