import React from 'react'

function Title({children}) {
  return (
    <h3 className='font-semibold text-sm'>
        {children}
    </h3>
  )
}

export default Title