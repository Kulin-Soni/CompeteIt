import React from 'react'
import PageLayout from '@/components/PageLayout'
import Heading from "@/components/ui/Heading";
import ProfileVisibility from './ProfileVisibility';
import CommPreferences from './CommPreferences';
import LocationPreferences from './LocationPreferences';
import LoginCredential from './LoginCredential';

const page = () => {
  return (
    <PageLayout className="overflow-y-scroll scrollbar-hide">
      <div className='w-full px-2 py-20 center-col'>
        <Heading title="Privacy and Security" />
        <ProfileVisibility />
        <CommPreferences />
        <LocationPreferences />
        <LoginCredential />
      </div>
    </PageLayout>
  )
}

export default page
