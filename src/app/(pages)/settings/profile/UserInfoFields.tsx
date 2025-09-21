"use client";
import React, { useState } from "react";
import { CustomInputProps, Id } from "./types";
import { useUserSettings } from "@/queries/userSettings";
import CustomInput from "@/components/ui/Input";
import { addS } from "@/lib/toast";

const CustomInputClasses = {
  base: `center-col my-2`,
  inputWrapper: `bg-secondary/80 data-[hover=true]:bg-secondary/30 group-data-[disabled=true]:bg-secondary/40 group-data-[focus=true]:bg-secondary/30 group-data-[disabled=true]:cursor-not-allowed w-full h-auto`,
  label: `text-text-primary font-poppins z-0 cursor-default`,
  innerWrapper: `h-auto mt-5`,
  input: `font-alef text-text-primary text-md`,
  helperWrapper: `w-full cursor-default`,
};
const submit = async (
  event: React.KeyboardEvent<HTMLInputElement>,
  inputId: Id
) => {
  event.preventDefault();
  event.currentTarget.blur();

  switch (inputId){
    case "displayName":
        // update displayName
        break;
    case "userName":
        // update userName
        break;
    }
    addS({description: `Your ${event.currentTarget.dataset.label} has been updated.`})
    console.log("Event Triggered")
    return;
};

const FieldInput = (props: CustomInputProps) => {
  const [value, setValue] = useState(props.initialValue);
  return (
    <CustomInput
      classNames={CustomInputClasses}
      labelPlacement="inside"
      variant="flat"
      isReadOnly={props.disabled}
      isDisabled={props.disabled}
      errorMessage={(v) => {
        if (v.validationDetails.tooShort)
          return "Please keep the name at least 5 characters long.";
        return v.validationErrors[0];
      }}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      onKeyDown={async (e) => {
        if (props.initialValue != value && value.length >= (props.minLength || 0) && (e.key == "Enter"))
          await submit(e, props.id);
      }}
      {...props}
    />
  );
};

export default function UserInfoFields() {
  const currentUserProfile = useUserSettings();
  return (
    <div className="w-full center-col">
      <FieldInput
        id="displayName"
        initialValue={currentUserProfile.userProfile.displayName.name}
        label="Display Name"
        data-label="display name"
        description="You can change this once every 15 days."
        placeholder="Enter a display name"
        maxLength={20}
        minLength={5}
        disabled={!currentUserProfile.userProfile.displayName.canBeUpdated}
      />

      <FieldInput
        id="userName"
        initialValue={currentUserProfile.userProfile.userName.name}
        label="Username"
        data-label="username"
        description="You can change this once every year."
        placeholder="Enter a username"
        maxLength={15}
        minLength={5}
        disabled={!currentUserProfile.userProfile.displayName.canBeUpdated}
      />
    </div>
  );
}
