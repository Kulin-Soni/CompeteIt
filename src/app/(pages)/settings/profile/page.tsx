import PageLayout from "@/components/PageLayout";
import { Metadata } from "next";
import React from "react";
import ProfilePictureField from "./ProfilePictureField";
import UserInfoFields from "./UserInfoFields";
import SocialLinksFields from "./SocialLinksFields";
import VisibilityChecksFields from "./VisibilityChecksFields";
import IdentityVerification from "./IdentityVerification";
import BioInput from "./BioInput";
import Heading from "@/components/ui/Heading";
const page = async () => {
  return (
    <PageLayout className="overflow-y-scroll scrollbar-hide">
      <div className="w-full px-8 py-20 center-col">
          <Heading title="Profile Settings" />
          <div className="w-full flex flex-col md:flex-row gap-15 my-2 md:my-10">
          <ProfilePictureField />
          <UserInfoFields />
          </div>
          <BioInput />
          <SocialLinksFields />
          <VisibilityChecksFields />
          <IdentityVerification />
      </div>
    </PageLayout>
  );
};

export const metadata: Metadata = {
  title: "Profile Settings",
  description: "Update your public profile settings on CompeteIt.",
};

export default page;
