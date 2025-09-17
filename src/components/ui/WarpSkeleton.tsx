import React from 'react'
import { Skeleton, SkeletonProps } from '@heroui/react'
import { cn } from '@/lib/utils'

const WarpSkeleton: React.FC<Partial<SkeletonProps>> = ({className, ...rest}) => {
  return (
    <Skeleton className={cn(`w-full h-full`, className)} {...rest} />
  )
}

export default WarpSkeleton
