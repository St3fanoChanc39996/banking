'use client';

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'


import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import CustomInput from './CustomInput';
import { authFormSchema } from '@/lib/utils';
import { Loader2 } from 'lucide-react';


// const formSchema = z.object({
//   email: z.string().email(),
// })



// const formSchema = z.object({
//     username: z.string().min(2).max(50),
//   })

const AuthForm = ({type}:{type:string}) => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // 1. Define your form.
    const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
        email: "",
        password:''
    },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof authFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsLoading(true);
    console.log(values);
    setIsLoading(false);
    }
    
  return (
    <section className='auth-form'>
        <header className='flex flex-col gap-5 md:gap-8'>
            <Link href="/" className="mb-12 cursor-pointer items-center gap-2 flex" >
                <Image src="/icons/logo.svg" width={34} height={34} alt='Horizon Logo' className='size-[24px] max-xl:size-14'/>
                <h1 className='sidebar-logo text-gray-600'>HORIZON</h1>
            </Link>
            <div className='flex flex-col gap-1 md:gap-3'>
                <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
                    {user ? "Link Account" : type === 'sign-in' ? 'Sign In' : 'Sign Up' }
                    <p className='text-16 font-normal text-gray-600'>
                        {user? 'Link Your sccount to get started' :'Please enter your details'}
                    </p>
                </h1>
            </div>
        </header>
        {user ? (
            <div className='flex flex-col gap-4'>
                {/* Plaid Link Component */}
            </div>
        ):(
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <CustomInput
                    control={form.control}
                    name='email'
                    label='Email'
                    placeholder='Enter a valid email.'/>

                    <CustomInput
                    control={form.control}
                    name='password'
                    label='Password'
                    placeholder='Password'/>

                    <Button 
                    type="submit" 
                    className='form-btn'
                    disabled={isLoading}>
                        {isLoading? (
                            <>
                                <Loader2 size={20} className='animate-spin'/> &nbsp; Loading....
                            </>
                        ) : type === 'sign-in' ? 'Sign In' : "Sign Up"}
                    </Button>
                </form>
            </Form>
        )}
    </section>
  )
}

export default AuthForm