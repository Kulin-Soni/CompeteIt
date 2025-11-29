"use client"
import PaddingContainer from "@/components/ui/PaddingContainer";
import Subheading from "@/components/ui/Subheading";
import WrapSwitch from "@/components/ui/WrapSwitch";
import { Divider } from "@heroui/react";
import React from "react";

function LocationPreferences() {
  return (
    <PaddingContainer>
        <Subheading title="Location Preferences" />
        <Divider className="my-10" />

        <div>
          <WrapSwitch label="Share My Location" description="Events & Competitions will be tailored to your location. (Location is not shared with anyone)" switchProps={{defaultSelected: true}} />
        </div>
      </PaddingContainer>
  );
}

export default LocationPreferences;
