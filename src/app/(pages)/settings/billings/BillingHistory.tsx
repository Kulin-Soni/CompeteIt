"use client"
import Subheading from "@/components/ui/Subheading";
import WarpIcon from "@/components/ui/WarpIcon";
import { Divider } from "@heroui/react";
import React, { HTMLAttributes } from "react";
interface BillingHistoryType {
  plan: "Pro" | "Enterprise";
  invoiceDate: string;
  paid: boolean;
  amount: number;
}

interface BillingComponent extends HTMLAttributes<HTMLDivElement> {
  label: string;
  data: BillingHistoryType;
}
const Billing: React.FC<BillingComponent> = ({ data, label, ...rest }) => {
  return (
    <div
      className="rounded-lg w-full flex items-center py-3 transition-background justify-between"
      {...rest}
    >
      <div className="center-row gap-5">

        <WarpIcon
          name="mingcute:bill-fill"
          className="text-accent"
          size={20} />
        
        <span className="font-poppins font-semibold text-md sm:text-lg text-text-primary">
          {label}
        </span>
      </div>

      <button className="center-col p-2 rounded-full hover:bg-tertiary/50 transition-background cursor-pointer" onClick={()=>{console.log(data)}} >
      <WarpIcon name="material-symbols:download-rounded" className="text-text-primary" />
      </button>
    </div>
  );
};

export default function BillingHistory() {
  const billingHistory: BillingHistoryType[] = [
    {
      plan: "Pro",
      invoiceDate: "Dec. 01, 2024",
      paid: true,
      amount: 20,
    },
    {
      plan: "Pro",
      invoiceDate: "Jan, 01, 2025",
      paid: false,
      amount: 20,
    },
    {
      plan: "Enterprise",
      invoiceDate: "Feb. 01, 2025",
      paid: true,
      amount: 20,
    },
    {
      plan: "Enterprise",
      invoiceDate: "Mar. 01, 2025",
      paid: true,
      amount: 20,
    },
    {
      plan: "Enterprise",
      invoiceDate: "Apr. 01, 2025",
      paid: false,
      amount: 20,
    },
    {
      plan: "Enterprise",
      invoiceDate: "May. 01, 2025",
      paid: false,
      amount: 20,
    },
    {
      plan: "Pro",
      invoiceDate: "Jun. 01, 2025",
      paid: true,
      amount: 20,
    },
    {
      plan: "Pro",
      invoiceDate: "Jul. 01, 2025",
      paid: false,
      amount: 20,
    },
    {
      plan: "Pro",
      invoiceDate: "Aug. 01, 2025",
      paid: true,
      amount: 20,
    },
  ];
  return (
    <div className="w-full my-5">
      <div className="w-full py-10 px-5 md:px-10 rounded-2xl bg-secondary/50">
        <Subheading title='Billing History' />
        <Divider className='my-10' />
        <div className="rounded-2xl">
        {billingHistory.reverse().map((bill, index) => (
          <Billing key={index} data={bill} label={`${bill.invoiceDate}`} />
        ))}
        </div>
      </div>
    </div>
  );
}
