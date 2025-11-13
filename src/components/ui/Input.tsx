import { Input, InputProps, TextAreaProps, Textarea, SlotsToClasses, InputSlots } from "@heroui/react";
import React from "react";

function commonClasses(classNames: SlotsToClasses<InputSlots>){
  return {
      base: [`center-col my-2`, classNames.base || ""],
      inputWrapper: [`bg-secondary/30 data-[hover=true]:bg-secondary/30 group-data-[disabled=true]:bg-secondary/40 group-data-[focus=true]:bg-secondary/30 group-data-[invalid=true]:group-data-[hover=true]:!bg-danger-50 border-2 border-secondary w-full h-auto`, classNames.inputWrapper || ""],
      label: [`text-text-primary text-md font-poppins z-0`, classNames.label || ""],
      innerWrapper: [`h-auto`, classNames.innerWrapper || ""],
      input: [`font-alef text-text-primary text-lg scrollbar-hide`, classNames.input || ""],
      helperWrapper: [`w-full flex justify-end`, classNames.helperWrapper || ""],
    }
}

const MultilineInput = React.forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const className = props.classNames;
  return (
    <Textarea
    ref={ref}
    classNames={commonClasses({base: className?.base, helperWrapper: className?.helperWrapper, innerWrapper: className?.innerWrapper, input: className?.input, inputWrapper: className?.inputWrapper, label: className?.label})}
    labelPlacement={props.labelPlacement || "inside"}
    variant={props.variant || "bordered"}
    {...props}
    />
  );
})
MultilineInput.displayName = "Multiline"


const SingleLineInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const className = props.classNames;
  return (
    <Input
    ref={ref}
    classNames={commonClasses({base: className?.base, helperWrapper: className?.helperWrapper, innerWrapper: [className?.innerWrapper, "mt-5"], input: className?.input, inputWrapper: className?.inputWrapper, label: className?.label})}
      labelPlacement={props.labelPlacement || "inside"}
      variant={props.variant || "bordered"}
      {...props}
      />
    );
  })
SingleLineInput.displayName = "SingleLineInput"
  
export { MultilineInput, SingleLineInput };