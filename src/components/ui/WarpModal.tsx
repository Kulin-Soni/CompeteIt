import { Modal, ModalProps } from '@heroui/react';
import React, {ReactNode} from 'react'

interface WarpModalProps extends ModalProps{
  children: ReactNode,
  zLevel: number
}

const WarpModal = ({children, zLevel, ...props}: WarpModalProps)=>{
  return (
    <Modal
    backdrop="opaque"
    placement="center"
    classNames={{
        base: "z-[var(--z)] bg-primary border-secondary border-1.5",
        header: "flex flex-col gap-1 font-poppins text-xl text-text-primary",
        body: "z-[var(--z)] h-60 flex items-center justify-center",
        wrapper: "z-[var(--z)]",
        closeButton: "text-text-primary hover:bg-tertiary rounded-xl scale-125 m-2 active:bg-tertiary",
        backdrop: "z-[calc(var(--z)-50)] bg-primary/80",
      }}
      style={{"--z":  `${zLevel*100}`} as React.CSSProperties}
    {...props}>{children}</Modal>
  )
}

export default WarpModal;
