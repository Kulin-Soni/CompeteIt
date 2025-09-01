// Imports
import type { ButtonProps as BaseButtonProps } from "@heroui/react";
import React from "react";
import { useButton } from "@heroui/react";
import { cn } from "@/lib/utils";

// Button 1
const Button1 = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ className, ...props }, ref) => {
    const partialDefaults: Partial<BaseButtonProps> = {
      radius: "md",
    };
    const { domRef, children, startContent, getButtonProps } = useButton({
      ref,
      ...partialDefaults,
      ...props,
    });
    const btnProps = getButtonProps();

    return (
      <button
        ref={domRef}
        {...btnProps}
        className={cn(
          btnProps.className,
          `font-poppins border-2 py-5 bg-secondary border-tertiary text-t-primary`,
          className
        )}
      >
        {startContent}
        {children}
      </button>
    );
  }
);
Button1.displayName = "Button1";



// Exports
export { Button1 };