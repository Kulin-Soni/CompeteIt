import PageLayout from '@/components/PageLayout'
import React from 'react'
import UsageSummary from './UsageSummary'
import Heading from '@/components/ui/Heading'
import EngagementSummary from './EngagementSummary'

const page = () => {
  return (
    <PageLayout className="overflow-y-scroll scrollbar-hide w-full px-2 py-20 center-col">
        <Heading title="Analytics & Usage" />
        <UsageSummary />
        <EngagementSummary />
    </PageLayout>
  )
}

export default page
