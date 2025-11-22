import PageLayout from '@/components/PageLayout'
import React from 'react'
import AppPreferences from './AppPreferences'
import Heading from '@/components/ui/Heading'

const page = () => {
  return (
    <PageLayout className="overflow-y-scroll scrollbar-hide">
      <div className='w-full px-2 py-20 center-col'>
        <Heading title="General Settings" />
        <AppPreferences />
      </div>
    </PageLayout>
  )
}

export default page
