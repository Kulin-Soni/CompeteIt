import { DataFields, Field } from "@/types/data";
import { InputProps, TextAreaProps } from "@heroui/react";

export type Id = Extract<DataFields, DataFields.UserName | DataFields.DisplayName | DataFields.Description>;
export interface InputFieldProps {
  initialValue: string;
  id: Id;
  disabled: boolean
}
export interface CustomInputProps extends InputFieldProps, Omit<InputProps, "id" | "disabled">{}
export interface DescriptionProps extends InputFieldProps, Omit<TextAreaProps, "id" | "disabled"> {}

export interface FieldData {
  defaultValue: Field,
  prompt: string
}