import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'motion/react'
import React, { HTMLAttributes } from 'react'
interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  mainThemeColor?: string
  
}
const Skeleton: React.FC<SkeletonProps> = ({className, mainThemeColor, ...rest}) => {
  return (
    <div className={cn(`w-full h-full overflow-hidden bg-[${mainThemeColor ?? "#ebebeb"}] relative`, className)} {...rest}>
      <AnimatePresence mode='popLayout'>
      <motion.div className={`absolute h-[300%] w-1/12 bg-[#ffffff] blur-3xl top-[-50%] -rotate-45`} initial={{translateX: "-1000px"}} animate={{translateX: "1200px"}} transition={{repeat: Infinity, duration: 1.5, ease: "linear"}}></motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Skeleton
