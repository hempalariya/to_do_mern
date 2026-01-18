import React from 'react'
import Nav from './Nav'

export default function Header() {
  return (
    <div className='h-15 flex items-center justify-between bg-blue-400 px-5'>
      <div>Logo</div>
      <Nav/>
    </div>
  )
}
