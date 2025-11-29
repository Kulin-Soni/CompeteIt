import { cn } from '@heroui/react';
import React from 'react'

type PaddingContainerProps = React.HTMLAttributes<HTMLDivElement>;
function PaddingContainer({className, children, ...props}: PaddingContainerProps) {
  return (
    <div className={cn("w-full my-5", className)} {...props}>
      <div className="w-full py-10 px-5 md:px-10 rounded-2xl bg-secondary/50">
       {children}  
      </div>
    </div>
  )
}

export default PaddingContainer
