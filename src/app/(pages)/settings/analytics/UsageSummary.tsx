import Subheading from "@/components/ui/Subheading";
import capitalize from "@/utils/capitalize";
import { cn, Divider } from "@heroui/react";
import React from "react";
import ProgressBar from "./ProgressBar";

function UsageSummary() {
  const usageSummaryData = [
    {
      identifier: "giveaway",
      created: 2,
      cap: 10,
    },
    {
      identifier: "event",
      created: 2,
      cap: 10,
    },
    {
      identifier: "competition",
      created: 9,
      cap: 10,
    },
  ]; // dummy data
  return (
    <div className="w-full my-5">
      <div className="w-full py-10 px-5 md:px-10 rounded-2xl bg-secondary/50">
        <Subheading title="Usage Summary" className="mb-0" />
        <span className="font-poppins text-sm text-text-primary">
          Your usage quota of created competitions, events, and giveaways.
        </span>
        <Divider className="my-10" />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {usageSummaryData.map((item, index, arr) => (
            <div
              key={index}
              className={cn("flex flex-col justify-center items-center bg-quartinary/50 rounded-3xl p-5", arr.length%2!=0&&"last:col-span-2 last:sm:col-span-1")}
            >

              <ProgressBar progress={item.created} total={item.cap} />
              <h6 className="font-poppins font-semibold text-lg w-full text-accent text-center pt-0">
                {capitalize(item.identifier) + "s"}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UsageSummary;
