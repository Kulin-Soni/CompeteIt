import PageLayout from '@/components/PageLayout'
import React from 'react'
import BillingHistory from './BillingHistory'
import Heading from '@/components/ui/Heading'
import CurrentPlan from './CurrentPlan'
import Support from './Support'
import { Metadata } from 'next'

const page = () => {
  return (
    <PageLayout className="overflow-y-scroll scrollbar-hide">
      <div className="w-full px-2 py-20 center-col">
        <Heading title='Payments and Billings' />
        <CurrentPlan />
        <BillingHistory />
        <Support />
      </div>
    </PageLayout>
  )
}

export const metadata: Metadata = {
  title: "Payments and Billings",
  description: "Upgrade and manage subscriptions.",
};

export default page