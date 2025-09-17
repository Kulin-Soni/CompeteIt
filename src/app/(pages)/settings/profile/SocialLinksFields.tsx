"use client";
import { WarpButton as Button, Button3 as Button2 } from "@/components/ui/Buttons";
import CustomInput from "@/components/ui/Input";
import WarpIcon from "@/components/ui/WarpIcon";
import { addF, addS } from "@/lib/toast";
import { useUserSettings } from "@/queries/userSettings";
import { LinkType } from "@/types/data";
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

interface Modal_Props extends Partial<ModalProps> {
  links: {
    state: LinkType[];
    updater: React.Dispatch<React.SetStateAction<LinkType[]>>;
  };
  openedLinkData: LinkType | null;
}
const Modals: React.FC<Modal_Props> = ({ openedLinkData, links, ...rest }) => {
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
    // await new Promise((resolve) => setTimeout(() => resolve(0), 5000));

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
      backdrop="blur"
      size="md"
      placement="center"
      classNames={{
        base: "bg-primary/90",
        body: "z-200 h-60 flex items-center justify-center",
        wrapper: "z-200",
        closeButton: "text-text-primary hover:bg-tertiary rounded-xl",
        backdrop: "z-150",
      }}
    >
      <ModalContent>
        {(onClose) => {
          return (
            <>
              <ModalHeader className="flex flex-col gap-1 font-poppins text-xl text-text-primary">
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
                    (<Button2
                      type="button" 
                      disabled={loading} 
                      className="overflow-hidden w-25 h-12"
                      onClick={async (e)=>{e.preventDefault(); await deleteLink(onClose);}}>
                      <p>Delete</p>
                    </Button2>)}

                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-accent/80 overflow-hidden w-25 h-12"
                  >
                    {loading ? (
                      <Spinner
                        variant="simple"
                        classNames={{ wrapper: "text-text-primary" }}
                        size="sm"
                      />
                    ) : (
                      <p>{openedLinkData ? "Save" : "Add Link"}</p>
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

export default function SocialLinksFields() {
  const currentUserProfile = useUserSettings();
  const [links, setLinks] = useState<LinkType[]>(
    currentUserProfile.userProfile.links
  );
  const [openedLinkData, setOpen] = useState<LinkType | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="w-full mt-7 ">
      <Modals
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        links={{ state: links, updater: setLinks }}
        openedLinkData={openedLinkData}
      />
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 color-transitions">

        {links.map((link, index) => (
          <button
          className={`w-full px-4 py-3 bg-secondary hover:bg-tertiary font-poppins font-normal text-text-primary rounded-2xl flex justify-between items-center transition-colors cursor-pointer`}
          key={index}
          onClick={() => {
            setOpen(link);
            onOpen();
          }}
          >
            <div className="flex justify-between items-center w-5/6">
              <WarpIcon name="material-symbols:link-rounded" size="lg" />
              <span className="text-md truncate w-3/4">{link.label}</span>
            </div>
            <WarpIcon name="mdi:edit" size="sm" />
          </button>
        ))}

        <Button
          className={`w-full py-3 bg-accent/80 ${
            links.length % 4 == 0 ? "col-span-4" : ""
          }`}
          onClick={() => {
            if (links.length < 5) {
              setOpen(null);
              onOpen();
            } else
              addF({
                description: "You can't add more than 5 links in your profile.",
              });
          }}
        >
          <WarpIcon name="mdi:link-add" size="md" className="text-inherit" />
          <span className="text-md">Add Social Link</span>
        </Button>
      </div>
    </div>
  );
}
