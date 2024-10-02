import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Category() {
  return (
    <div className='mt-5'>
      <h2 className='text-2xl text-green-600 font-bold mb-5'>Shop By Category</h2>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-5 mt-2 '>
        <Link href='./product-category/bakery' className='flex flex-col items-center bg-green-50 gap-2 p-3 rounded-lg group cursor-pointer hover:bg-green-600'>
          <Image src={'/bakery.jpg'} alt="Bakery" width={50} height={50} className='group-hover:scale-125 transition-all ease-in-out'/>
          <h1 className='text-green-800'>Bakery</h1>
        </Link>
        <Link href={'./product-category/Chicken&Egg'} className='flex flex-col items-center bg-green-50 gap-2 p-3 rounded-lg group cursor-pointer hover:bg-green-600'>
          <Image src={'/chicken.png'} alt="Chicken & Egg" width={50} height={50} className='group-hover:scale-125 transition-all ease-in-out'/>
          <h1 className='text-green-800'>Chicken & Egg</h1>
        </Link>
        <Link href={'./product-category/fruits'} className='flex flex-col items-center bg-green-50 gap-2 p-3 rounded-lg group cursor-pointer hover:bg-green-600'>
          <Image src={'/fruits.png'} alt="Fruits" width={50} height={50} className='group-hover:scale-125 transition-all ease-in-out'/>
          <h1 className='text-green-800'>Fruits</h1>
        </Link>
        <Link href={'./product-category/grains'} className='flex flex-col items-center bg-green-50 gap-2 p-3 rounded-lg group cursor-pointer hover:bg-green-600'>
          <Image src={'/grains.png'} alt="Grains" width={50} height={50} className='group-hover:scale-125 transition-all ease-in-out'/>
          <h1 className='text-green-800'>Grains</h1>
        </Link>
        <Link href={'./product-category/milk&juice'} className='flex flex-col items-center bg-green-50 gap-2 p-3 rounded-lg group cursor-pointer hover:bg-green-600'>
          <Image src={'/milk.png'} alt="Milk & Juice" width={50} height={50} className='group-hover:scale-125 transition-all ease-in-out'/>
          <h1 className='text-green-800'>Milk & Juice</h1>
        </Link>
        <Link href={'./product-category/personalcare'} className='flex flex-col items-center bg-green-50 gap-2 p-3 rounded-lg group cursor-pointer hover:bg-green-600'>
          <Image src={'/personal.jpg'} alt="Personal Care" width={50} height={50} className='group-hover:scale-125 transition-all ease-in-out'/>
          <h1 className='text-green-800'>Personal Care</h1>
        </Link>
        <Link href='./product-category/vegetable' className='flex flex-col items-center bg-green-50 gap-2 p-3 rounded-lg group cursor-pointer hover:bg-green-600'>
          <Image src={'/vegetable.png'} alt="Vegetables" width={50} height={50} className='group-hover:scale-125 transition-all ease-in-out'/>
          <h1 className='text-green-800'>Vegetables</h1>
        </Link>
      </div>
    </div>
  )
}
