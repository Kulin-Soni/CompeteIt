"use client";
import React from "react";
import Heading from "./Heading";
import WarpIcon from "@/components/ui/WarpIcon";
import { AnimatePresence, motion } from "motion/react";
import { WarpButton } from "@/components/ui/Buttons";
import animation from "./commonAnimations";
import { cn } from "@heroui/react";
import QuickTools from "./QuickTools";

const ActiveContainers = ({ ...props }: ActiveContainersProps) => {
  return (
    <AnimatePresence>
      <motion.div
        className={cn(["relative w-full h-20 flex items-center justify-between", "group p-5 rounded-2xl border border-text-primary/10 box-border overflow-hidden", "bg-linear-to-t from-secondary to-transparent", props.className,])}
        {...animation(props.animationDelay*.2)}
      >
        <div className="w-full h-full flex">
        <div className={cn(["center-col", "aspect-square p-2 rounded-full", "bg-tertiary/70 dark:bg-accent/10"])}>
          <WarpIcon name={props.icon} className="text-text-primary dark:text-accent" />
        </div>
        <div className="flex flex-col justify-center mx-5">
          <span className="apply-text text-xs font-semibold">{props.name.toUpperCase()}</span>
          <span className="apply-text text-2xl font-semibold">{String(props.active).padStart(2, "0")}</span>
        </div>
        </div>
        <div>
          <WarpButton intent="icon" className="aspect-square p-2 rotate-45 group-hover:rotate-90 transition-transform duration-100 rounded-full" startContent={<WarpIcon name="ion:arrow-up" />} />
        </div>
      </motion.div>
      )
    </AnimatePresence>
  );
};

function ContainerOne() {
  const activeContainers: ActiveContainerData[] = [
    {
      name: "Active Competitions",
      active: 12,
      icon: "material-symbols:trophy",
    },
    {
      name: "Active Events",
      active: 2,
      icon: "material-symbols:event-rounded",
    },
    {
      name: "Active Giveaways",
      active: 19,
      icon: "bxs:party",
    },
  ];
  return (
    <>
    <div className="w-full flex items-center justify-between">
      <Heading>Overview</Heading>
      <QuickTools />
    </div>
      <div className="my-5 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {activeContainers.map((item, index, arr) => (
          <ActiveContainers
            key={index}
            animationDelay={index}
            {...item}
            className={(index==arr.length-1 && arr.length%2!=0) ? "col-span-1 lg:col-span-2 xl:col-span-1" : ""}
          />
        ))}
      </div>
    </>
  );
}

export default ContainerOne;
