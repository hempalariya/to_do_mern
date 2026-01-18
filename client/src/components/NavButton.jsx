import React from 'react'
import { Link } from 'react-router-dom'

export default function NavButton({to, children, className}) {
  return (
    <button className={` bg-amber-50 rounded-b-lg p-2 ${className}`}>
        <Link to={to}>{children}</Link>
    </button>
  )
}
