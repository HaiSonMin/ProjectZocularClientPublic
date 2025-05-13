"use client";

import ProfessionalRegistration from "@/components/professional/professional-registration/professional-registration";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfessionalRegistration />
    </Suspense>
  );
}
