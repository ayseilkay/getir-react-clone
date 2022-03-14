import React from 'react'

function Title({children}) {
  return (
    <h3 className='font-semibold text-sm px-6 md-px-0'>
        {children}
    </h3>
  )
}

export default Title