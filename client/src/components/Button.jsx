import React from 'react'

export default function Button({children, className, onClick}) {
  return (
    <button className={`bg-orange-400 text-blue-50 font-bold text-lg rounded-full p-3 w-full ${className}`}>{children}</button>
  )
}
