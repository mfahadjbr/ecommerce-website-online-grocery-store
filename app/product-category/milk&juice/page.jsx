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

function MilkJuice() {
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
    <h1 className='p-4 bg-primary text-white font-bold text-3xl text-center'>Milk & Juice</h1>
    <div className='p-7'>
    <div className='mt-5'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer hover:shadow-md transition-all ease-in-out '>
      <Image src={'/milk1.png'} width={500} height={200} alt={'carrot'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Whole Milk (1Ltr)</h2>
      <div className='flex gap-3 justify-center'>
      <h2 className='text-center font-bold text-lg'>$2.99</h2>
      <h2 className='text-center font-bold text-lg line-through text-gray-500'>$3.99</h2>
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
        src={'/milk1.png'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Whole Milk (1Ltr)</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Fresh, creamy whole milk from local dairy farms.
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">$2.99</h2>
          <h2 className="text-center font-bold text-3xl line-through text-gray-500">$3.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (1Ltr)</h2>
        <div className="flex flex-col items-baseline gap-3">
          <div className='flex gap-3 items-center'>
            <div className="p-2 border flex gap-10 items-center px-5">
              <button className="text-2xl" disabled={count === 1} onClick={decrementCount}>-</button>
              <h1 className="text-2xl">{count}</h1>
              <button className="text-2xl" onClick={incrementCount}>+</button>
            </div>
            <h2>=${(count * 2.99).toFixed(2)}</h2>
          </div>
          
          <Button className="flex gap-3">
            <ShoppingBasket />
            Add to cart
          </Button>
        </div>
        <h2><span className='font-bold'>Category:</span> Whole Milk</h2>
      </div>
    </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/mango-maza-juice.png'} width={500} height={200} alt={'cauliflower'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Mango Maza Juice</h2>
      <div className='flex gap-3 justify-center'>
      <h2 className='text-center font-bold text-lg'>$6.99</h2>
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
        src={'/mango-maza-juice.png'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Mango Maza Juice</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Delicious and refreshing Mango Maza Juice, packed with rich, tropical mango flavor.
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">$6.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (1 Ltr)</h2>
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
        <h2><span className='font-bold'>Category:</span> Mango Maza Juice</h2>
      </div>
    </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/milk2.jpg'} width={500} height={200} alt={'cilantro'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Almond Milk (1Ltr)</h2>
      <div className='flex gap-3 justify-center'>
      <h2 className='text-center font-bold text-lg'>$3.49</h2>
      <h2 className="text-center font-bold text-lg line-through text-gray-500">$3.99</h2>
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
        src={'/milk2.jpg'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Almond Milk (1Ltr)</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Creamy, dairy-free almond milk, perfect for smoothies and cereal.
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">$3.49</h2>
          <h2 className="text-center font-bold text-lg line-through text-gray-500">$3.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (1Ltr)</h2>
        <div className="flex flex-col items-baseline gap-3">
          <div className='flex gap-3 items-center'>
            <div className="p-2 border flex gap-10 items-center px-5">
              <button className="text-2xl" disabled={count === 1} onClick={decrementCount}>-</button>
              <h1 className="text-2xl">{count}</h1>
              <button className="text-2xl" onClick={incrementCount}>+</button>
            </div>
            <h2>=${(count * 3.49).toFixed(2)}</h2>
          </div>
          
          <Button className="flex gap-3">
            <ShoppingBasket />
            Add to cart
          </Button>
        </div>
        <h2><span className='font-bold'>Category:</span> Almond Milk</h2>
      </div>
    </div>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/apple1.jpg'} width={500} height={200} alt={'fresh'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Apple Juice (1Ltr)</h2>
      <div className='flex gap-3 justify-center'>
      <h2 className='text-center font-bold text-lg'>$1.99</h2>
      <h2 className="text-center font-bold text-lg line-through text-gray-500">$2.99</h2>
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
        src={'/apple1.jpg'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Apple Juice (1Ltr)</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Crisp and refreshing apple juice made from fresh-pressed apples.
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">$1.99</h2>
          <h2 className="text-center font-bold text-lg line-through text-gray-500">$2.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (1Ltr)</h2>
        <div className="flex flex-col items-baseline gap-3">
          <div className='flex gap-3 items-center'>
            <div className="p-2 border flex gap-10 items-center px-5">
              <button className="text-2xl" disabled={count === 1} onClick={decrementCount}>-</button>
              <h1 className="text-2xl">{count}</h1>
              <button className="text-2xl" onClick={incrementCount}>+</button>
            </div>
            <h2>=${(count * 1.99).toFixed(2)}</h2>
          </div>
          
          <Button className="flex gap-3">
            <ShoppingBasket />
            Add to cart
          </Button>
        </div>
        <h2><span className='font-bold'>Category:</span> Apple Juice</h2>
      </div>
    </div>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/milk4.jpg'} width={500} height={200} alt={'mango'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Chocolate Milk (1Ltr)</h2>
      <div className='flex gap-3 justify-center'>
      <h2 className='text-center font-bold text-lg'>$2.98</h2>
      <h2 className="text-center font-bold text-lg line-through text-gray-500">$3.99</h2>
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
        src={'/milk4.jpg'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Chocolate Milk (1Ltr)</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Delicious chocolate-flavored milk, a perfect treat.
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">$2.98</h2>
          <h2 className="text-center font-bold text-lg line-through text-gray-500">$3.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (1Ltr)</h2>
        <div className="flex flex-col items-baseline gap-3">
          <div className='flex gap-3 items-center'>
            <div className="p-2 border flex gap-10 items-center px-5">
              <button className="text-2xl" disabled={count === 1} onClick={decrementCount}>-</button>
              <h1 className="text-2xl">{count}</h1>
              <button className="text-2xl" onClick={incrementCount}>+</button>
            </div>
            <h2>=${(count * 2.98).toFixed(2)}</h2>
          </div>
          
          <Button className="flex gap-3">
            <ShoppingBasket />
            Add to cart
          </Button>
        </div>
        <h2><span className='font-bold'>Category:</span> Chocolate Milk</h2>
      </div>
    </div>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/water.jpg'} width={500} height={200} alt={'orange'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Coconut Water (1Ltr)</h2>
      <div className='flex gap-3 justify-center'>
      <h2 className='text-center font-bold text-lg'>$2.49</h2>
      <h2 className='text-center font-bold text-lg line-through text-gray-500'>$2.99</h2>
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
        src={'/water.jpg'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Coconut Water (1Ltr)</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Refreshing and hydrating coconut water, rich in electrolytes.
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">2.49</h2>
          <h2 className="text-center font-bold text-3xl line-through text-gray-500">$2.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (1Ltr)</h2>
        <div className="flex flex-col items-baseline gap-3">
          <div className='flex gap-3 items-center'>
            <div className="p-2 border flex gap-10 items-center px-5">
              <button className="text-2xl" disabled={count === 1} onClick={decrementCount}>-</button>
              <h1 className="text-2xl">{count}</h1>
              <button className="text-2xl" onClick={incrementCount}>+</button>
            </div>
            <h2>=${(count * 2.49).toFixed(2)}</h2>
          </div>
          
          <Button className="flex gap-3">
            <ShoppingBasket />
            Add to cart
          </Button>
        </div>
        <h2><span className='font-bold'>Category:</span> Coconut Water</h2>
      </div>
    </div>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/juice1.jpg'} width={500} height={200} alt={'mango-juice'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Cranberry Juice (1Ltr)</h2>
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
        src={'/juice1.jpg'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Cranberry Juice (1Ltr)</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Tart and refreshing cranberry juice, rich in antioxidants.
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">6.99</h2>
          <h2 className="text-center font-bold text-3xl line-through text-gray-500">$7.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (1Ltr)</h2>
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
        <h2><span className='font-bold'>Category:</span> Cranberry Juice</h2>
      </div>
    </div>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/milk5.jpg'} width={500} height={200} alt={'mango'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Soy Milk (1Ltr)</h2>
      <div className='flex gap-3 justify-center'>
      <h2 className='text-center font-bold text-lg'>$4.49</h2>
      <h2 className='text-center font-bold text-lg line-through text-gray-500'>$4.99</h2>
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
        src={'/milk5.jpg'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Soy Milk (1Ltr)</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Plant-based soy milk, fortified with vitamins and minerals.
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">4.49</h2>
          <h2 className="text-center font-bold text-3xl line-through text-gray-500">$4.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (1Ltr)</h2>
        <div className="flex flex-col items-baseline gap-3">
          <div className='flex gap-3 items-center'>
            <div className="p-2 border flex gap-10 items-center px-5">
              <button className="text-2xl" disabled={count === 1} onClick={decrementCount}>-</button>
              <h1 className="text-2xl">{count}</h1>
              <button className="text-2xl" onClick={incrementCount}>+</button>
            </div>
            <h2>=${(count * 4.49).toFixed(2)}</h2>
          </div>
          
          <Button className="flex gap-3">
            <ShoppingBasket />
            Add to cart
          </Button>
        </div>
        <h2><span className='font-bold'>Category:</span> Soy Milk</h2>
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

export default MilkJuice
