import React from 'react'
import NavButton from './NavButton'

export default function Nav() {
  return (
    <nav className='flex gap-5'>
       <NavButton to={'/register'}>Register</NavButton> 
       <NavButton to={'/login'}>Login</NavButton>
    </nav>
  )
}

