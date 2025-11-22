import Subheading from '@/components/ui/Subheading'
import capitalize from '@/utils/capitalize'
import { cn, Divider } from '@heroui/react'
import React from 'react'
import ProgressBar from './ProgressBar';

function EngagementSummary() {
 const engagementSummaryData = [
    {
      identifier: "giveaway",
      joined: 2,
      cap: 100,
    },
    {
      identifier: "event",
      joined: 99,
      cap: 100,
    },
    {
      identifier: "competition",
      joined: 59,
      cap: 100,
    },
  ]; // dummy data
  return (
    <div className="w-full my-5">
      <div className="w-full py-10 px-5 md:px-10 rounded-2xl bg-secondary/50">
        <Subheading title="Engagement Summary" className='mb-0' />
        <span className='font-poppins text-sm text-text-primary'>Your active participation data in competitions, events and giveaways.</span>
        <Divider className="my-10" />
       <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {engagementSummaryData.map((item, index, arr) => (
            <div
              key={index}
              className={cn("flex flex-col justify-center items-center", arr.length%2!=0&&"last:col-span-2 last:sm:col-span-1")}
            >

              {/* <h4 className="font-poppins font-bold text-xl w-full text-text-primary text-center">
                {item.created}
              </h4> */}
              <div className="center-col">
              <ProgressBar progress={item.joined} total={item.cap} />
                </div>
              <h6 className="font-poppins font-semibold text-lg w-full text-accent text-center pt-0">
                {capitalize(item.identifier) + "s"}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EngagementSummary
