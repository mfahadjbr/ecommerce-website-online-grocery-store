import React from 'react'
import Image from 'next/image'
import { LayoutGrid, Search, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'
function Header() {
  return (
    <>
    <div className='p-5  shadow-sm flex justify-between z-50'>
      <div className='flex items-center gap-8 z-50'>
        <Image src="/logo1.png" alt="Logo1" width={150} height={100} />
        
          {/* Category Dropdown */}
        <DropdownMenu >
          <DropdownMenuTrigger asChild>
            <h2 className='hidden md:flex gap-2 items-center border cursor-pointer rounded-full p-2 px-10 bg-slate-100'>
              <LayoutGrid className='h-5 w-5' />Category
            </h2>
          </DropdownMenuTrigger>
          {/* Add z-50 to ensure it appears on top */}
          <DropdownMenuContent className='mt-2 rounded-2xl border-1 shadow-2xl w-[180px] px-3 py-5 z-50 bg-[#f1f2f4]'>
            <DropdownMenuLabel className='font-bold mb-3 items-center hover:bg-slate-300 p-2 rounded-2xl'>Browse Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href='./product-category/vegetable'>
            <DropdownMenuItem className='outline-none cursor-pointer flex items-center gap-3 font-semibold hover:bg-slate-300 p-1 rounded-2xl'>
              <Image src={'/vegetable.png'} alt="vegetable" width={35} height={20} className={'rounded-full'} />Vegetables
            </DropdownMenuItem>
            </Link>
            <Link href={'./product-category/fruits'}>
            <DropdownMenuItem className='outline-none cursor-pointer flex items-center gap-3 mt-3 font-semibold hover:bg-slate-300 p-1 rounded-2xl'>
              <Image src={'/fruits.png'} alt="fruits" width={35} height={20} className={'rounded-full'} />Fruits
            </DropdownMenuItem>
            </Link>
            <Link href={'./product-category/milk&juice'}>
            <DropdownMenuItem className='outline-none cursor-pointer flex items-center gap-3 mt-3 font-semibold hover:bg-slate-300 p-1 rounded-2xl'>
              <Image src={'/milk.jpg'} alt="milk" width={35} height={20} className={'rounded-full'} />Milk & Juice
            </DropdownMenuItem>
            </Link>
            <Link href='./product-category/bakery'>
            <DropdownMenuItem className='outline-none cursor-pointer flex items-center gap-3 mt-3 font-semibold hover:bg-slate-300 p-1 rounded-2xl'>
              <Image src={'/bakery.jpg'} alt="bakery" width={35} height={20} className={'rounded-full'} />Bakery
            </DropdownMenuItem>
            </Link>
            <Link href={'./product-category/personalcare'}>
            <DropdownMenuItem className='outline-none cursor-pointer flex items-center gap-3 mt-3 font-semibold hover:bg-slate-300 p-1 rounded-2xl'>
              <Image src={'/personal.jpg'} alt="personal care" width={35} height={20} className={'rounded-full'} />Personal Care
            </DropdownMenuItem>
            </Link>
            <Link href={'./product-category/grains'}>
            <DropdownMenuItem className='outline-none cursor-pointer flex items-center gap-3 mt-3 font-semibold hover:bg-slate-300 p-1 rounded-2xl'>
              <Image src={'/grains.png'} alt="grains" width={35} height={20} className={'rounded-full'} />Grains
            </DropdownMenuItem>
            </Link>
            <Link href={'./product-category/Chicken&Egg'}>
            <DropdownMenuItem className='outline-none cursor-pointer flex items-center gap-3 mt-3 font-semibold hover:bg-slate-300 p-1 rounded-2xl'>
              <Image src={'/chicken.png'} alt="chicken" width={35} height={20} className={'rounded-full'} />Chicken & Egg
            </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
       
        

        <div className='md:flex gap-3 items-center border rounded-full p-2 px-5 hidden'>
          <Search />
          <input type="text" placeholder='Search' className='outline-none' />
        </div>
      </div>

      <div className='flex gap-5 items-center'>
        <h2 className='flex gap-2 item-center text-lg'>
          <ShoppingBag />0
        </h2>
        <Button>Login</Button>
      </div>
    </div>
    </>
  )
}

export default Header
