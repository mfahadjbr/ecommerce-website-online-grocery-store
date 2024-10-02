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

function ChickenEgg() {
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
    <h1 className='p-4 bg-primary text-white font-bold text-3xl text-center'>Chicken & Eggs</h1>
    <div className='p-7'>
    <div className='mt-5'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer hover:shadow-md transition-all ease-in-out '>
      <Image src={'/egg.png'} width={500} height={200} alt={'carrot'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Free-Range Eggs (12psc)</h2>
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
        src={'/egg.png'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Free-Range Eggs</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Farm-fresh eggs from free-range chickens, rich in flavor and nutrition.
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">$4.49</h2>
          <h2 className="text-center font-bold text-3xl line-through text-gray-500">$4.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (12 psc)</h2>
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
        <h2><span className='font-bold'>Category:</span> Free-Range Eggs</h2>
      </div>
    </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/breast.png'} width={500} height={200} alt={'cauliflower'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Organic Chicken Breast (1kg)</h2>
      <div className='flex gap-3 justify-center'>
      <h2 className='text-center font-bold text-lg'>$8.99</h2>
      <h2 className='text-center font-bold text-lg line-through text-gray-500'>$9.99</h2>
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
        src={'/breast.png'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Organic Chicken Breast</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Tender, organic chicken breast, perfect for grilling or baking.
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">$8.99</h2>
          <h2 className="text-center font-bold text-3xl line-through text-gray-500">$9.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (1kg)</h2>
        <div className="flex flex-col items-baseline gap-3">
          <div className='flex gap-3 items-center'>
            <div className="p-2 border flex gap-10 items-center px-5">
              <button className="text-2xl" disabled={count === 1} onClick={decrementCount}>-</button>
              <h1 className="text-2xl">{count}</h1>
              <button className="text-2xl" onClick={incrementCount}>+</button>
            </div>
            <h2>=${(count * 8.99)}</h2>
          </div>
          
          <Button className="flex gap-3">
            <ShoppingBasket />
            Add to cart
          </Button>
        </div>
        <h2><span className='font-bold'>Category:</span> Organic Chicken Breast</h2>
      </div>
    </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/chicken1.png'} width={500} height={200} alt={'cilantro'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Whole Roasting Chicken (2kg)</h2>
      <div className='flex gap-3 justify-center'>
      <h2 className='text-center font-bold text-lg'>$11.49</h2>
      <h2 className="text-center font-bold text-lg line-through text-gray-500">$12.99</h2>
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
        src={'/chicken1.png'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Whole Roasting Chicken</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Plump, juicy whole chicken ideal for roasting or rotisserie.
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">$12.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (2kg)</h2>
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
        <h2><span className='font-bold'>Category:</span> Whole Roasting Chicken</h2>
      </div>
    </div>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/chicken2.jpg'} width={500} height={200} alt={'fresh'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Chicken Thighs (1kg)</h2>
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
        src={'/chicken2.jpg'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Chicken Thighs (1kg)</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Flavorful chicken thighs, great for slow cooking or grilling.
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
        <h2><span className='font-bold'>Category:</span> Chicken Thighs</h2>
      </div>
    </div>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/wings.jpg'} width={500} height={200} alt={'mango'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Chicken Wings (1kg)</h2>
      <div className='flex gap-3 justify-center'>
      <h2 className='text-center font-bold text-lg'>$7.99</h2>
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
        src={'/wings.jpg'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Chicken Wings (1kg)</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Crispy chicken wings, ideal for game day snacks or appetizers.
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">7.99</h2>
          <h2 className="text-center font-bold text-3xl line-through text-gray-500">$8.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (1kg)</h2>
        <div className="flex flex-col items-baseline gap-3">
          <div className='flex gap-3 items-center'>
            <div className="p-2 border flex gap-10 items-center px-5">
              <button className="text-2xl" disabled={count === 1} onClick={decrementCount}>-</button>
              <h1 className="text-2xl">{count}</h1>
              <button className="text-2xl" onClick={incrementCount}>+</button>
            </div>
            <h2>=${(count * 7.99).toFixed(2)}</h2>
          </div>
          
          <Button className="flex gap-3">
            <ShoppingBasket />
            Add to cart
          </Button>
        </div>
        <h2><span className='font-bold'>Category:</span> Chicken Wings</h2>
      </div>
    </div>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/quail.png'} width={500} height={200} alt={'orange'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Quail Eggs (12 pcs)</h2>
      <div className='flex gap-3 justify-center'>
      <h2 className='text-center font-bold text-lg'>$6.49</h2>
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
        src={'/quail.png'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Quail Eggs (12 psc)</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Delicate quail eggs, perfect for gourmet dishes and appetizers.
        </h2>
        <div className="flex gap-3">
          <h2 className="text-center font-bold text-3xl">6.49</h2>
          <h2 className="text-center font-bold text-3xl line-through text-gray-500">$7.99</h2>
        </div>
        <h2 className="font-medium text-lg">Quantity (12 psc)</h2>
        <div className="flex flex-col items-baseline gap-3">
          <div className='flex gap-3 items-center'>
            <div className="p-2 border flex gap-10 items-center px-5">
              <button className="text-2xl" disabled={count === 1} onClick={decrementCount}>-</button>
              <h1 className="text-2xl">{count}</h1>
              <button className="text-2xl" onClick={incrementCount}>+</button>
            </div>
            <h2>=${(count * 6.49).toFixed(2)}</h2>
          </div>
          
          <Button className="flex gap-3">
            <ShoppingBasket />
            Add to cart
          </Button>
        </div>
        <h2><span className='font-bold'>Category:</span> Quail Eggs</h2>
      </div>
    </div>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/ground.jpg'} width={500} height={200} alt={'mango-juice'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Ground Chicken</h2>
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
        src={'/ground.jpg'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Ground Chicken</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Lean ground chicken, versatile for burgers, meatballs, or tacos.
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
        <h2><span className='font-bold'>Category:</span> Ground Chicken</h2>
      </div>
    </div>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
      </div>

      <div className='p-2 md:p-6 flex flex-col item-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer  hover:shadow-md transition-all ease-in-out'>
      <Image src={'/leg.jpg'} width={500} height={200} alt={'mango'} className='h-[200px] w-[200px] mx-auto object-contain'/>
      <h2 className='text-center font-bold '>Chicken Legs (1kg)</h2>
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
        src={'/leg.jpg'}
        width={300}
        height={300}
        alt="carrot"
        className="bg-slate-200 p-5 h-[320px] w-[300px] object-contain rounded-lg"
      />
      <div className="pl-5 flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Chicken Legs (1kg)</h2>
        <h2 className="text-sm font-bold text-gray-400">
        Lean ground chicken, versatile for burgers, meatballs, or tacos.
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
        <h2><span className='font-bold'>Category:</span> Chicken Legs</h2>
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

export default ChickenEgg
