"use client";
import React, { useState } from "react";
import { addS } from "@/lib/toast";
import { useUserProfileSettings } from "@/queries/userProfileSettings";
import { MultilineInput } from "@/components/ui/Input";
import { TextAreaProps } from "@heroui/react";

const submit = async (event: React.KeyboardEvent<HTMLInputElement>) => {
  event.preventDefault();
  event.currentTarget.blur();

  // await update description

  addS({
    description: `Your ${event.currentTarget.dataset.label} has been updated.`,
  });
  return;
};
const MAX_LENGTH = 300
const Description = (props: TextAreaProps) => {
  const [value, setValue] = useState(props.defaultValue || "");
  return (
    <MultilineInput
      labelPlacement="inside"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      placeholder="Tell others what you do or what interests you."
      variant="flat"
      label="Bio Description"
      data-label="description"
      disabled={false}
      maxRows={10}
      minRows={5}
      maxLength={MAX_LENGTH}
      minLength={10}
      description={
        <div className="flex justify-between text-[15px]">
          <span>Ctrl / &#8984; + Enter to save.</span>
          <span>
            {value.length} / {MAX_LENGTH}
          </span>
        </div>
      }
      onKeyDown={async (e) => {
        if (
          props.defaultValue != e.currentTarget.value &&
          e.currentTarget.value.length >= 10 &&
          e.key == "Enter" &&
          e.ctrlKey
        )
          await submit(e);
      }}
      {...props}
    />
  );
};

export default function BioInput() {
  const currentUserProfile = useUserProfileSettings();
  return (
    <Description
      defaultValue={currentUserProfile.userProfile.description ?? ""} />
  );
}
