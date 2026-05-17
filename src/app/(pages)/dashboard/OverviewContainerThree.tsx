"use client";
import { AnimatePresence, motion } from "motion/react";
import React from "react";
import animation from "./commonAnimations";
import WarpIcon from "@/components/ui/WarpIcon";
import Image from "next/image";

const RecentActivity = ({
  icon, details, when, actionUserAvatar, isLast,
  ...rest
}: RecentActivityProps) => {
  return (
    <div {...rest} className="w-full flex gap-4 relative pl-2">
      
      <div className="relative z-10 shrink-0">
          <div className="w-10 h-10 rounded-full bg-secondary border-4 border-secondary flex items-center justify-center shadow-sm">
             <div className="w-full h-full rounded-full bg-quartinary center-col">
                 <WarpIcon name={icon} size={12} className="text-text-primary" />
             </div>
          </div>


      {!isLast && (
          <div className="absolute left-[19px] top-10 bottom-0 w-[2px] bg-tertiary rounded-full z-0"></div>
      )}
      </div>

      <div className="flex-grow pb-8 flex justify-between items-start gap-2 shrink">
          <div className="flex flex-col gap-1">
             <span className="text-sm font-medium apply-text">
                 {details}
             </span>
             <span className="text-xs text-text-primary/50 font-poppins">
                 {when}
             </span>
          </div>
          
          <div className="center-col">
             <Image
               src={actionUserAvatar}
               alt="User"
               width={24}
               height={24}
               className="w-6 h-6 rounded-full object-cover border border-white/10"
             />
          </div>
      </div>
    </div>
  );
};

function ContainerThree() {
  const activities: ActivitiesDataProps[] = [
    {
      icon: "material-symbols:event-rounded",
      details: "You created an event.",
      when: "Today",
      actionUserAvatar: "https://res.cloudinary.com/dw6ukgncm/image/upload/v1748456826/Port_Bot_Logo_w94oem.png"
    },
    {
      icon: "bxs:party",
      details: "You joined a giveaway.",
      when: "Yesterday",
      actionUserAvatar: "https://res.cloudinary.com/dw6ukgncm/image/upload/v1748456826/Port_Bot_Logo_w94oem.png"
    },
    {
      icon: "bxs:party",
      details: "Team - CompeteIt created a giveaway.",
      when: "28 january, 2025",
      actionUserAvatar: "https://res.cloudinary.com/dw6ukgncm/image/upload/v1764936815/Logo_3x_lkbnly.png"
    },
    {
      icon: "material-symbols:trophy",
      details: "You created a competition.",
      when: "25 January, 2025",
      actionUserAvatar: "https://res.cloudinary.com/dw6ukgncm/image/upload/v1748456826/Port_Bot_Logo_w94oem.png"
    },
    {
      icon: "bxs:party",
      details: "Team - Voredge created a giveaway.",
      when: "24 January, 2025",
      actionUserAvatar: "https://res.cloudinary.com/dw6ukgncm/image/upload/v1764936815/Logo_3x_lkbnly.png"
    },
    {
      icon: "bxs:party",
      details: "You created a giveaway.",
      when: "24 January 2025",
      actionUserAvatar: "https://res.cloudinary.com/dw6ukgncm/image/upload/v1748456826/Port_Bot_Logo_w94oem.png"
    },
    {
      icon: "material-symbols:event-rounded",
      details: "You joined an event.",
      when: "25 December, 2024",
      actionUserAvatar: "https://res.cloudinary.com/dw6ukgncm/image/upload/v1748456826/Port_Bot_Logo_w94oem.png"
    },
    {
      icon: "material-symbols:event-rounded",
      details: "Team - Voredge created an event.",
      when: "25 December, 2024",
      actionUserAvatar: "https://res.cloudinary.com/dw6ukgncm/image/upload/v1764936815/Logo_3x_lkbnly.png"
    },
  ];// dummy data
  return (
    <AnimatePresence>
      <motion.div
        className="w-full bg-linear-to-bl from-secondary to-primary border border-text-primary/10 p-5 md:p-10 rounded-xl"
        {...animation(0.5)}
      >
        <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-poppins font-semibold text-text-primary">
            Recent Activities
            </h3>
        </div>
          <div className="w-full h-[267px] overflow-y-scroll scrollbar-hide">

          {activities.length > 0 ? (
            activities.map((activity, index, arr) => (
              <RecentActivity
                key={index}
                isLast={index == (arr.length - 1)}
                {...activity}
              />
            ))
          ) : (
            <div className="center-col w-full h-full">
              <WarpIcon name="tabler:activity" size={"xl"} className="m-5 text-text-primary/50" />
              <span className="text-text-primary/50 font-poppins text-sm">
                No Recent Stuff Done
              </span>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ContainerThree;
