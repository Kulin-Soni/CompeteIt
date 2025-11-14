"use client"
import Subheading from "@/components/ui/Subheading";
import WrapSwitch from "@/components/ui/WrapSwitch";
import { Divider } from "@heroui/react";
import React from "react";

function LocationPreferences() {
  return (
    <div className="w-full my-5">
      <div className="w-full py-10 px-5 md:px-10 rounded-2xl bg-secondary/50">
        <Subheading title="Location Preferences" />
        <Divider className="my-10" />

        <div>
          <WrapSwitch label="Share My Location" description="Events & Competitions will be tailored to your location. (Location is not shared with anyone)" switchProps={{defaultSelected: true}} />
        </div>
      </div>
    </div>
  );
}

export default LocationPreferences;
