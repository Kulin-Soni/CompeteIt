import { InputProps, TextAreaProps } from "@heroui/react";

export type Id = "displayName" | "userName"
export interface InputFieldProps {
  initialValue: string;
  disabled: boolean,
}
export type CustomInputProps = InputFieldProps & Omit<InputProps, 'id'> & {
  id: Id
};
export type DescriptionProps = InputFieldProps & TextAreaProps;