import React from 'react'

export default function ItemCard({children, className, onClick}) {
  return (
    <div className={`h-70 shadow-md rounded-md flex items-center justify-center text-gray-500 ${className}`} onClick={onClick}>
        {children}
    </div>
  )
}
