"use client";
import Subheading from "@/components/ui/Subheading";
import React from "react";
import { Divider } from "@heroui/react";
import OptionSelectMenu from "@/components/ui/OptionSelectMenu";
import JustifiedContainer from "@/components/ui/JustifiedContainer";
import WrapSwitch from "@/components/ui/WrapSwitch";
import JustifiedHeading from "@/components/ui/JustifiedHeading";
import PaddingContainer from "@/components/ui/PaddingContainer";

function ProfileVisibility() {
  const ProfileVisibiityItems = [
    { value: "private", label: "Private" },
    { value: "public", label: "Public" },
  ];
  return (
    <PaddingContainer>
        <Subheading title="Profile Privacy" />
        <Divider className="my-10" />

        <div className="w-full">
          <JustifiedContainer className="mb-5">
            <JustifiedHeading>
              Account Visibility
            </JustifiedHeading>
            <OptionSelectMenu
              ariaLabel="Profile Visibility Preference"
              data={ProfileVisibiityItems}
              labelKey="label"
              specialKey="value"
              defaultKey="public"
            />
          </JustifiedContainer>
          <WrapSwitch label="Anonymous Participation" description="Your information will only be shared to event host when you participate." />
        </div>
      </PaddingContainer>
  );
}

export default ProfileVisibility;
