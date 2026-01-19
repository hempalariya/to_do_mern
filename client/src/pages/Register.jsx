import React, { useState } from 'react'
import Button from '../components/Button'
import WrapCard from '../components/WrapCard'

const controllerClass = 'mb-3'
const labelClass = 'text-lg block'
const inputClass = 'border border-blue-400 w-100 text-lg p-1 rounded-md'


export default function Register() {
    const [user, setUser] = useState({
        fullname: '',
        email: '',
        number: '',
        password: ''
    }) 

    const handleChange = (e) => {
        const {name, value} = e.target
        setUser({...user, [name]: value})
    }


  return (
    <WrapCard>
        <form action="">
            <div className={controllerClass}>
                <label htmlFor="fullname" className={labelClass}>Full Name</label>
                <input type="text" id = 'fullname' name='fullname' onChange={handleChange} required className={inputClass}/>
            </div>
             <div className={controllerClass}>
                <label htmlFor="email" className={labelClass}>Email</label>
                <input type="email" id = 'email' name='email' onChange={handleChange} required className={inputClass}/>
            </div>
            <div className={controllerClass}>
                <label htmlFor="number" className={labelClass}>Number</label>
                <input type="text" id = 'number' name='number' onChange={handleChange} required className={inputClass}/>
            </div>
            <div className={controllerClass}>
                <label htmlFor="password" className={labelClass}>Password</label>
                <input type="password" id = 'password' name='password' onChange={handleChange} required className={inputClass}/>
            </div>
            <Button>Register</Button>
        </form>
    </WrapCard>
  )
}
