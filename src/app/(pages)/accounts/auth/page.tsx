"use client";
import PageLayout from "@/components/PageLayout";
import { Icon } from "@iconify/react";
import { Button1 } from "@/components/ui/Buttons";
import Image from "next/image";
const Auth = () => {
  return (
    <PageLayout className="center-col overflow-hidden bg-linear-to-b from-gray-400 to-accent-d">
      <div className={`max-w-2xl px-10 py-10 center-col rounded-2xl bg-primary/10 backdrop-blur-3xl shadow-md cursor-crosshair`}>
        <Image src={"/competeit.svg"} width={75} height={20} alt="CompeteIt Logo" className="mb-10" />
        <Button1 startContent={<Icon icon="mdi:google" />} size="lg" className="my-1 w-2xs bg-secondary border-tertiary font-medium">Continue with Google</Button1>
        <Button1 startContent={<Icon icon="mdi:apple" />} size="lg" className="my-1 w-2xs bg-secondary border-tertiary font-medium">Continue with Apple</Button1>
        <Button1 startContent={<Icon icon="mdi:github" className="fill-t-primary" />} size="lg" className="my-1 w-2xs bg-secondary border-tertiary font-medium">Continue with Github</Button1>
      </div>
    </PageLayout>
  );
};

export default Auth;
