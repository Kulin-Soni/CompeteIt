import { Input, InputProps } from "@heroui/react";
import React from "react";
const CustomInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <Input
      ref={ref}
      classNames={{
        base: `center-col my-2 ${props.classNames?.base}`,
        inputWrapper: `w-full border-text-primary/30  h-auto ${props.classNames?.inputWrapper}`,
        label: `text-text-primary font-poppins z-0 ${props.classNames?.label}`,
        innerWrapper: `h-auto mt-5 ${props.classNames?.innerWrapper}`,
        input: `font-poppins text-text-primary text-md ${props.classNames?.input}`,
        helperWrapper: `w-full ${props.classNames?.helperWrapper}`,
      }}
      labelPlacement={props.labelPlacement || "inside"}
      variant={props.variant || "bordered"}
      {...props}
    />
  );
})
CustomInput.displayName = "CustomInput"

export default CustomInput;