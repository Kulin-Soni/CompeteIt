"use client";
import { WarpButton } from "@/components/ui/Buttons";
import JustifiedContainer from "@/components/ui/JustifiedContainer";
import JustifiedHeading from "@/components/ui/JustifiedHeading";
import Subheading from "@/components/ui/Subheading";
import WarpIcon from "@/components/ui/WarpIcon";
import WarpModal from "@/components/ui/WarpModal";
import {
  cn,
  Divider,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import dayjs from "dayjs";
import React from "react";

const ResetPassword = () => {
  return (
    <JustifiedContainer className="my-5">
      <JustifiedHeading>Reset Password</JustifiedHeading>
      <WarpButton
        startContent={<WarpIcon name="mdi:open-in-new" />}
        intent="icon"
        onClick={() => {
          window.open("https://reddit.com", "_blank");
        }}
      />
    </JustifiedContainer>
  );
};

const LoggedInSessionsModal = ({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) => {
  const loggedInDevices = [
    {
      type: "pc",
      lastLoggedIn: 1763111020317,
      activeSession: false,
      location: "Jaipur, IN",
    },
    {
      type: "mobile",
      lastLoggedIn: 1763111020317,
      activeSession: true,
      location: "Jaipur, IN",
    },
    {
      type: "mobile",
      lastLoggedIn: 1763111201128,
      activeSession: false,
      location: "Jaipur, IN",
    },
  ];
  return (
    <WarpModal zLevel={1} isOpen={isOpen} onOpenChange={onOpenChange} size="sm">
      <ModalContent>
        <ModalHeader>Logged In Sessions</ModalHeader>
        <ModalBody>
          <div className="max-h-90 w-full overflow-x-hidden">
            {loggedInDevices.map((device, index) => {
              const time = device.lastLoggedIn;
              const elapsed = (Date.now() - time)/1000;
              let elapsedTimeComment = "";
              if (elapsed < 59) {
                elapsedTimeComment = "Just Now";
              } else if ((elapsed / 60) < 59) {
                elapsedTimeComment = Math.ceil(elapsed / 60) + " minutes ago";
              } else if ((elapsed / (60 * 60)) < 23) {
                elapsedTimeComment = Math.ceil(elapsed / 3600) + " hours ago";
              } else {
                elapsedTimeComment = (dayjs(new Date(time))).format("DD MMMM, YYYY");
              }
              return (
                <JustifiedContainer key={index} className={cn("my-5 rounded-2xl border-1 border-transparent p-1", device.activeSession&&"border-text-primary dark:border-accent bg-quartinary")}>

                  <div className="flex items-center w-full h-full">
                  <div className="center-col bg-secondary rounded-2xl p-3">
                    <WarpIcon
                      name={
                        device.type == "pc"
                          ? "material-symbols:desktop-windows-outline-rounded"
                          : "material-symbols:mobile-3-outline"
                      }
                      size="sm"
                    />
                  </div>
                  <div className="flex flex-col justify-center font-poppins text-text-primary ml-5">
                    <h4 className="text-sm sm:text-medium">{device.location}</h4>
                    <h6 className="text-[12px] sm:text-sm">{device.activeSession?"Currently Active":elapsedTimeComment}</h6>
                  </div>
                  </div>


                  <div className="center-col">
                      {!device.activeSession && <WarpButton intent="icon" className="bg-transparent hover:bg-secondary" startContent={<WarpIcon name="material-symbols:logout-rounded" />} />}
                  </div>

                </JustifiedContainer>
              );
            })}
          </div>
        </ModalBody>
      </ModalContent>
    </WarpModal>
  );
};

const LoggedInSessions = () => {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();
  return (
    <>
      <LoggedInSessionsModal isOpen={isOpen} onOpenChange={onOpenChange} />
      <JustifiedContainer className="mb-5">
        <JustifiedHeading>Logged-In Sessions</JustifiedHeading>
        <WarpButton
          intent="icon"
          startContent={<WarpIcon name="material-symbols:devices-outline" />}
          onClick={onOpen}
        />
      </JustifiedContainer>
    </>
  );
};

const Logout = ()=>{
  return (<JustifiedContainer>
    <JustifiedHeading>Log out of current device</JustifiedHeading>
    <WarpButton intent="danger" startContent={<WarpIcon name="material-symbols:logout-rounded" />}>
      Logout
    </WarpButton>
  </JustifiedContainer>)
}

function LoginCredential() {
  return (
    <div className="w-full my-5">
      <div className="w-full py-10 px-5 md:px-10 rounded-2xl bg-secondary/50">
        <Subheading title="Manage Login Credentials" />
        <Divider className="my-10" />

        <LoggedInSessions />
        <ResetPassword />
        <Logout />

      </div>
    </div>
  );
}

export default LoginCredential;
