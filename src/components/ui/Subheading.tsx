import { cn } from '@heroui/react'
import React from 'react'

const Subheading = ({className, title}: {className?: string, title?: string}) => {
  return (
    <h3 className={cn("text-2xl font-poppins text-text-primary font-medium mb-10 cursor-default", className)}>{`${title}`}</h3>
  )
}

export default Subheading
