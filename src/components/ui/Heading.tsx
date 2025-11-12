import { cn } from '@heroui/react'
import React from 'react'

const Heading = ({className, title}: {className?: string, title?: string}) => {
  return (
    <h3 className={cn("font-poppins text-2xl xsm:text-3xl text-text-primary font-semibold mb-20 w-full flex flex-col items-center  cursor-default", className)}>{`${title}`}</h3>
  )
}

export default Heading
