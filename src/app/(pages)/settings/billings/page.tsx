import PageLayout from '@/components/PageLayout'
import React from 'react'
import BillingHistory from './BillingHistory'

const page = () => {
  return (
    <PageLayout className="overflow-y-scroll scrollbar-hide">
      <div className="w-full px-8 py-20 center-col">
        <BillingHistory />
      </div>
    </PageLayout>
  )
}

export default page
