"use client";
import { WarpButton as Button, WarpButton } from "@/components/ui/Buttons";
import CustomInput from "@/components/ui/Input";
import WarpIcon from "@/components/ui/WarpIcon";
import { addF, addS } from "@/lib/toast";
import { useUserSettings } from "@/queries/userSettings";
import { LinkType } from "@/app/(pages)/settings/types";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps,
  Spinner,
  useDisclosure,
} from "@heroui/react";
import React, { useRef, useState } from "react";

interface AddLinkModal_Props extends Partial<ModalProps> {
  links: {
    state: LinkType[];
    updater: React.Dispatch<React.SetStateAction<LinkType[]>>;
  };
  openedLinkData: LinkType | null;
}
const AddLinkModal: React.FC<AddLinkModal_Props> = ({ openedLinkData, links, ...rest }) => {
  const [loading, setLoading] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const deleteLink = async (
    onClose: () => void
  )=>{
    if (openedLinkData) {
      links.updater(prev=>prev.filter(i=>i.id!==openedLinkData.id));
      onClose();
      addS({description: "Removed link from your profile."})
    }
  }
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    onClose: () => void
  ) => {
    event.preventDefault();
    if (
      openedLinkData &&
      openedLinkData?.url === linkRef.current?.value &&
      openedLinkData?.label === nameRef.current?.value
    )
      return;
    console.log(nameRef.current?.value, linkRef.current?.value);
    setLoading(true);
    // await setLinks()

    let newLinks: LinkType[] = [];
    let returnMsg = "";
    if (openedLinkData) {
      newLinks = links.state.map((link) =>
        link.id == openedLinkData.id ? {
              ...link,
              label: nameRef.current?.value || "",
              url: linkRef.current?.value || "",
            } : link);

      returnMsg = "Updated link.";
    } else {
      newLinks = [
        ...links.state,
        {
          id: `${Math.random()}`,
          label: nameRef.current?.value || "",
          type: "other",
          url: linkRef.current?.value || "",
        }];

      returnMsg = "Added link to your profile.";
    }
    links.updater(newLinks);
    setLoading(false);
    onClose();
    addS({ description: returnMsg });
  };
  return (
    <Modal
      {...rest}
      backdrop="opaque"
      size="md"
      placement="center"
      classNames={{
        base: "bg-primary border-secondary border-1.5",
        header: "flex flex-col gap-1 font-poppins text-xl text-text-primary",
        body: "z-200 h-60 flex items-center justify-center",
        wrapper: "z-200",
        closeButton: "text-text-primary hover:bg-tertiary rounded-xl",
        backdrop: "z-150 bg-primary/80",
      }}
    >
      <ModalContent>
        {(onClose) => {
          return (
            <>
              <ModalHeader>
                {openedLinkData ? "Update Social Link" : "Add Social Link"}
              </ModalHeader>
              <form
                onSubmit={async (event) => {
                  await handleSubmit(event, onClose);
                }}
              >
                <ModalBody>
                  <CustomInput
                    label="Name"
                    placeholder="LinkedIn"
                    labelPlacement="inside"
                    variant="bordered"
                    isReadOnly={false}
                    isDisabled={false}
                    maxLength={30}
                    defaultValue={openedLinkData?.label}
                    ref={nameRef}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key == "ArrowDown") {
                        e.preventDefault();
                        linkRef.current?.focus();
                      }
                    }}
                    required
                  />
                  <CustomInput
                    label="Link"
                    placeholder="https://linkedin.com/abcd"
                    labelPlacement="inside"
                    variant="bordered"
                    isReadOnly={false}
                    defaultValue={openedLinkData?.url}
                    isDisabled={false}
                    maxLength={50}
                    ref={linkRef}
                    required
                    onKeyDown={(e) => {
                      if (e.key == "ArrowUp") {
                        e.preventDefault();
                        nameRef.current?.focus();
                      }
                    }}
                  />
                </ModalBody>


                <ModalFooter>
                    {openedLinkData && 
                    (<Button
                      type="button" 
                      disabled={loading} 
                      intent="danger"
                      className="overflow-hidden w-25 h-12"
                      onClick={async (e)=>{e.preventDefault(); await deleteLink(onClose);}}>
                      <p>Delete</p>
                    </Button>)}

                  <Button
                    type="submit"
                    disabled={loading}
                    className="overflow-hidden w-30 h-12"
                    intent="primary"
                  >
                    {loading ? (
                      <Spinner
                        variant="simple"
                        classNames={{ wrapper: "text-text-primary" }}
                        size="sm"
                      />
                    ) : (
                      <p>{openedLinkData ? "Save" : "Add"}</p>
                    )}
                  </Button>
                </ModalFooter>

              </form>
            </>
          );
        }}
      </ModalContent>
    </Modal>
  );
};

const LinksModal: React.FC<Partial<ModalProps>> = (props)=>{
  const currentUserProfile = useUserSettings();
  const [links, setLinks] = useState<LinkType[]>(
    currentUserProfile.userProfile.links
  );
  const [openedLinkData, setOpen] = useState<LinkType | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
     

    <Modal
    {...props}
    backdrop="opaque"
    size="md"
    placement="center"
    classNames={{
      base: "bg-primary border-secondary border-1.5",
      header: "flex flex-col font-poppins text-xl text-text-primary",
      body: "z-100 h-60 flex items-center justify-center",
      wrapper: "z-100",
      closeButton: "text-text-primary hover:bg-tertiary rounded-xl",
      backdrop: "z-50 bg-primary/80",
    }}>
      <ModalContent>
        {()=>(
          <>
        <ModalHeader>Social Links</ModalHeader>
        <ModalBody>
          <div className="w-full h-80 gap-1 flex flex-col overflow-y-scroll scrollbar-hide">
          <AddLinkModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        links={{ state: links, updater: setLinks }}
        openedLinkData={openedLinkData}
      /> 
          {links.map((link, index) => (
            <button
            className={`w-full px-4 py-3 bg-secondary hover:bg-tertiary font-poppins font-normal text-text-primary rounded-2xl flex justify-between items-center transition-colors cursor-pointer`}
            key={index}
            onClick={() => {
              setOpen(link);
              onOpen();
            }}>
            <div className="flex justify-between items-center w-5/6">
              <WarpIcon name="material-symbols:link-rounded" size="lg" />
              <span className="text-md truncate w-3/4">{link.label}</span>
            </div>
            <WarpIcon name="mdi:edit" size="sm" />
          </button>
        ))}
        {links.length <= 0 && (
          <div className="w-full h-full center-col">
          <span className="font-alef text-sm text-text-primary">No Social Links Added Yet</span>
          </div>
        )}
        </div>
        </ModalBody>
        <ModalFooter>
          <WarpButton intent="primary" startContent={<WarpIcon name="material-symbols:add-rounded" />} onClick={()=>{setOpen(null); onOpen();}} gapSize="sm">Add Link</WarpButton>
        </ModalFooter>
        </>
      )}
      </ModalContent>
    </Modal>
      </>
  )
}

export default function SocialLinksFields() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="w-full mt-7 mb-2">
        <LinksModal isOpen={isOpen} onOpenChange={onOpenChange}  />

        <Button
          className={`w-full`}
          intent="fw"
          position="left"
          onClick={() => {
              onOpen();
          }}
          endContent={<WarpIcon name="mdi:chevron-right" />}
          startContent={<WarpIcon name="mdi:link-add" size="md" className="text-inherit" />}
        >
          <span className="text-md">Social Links</span>
        </Button>
      </div>
  );
}
