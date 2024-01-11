import React from 'react'
import ProductCard from './components/ProductCard'
import { Suspense } from 'react';

const Products = () => {
  return (
    <Suspense fallback={

      console.log("Loading")


    }>

      <div>
        <ProductCard />
      </div>
    </Suspense>
  )
}

export default Products;
