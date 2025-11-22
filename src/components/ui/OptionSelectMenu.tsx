import { Select, SelectItem, SelectProps } from '@heroui/react'
import React from 'react'

interface OptionSelectMenuProps<K> extends Omit<SelectProps, "children"> {
 data: K[];
 labelKey: keyof K;
 specialKey: keyof K;
 defaultKey?: K[keyof K];
 ariaLabel: string;
}

function OptionSelectMenu<K extends Record<string, unknown>>({ data, labelKey, specialKey, defaultKey, ariaLabel, ...rest }: OptionSelectMenuProps<K>) {
  return (<Select
      aria-label={ariaLabel}
      className="w-30 sm:w-40"
      items={data}
      selectionMode='single'
      isRequired
      disallowEmptySelection
      classNames={{
        label: "group-data-[filled=true]:-translate-y-5 text-text-primary",
        trigger: "min-h-3 bg-quartinary data-[hover=true]:bg-quartinary",
        listboxWrapper: "max-h-[400px] bg-transparent",
        selectorIcon: "text-text-primary",
      }}
      listboxProps={{
        itemClasses: {
          base: "rounded-md transition-opacity data-[hover=true]:bg-secondary dark:data-[hover=true]:bg-secondary data-[selected=true]:bg-secondary",
        }
      }}
      popoverProps={{
        classNames: {
          content: "bg-quartinary p-1",
        },
      }}
      defaultSelectedKeys={defaultKey && [String(defaultKey)]} {...rest}>
        {(item)=>{
          const typedItem = item as K;
          return (<SelectItem key={String(typedItem[specialKey])} textValue={String(typedItem[labelKey])}>
          <span className="font-alef text-sm text-text-primary">
          {String(typedItem[labelKey])}
          </span>
          </SelectItem>)}}
      </Select>)
}

export default OptionSelectMenu
