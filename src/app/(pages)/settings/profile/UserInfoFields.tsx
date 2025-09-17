"use client";
import React, { useState } from "react";
import { Textarea } from "@heroui/react";
import { DataFields } from "@/types/data";
import { CustomInputProps, DescriptionProps, Id } from "./types";
import { useUserSettings } from "@/queries/userSettings";
import CustomInput from "@/components/ui/Input";
import { addS } from "@/lib/toast";
const TextAreaClasses = {
  base: `center-col my-2`,
  inputWrapper: `border-text-primary/30 w-full h-auto`,
  label: `text-text-primary font-poppins z-0`,
  innerWrapper: `h-auto`,
  input: `font-poppins text-text-primary text-md scrollbar-hide`,
  helperWrapper: `w-full flex justify-end`,
};
const CustomInputClasses = {
  base: `center-col my-2`,
  inputWrapper: `w-full border-text-primary/30 h-auto`,
  label: `text-text-primary font-poppins z-0`,
  innerWrapper: `h-auto mt-5`,
  input: `font-poppins text-text-primary text-md`,
  helperWrapper: `w-full`,
};
const submit = async (
  event: React.KeyboardEvent<HTMLInputElement>,
  inputId: Id
) => {
  const submitDescription = event.key == "Enter" && event.ctrlKey;
  const submit = event.key == "Enter" && inputId != DataFields.Description;
  if (submitDescription || submit) {
    event.preventDefault();
    event.currentTarget.blur();

    // Update Fields
    addS({description: `Your ${event.currentTarget.dataset.label} has been updated.`});
  }
};

const FieldInput = (props: CustomInputProps) => {
  const [value, setValue] = useState(props.initialValue);
  return (
    <CustomInput
      classNames={CustomInputClasses}
      labelPlacement="inside"
      variant="bordered"
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
        if (
          props.initialValue != value &&
          value.length >= (props.minLength || 0)
        )
          await submit(e, props.id);
      }}
      {...props}
    />
  );
};

const Description = (props: DescriptionProps) => {
  const [value, setValue] = useState(props.initialValue);
  return (
    <Textarea
      labelPlacement="inside"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      placeholder="Tell others what you do or what interests you."
      variant="bordered"
      description="Ctrl / &#8984; + Enter to save. Maximum 300 letters."
      classNames={TextAreaClasses}
      onKeyDown={async (e) => {
        if (
          props.initialValue != value &&
          value.length >= (props.minLength || 0)
        )
          await submit(e, props.id);
      }}
      {...props}
    />
  );
};

export default function UserInfoFields() {
  const currentUserProfile = useUserSettings();
  return (
    <div className="w-full center-col mt-7">
      <FieldInput
        id={DataFields.DisplayName} // Sensitive
        initialValue={currentUserProfile.userProfile.displayName.name}
        label="Display Name"
        data-label="display name"
        description="You can change this once every 15 days. Maximum 20 letters."
        placeholder="Enter your display name"
        maxLength={20}
        minLength={5}
        disabled={currentUserProfile.userProfile.displayName.canBeUpdated}
      />

      <FieldInput
        id={DataFields.UserName} // Sensitive
        initialValue={currentUserProfile.userProfile.userName.name}
        label="Username"
        data-label="username"
        description="You can change this once every year. Maximum 15 letters."
        placeholder="Enter your display name"
        maxLength={15}
        minLength={5}
        disabled={currentUserProfile.userProfile.displayName.canBeUpdated}
      />

      <Description
        initialValue={currentUserProfile.userProfile.description ?? ""}
        id={DataFields.Description}
        label="Description"
        data-label="description"
        disabled={false}
        maxRows={5}
        maxLength={300}
        minLength={10}
      />
    </div>
  );
}
