import React from 'react'
import { Skeleton, SkeletonProps } from '@heroui/react'
import { cn } from '@heroui/react'

const WarpSkeleton: React.FC<Partial<SkeletonProps>> = ({className, ...rest}) => {
  return (
    <Skeleton className={cn(`w-full h-full !bg-secondary`, className)} {...rest} />
  )
}

export default WarpSkeleton
