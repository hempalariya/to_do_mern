import React from 'react'
import NavButton from './NavButton'
import Button from './Button'

export default function UserMenu({user, handleLogout}) {
    console.log(user)
  return (
    <div className='absolute top-10 right-0 w-40 shadow'>
        <h2>{user.fullName}</h2>
        <Button onClick = {handleLogout}>Logout</Button>
    </div>
  )
}
