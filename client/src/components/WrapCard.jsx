import React from 'react'

export default function WrapCard({children}) {
  return (
    <div className='flex h-full justify-center items-center'>
        {children}
    </div>
  )
}
