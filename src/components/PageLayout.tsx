import { cn } from '@/lib/utils'
import React, { HTMLAttributes } from 'react'
interface PageLayoutProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode,
}
const PageLayout: React.FC<PageLayoutProps> = ({children, className, ...rest}) => {
  return (
    <div className={cn(`w-dvw h-dvh bg-primary`, className)} {...rest}>
      {children}
    </div>
  )
}

export default PageLayout