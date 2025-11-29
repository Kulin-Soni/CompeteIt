"use client"
import JustifiedContainer from '@/components/ui/JustifiedContainer'
import JustifiedHeading from '@/components/ui/JustifiedHeading'
import OptionSelectMenu from '@/components/ui/OptionSelectMenu'
import PaddingContainer from '@/components/ui/PaddingContainer'
import Subheading from '@/components/ui/Subheading'
import WrapSwitch from '@/components/ui/WrapSwitch'
import { Divider } from '@heroui/react'
import React from 'react'

const ThemeSelection = ()=>{
 const themes = [{label: "Dark", value: "dark"}, {label: "Light", value: "light"}, {label: "System", value: "system"}];
 return (
  <JustifiedContainer className='mb-5'>
   <JustifiedHeading>
    App Theme
   </JustifiedHeading>
   <OptionSelectMenu ariaLabel='Change Theme' data={themes} labelKey='label' specialKey="value" defaultKey='system' />
  </JustifiedContainer>
 )
}

const AllowBetaFeatures = ()=>{
 return (
  <WrapSwitch label='Allow Beta Features' description='Beta features are our upcoming features, they may be incomplete and may feel buggy.' />
 )
}

function AppPreferences() {
  return (
    <PaddingContainer>
        <Subheading title="App Preferences" />
        <Divider className="my-10" />

        <ThemeSelection />
        <AllowBetaFeatures />

    </PaddingContainer>
  )
}

export default AppPreferences
