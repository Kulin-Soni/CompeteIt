"use client";
import React from "react";
import animation from "./commonAnimations";
import { AnimatePresence, motion } from "motion/react";
import WarpIcon from "@/components/ui/WarpIcon";
import { Chip, cn, Divider } from "@heroui/react";
import { WarpButton } from "@/components/ui/Buttons";

const PendingActions = ({ ...props }: PendingActionProps) => {
  return (
    <>
      <div className={"group/inner w-full flex items-center gap-4 py-3 cursor-default px-2 -ml-2"}>

        <div className={cn("p-2.5 rounded-xl border border-text-primary/5 center-col transition-colors", 
            props.priority === 3 ? "bg-danger-500/10 text-danger-500" :
            props.priority === 2 ? "bg-warning-500/10 text-warning-500" :
            "bg-primary/10 text-primary"
        )}>
          <WarpIcon name={props.actionIcon} size="sm" className={cn(props.priority === 3 ? "text-danger-500" :
            props.priority === 2 ? "text-warning-500" :
            "text-text-primary")} />
        </div>

        {/* Content */}
        <div className="flex-grow min-w-0 flex flex-col gap-0.5">
          <span className="text-sm font-medium apply-text truncate transition-colors">
            {props.actionName}
          </span>
          <div className="flex items-center gap-2">
              {props.priority === 3 && <Chip size="sm" className="h-5 text-[10px] bg-danger-500/20 text-danger-500 px-1 border border-danger-500/20">HIGH PRIORITY</Chip>}
              {props.priority === 2 && <Chip size="sm" className="h-5 text-[10px] bg-warning-500/20 text-warning-500 px-1 border border-warning-500/20">MEDIUM PRIORITY</Chip>}
              {props.priority === 1 && <span className="text-[10px] text-text-primary/40 font-poppins">Low Priority</span>}
          </div>
        </div>

        {/* Action Button (Visible on Hover) */}
        <div className="flex-shrink-0 opacity-100 lg:opacity-0 lg:group-hover/inner:opacity-100 transition-opacity duration-200">
          <WarpButton intent="mono" className="h-8 w-8 md:w-18 text-xs bg-quartinary md:bg-text-primary text-text-primary md:text-text-secondary font-semibold rounded-lg" gapSize="sm">
            <WarpIcon className="text-text-primary md:text-text-secondary" name="carbon:view-filled" size={"sm"} />
            <span className="hidden md:inline text-text-secondary">View</span>
          </WarpButton>
        </div>

      </div>
      {!props.isLast ? <Divider className="opacity-50" /> : <></>}
    </>
  );
};

function ContainerTwo() {
  const pendingActions: PendingActionsDataProps[] = [
    {
      actionIcon: "sidekickicons:crown-16-solid",
      actionName: "Approve a winner of giveaway",
      priority: 3,
    },
    {
      actionIcon: "iconamoon:enter-bold",
      actionName: "Approve team join request",
      priority: 1,
    },
    {
      actionIcon: "sidekickicons:crown-16-solid",
      actionName: "Approve a winner of competition",
      priority: 3,
    },
    {
      actionIcon: "iconamoon:enter-bold",
      actionName: "Approve team join request",
      priority: 1,
    },
    {
      actionIcon: "material-symbols:event-rounded",
      actionName: "Start your scheduled event",
      priority: 3,
    },
    {
      actionIcon: "material-symbols:event-rounded",
      actionName: "Start your scheduled event",
      priority: 2,
    },
    {
      actionIcon: "material-symbols:event-rounded",
      actionName: "Start your scheduled event",
      priority: 3,
    },
  ];
  return (
    <AnimatePresence>
      <motion.div
        className="w-full bg-linear-to-tr from-secondary to-primary border border-text-primary/10 group/outer p-5 md:p-10 rounded-2xl"
        {...animation(0.3)}
      >
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-poppins font-semibold text-text-primary flex items-center gap-5 cursor-default">
            Pending Actions
            <span className="text-xs w-6 h-6 rounded-full bg-quartinary text-text-primary/60 border border-text-primary/5 center-col">
                {pendingActions.length}
            </span>
            </h3>
            <WarpButton intent="icon" className="p-2 rotate-45 group-hover/outer:rotate-90 aspect-square rounded-full transition-transform duration-100 text-text-primary/50" startContent={<WarpIcon name="ion:arrow-up" />} />
        </div>
        
        <div className="w-full h-[267px] overflow-y-scroll overflow-x-hidden scrollbar-hide pr-1">
          {pendingActions.length > 0 ? (
            pendingActions.sort((i, j)=>j.priority-i.priority).map((action, index, arr) => (
              <PendingActions
                key={index}
                isLast={index == arr.length - 1}
                {...action}
              />
            ))
          ) : (
            <div className="center-col w-full h-full">
              <WarpIcon
                name="tabler:activity"
                size={"xl"}
                className="m-5 text-text-primary/50"
              />
              <span className="text-text-primary/50 font-poppins text-sm">
                No Pending Actions
              </span>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ContainerTwo;
