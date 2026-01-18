import React from 'react'
import NavButton from './NavButton'

export default function Nav() {
  return (
    <nav className='flex justify-between'>
       <NavButton>Register</NavButton> 
       <NavButton>Login</NavButton>
    </nav>
  )
}

