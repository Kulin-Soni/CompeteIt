import { InputProps } from "@heroui/react";
export type Id = "displayName" | "userName"
export type CustomInputProps = Omit<InputProps, 'id'> & {
  id: Id
};