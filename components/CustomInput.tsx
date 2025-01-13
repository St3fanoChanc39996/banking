
'use client';

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'


import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { Control, FieldPath, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { authFormSchema } from '@/lib/utils';

interface CustomInput{
  control: Control<z.infer<typeof authFormSchema>>,
  name: FieldPath<z.infer<typeof authFormSchema>>,
  label: string,
  placeholder: string
}

const CustomInput = ({control,name,label,placeholder}: CustomInput) => {
  return (
    <section>
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
            <div className='form-item'>
                <div className='flex w-full flex-col'>
                    <FormLabel className='form-label'>{label}</FormLabel>
                    <div className='flex w-full flex-col'>
                        <FormControl>
                            <Input placeholder={placeholder} className='input-class' {...field} type={name === 'password'? 'password' : 'text'}></Input>
                        </FormControl>
                        <FormMessage className='form-message mt-2'/>
                    </div>
                </div>
            </div>
        )}
        />
    </section>
  )
}

export default CustomInput