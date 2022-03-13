import React from 'react'

function Card({card:{id,image,title,description}}) {
  return (
    <div className='bg-white p-14 rounded-lg shadow-md flex flex-col items-center justify-center text-center'>
        <img className='w-[150px] h-[150px] mb-6'  src={image}/>
        <h6 className='font-semibold text-primary-brand-color text-x18'>{title}</h6>
        <p className='mt-2 text-xl5 text-gray-500'>{description}</p>
    </div>
  )
}

export default Card