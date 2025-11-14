"use client";
import { WarpButton } from "@/components/ui/Buttons";
import JustifiedContainer from "@/components/ui/JustifiedContainer";
import JustifiedHeading from "@/components/ui/JustifiedHeading";
import OptionSelectMenu from "@/components/ui/OptionSelectMenu";
import Subheading from "@/components/ui/Subheading";
import WarpIcon from "@/components/ui/WarpIcon";
import WarpModal from "@/components/ui/WarpModal";
import {
  Divider,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import Image from "next/image";
import React from "react";

const AllowedMessagesSelection = () => {
  const options = [
    { label: "Everyone", value: "everyone" },
    { label: "Team Members", value: "team_mem" },
    { label: "People I Follow", value: "ppl_follow" },
    { label: "Nobody", value: "nobody" },
  ];
  return (
    <JustifiedContainer className="mb-5">
      <JustifiedHeading>
        Allow Messages From
      </JustifiedHeading>
      <OptionSelectMenu
        ariaLabel="Allow Messages From Preference"
        data={options}
        label="label"
        specialKey="value"
        defaultKey="team_mem"
      />
    </JustifiedContainer>
  );
};

const BlockedUsersModal = ({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) => {
  const data = [
    {
      name: "Felton Auer",
      username: "feltonauer123",
      profilePicture: "https://i.pravatar.cc/150",
    },
    {
      name: "Muriel Brown",
      username: "0wn0iel90345",
      profilePicture: "https://i.pravatar.cc/150",
    },
    {
      name: "Lewis Daniel",
      username: "Lsdaniel120",
      profilePicture: "https://i.pravatar.cc/150",
    },
    {
      name: "Ayla Spencer",
      username: "AylaSpencer",
      profilePicture: "https://i.pravatar.cc/150",
    },
    {
      name: "Ayla Spencer",
      username: "AylaSpencer",
      profilePicture: "https://i.pravatar.cc/150",
    },
    {
      name: "Ayla Spencer",
      username: "AylaSpencer",
      profilePicture: "https://i.pravatar.cc/150",
    },
    {
      name: "Ayla Spencer",
      username: "AylaSpencer",
      profilePicture: "https://i.pravatar.cc/150",
    },
    {
      name: "Ayla Spencer",
      username: "AylaSpencer",
      profilePicture: "https://i.pravatar.cc/150",
    },
    {
      name: "Ayla Spencer",
      username: "AylaSpencer",
      profilePicture: "https://i.pravatar.cc/150",
    },
    {
      name: "Ayla Spencer",
      username: "AylaSpencer",
      profilePicture: "https://i.pravatar.cc/150",
    },
    {
      name: "Ayla Spencer",
      username: "AylaSpencer",
      profilePicture: "https://i.pravatar.cc/150",
    },
    {
      name: "Ayla Spencer",
      username: "AylaSpencer",
      profilePicture: "https://i.pravatar.cc/150",
    },
    {
      name: "Ayla Spencer",
      username: "AylaSpencer",
      profilePicture: "https://i.pravatar.cc/150",
    },
    {
      name: "Ayla Spencer",
      username: "AylaSpencer",
      profilePicture: "https://i.pravatar.cc/150",
    },
  ];
  return (
    <WarpModal zLevel={1} isOpen={isOpen} onOpenChange={onOpenChange} size="lg">
      <ModalContent>
            <ModalHeader>Blocked Users</ModalHeader>
            <ModalBody>
              <div className="w-full h-90 mb-4 overflow-y-scroll scrollbar-hide">
                {(data && data.length>0)?data.map((item, index) => (
                  <div
                    key={index}
                    className="w-full h-auto rounded-2xl my-5 p-2"
                  >
                    <div className="h-full rounded-full grid grid-cols-5">

                      <div className="col-span-3 flex gap-4">
                      <div className=" flex flex-col justify-center">
                        <Image
                          src={item.profilePicture}
                          alt="Blocked User Profile Picture"
                          className="rounded-full object-cover"
                          width={50}
                          height={50}
                          />
                      </div>

                      <div className="flex flex-col justify-center font-poppins text-text-primary">
                        <h4 className="text-sm sm:text-lg">{item.name}</h4>
                        <h6 className="text-[12px] sm:text-sm">
                          @{item.username}
                        </h6>
                      </div>
                          </div>

                      <div className="col-span-2 flex flex-col justify-center items-end">
                        <WarpButton>Unblock</WarpButton>
                      </div>
                    </div>
                  </div>
                )):(<div className="center-col w-full h-full"><span className="text-text-primary font-poppins">No one&apos;s annoying enough to block… yet.?</span></div>)}
              </div>
            </ModalBody>
      </ModalContent>
    </WarpModal>
  );
};

const BlockedUsers = () => {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();
  return (
    <>
      <JustifiedContainer>
        <JustifiedHeading>
          Blocked Users
        </JustifiedHeading>
        <WarpButton
          startContent={<WarpIcon name="mdi:chevron-right" />}
          className="p-3"
          intent="icon"
          onClick={onOpen}
        ></WarpButton>
      </JustifiedContainer>
      <BlockedUsersModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

function CommPreferences() {
  return (
    <div className="w-full my-5">
      <div className="w-full py-10 px-5 md:px-10 rounded-2xl bg-secondary/50">
        <Subheading title="Communication Preferences" />
        <Divider className="my-10" />
        <div>
          <AllowedMessagesSelection />
          <BlockedUsers />
        </div>
      </div>
    </div>
  );
}

export default CommPreferences;
