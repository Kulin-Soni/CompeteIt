import PageLayout from "@/components/PageLayout";
import React from "react";
import OverviewContainerOne from "./OverviewContainerOne";
import OverviewContainerTwo from "./OverviewContainerTwo";
import OverviewContainerThree from "./OverviewContainerThree";
import CompetitionsContainer from "./CompetitionsContainer";
import { Metadata } from "next";

const Dashboard = () => {
  return (
    <div className="w-full h-full flex justify-center overflow-hidden bg-primary relative">
      <div className="h-full w-11/12 mx-1 flex">
        <PageLayout className="overflow-y-scroll scrollbar-hide">
          <div className="px-2 py-20 center-col">

            <OverviewContainerOne />

            <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
            <OverviewContainerTwo />
            <OverviewContainerThree />
            </div>

            <CompetitionsContainer />


          </div>
        </PageLayout>
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage and take actions of your activities.",
};
export default Dashboard;
