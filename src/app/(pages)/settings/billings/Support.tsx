import Subheading from '@/components/ui/Subheading'
import WarpIcon from '@/components/ui/WarpIcon'
import { cn, Divider } from '@heroui/react'
import React, { HTMLAttributes } from 'react'


interface SupportItemProps extends HTMLAttributes<HTMLDivElement>{
    classNames?: {
        container?: string,
        icon?: string,
        label?: string
    },
    icon: string,
    label: string,
    link?: string,
}
const SupportItem: React.FC<SupportItemProps> = ({label, icon, link, classNames, ...rest})=>{
    return (
        <a href={link}>
            <div className={cn('w-full my-5 flex gap-4 items-center', classNames?.container)} {...rest}>
                    <div>
                    <WarpIcon name={icon} className={cn('text-accent', classNames?.icon)} />
                    </div>
                    <span className={cn('w-full text-text-primary truncate text-sm md:text-md lg:text-lg font-poppins font-normal', classNames?.label)}>{label}</span>
            </div>
        </a>
    )
}

export default function Support() {
  return (
    <div className='w-full my-5'>
        <div className='w-full py-10 px-5 md:px-10 rounded-2xl bg-secondary/50'>
            <Subheading title='Payments & Billing Support' />
            <Divider className='my-10' />
            <div className='w-full'>

                <SupportItem icon="ic:baseline-discord" label="Official Discord" link="https://discord.com" />

                <SupportItem icon='material-symbols:mail-outline-rounded' label='finance-support@competeit.com' link='mailto:finance-support@competeit.com' />

                <SupportItem icon="ic:round-phone" label="+1800 0000 1213" link="tel:1800000213" />

            </div>
        </div>
        </div>
  )
}
