// Imports
import type { ButtonProps as BaseButtonProps } from "@heroui/react";
import React, { ButtonHTMLAttributes } from "react";
import { cn, tv, useButton } from "@heroui/react";

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

const button = tv({
  base: "px-4 py-3 font-poppins text-text-primary rounded-2xl transition-colors duration-250 cursor-pointer flex gap-5 items-center",
  variants: {
    intent: {
      primary: "bg-accent/80 hover:bg-accent/70",
      secondary: "bg-tertiary/50 hover:bg-tertiary/75 active:bg-tertiary",
      danger: "bg-danger active:dark:bg-danger-100 active:bg-danger-500",
      fw: "bg-transparent hover:bg-secondary flex justify-between",
      icon: "aspect-square bg-tertiary/50 p-3"
    },
    position: {
      centered: "justify-center",
      left: "flex "
    },
  },
  defaultVariants: {
    intent: "secondary",
    position: "centered"
  },
});

const innerDiv = tv({
  base: "center-row",
  variants: {
    gapSize: {
      sm: "gap-2",
      md: "gap-5",
      lg: "gap-8"
    },
  },
  defaultVariants: {
    gapSize: "md"
  }
})

interface VariantProps {
  intent?: "primary" | "secondary" | "danger" | "fw" | "icon";
  position?: "centered" | "left";
  gapSize?: "sm" | "md" | "lg"
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps {
  children?: React.ReactNode;
  startContent?: React.JSX.Element;
  endContent?: React.JSX.Element;
}

const WarpButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      intent,
      position,
      gapSize,
      startContent,
      endContent,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        {...rest}
        className={cn(button({ intent, position  }), className)}
      >
        <div className={innerDiv({ gapSize })}>
          {startContent && <div>{startContent}</div>}
          {children}
        </div>
        {endContent}
      </button>
    );
  }
);

WarpButton.displayName = "WarpButton";

export { Button, WarpButton };
