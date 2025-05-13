"use client";

import MemberRegistration from "@/components/register/customer/member-registration";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MemberRegistration />
    </Suspense>
  );
}
