import React from "react";

interface ProgressBarProps {
  progress: number;
  total: number;
}
function ProgressBar({ progress, total }: ProgressBarProps) {
  return (
    <>
      <div className="relative center-col -mb-2.5">
        <h4 className="font-poppins text-accent dark:text-text-primary text-4xl font-bold absolute top-1/2 left-1/2 -translate-1/2">
          {progress}
        </h4>
        <svg
          width="150"
          height="150"
          viewBox="-18.75 -18.75 187.5 187.5"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="-rotate-90"
        >
          <circle
            r="65"
            cx="75"
            cy="75"
            className="fill-transparent stroke-tertiary stroke-[15px]"
          />
          <circle
            r="65"
            cx="75"
            cy="75"
            strokeLinecap="round"
            strokeDashoffset={`${408.2 - 408.2 * (progress / total)}px`}
            strokeDasharray="408.2px"
            className="fill-transparent stroke-[15px] stroke-accent"
          />
        </svg>
      </div>
      <h6 className="font-poppins text-[13px] text-text-primary/50">out of {total}</h6>
    </>
  );
}

export default ProgressBar;
