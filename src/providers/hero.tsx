'use client'
import {HeroUIProvider, ToastProvider} from '@heroui/react'

export function HeroProvider({children}: { children: React.ReactNode }) {
  return (
    <HeroUIProvider disableRipple>
      <ToastProvider toastProps={{
        shouldShowTimeoutProgress: true,
        classNames: { base: "font-poppins" },
      }} />
      {children}
    </HeroUIProvider>
  )
}