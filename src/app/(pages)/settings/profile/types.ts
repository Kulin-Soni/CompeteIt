import { TextAreaProps } from "@heroui/react";

export type Id = "displayName" | "userName"
export type CustomInputProps = Omit<TextAreaProps, 'id'> & {
  id: Id
};