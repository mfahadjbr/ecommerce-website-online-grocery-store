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

function Fruits() {
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
    <h1 className='p-4 bg-primary text-white font-bold text-3xl text-center'>Fresh Fruits</h1>
    <div className='p-7'>
    <div className='mt-5'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer hover:shadow-md transition-all ease-in-out '>
      <Image src={'/strawberries.jpg'} width={500} height={200} alt={'carrot'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Fresh Strawberries (1kg)</h2>
      <div className='flex gap-3 justify-center'>
      <h2 className='text-center font-bold text-lg'>$3.99</h2>
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
        src={'/strawberries.jpg'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Fresh Strawberries (1kg)</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Sweet and juicy strawberries, perfect for snacking or desserts.
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">$3.99</h2>
          <h2 className="text-center font-bold text-3xl line-through text-gray-500">$4.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (1kg)</h2>
        <div className="flex flex-col items-baseline gap-3">
          <div className='flex gap-3 items-center'>
            <div className="p-2 border flex gap-10 items-center px-5">
              <button className="text-2xl" disabled={count === 1} onClick={decrementCount}>-</button>
              <h1 className="text-2xl">{count}</h1>
              <button className="text-2xl" onClick={incrementCount}>+</button>
            </div>
            <h2>=${(count * 3.99).toFixed(2)}</h2>
          </div>
          
          <Button className="flex gap-3">
            <ShoppingBasket />
            Add to cart
          </Button>
        </div>
        <h2><span className='font-bold'>Category:</span> Fresh Strawberries</h2>
      </div>
    </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/bananas.jpg'} width={500} height={200} alt={'cauliflower'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Ripe Bananas (12psc)</h2>
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
        src={'/bananas.jpg'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Ripe Bananas (12psc)</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Creamy and nutritious bananas, great for smoothies or baking.
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">$1.49</h2>
          <h2 className="text-center font-bold text-3xl line-through text-gray-500">$1.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (12psc)</h2>
        <div className="flex flex-col items-baseline gap-3">
          <div className='flex gap-3 items-center'>
            <div className="p-2 border flex gap-10 items-center px-5">
              <button className="text-2xl" disabled={count === 1} onClick={decrementCount}>-</button>
              <h1 className="text-2xl">{count}</h1>
              <button className="text-2xl" onClick={incrementCount}>+</button>
            </div>
            <h2>=${(count * 1.49)}</h2>
          </div>
          
          <Button className="flex gap-3">
            <ShoppingBasket />
            Add to cart
          </Button>
        </div>
        <h2><span className='font-bold'>Category:</span> Ripe Bananas</h2>
      </div>
    </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/orange.png'} width={500} height={200} alt={'cilantro'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Fresh Orange (6psc)</h2>
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
        src={'/orange.png'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Fresh Orange (6psc)</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Zesty and refreshing fresh oranges, rich in vitamin C, with a tangy and sweet flavor.
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">$3.49</h2>
          <h2 className="text-center font-bold text-lg line-through text-gray-500">$3.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (6 psc)</h2>
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
        <h2><span className='font-bold'>Category:</span> Fresh Orange</h2>
      </div>
    </div>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/mango.png'} width={500} height={200} alt={'fresh'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Fresh Mango From Sindh (1kg)</h2>
      <div className='flex gap-3 justify-center'>
      <h2 className='text-center font-bold text-lg'>$8.99</h2>
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
        src={'/mango.png'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Fresh Mango From Sindh</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Sweet and juicy fresh Sindh mangoes, bursting with tropical flavor and aroma.
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">$8.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (1kg)</h2>
        <div className="flex flex-col items-baseline gap-3">
          <div className='flex gap-3 items-center'>
            <div className="p-2 border flex gap-10 items-center px-5">
              <button className="text-2xl" disabled={count === 1} onClick={decrementCount}>-</button>
              <h1 className="text-2xl">{count}</h1>
              <button className="text-2xl" onClick={incrementCount}>+</button>
            </div>
            <h2>=${(count * 8.99).toFixed(2)}</h2>
          </div>
          
          <Button className="flex gap-3">
            <ShoppingBasket />
            Add to cart
          </Button>
        </div>
        <h2><span className='font-bold'>Category:</span> Fresh Mango From Sindh</h2>
      </div>
    </div>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/pineapple.png'} width={500} height={200} alt={'mango'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Pineapple Queen 1 pc</h2>
      <div className='flex gap-3 justify-center'>
      <h2 className='text-center font-bold text-lg'>$2.98</h2>
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
        src={'/pineapple.png'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Pineapple Queen</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Sweet and tangy Pineapple Queen, offering a refreshing burst of tropical flavor.
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">$2.98</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (1pc)</h2>
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
        <h2><span className='font-bold'>Category:</span> Pineapple Queen</h2>
      </div>
    </div>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/apple.jpg'} width={500} height={200} alt={'orange'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Red Apples (1kg)</h2>
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
        src={'/apple.jpg'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Red Apples (1kg)</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Crisp and sweet apples, perfect for snacking or baking.
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">2.49</h2>
          <h2 className="text-center font-bold text-3xl line-through text-gray-500">$2.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (1kg)</h2>
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
        <h2><span className='font-bold'>Category:</span> Red Apples</h2>
      </div>
    </div>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/grapes.jpg'} width={500} height={200} alt={'mango-juice'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Red Grapes (1kg)</h2>
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
        src={'/grapes.jpg'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Red Grapes (1kg)</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Sweet and seedless grapes, perfect for snacking or fruit salads.
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">6.99</h2>
          <h2 className="text-center font-bold text-3xl line-through text-gray-500">$7.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (1kg)</h2>
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
        <h2><span className='font-bold'>Category:</span> Red Grapes</h2>
      </div>
    </div>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/peaches.jpg'} width={500} height={200} alt={'mango'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Juicy Peaches (1kg)</h2>
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
        src={'/peaches.jpg'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Juicy Peaches (1kg)</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Sweet and aromatic peaches, great for pies or eating fresh.
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">4.49</h2>
          <h2 className="text-center font-bold text-3xl line-through text-gray-500">$4.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (1kg)</h2>
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
        <h2><span className='font-bold'>Category:</span> Juicy Peaches</h2>
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

export default Fruits
