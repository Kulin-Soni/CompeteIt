"use client"
import { Textarea, TextAreaProps } from '@heroui/react';
import React, { useState } from 'react'
import { DescriptionProps } from './types';
import { addS } from '@/lib/toast';
import { useUserSettings } from '@/queries/userSettings';

const TextAreaClasses = {
  base: `center-col my-2`,
  inputWrapper: `bg-secondary/80 data-[hover=true]:bg-secondary/30 group-data-[disabled=true]:bg-secondary/40 group-data-[focus=true]:bg-secondary/30 w-full h-auto`,
  label: `text-text-primary font-poppins z-0`,
  innerWrapper: `h-auto`,
  input: `font-alef text-text-primary text-md scrollbar-hide`,
  helperWrapper: `w-full flex justify-end`,
};
const submit = async (event: React.KeyboardEvent<HTMLInputElement>) => {
  event.preventDefault();
  event.currentTarget.blur();


  // await update description

  addS({description: `Your ${event.currentTarget.dataset.label} has been updated.`});
  return;
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
      variant="flat"
      description={
      <div className="flex justify-between text-[15px]">
        <span>Ctrl / &#8984; + Enter to save.</span>
        <span>{value.length} / {props.maxLength}</span>
      </div>
      }
      classNames={TextAreaClasses}
      onKeyDown={async (e) => {
        if (props.initialValue != value && value.length >= (props.minLength || 0) && (e.key == "Enter" && e.ctrlKey))
          await submit(e);
      }}
      
      {...props}
    />
  );
};

export default function BioInput() {
    const currentUserProfile = useUserSettings();
    return (
        <Description
            initialValue={currentUserProfile.userProfile.description ?? ""}
            label="Bio Description"
            data-label="description"
            disabled={false}
            maxRows={5}
            maxLength={300}
            minLength={10}
        />
    )
}
