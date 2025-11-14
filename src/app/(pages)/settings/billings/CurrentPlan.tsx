"use client"
import { WarpButton } from '@/components/ui/Buttons'
import Subheading from '@/components/ui/Subheading'
import WarpIcon from '@/components/ui/WarpIcon'
import WrapSwitch from '@/components/ui/WrapSwitch'
import { cn, Divider, Switch } from '@heroui/react'
import React from 'react'
const commonClasses = {
    activePlanName: "text-md xsm:text-lg sm:text-2xl font-poppins font-medium cursor-default",
    activePlanActionBtn: "py-2 w-full sm:w-auto rounded-full",
    activePlanInfoContainer: "w-full flex justify-between my-2"
}
const PlanInfoText = ({className, text}: {className?: string, text: string})=>{
    return (<span className={cn(`font-poppins text-text-primary text-sm xsm:text-md`, className)}>{text}</span>)
}
export default function CurrentPlan() {
    const x = true;
    const y = 2;
        
  return (
    <div className='w-full my-5'>
        <div className='w-full py-10 px-5 md:px-10 rounded-2xl bg-secondary/50'>
            <Subheading title='Active Plan' />
            <div className='w-full'>
                <div className='flex flex-col gap-4 sm:flex-row items-center justify-between'>
                
                {/* Active Plan Icon */}
                <div className='flex items-center justify-center gap-3'>
                    <div className='p-2 rounded-full bg-accent/20 center-col'>
                    {x?
                    (<WarpIcon name="tabler:diamond-filled" className='text-accent' size="md" />)
                    :
                    (<WarpIcon name="icon-park-solid:converging-gateway" className='text-accent' size="md" />)} 
                    </div>

                {/* Active Plan Name */}
                    {y==1 ?
                    (<h5 className={`text-accent ${commonClasses.activePlanName}`}>CompeteIt Pro</h5>)
                    : y==2 ? 
                    (<h5 className={`text-accent ${commonClasses.activePlanName}`}>CompeteIt Enterprise</h5>)
                    :
                    (<h5 className={`text-text-primary ${commonClasses.activePlanName}`}>CompeteIt Classic</h5>)}

                </div>
                

                {/* Cancel / Upgrade Button */}
                {x?
                (<WarpButton intent='secondary' className={`hover:bg-tertiary ${commonClasses.activePlanActionBtn}`}>
                    <span>Cancel</span>
                </WarpButton>)
                :
                (<WarpButton intent='primary' className={`hover:bg-accent-d/50 ${commonClasses.activePlanActionBtn}`}>
                    <span>Upgrade</span>
                </WarpButton>)}
                
                </div>
            </div>

            {/* Active Plan Information */}
            {x && (<>

            <Divider className='my-10' />
            <div className={commonClasses.activePlanInfoContainer}>
                <PlanInfoText text='Plan Tier' />
                <PlanInfoText text='$200' />
            </div>
            <div className={commonClasses.activePlanInfoContainer}>
                <PlanInfoText text='Billing interval' />
                <PlanInfoText text='Yearly' />
            </div>
            <div className={commonClasses.activePlanInfoContainer}>
                <PlanInfoText text='Active until' />
                <PlanInfoText text='Dec. 10, 2025' />
            </div>


            <Divider className='my-10' />


            {/* Notification */}
            <div className='w-full flex justify-between items-center'>
                <WrapSwitch label='Notify when plan ends' switchProps={{defaultSelected: true}} />
            </div>
            </>)}

        </div>
    </div>
  )
}
