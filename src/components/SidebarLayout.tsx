"use client";
import Sidebar from "@/components/ui/Sidebar";
import { AnimatePresence } from "motion/react";
import React, { useState } from "react";
import WarpIcon from "./ui/WarpIcon";
import { WarpButton } from "./ui/Buttons";

export default function SidebarLayout() {
  const [sidebarVisible, setSidebarVisibility] = useState(false);
  return (
    <>
      <div className="absolute top-0 left-0 z-120 bg-primary w-full flex p-3">
        <WarpButton
          intent="icon"
          onClick={() => {
            setSidebarVisibility(!sidebarVisible);
          }}
          name="Open or Close Drawer"
          className="p-2 rounded-xl"
        >
          <AnimatePresence mode="popLayout">
            {sidebarVisible ? (
                <WarpIcon
                  name="material-symbols:close-rounded"
                  className="text-text-primary"
                />
            ):(
                <WarpIcon
                  name="material-symbols:menu-rounded"
                  className="text-text-primary"
                />
            )}
          </AnimatePresence>
        </WarpButton>
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <Sidebar visible={sidebarVisible} />
      </AnimatePresence>
    </>
  );
}
