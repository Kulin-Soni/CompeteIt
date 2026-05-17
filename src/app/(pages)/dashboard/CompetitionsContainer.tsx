"use client";
import React, { useState } from "react";
import Heading from "./Heading";
import { motion } from "motion/react";
import WarpIcon from "@/components/ui/WarpIcon";
import { cn } from "@heroui/react";
import { WarpButton } from "@/components/ui/Buttons";
import Competitions from "./Competitions";

const ActiveViewMode = ({setViewMode, viewMode}: ViewModeModifierComponentProps) => {
  return (
    <div className="p-1 bg-secondary rounded-xl border border-text-primary/5 flex items-center relative">
      <div className="relative flex">

        {/* Active Indicator Background */}
        <motion.div
          layoutId="active-pill-grid"
          initial={false}
          animate={{ x: viewMode === "participating" ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute inset-y-0 w-1/2 bg-quartinary rounded-lg border border-text-primary/10"
        />

        <button
          onClick={() => setViewMode("participating")}
          className={cn(
            "relative z-10 px-3 py-2 text-sm font-semibold transition-colors w-32 flex items-center justify-center gap-2 group",
            viewMode === "participating"
              ? "text-text-primary"
              : "text-text-primary/50 hover:text-text-primary/80"
          )}
        >
          <WarpIcon name="mdi:sword-cross" size={14} className={cn("transition-colors", viewMode === "participating"
              ? "text-text-primary"
              : "text-text-primary/50 group-hover:text-text-primary/80")} /> Participating
        </button>
        <button
          onClick={() => setViewMode("hosting")}
          className={cn(
            "relative z-10 px-3 py-2 text-sm font-semibold transition-colors w-32 flex items-center justify-center gap-2 group",
            viewMode === "hosting"
              ? "text-text-primary"
              : "text-text-primary/50 hover:text-text-primary/80"
          )}
        >
          <WarpIcon name="material-symbols:dashboard-2-edit-rounded" size={14} className={cn("transition-colors", viewMode === "hosting"
              ? "text-text-primary"
              : "text-text-primary/50 group-hover:text-text-primary/80")} /> Hosting
        </button>
      </div>
    </div>
  );
};

function CompetitionsContainer() {
  const [viewMode, setViewMode] = useState<ViewMode>("participating");
  return (
    <>
      <div className="mt-20 flex flex-col gap-2 w-full">
        <div className="w-full flex flex-col sm:flex-row justify-between items-start md:items-end gap-2 mb-6">
          <Heading>Competitions</Heading>
          <div className="flex justify-between items-center gap-2">
          <ActiveViewMode viewMode={viewMode} setViewMode={setViewMode} />
          <WarpButton className="p-3 rounded-xl text-sm font-semibold not-md:aspect-square"  gapSize="sm" startContent={<WarpIcon name="ion:arrow-up" className="rotate-90" size={"sm"} />}><span className="hidden md:flex">View All</span></WarpButton>
          </div>
        </div>
        <Competitions viewMode={viewMode} />
      </div>
    </>
  );
}

export default CompetitionsContainer;
