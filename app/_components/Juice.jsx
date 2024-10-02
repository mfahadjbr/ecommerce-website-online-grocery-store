"use client";  // Ensure the component is client-side for interactive features

import React, { useState } from 'react';
import Image from 'next/image';
import { ShoppingBasket } from 'lucide-react';
import { Button } from '@/components/ui/button';

function ProductItemDetail() {
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
  );
}

export default ProductItemDetail;
