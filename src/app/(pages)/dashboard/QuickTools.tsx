"use client"
import { WarpButton } from '@/components/ui/Buttons'
import WarpIcon from '@/components/ui/WarpIcon'
import React from 'react'

function QuickTools() {
  return (
    <div className='flex justify-end items-center gap-2'>
      <WarpButton intent='primary' className='py-2 pr-3 pl-1.5 rounded-lg' startContent={<WarpIcon name='mdi:plus' className='text-black' />} gapSize='sm'><span className='text-black font-poppins font-medium'>New</span></WarpButton>
      <div className='relative'>
      <WarpButton intent='icon' className='p-2 aspect-square rounded-lg' startContent={<WarpIcon name='material-symbols:notifications-outline-rounded' />} />
      <span className='w-2 h-2 rounded-full bg-danger-600 dark:bg-danger-300 absolute top-0 right-0'></span>
      </div>
    </div>
  ) 
}

export default QuickTools
