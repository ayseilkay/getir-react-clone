import React, { useEffect, useState } from 'react'
import Title from './ui/Title'
import Products from 'api/products.json'
import Product from './ui/Product';

function Favorites() {

  const [products,setProduct]= useState([]);

  useEffect(()=>{
    setProduct(Products);
  },[])
  return (
    <div className='container mx-auto pt-8'> 
      <Title>Favoriler</Title>
      <div className='grid grid-cols-2 sm:grid-cols-4  2xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-5  gap-0.1  rounded-lg overflow-hidden'>
        {products.length && products.map((product,index)=>(
          <div>
            <Product key={index} product={product}/>
          </div>
        )
        )}
      </div>
    </div>
  )
}

export default Favorites