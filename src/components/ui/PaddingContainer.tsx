import { cn } from '@heroui/react';
import React from 'react'

interface PaddingContainerProps extends React.HTMLAttributes<HTMLDivElement>{
  innerClassName?: string;
}
function PaddingContainer({className, children, innerClassName, ...props}: PaddingContainerProps) {
  return (
    <div className={cn("w-full my-5", className)} {...props}>
      <div className={cn("w-full py-10 px-5 md:px-10 rounded-2xl bg-secondary/50", innerClassName)}>
       {children}  
      </div>
    </div>
  )
}

export default PaddingContainer
