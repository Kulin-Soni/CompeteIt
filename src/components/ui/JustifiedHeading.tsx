import { cn } from "@heroui/react";
import React, { ReactNode } from "react";

interface JustifiedHeadingProps extends React.HTMLAttributes<HTMLSpanElement> {
 children: ReactNode | string
}

function JustifiedHeading({children, ...props}: JustifiedHeadingProps) {
  return (
    <span {...props} className={cn("font-poppins font-medium text-medium text-text-primary text-balance cursor-default", props.className)}>
      {children}
    </span>
  );
}

export default JustifiedHeading;
