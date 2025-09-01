import { cn } from '@/lib/utils'
import React, { HTMLAttributes } from 'react'
interface LoaderProps extends HTMLAttributes<SVGElement> {
  mainThemeColor?: string
  
}
const Loader: React.FC<LoaderProps> = ({className, mainThemeColor, ...rest}) => {
  return (
      <svg
          className={cn(`animate-spin h-5 w-5 text-current`, className)}
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke={mainThemeColor ?? "#000"}
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            fill={mainThemeColor ?? "#000"}
          />
        </svg>
  )
}

export default Loader
