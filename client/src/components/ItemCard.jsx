import React from 'react'

export default function ItemCard({children, className}) {
  return (
    <div className={`h-70 shadow-md rounded-md flex items-center justify-center text-gray-500 ${className}`}>
        {children}
    </div>
  )
}
