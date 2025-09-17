import PageLayout from "@/components/PageLayout";
import { Metadata } from "next";
import React from "react";
import ProfilePictureField from "./ProfilePictureField";
import UserInfoFields from "./UserInfoFields";
import SocialLinksFields from "./SocialLinksFields";
import VisibilityChecksFields from "./VisibilityChecksFields";
const page = async () => {
  return (
    <PageLayout className="bg-primary overflow-y-scroll scrollbar-hide">
      <div className="w-full px-8 py-20 center-col">
          <ProfilePictureField />
          <UserInfoFields />
          <SocialLinksFields />
          <hr className="w-full h-0.25 bg-text-primary my-7 border-none" />
          <VisibilityChecksFields />
      </div>
    </PageLayout>
  );
};

export const metadata: Metadata = {
  title: "Profile Settings",
  description: "Update your public profile settings on CompeteIt.",
};

export default page;
