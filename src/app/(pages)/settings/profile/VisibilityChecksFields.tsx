"use client";
import { addS } from "@/lib/toast";
import { useUserSettings } from "@/queries/userSettings";
import { ShowPublicType } from "@/app/(pages)/settings/types";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Switch,
  useDisclosure,
} from "@heroui/react";
import React, { useState } from "react";
import { WarpButton } from "@/components/ui/Buttons";
import WarpIcon from "@/components/ui/WarpIcon";

export default function VisibilityChecksFields() {
  const currentUserProfile = useUserSettings();
  const [loading, setLoading] = useState(false);
  const [data, updateData] = useState(currentUserProfile.userProfile.showPublic)
  const {isOpen, onOpenChange ,onOpen} = useDisclosure();
  const updateField = async (updatedData: ShowPublicType[]) => {
    setLoading((prev) => !prev);
    await new Promise((resolve) => setTimeout(() => resolve(0), 1000));
    addS({
      description: `Updated social visibilities.`,
    });
    setLoading((prev) => !prev);
  };

  return (
    <div className="w-full my-2">
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="opaque"
      size="4xl"
      placement="center"
      classNames={{
        base: "bg-primary/90 border-secondary border-1.5",
        header: "flex flex-col gap-1 font-poppins text-xl text-text-primary",
        body: "z-200 h-60 flex items-center justify-center",
        wrapper: "z-200",
        closeButton: "text-text-primary hover:bg-tertiary rounded-xl",
        backdrop: "z-150 bg-primary/90",
      }}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>
                  Social Visibility
                </ModalHeader>
                <ModalBody>
                  {currentUserProfile.userProfile.showPublic.map(
                    (field, index) => {
                      return (
                        <div
                          className="w-full py-2 flex justify-between items-center gap-6 text-start"
                          key={index}
                        >
                          <span className="font-poppins font-medium text-medium text-text-primary text-balance cursor-default">
                            Show {field.displayName}s in Profile
                          </span>
                          <div className="w-15 center-col aspect-video">
                            <Switch
                              defaultSelected={field.show}
                              aria-label={field.displayName}
                              color="primary"
                              size="md"
                              classNames={{
                                wrapper:
                                  "group-data-[selected=true]:bg-accent bg-secondary group-data-[hover=true]:bg-tertiary",
                              }}
                              onValueChange={(e) => {
                                const newData = data.map(i=>i.id===field.id?{...i, show: e}:i);
                                updateData(newData);
                                console.log(newData);
                              }}
                              isDisabled={loading}
                            />
                          </div>
                        </div>
                      );
                    }
                  )}
                </ModalBody>
                <ModalFooter>
                  <WarpButton intent="primary" onClick={async ()=>{
                    await updateField(data);
                    onClose();
                  }} disabled={JSON.stringify(data)===JSON.stringify(currentUserProfile.userProfile.showPublic)}>Update</WarpButton>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
        <WarpButton className="w-full" onClick={onOpen} intent="fw" startContent={<WarpIcon name="mdi:show" />} endContent={<WarpIcon name="mdi:chevron-right" />} position="left">
          <span>Social Visibility</span>
        </WarpButton>
    </div>
  );
}
