import React from 'react'
import ProductItem from './ProductItem';
export default function ProductList() {
  return (
    <div className='mt-5'>
      <h2 className='text-2xl text-green-600 font-bold mb-5'>Our Popular Products</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        <ProductItem/>
      </div>
    </div>
  )
}
