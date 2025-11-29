import PageLayout from "@/components/PageLayout";
import React from "react";
import Pro from "./Pro";
import Heading from "@/components/ui/Heading";

export default function page() {
  return (
    <div className="w-full h-full flex justify-center overflow-hidden bg-primary relative">
      <div className="h-full w-full max-w-[80rem] flex">
        <PageLayout className="overflow-hidden scrollbar-hide px-2 py-20">
          <Heading title="Upgrade Your Plan" />
          <Pro />
        </PageLayout>
      </div>
    </div>
  );
}
