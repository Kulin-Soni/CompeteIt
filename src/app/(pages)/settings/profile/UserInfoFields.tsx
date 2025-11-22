"use client";
import React from "react";
import { CustomInputProps, Id } from "./types";
import { useUserProfileSettings } from "@/queries/userProfileSettings";
import { SingleLineInput } from "@/components/ui/Input";
import { addS } from "@/lib/toast";

const submit = async (
  event: React.KeyboardEvent<HTMLInputElement>,
  inputId: Id
) => {
  event.preventDefault();
  event.currentTarget.blur();

  switch (inputId) {
    case "displayName":
      // update displayName
      break;
    case "userName":
      // update userName
      break;
  }
  addS({
    description: `Your ${event.currentTarget.dataset.label} has been updated.`,
  });
  console.log("Event Triggered");
  return;
};

const FieldInput = (props: CustomInputProps) => {
  return (
    <SingleLineInput
      labelPlacement="inside"
      variant="flat"
      errorMessage={(v) => {
        if (v.validationDetails.tooShort)
          return "Please keep the name at least 5 characters long.";
        return v.validationErrors[0];
      }}
      onKeyDown={async (e) => {
        const value = e.currentTarget.value;
        if (
          props.defaultValue != value &&
          value.length >= (props.minLength || 0) &&
          e.key == "Enter"
        )
          await submit(e, props.id);
      }}
      {...props}
    />
  );
};

export default function UserInfoFields() {
  const currentUserProfile = useUserProfileSettings();
  return (
    <div className="w-full center-col">
      <FieldInput
        id="displayName"
        defaultValue={currentUserProfile.userProfile.displayName.name}
        label="Display Name"
        data-label="display name"
        description="You can change this once every 15 days."
        placeholder="Enter a display name"
        maxLength={20}
        minLength={5}
        isDisabled={!currentUserProfile.userProfile.displayName.canBeUpdated}
      />

      <FieldInput
        id="userName"
        defaultValue={currentUserProfile.userProfile.userName.name}
        label="Username"
        data-label="username"
        description="You can change this once every year."
        placeholder="Enter a username"
        maxLength={15}
        minLength={5}
        isDisabled={!currentUserProfile.userProfile.displayName.canBeUpdated}
      />
    </div>
  );
}
