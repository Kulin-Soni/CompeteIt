"use client"
import { addS } from '@/lib/toast';
import { useUserSettings } from '@/queries/userSettings';
import { Field } from '@/types/data';
import { Switch } from '@heroui/react'
import React, { useState } from 'react'
import { FieldData } from './types';

export default function VisibilityChecksFields() {
  const currentUserProfile = useUserSettings();
  const checkFieldsData: FieldData[] = [
    { defaultValue: currentUserProfile.userProfile.showPublic.competitions,
      prompt: "Show Competitions on Profile" },
    { defaultValue: currentUserProfile.userProfile.showPublic.events,
      prompt: "Show Events on Profile" },
    { defaultValue: currentUserProfile.userProfile.showPublic.giveaways,
      prompt: "Show Giveaways on Profile" },
  ]
  const [loading, setLoading] = useState(false);
  const updateField = async (updatedData: Field)=>{
    setLoading(prev=>!prev);
    await new Promise((resolve) => setTimeout(() => resolve(0), 1000));
    addS({description: `Set the ${updatedData.id} visibility to ${updatedData.show ? "public" : "private"}.`});
    setLoading(prev=>!prev);
  }
  
  return (
    <div className="w-full">
      {checkFieldsData.map((field, index)=>{
        return (<div className="w-full px-2 py-4 flex justify-between items-center gap-6 text-start" key={index}>
              <span className="font-poppins font-medium text-medium text-text-primary text-balance cursor-default">{field.prompt}</span>
              <div className='w-15 center-col aspect-video'>
              <Switch defaultSelected={field.defaultValue.show} aria-label={field.prompt} color="primary" size="md" classNames={{
                wrapper: "group-data-[selected=true]:bg-accent bg-secondary group-data-[hover=true]:bg-tertiary"
              }} onValueChange={async (e)=>{await updateField({id: field.defaultValue.id, show: e})}} isDisabled={loading} />
              </div>
          </div>)
      })}
      </div>
  )
}