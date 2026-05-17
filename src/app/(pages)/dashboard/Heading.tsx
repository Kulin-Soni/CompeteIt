import { cn } from '@heroui/react';
import React from 'react'

function Heading({children, className}: HeadingProps) {
  return (
    <div className={cn("text-2xl apply-text font-semibold p-2 cursor-default", className)}>
      <h4>{children}</h4>
    </div>
  )
}

export default Heading
