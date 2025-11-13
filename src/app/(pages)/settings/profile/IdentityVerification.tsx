"use client"
import { WarpButton } from '@/components/ui/Buttons'
import WarpIcon from '@/components/ui/WarpIcon'
import WarpModal from '@/components/ui/WarpModal'
import { ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@heroui/react'
import React from 'react'

export default function IdentityVerification() {
    const {isOpen, onOpenChange ,onOpen} = useDisclosure();
  return (
    <>
        <WarpModal zLevel={1} isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
            <ModalContent>
                {(onClose)=>(
                    <>
                        <ModalHeader>Verify Your Identity</ModalHeader>
                        <ModalBody>
                            <p className='font-alef text-lg text-text-primary text-justify'>To keep competitions, events, and giveaways fair for everyone, we ask participants to verify their identity. Don’t worry, this is quick, secure, and handled through <b>Persona</b>, a trusted third-party service. Your information stays safe, and it helps us make sure everyone gets an equal chance to participate.</p>
                        </ModalBody>
                        <ModalFooter>
                            <WarpButton startContent={<WarpIcon name="mdi:open-in-new" />} gapSize='sm' onClick={()=>{
                                window.open("https://google.com", "_blank");
                                onClose();
                            }}>Go To Verification Page</WarpButton>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </WarpModal>
        <WarpButton startContent={<WarpIcon name="charm:shield-tick" />} endContent={<WarpIcon name="mdi:chevron-right" />} intent="fw" position='left' className='w-full mt-2' onClick={onOpen}>
           <span>
            Verify Your Identity
            </span>
        </WarpButton>
    </>
  )
}
