import React from 'react'
import { Link } from 'react-router-dom'

export default function NavButton({to, children, className}) {
  return (
    <button className={` bg-orange-500 rounded-full px-3 py-1 text-blue-50 font-bold ${className}`}>
        <Link to={to}>{children}</Link>
    </button>
  )
}
