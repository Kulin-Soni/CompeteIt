import { TextAreaProps, Textarea } from "@heroui/react";
import React from "react";
const CustomInput = React.forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  return (
    <Textarea
      ref={ref}
      classNames={{
        base: `center-col my-2 ${props.classNames?.base}`,
        inputWrapper: `bg-secondary/30 data-[hover=true]:bg-secondary/30 group-data-[disabled=true]:bg-secondary/40 group-data-[focus=true]:bg-secondary/30 border-2 border-secondary w-full h-auto ${props.classNames?.inputWrapper}`,
        label: `text-text-primary text-md font-poppins z-0 ${props.classNames?.label}`,
        innerWrapper: `h-auto ${props.classNames?.innerWrapper}`,
        input: `font-alef text-text-primary text-lg scrollbar-hide ${props.classNames?.input}`,
        helperWrapper: `w-full flex justify-end ${props.classNames?.helperWrapper}`,
      }}
      labelPlacement={props.labelPlacement || "inside"}
      variant={props.variant || "bordered"}
      {...props}
    />
  );
})
CustomInput.displayName = "CustomInput"

export default CustomInput;