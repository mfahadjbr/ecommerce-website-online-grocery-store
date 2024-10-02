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
function Bakery() {
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
    <h1 className='p-4 bg-primary text-white font-bold text-3xl text-center'>Bakery</h1>
    <div className='p-7'>
    <div className='mt-5'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer hover:shadow-md transition-all ease-in-out '>
      <Image src={'/croissant.png'} width={500} height={200} alt={'carrot'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Croissant</h2>
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
        src={'/croissant.png'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Croissant</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Buttery, flaky pastry perfect for breakfast
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">$2.49</h2>
          <h2 className="text-center font-bold text-3xl line-through text-gray-500">$2.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (1pc)</h2>
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
        <h2><span className='font-bold'>Category:</span> Crossiant</h2>
      </div>
    </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/beguette.png'} width={500} height={200} alt={'cauliflower'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Baguette</h2>
      <div className='flex gap-3 justify-center'>
      <h2 className='text-center font-bold text-lg'>$3.49</h2>
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
        src={'/beguette.png'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Baguette</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Traditional French bread with a crispy crust
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">$3.49</h2>
          <h2 className="text-center font-bold text-3xl line-through text-gray-500">$3.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (1pc)</h2>
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
        <h2><span className='font-bold'>Category:</span> Baguette</h2>
      </div>
    </div>


          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/chocolate.png'} width={500} height={200} alt={'cilantro'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Chocolate Chip Cookie</h2>
      <div className='flex gap-3 justify-center'>
      <h2 className='text-center font-bold text-lg'>$1.49</h2>
      <h2 className='text-center font-bold text-lg line-through text-gray-500'>$1.99</h2>
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
        src={'/chocolate.png'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Chocolate Chip Cookie</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Classic sweet treat with chunks of chocolate
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">$1.49</h2>
          <h2 className="text-center font-bold text-3xl line-through text-gray-500">$1.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (1pc)</h2>
        <div className="flex flex-col items-baseline gap-3">
          <div className='flex gap-3 items-center'>
            <div className="p-2 border flex gap-10 items-center px-5">
              <button className="text-2xl" disabled={count === 1} onClick={decrementCount}>-</button>
              <h1 className="text-2xl">{count}</h1>
              <button className="text-2xl" onClick={incrementCount}>+</button>
            </div>
            <h2>=${(count * 1.49).toFixed(2)}</h2>
          </div>
          
          <Button className="flex gap-3">
            <ShoppingBasket />
            Add to cart
          </Button>
        </div>
        <h2><span className='font-bold'>Category:</span> Chocolate Chip Cookie</h2>
      </div>
    </div>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/sourdough.png'} width={500} height={200} alt={'fresh'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Sourdough Bread</h2>
      <div className='flex gap-3 justify-center'>
      <h2 className='text-center font-bold text-lg'>$4.99</h2>
      <h2 className='text-center font-bold text-lg line-through text-gray-500'>$5.99</h2>
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
        src={'/sourdough.png'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Sourdough Bread</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Artisanal bread with a tangy flavor
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">4.99</h2>
          <h2 className="text-center font-bold text-3xl line-through text-gray-500">$5.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (1pc)</h2>
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
        <h2><span className='font-bold'>Category:</span> Sourdough Bread</h2>
      </div>
    </div>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/cinnamon.png'} width={500} height={200} alt={'mango'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Cinnamon Roll</h2>
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
        src={'/cinnamon.png'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Cinnamon Roll</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Sweet and spicy pastry with cream cheese frosting
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">2.99</h2>
          <h2 className="text-center font-bold text-3xl line-through text-gray-500">$3.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (1pc)</h2>
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
        <h2><span className='font-bold'>Category:</span> Cinnamon Roll</h2>
      </div>
    </div>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/blueberry.png'} width={500} height={200} alt={'orange'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Blueberry Muffin</h2>
      <div className='flex gap-3 justify-center'>
      <h2 className='text-center font-bold text-lg'>$2.94</h2>
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
        src={'/blueberry.png'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Blueberry Muffin</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Moist muffin packed with juicy blueberries
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">2.49</h2>
          <h2 className="text-center font-bold text-3xl line-through text-gray-500">$2.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (1pc)</h2>
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
        <h2><span className='font-bold'>Category:</span> Blueberry Muffin</h2>
      </div>
    </div>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/bagel.png'} width={500} height={200} alt={'mango-juice'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Bagel</h2>
      <div className='flex gap-3 justify-center'>
      <h2 className='text-center font-bold text-lg'>$1.49</h2>
      <h2 className='text-center font-bold text-lg line-through text-gray-500'>$1.99</h2>
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
        src={'/bagel.png'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Bagel</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Chewy round bread, perfect when toasted
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">1.49</h2>
          <h2 className="text-center font-bold text-3xl line-through text-gray-500">$1.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (1pc)</h2>
        <div className="flex flex-col items-baseline gap-3">
          <div className='flex gap-3 items-center'>
            <div className="p-2 border flex gap-10 items-center px-5">
              <button className="text-2xl" disabled={count === 1} onClick={decrementCount}>-</button>
              <h1 className="text-2xl">{count}</h1>
              <button className="text-2xl" onClick={incrementCount}>+</button>
            </div>
            <h2>=${(count * 1.49).toFixed(2)}</h2>
          </div>
          
          <Button className="flex gap-3">
            <ShoppingBasket />
            Add to cart
          </Button>
        </div>
        <h2><span className='font-bold'>Category:</span> Bagel</h2>
      </div>
    </div>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/eclair.png'} width={500} height={200} alt={'mango'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Eclair</h2>
      <div className='flex gap-3 justify-center'>
      <h2 className='text-center font-bold text-lg'>$3.98</h2>
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
        src={'/eclair.png'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Eclair</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Delicate pastry filled with cream and topped with chocolate
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">3.98</h2>
          <h2 className="text-center font-bold text-3xl line-through text-gray-500">$4.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (1pc)</h2>
        <div className="flex flex-col items-baseline gap-3">
          <div className='flex gap-3 items-center'>
            <div className="p-2 border flex gap-10 items-center px-5">
              <button className="text-2xl" disabled={count === 1} onClick={decrementCount}>-</button>
              <h1 className="text-2xl">{count}</h1>
              <button className="text-2xl" onClick={incrementCount}>+</button>
            </div>
            <h2>=${(count * 3.98).toFixed(2)}</h2>
          </div>
          
          <Button className="flex gap-3">
            <ShoppingBasket />
            Add to cart
          </Button>
        </div>
        <h2><span className='font-bold'>Category:</span> Eclair</h2>
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

export default Bakery
