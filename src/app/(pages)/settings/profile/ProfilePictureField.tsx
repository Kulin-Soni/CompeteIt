"use client";
import WarpIcon from "@/components/ui/WarpIcon";
import { AnimatePresence, motion } from "motion/react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Spinner } from "@heroui/react";
import { addF, addS } from "@/lib/toast";
import { useUserSettings } from "@/queries/userSettings";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
export default function ProfilePictureField() {
  const currentUser = useUserSettings();
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileProcessing, setFileProcessing] = useState(false);
  useEffect(()=>{
    setPreview(currentUser?.userProfile.avatar);
  }, [currentUser.userProfile.avatar]);

  const onFileChange = useCallback(
    async (file: FileList) => {
      const endProcess = ()=>{setFileProcessing(false); if (inputRef.current) inputRef.current.value = ""}
      
      setFileProcessing(true);
      if (file[0].size > MAX_FILE_SIZE) {
        // 2MB is max file size.
        addF({description: "The picture should be <2MB in size."});
        return endProcess();
      }

      try {
        if (preview?.startsWith("blob:")) URL.revokeObjectURL(preview);
        const objectURL = URL.createObjectURL(file[0]);
        setPreview(objectURL);

        // await uploadAvatar(file[0])

        addS({description: "Your profile picture has been updated."});
      } catch {
        addF({description:"There was some issue updating your profile picture. Please try again later."});
      }
      return endProcess();
    },
    [preview]
  );
  return (
    <div className="h-full center-col">
      <input
        type="file"
        className="w-0 h-0 invisible absolute -z-1 hidden"
        id="avatar"
        name="avatar"
        ref={inputRef}
        hidden
        accept=".jpg, .png, .jpeg"
        onChange={async (file) => {
          if (file.target.files) await onFileChange(file.target.files);
        }}
        disabled={fileProcessing || !preview}
      />
      <button
        className="relative overflow-hidden rounded-full border-2 border-secondary/50 sm:w-50 w-1/2 aspect-square"
        onClick={() => {
          inputRef.current?.click();
        }}
      >
        <AnimatePresence>
          {!fileProcessing && (
            <motion.div
              className="w-full h-full bg-secondary/50 backdrop-blur-lg absolute top-0 left-0 center-col z-5 rounded-full cursor-pointer"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <WarpIcon
                name="material-symbols:image"
                size="xl"
                className="text-text-primary"
              />
              <span className="text-sm font-poppins font-medium text-text-primary mt-2">
                Click to change
              </span>
            </motion.div>
          )}
        </AnimatePresence>
        {(fileProcessing || !preview) && (
          <div className="w-full h-full bg-secondary/50 backdrop-blur-lg absolute top-0 left-0 center-col z-5 rounded-full cursor-none">
            <Spinner
              variant="simple"
              classNames={{ wrapper: "text-text-primary" }}
              size="md"
            />
          </div>
        )}
        {preview && <Image
          src={preview}
          alt="User Profile Picture"
          fill
          priority
          sizes="(max-width: 500px) 500px, 500px"
          className="rounded-full object-cover"
        />}
      </button>
    </div>
  );
}
