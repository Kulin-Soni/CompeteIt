import { cn } from '@heroui/react';
import React, { ReactNode } from 'react'

interface JustifiedContainerProps extends React.HTMLAttributes<HTMLDivElement> {
 children: ReactNode | string;
}
function JustifiedContainer({children, ...props}: JustifiedContainerProps) {
  return (
    <div {...props} className={cn('w-full flex justify-between items-center gap-6 text-start', props.className)}>
      {children}
    </div>
  )
}

export default JustifiedContainer
