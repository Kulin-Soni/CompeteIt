import { cn } from '@heroui/react'
import React, { HTMLAttributes } from 'react'
interface PageLayoutProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode,
}
const PageLayout: React.FC<PageLayoutProps> = ({children, className, ...rest}) => {
  return (
    <div className={cn(`bg-primary flex-1 min-w-0 min-h-0`, className)} {...rest}>
      {children}
    </div>
  )
}

export default PageLayout