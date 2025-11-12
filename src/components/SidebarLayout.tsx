"use client"
import { Button } from '@heroui/react'
import Sidebar from "@/components/ui/Sidebar"
import { AnimatePresence } from 'motion/react'
import React, { useState } from 'react'
import WarpIcon from './ui/WarpIcon'

export default function SidebarLayout() {
    const [sidebarVisible, setSidebarVisibility] = useState(false);
  return (
    <>
        <Button isIconOnly className="absolute top-5 right-5 z-100 bg-secondary" variant="solid" size="lg" onPress={()=>{setSidebarVisibility(!sidebarVisible)}} name='Open or Close Drawer'>
            <WarpIcon name="mdi:dock-left" className="text-text-primary" />
        </Button>
      <AnimatePresence initial={false} mode="wait">
        <Sidebar visible={sidebarVisible} />
      </AnimatePresence>
    </>
  )
}
