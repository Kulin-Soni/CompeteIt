"use client"
import { WarpButton } from "@/components/ui/Buttons";
import WarpIcon from "@/components/ui/WarpIcon";
import { cn } from "@heroui/react";
import React from "react";

function Pro() {
  const plans = [
    {
      name: "Pro",
      description:
        "A plan for everyday personal use.",
      special: "RECOMMENDED",
      monthly: {
        price: 9.99,
        features: [
          {
            label: "Upto 100 competitions",
            icon: "material-symbols:trophy",
          },
          {
            label: "Upto 100 events",
            icon: "material-symbols:event-rounded",
          },
          { label: "Upto 100 giveaways", icon: "bxs:party" },
          {
            label: "No participation limits",
            icon: "famicons:infinite",
          },
        ],
      },
      yearly: {
        price: 109.99,
        features: [
          {
            label: "Upto 1.2K competitions",
            icon: "material-symbols:trophy",
          },
          {
            label: "Upto 1.2K events",
            icon: "material-symbols:event-rounded",
          },
          { label: "Upto 1.2K giveaways", icon: "bxs:party" },
          {
            label: "No participation limits",
            icon: "famicons:infinite",
          },
        ],
      },
    },
    {
      name: "Enterprise",
      description: "A plan for commercial use, or for enthusiasts.",
      monthly: {
        price: 299.99,
        features: [
          {
            label: "Unlimited competitions",
            icon: "material-symbols:trophy",
          },
          {
            label: "Unlimited events",
            icon: "material-symbols:event-rounded",
          },
          { label: "Unlimited giveaways", icon: "bxs:party" },
          {
            label: "No participation limits",
            icon: "famicons:infinite",
          },
        ],
      },
      yearly: {
        price: 3499.99,
        features: [
          {
            label: "Unlimited competitions",
            icon: "material-symbols:trophy",
          },
          {
            label: "Unlimited events",
            icon: "material-symbols:event-rounded",
          },
          { label: "Unlimited giveaways", icon: "bxs:party" },
          {
            label: "No participation limits",
            icon: "famicons:infinite",
          },
        ],
      },
    },
  ]; // dummy data
  return (
    <div className="center-col w-full my-5">
      <div className="grid grid-cols-1 gap-5 w-1/2">
        {plans.map((plan, index) => {
         const tier = plan.monthly
         return (
          <div key={index} className={cn("relative w-full h-full bg-secondary/50 center-col rounded-2xl border-2 border-transparent", plan.special&&"border-accent/40 bg-accent/10")}>

           {plan.special&&<span className="absolute right-5 top-5 py-2 px-4 bg-accent-d font-poppins text-text-primary text-[12px] rounded-full text-center center-col">{plan.special}</span>}

            <div className="w-full h-full center-col p-7">
              <h4 className="text-3xl text-accent font-poppins font-semibold w-full">{plan.name}</h4>
              <span className="text-sm text-text-primary font-poppins font-light w-full pt-1">{plan.description}</span>

              <h4 className="text-3xl text-text-primary font-poppins font-medium w-full pt-10 flex items-center">${tier.price}<span className="text-sm pl-1">/ mo</span></h4>

              <div className="w-full center-col mt-5">
              {tier.features.map((feature, index)=>(
               <div key={index} className="flex gap-5 w-full my-1.5 items-center">
                <WarpIcon name={feature.icon} size={20} />
                <span className="font-poppins text-text-primary">{feature.label}</span>
               </div>
              ))}
              </div>

              <div className="w-full mt-10 justify-center">
                <WarpButton intent={plan.special?"primary":"secondary"} className="w-full text-medium font-poppins">Get {plan.name}</WarpButton>
              </div>
            </div>
          </div>
        )})}
      </div>
    </div>
  );
}

export default Pro;
