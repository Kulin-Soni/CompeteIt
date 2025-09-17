"use client"
import { addToast, ToastProps } from "@heroui/react";
type PartialToastProps = Partial<ToastProps>;
export function addS({...props}: PartialToastProps) {
  return addToast({
    title: "Success!",
    color: "success",
    ...props,
  });
}
export function addF({...props}:PartialToastProps) {
  return addToast({
    title: "Failed!",
    color: "danger",    
    ...props,
  });
}
