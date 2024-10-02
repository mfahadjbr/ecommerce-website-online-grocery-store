'use client'
import React,{useState} from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ShoppingBasket } from 'lucide-react';
import Footer from '@/app/_components/Footer'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"

function PersonalCare() {
    const [count, setCount] = useState(1); // Initialize count as a number

  // Function to handle incrementing the quantity
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Function to handle decrementing the quantity (ensuring it doesn't go below 1)
  const decrementCount = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  };
  return (
    <>
    <h1 className='p-4 bg-primary text-white font-bold text-3xl text-center'>Personal Care</h1>
    <div className='p-7'>
    <div className='mt-5'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer hover:shadow-md transition-all ease-in-out '>
      <Image src={'/lotion.jpg'} width={500} height={200} alt={'carrot'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Moisturizing Lotion</h2>
      <div className='flex gap-3 justify-center'>
      <h2 className='text-center font-bold text-lg'>$9.99</h2>
      <h2 className='text-center font-bold text-lg line-through text-gray-500'>$12.99</h2>
      </div>
      <Dialog>
      <DialogTrigger asChild>
      <Button variant="outline" className='text-primary hover:text-white hover:bg-primary'>Add to cart</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
          <div className="grid grid-cols-1 md:grid-cols-2 p-7 bg-white text-black">
      <Image
        src={'/lotion.jpg'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Moisturizing Lotion</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Hydrating body lotion for all skin types.
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">$9.99</h2>
          <h2 className="text-center font-bold text-3xl line-through text-gray-500">$12.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (500 gram)</h2>
        <div className="flex flex-col items-baseline gap-3">
          <div className='flex gap-3 items-center'>
            <div className="p-2 border flex gap-10 items-center px-5">
              <button className="text-2xl" disabled={count === 1} onClick={decrementCount}>-</button>
              <h1 className="text-2xl">{count}</h1>
              <button className="text-2xl" onClick={incrementCount}>+</button>
            </div>
            <h2>=${(count * 9.99).toFixed(2)}</h2>
          </div>
          
          <Button className="flex gap-3">
            <ShoppingBasket />
            Add to cart
          </Button>
        </div>
        <h2><span className='font-bold'>Category:</span> Moisturizing Lotion</h2>
      </div>
    </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/cleanser.jpg'} width={500} height={200} alt={'cauliflower'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Gentle Face Cleanser</h2>
      <div className='flex gap-3 justify-center'>
      <h2 className='text-center font-bold text-lg'>$12.99</h2>
      <h2 className="text-center font-bold text-lg line-through text-gray-500">$14.99</h2>
      </div>
      <Dialog>
      <DialogTrigger asChild>
      <Button variant="outline" className='text-primary hover:text-white hover:bg-primary'>Add to cart</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            

          <div className="grid grid-cols-1 md:grid-cols-2 p-7 bg-white text-black">
      <Image
        src={'/cleanser.jpg'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Gentle Face Cleanser</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Mild facial cleanser suitable for sensitive skin.
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">$12.99</h2>
          <h2 className="text-center font-bold text-3xl line-through text-gray-500">$14.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (500 gram)</h2>
        <div className="flex flex-col items-baseline gap-3">
          <div className='flex gap-3 items-center'>
            <div className="p-2 border flex gap-10 items-center px-5">
              <button className="text-2xl" disabled={count === 1} onClick={decrementCount}>-</button>
              <h1 className="text-2xl">{count}</h1>
              <button className="text-2xl" onClick={incrementCount}>+</button>
            </div>
            <h2>=${(count * 12.99).toFixed(2)}</h2>
          </div>
          
          <Button className="flex gap-3">
            <ShoppingBasket />
            Add to cart
          </Button>
        </div>
        <h2><span className='font-bold'>Category:</span> Gentle Face Cleanser</h2>
      </div>
    </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/shampoo.jpg'} width={500} height={200} alt={'cilantro'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Nourishing Shampoo</h2>
      <div className='flex gap-3 justify-center'>
      <h2 className='text-center font-bold text-lg'>$7.49</h2>
      <h2 className="text-center font-bold text-lg line-through text-gray-500">$9.99</h2>
      </div>
      <Dialog>
      <DialogTrigger asChild>
      <Button variant="outline" className='text-primary hover:text-white hover:bg-primary'>Add to cart</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>

          <div className="grid grid-cols-1 md:grid-cols-2 p-7 bg-white text-black">
      <Image
        src={'/shampoo.jpg'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Nourishing Shampoo (500 gram)</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Revitalizing shampoo for all hair types.
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">$7.49</h2>
          <h2 className="text-center font-bold text-3xl line-through text-gray-500">$9.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (500gram)</h2>
        <div className="flex flex-col items-baseline gap-3">
          <div className='flex gap-3 items-center'>
            <div className="p-2 border flex gap-10 items-center px-5">
              <button className="text-2xl" disabled={count === 1} onClick={decrementCount}>-</button>
              <h1 className="text-2xl">{count}</h1>
              <button className="text-2xl" onClick={incrementCount}>+</button>
            </div>
            <h2>=${(count * 7.49).toFixed(2)}</h2>
          </div>
          
          <Button className="flex gap-3">
            <ShoppingBasket />
            Add to cart
          </Button>
        </div>
        <h2><span className='font-bold'>Category:</span> Nourishing Shampoo</h2>
      </div>
    </div>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/stick.jpg'} width={500} height={200} alt={'fresh'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Deodorant Stick</h2>
      <div className='flex gap-3 justify-center'>
      <h2 className='text-center font-bold text-lg'>$4.99</h2>
      <h2 className="text-center font-bold text-lg line-through text-gray-500">$5.99</h2>
      </div>
      <Dialog>
      <DialogTrigger asChild>
      <Button variant="outline" className='text-primary hover:text-white hover:bg-primary'>Add to cart</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>

          <div className="grid grid-cols-1 md:grid-cols-2 p-7 bg-white text-black">
      <Image
        src={'/stick.jpg'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Deodorant Stick (500gram)</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Long-lasting protection against odor and wetness.
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">$4.99</h2>
          <h2 className="text-center font-bold text-3xl line-through text-gray-500">$5.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (500gram)</h2>
        <div className="flex flex-col items-baseline gap-3">
          <div className='flex gap-3 items-center'>
            <div className="p-2 border flex gap-10 items-center px-5">
              <button className="text-2xl" disabled={count === 1} onClick={decrementCount}>-</button>
              <h1 className="text-2xl">{count}</h1>
              <button className="text-2xl" onClick={incrementCount}>+</button>
            </div>
            <h2>=${(count * 4.99).toFixed(2)}</h2>
          </div>
          
          <Button className="flex gap-3">
            <ShoppingBasket />
            Add to cart
          </Button>
        </div>
        <h2><span className='font-bold'>Category:</span> Deodorant Stick</h2>
      </div>
    </div>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/wash.jpg'} width={500} height={200} alt={'mango'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Body Wash</h2>
      <div className='flex gap-3 justify-center'>
      <h2 className='text-center font-bold text-lg'>$6.98</h2>
      <h2 className="text-center font-bold text-lg line-through text-gray-500">$7.99</h2>
      </div>
      <Dialog>
      <DialogTrigger asChild>
      <Button variant="outline" className='text-primary hover:text-white hover:bg-primary'>Add to cart</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>

          <div className="grid grid-cols-1 md:grid-cols-2 p-7 bg-white text-black">
      <Image
        src={'/wash.jpg'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Body Wash</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Refreshing body wash for daily use.
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">$6.98</h2>
          <h2 className="text-center font-bold text-3xl line-through text-gray-500">$7.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (500gram)</h2>
        <div className="flex flex-col items-baseline gap-3">
          <div className='flex gap-3 items-center'>
            <div className="p-2 border flex gap-10 items-center px-5">
              <button className="text-2xl" disabled={count === 1} onClick={decrementCount}>-</button>
              <h1 className="text-2xl">{count}</h1>
              <button className="text-2xl" onClick={incrementCount}>+</button>
            </div>
            <h2>=${(count * 6.98).toFixed(2)}</h2>
          </div>
          
          <Button className="flex gap-3">
            <ShoppingBasket />
            Add to cart
          </Button>
        </div>
        <h2><span className='font-bold'>Category:</span> Body Wash</h2>
      </div>
    </div>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/conditioner.jpg'} width={500} height={200} alt={'orange'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Hair Conditioner</h2>
      <div className='flex gap-3 justify-center'>
      <h2 className='text-center font-bold text-lg'>$7.49</h2>
      <h2 className='text-center font-bold text-lg line-through text-gray-500'>$8.99</h2>
      </div>
      <Dialog>
      <DialogTrigger asChild>
      <Button variant="outline" className='text-primary hover:text-white hover:bg-primary'>Add to cart</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>

          <div className="grid grid-cols-1 md:grid-cols-2 p-7 bg-white text-black">
      <Image
        src={'/conditioner.jpg'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Hair Conditioner</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Nourishing conditioner for soft, manageable hair.
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">7.49</h2>
          <h2 className="text-center font-bold text-3xl line-through text-gray-500">$8.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (500gram)</h2>
        <div className="flex flex-col items-baseline gap-3">
          <div className='flex gap-3 items-center'>
            <div className="p-2 border flex gap-10 items-center px-5">
              <button className="text-2xl" disabled={count === 1} onClick={decrementCount}>-</button>
              <h1 className="text-2xl">{count}</h1>
              <button className="text-2xl" onClick={incrementCount}>+</button>
            </div>
            <h2>=${(count * 7.49).toFixed(2)}</h2>
          </div>
          
          <Button className="flex gap-3">
            <ShoppingBasket />
            Add to cart
          </Button>
        </div>
        <h2><span className='font-bold'>Category:</span> Hair Conditioner</h2>
      </div>
    </div>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/balm.jpg'} width={500} height={200} alt={'mango-juice'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Lip Balm</h2>
      <div className='flex gap-3 justify-center'>
      <h2 className='text-center font-bold text-lg'>$6.99</h2>
      <h2 className='text-center font-bold text-lg line-through text-gray-500'>$7.99</h2>
      </div>
      <Dialog>
      <DialogTrigger asChild>
      <Button variant="outline" className='text-primary hover:text-white hover:bg-primary'>Add to cart</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>

          <div className="grid grid-cols-1 md:grid-cols-2 p-7 bg-white text-black">
      <Image
        src={'/balm.jpg'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Lip Balm</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Moisturizing lip balm with SPF protection.
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">6.99</h2>
          <h2 className="text-center font-bold text-3xl line-through text-gray-500">$7.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (500gram)</h2>
        <div className="flex flex-col items-baseline gap-3">
          <div className='flex gap-3 items-center'>
            <div className="p-2 border flex gap-10 items-center px-5">
              <button className="text-2xl" disabled={count === 1} onClick={decrementCount}>-</button>
              <h1 className="text-2xl">{count}</h1>
              <button className="text-2xl" onClick={incrementCount}>+</button>
            </div>
            <h2>=${(count * 6.99).toFixed(2)}</h2>
          </div>
          
          <Button className="flex gap-3">
            <ShoppingBasket />
            Add to cart
          </Button>
        </div>
        <h2><span className='font-bold'>Category:</span> Lip Balm</h2>
      </div>
    </div>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/sunscreen.jpg'} width={500} height={200} alt={'mango'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Sunscreen SPF 50</h2>
      <div className='flex gap-3 justify-center'>
      <h2 className='text-center font-bold text-lg'>$13.49</h2>
      <h2 className='text-center font-bold text-lg line-through text-gray-500'>$15.99</h2>
      </div>
      
      <Dialog>
      <DialogTrigger asChild>
      <Button variant="outline" className='text-primary hover:text-white hover:bg-primary'>Add to cart</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>


          <div className="grid grid-cols-1 md:grid-cols-2 p-7 bg-white text-black">
      <Image
        src={'/sunscreen.jpg'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Sunscreen SPF 50</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Broad-spectrum protection against UVA and UVB rays.
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">13.49</h2>
          <h2 className="text-center font-bold text-3xl line-through text-gray-500">$15.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (500gram)</h2>
        <div className="flex flex-col items-baseline gap-3">
          <div className='flex gap-3 items-center'>
            <div className="p-2 border flex gap-10 items-center px-5">
              <button className="text-2xl" disabled={count === 1} onClick={decrementCount}>-</button>
              <h1 className="text-2xl">{count}</h1>
              <button className="text-2xl" onClick={incrementCount}>+</button>
            </div>
            <h2>=${(count * 13.49).toFixed(2)}</h2>
          </div>
          
          <Button className="flex gap-3">
            <ShoppingBasket />
            Add to cart
          </Button>
        </div>
        <h2><span className='font-bold'>Category:</span> Sunscreen SPF 50</h2>
      </div>
    </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>

      </div>
      </div>
    </div>
    </div>
    
    {/*bannar*/}
    <Image src={'/banner.png'} alt='banner' width={1000} height={300} className='w-full h-[400px] object-contain mb-5'/>
     {/*Footer*/}
     <div>
     <Footer/>
     </div>
    </>
  )
}

export default PersonalCare
