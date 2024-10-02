'use client'
import React from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


function Create_Account() {
    
  return (
    <div className='flex items-baseline justify-center mt-10'>
      <div className='flex flex-col item-center justify-center p-10 bg-slate-100 border border-gray-200'>
        <Image src={'/logo1.png'} alt='logo1' width={300} height={300}/>
        <h1 className='text-3xl font-bold'>Create Account</h1>
        <h2 className='text-gray-500'>Enter your Email and Password to Create an Account</h2>
        <form action="https://formspree.io/f/xdknbvpg" method='POST' className='flex flex-col gap-5 mt-7 w-full'>
            <Input id='username' type='username' name='username' placeholder='Username' autoComplete='off' required/>
            <Input id='email' type='email' name='Email'  placeholder='name@example.com'autoComplete='off' required/>
            <Input id='password' name='password' type='password' placeholder='Password' autoComplete='off' required/>
            <Button type='submit' value={"Submit"}>Create an Account</Button>
            <p>Already have an account
                <Link href={'/sign-in'} className='text-blue-500'>
                Click here to Sign In</Link>
            </p>
        </form>
      </div>
    </div>
  )
}

export default Create_Account
