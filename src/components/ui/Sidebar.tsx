"use client";
import React, { useState } from "react";
import WarpIcon from "./WarpIcon";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { cn } from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";


type OptionData = {
  key: string;
  title: string;
  url: string;
  behavior: "branch" | "leaf";
  className?: string;
  icon?: React.JSX.Element;
  redirectable?: true;
} | {
  key: string;
  title: string;
  url: string;
  behavior: "branch";
  className?: string;
  icon: React.JSX.Element;
  redirectable?: false;
  subOptions: OptionData[]
}

const iconProps = { className: "text-current transition-colors duration-300" };
const options: OptionData[] = [
  {
    key: "dashboard",
    title: "Dashboard",
    redirectable: true,
    behavior: "branch",
    url: "/dashboard",
    icon: <WarpIcon name="mdi:view-dashboard-outline" {...iconProps} />,
  },
  {
    key: "explore",
    title: "Explore",
    redirectable: false,
    behavior: "branch",
    url: "/explore",
    icon: <WarpIcon name="material-symbols:explore-outline" {...iconProps} />,
    subOptions: [
      {
      key: "competitions",
        title: "Competitions",
        url: "/competitions",
        behavior: "leaf",
      },    
      {
      key: "events",
        title: "Events",
        url: "/events",
        behavior: "leaf",
      },    
      {
      key: "giveaways",
        title: "Giveaways",
        url: "/giveaways",
        behavior: "leaf",
      },    
  ]
  },
  {
    key: "chats",
    title: "Chats",
    redirectable: true,
    behavior: "branch",
    url: "/chats",
    icon: <WarpIcon name="mdi:chat-bubble-outline" {...iconProps} />,
  },
  {
    key: "teams",
    title: "Teams",
    redirectable: true,
    behavior: "branch",
    url: "/teams",
    icon: <WarpIcon name="mdi:people-group-outline" {...iconProps} />,
  },
  {
    key: "settings",
    title: "Settings",
    redirectable: false,
    behavior: "branch",
    url: "/settings",
    icon: <WarpIcon name="mdi:settings-outline" {...iconProps} />,
    subOptions: [
      {
        key: "profile",
        title: "Profile",
        url: "/profile",
        behavior: "leaf",
      },
      {
        key: "security",
        title: "Privacy and Security",
        url: "/security",
        behavior: "leaf",
      },
      {
        key: "general",
        title: "General",
        url: "/general",
        behavior: "leaf",
      },
      {
        key: "billings",
        title: "Payments and Billings",
        url: "/billings",
        behavior: "leaf",
      },
      {
        key: "analytics",
        title: "Analytics and Usage",
        url: "/analytics",
        behavior: "leaf",
      },
    ],
  },
  {
    key: "pro",
    title: "CompeteIt Pro",
    redirectable: true,
    behavior: "branch",
    url: "/pro",
    className:
      "border-1 border-transparent hover:dark:border-accent hover:dark:bg-accent/20 hover:border-text-primary hover:bg-secondary",
    icon: <WarpIcon name="mdi:star-four-points-outline" {...iconProps} />,
  },
  {
    key: "help",
    title: "Help",
    redirectable: true,
    behavior: "branch",
    url: "/help",
    icon: <WarpIcon name="mdi:help-circle-outline" {...iconProps} />,
  },
];

export default function Sidebar({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence mode="wait">
      {
        visible &&
        <motion.div
        className={`absolute min-w-60 h-full pt-40 flex flex-col items-center bg-primary z-100`}
        initial={{ opacity: 0, visibility: "hidden", translateX: -60*4, paddingRight: 0, paddingLeft: 0 }}
        animate={{ opacity: 1, visibility: "visible", translateX: 0, paddingRight: 3*4, paddingLeft: 3*4 }}
        exit={{ opacity: 0, visibility: "hidden", translateX: -60*4, paddingRight: 0, paddingLeft: 0 }}
        transition={{ease: "easeOut"}}
        >
        {options.map((option) =>
          option.behavior == "branch" ? (
            <Branch data={option} key={option.key} />
          ) : (
            <Leaf params={option} key={option.key} />
          )
        )}
      </motion.div>
      }
    </AnimatePresence>
  );
}

interface BranchProps {
  data: OptionData;
}

const Branch: React.FC<BranchProps> = ({ data }) => {
  const router = useRouter();
  const path = usePathname();
  const isCurrentPath = path.startsWith(data.url);
  const [open, setState] = useState(isCurrentPath);
  return (
    <div className="w-full center-col relative">
      <button
        className={cn(
          `w-full rounded-xl hover:text-text-primary dark:hover:text-accent hover:bg-secondary py-1 px-1.5 gap-3 mb-2 flex justify-center items-center transition-colors duration-300`,
          isCurrentPath
            ? "bg-secondary text-text-primary dark:text-accent"
            : "bg-primary text-text-primary/60",
          data.className
        )}
        onClick={() => {
          if (!data.redirectable) {
            setState((prev) => !prev);
          } else {
            router.push(data.url);
          }
        }}
        name={data.title}
      >
        <div className="w-8 h-8 px-1 py-1 center-col rounded-xl text-current">
          {data.icon}
        </div>
        <p className="font-poppins text-md flex-1 text-left">{data.title}</p>
        <AnimatePresence>
          <motion.div
            className="center-col"
            animate={
              open && !data.redirectable
                ? { rotate: "90deg" }
                : { rotate: "0deg" }
            }
            transition={{ ease: "easeOut", duration: 0.1 }}
          >
            <WarpIcon name="mdi:chevron-right" />
          </motion.div>
        </AnimatePresence>
      </button>

      <AnimatePresence mode="sync" initial={false}>
        {open && (
          <motion.div
            className="w-full mb-3 bg-primary rounded-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ ease: "linear", duration: 0.1 }}
          >
            {data.redirectable===false &&
              data.subOptions?.map((option) =>
                option.behavior == "branch" ? (
                  <Branch
                    data={{ ...option, url: `${data.url}${option.url}` }}
                    key={option.key}
                  />
                ) : (
                  <Leaf
                    params={{ ...option, url: `${data.url}${option.url}` }}
                    key={option.key}
                  />
                )
              )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface LeafProps {
  params: OptionData;
}
const Leaf: React.FC<LeafProps> = ({ params }) => {
  const path = usePathname();
  return (
    <Link
      className={cn(
        `w-full px-1.5 py-2 not-first:not-last:my-1 last:mt-1 first:mb-1 text-text-primary/60 block text-md transition-colors duration-300 hover:bg-secondary rounded-xl leading-5 ${
          path == params.url
            ? "bg-secondary dark:text-accent text-text-primary hover:dark:text-accent hover:text-text-primary"
            : "hover:text-text-primary"
        }`,
        params.className
      )}
      href={params.url}
    >
      <p className="font-poppins text-sm flex-1 text-left pl-4">
        {params.title}
      </p>
    </Link>
  );
};
