import React from 'react'
import {FiPlus} from 'react-icons/fi'
function Product({product:{id,title,image,alt,price}}) {
  return (
    <div className='bg-white flex flex-col items-center text-center gap-y-1 p-3 relative'>
        <div className=''>
        <button className='absolute top-2 right-8 w-12 h-12 rounded-lg border border-gray-200 flex items-center justify-center text-primary-brand-color drop-shadow-md bg-white transition-colors  hover:border-brand-color'><FiPlus size={16}/></button>
        </div>
        <img src={image} alt={title}/>
        <div className='font-semibold text-sm text-brand-color'>{'₺'}{price}</div>
        <div className='text-color-black font-semibold'>{title}</div>
        <div className='text-sm text-color-gray tracking-tight'>{alt}</div>
    </div>
  )
}

export default Product
