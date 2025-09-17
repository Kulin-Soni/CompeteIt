// Imports
import type { ButtonProps as BaseButtonProps } from "@heroui/react";
import React, { ButtonHTMLAttributes } from "react";
import { useButton } from "@heroui/react";
import { cn } from "@/lib/utils";

// Button 1
const Button = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
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
          `font-poppins border-2 py-5 bg-secondary border-tertiary text-text-primary`,
          className
        )}
      >
        {startContent}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

// Button 2
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const WarpButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        {...rest}
        className={cn(
          `px-4 py-3 bg-secondary font-poppins text-text-primary rounded-2xl center-row gap-5 transition-colors cursor-pointer`,
          className
        )}
      >
        {children}
      </button>
    );
  }
);
WarpButton.displayName = "WarpButton";

// Button 3
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const Button3 = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        {...rest}
        className={cn(
          `px-4 py-3 bg-danger font-poppins text-text-primary rounded-2xl center-row gap-5 transition-colors cursor-pointer`,
          className
        )}
      >
        {children}
      </button>
    );
  }
);
Button3.displayName = "Button 2";

// Exports
export { Button, WarpButton, Button3 };
