import React from 'react'

function Menu({title,items}) {
  return (
    <section>
       <nav className='grid gap-y-4'>
       <h6 className='text-primary-brand-color font-normal text-lg flex'>
                {title}
        </h6>
        <nav>
            <ul className='grid gap-y-2'>
                {items.map((item,index)=><li key={index}>
                    <a href="#" className='text-sm hover:text-brand-color'>
                    {item.title}
                    </a>
                </li>)}
            </ul>
        </nav>
       </nav>
    </section>
  )
}

export default Menu