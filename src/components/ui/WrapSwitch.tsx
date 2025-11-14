import React from "react";
import { cn, Switch, SwitchProps } from "@heroui/react";
import JustifiedHeading from "./JustifiedHeading";

interface WrapSwitchProps {
  label?: string,
  labelProps?: React.HTMLAttributes<HTMLSpanElement>,
  description?: string,
  descriptionProps?: React.HTMLAttributes<HTMLDivElement>,
  containerProps?: React.HTMLAttributes<HTMLDivElement>,
  switchProps?: SwitchProps,
}

function WrapSwitch({ label, containerProps, labelProps, switchProps, description, descriptionProps }: WrapSwitchProps) {
  return (
    <div {...containerProps} className={cn("w-full py-2 flex justify-between items-center gap-6 text-start", containerProps?.className)}>
      <div className="max-w-10/12">
      {label && (
        <JustifiedHeading {...labelProps}>
          {label}
        </JustifiedHeading>)}
      {description && (
        <span {...descriptionProps} className={cn("w-full font-poppins text-[12px] md:text-sm text-text-primary text-ellipsis cursor-default block", descriptionProps?.className)}>{description}</span>
      )}
      </div>
      <div className="w-15 center-col aspect-video">
        <Switch
          color="primary"
          size="md"
          {...switchProps}
          classNames={{
            wrapper:
              "group-data-[selected=true]:bg-accent bg-secondary group-data-[hover=true]:bg-tertiary",
            thumb: "z-0",
            ...switchProps?.classNames
          }}
          
        />
      </div>
    </div>
  );
}

export default WrapSwitch;
