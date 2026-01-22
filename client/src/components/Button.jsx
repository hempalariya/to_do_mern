import React from 'react'

export default function Button({children, className, onClick}) {
  return (
    <button className={`bg-orange-400 text-blue-50 font-bold text-lg rounded-sm py-1 px-3 ${className}`} onClick={onClick}>{children}</button>
  )
}
