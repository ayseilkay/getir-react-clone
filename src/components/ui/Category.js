import React from 'react'

function Category({category:{id,title,image}}) {
  return (
    <a href='#' className='flex flex-col items-center gap-y-2 group text-center p-4 text-gray-800 transition hover:bg-purple-light'>
        <img src={image} alt={title} className='w-12 h-12 rounded-lg border border-gray-200'/>
        <span className='font-semibold text-sm tracking-tight whitespace-nowrap text-gray-700 group-hover:text-primary-brand-color '>{title}</span>
    </a>
  )
}

export default Category