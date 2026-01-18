import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'

const controllerClass = 'mb-3'
const labelClass = 'text-lg block'
const inputClass = 'border border-blue-400 w-100 text-lg p-1 rounded-md'


export default function Register() {
  return (
    <Card>
        <form action="">
            <div className={controllerClass}>
                <label htmlFor="fullname" className={labelClass}>Full Name</label>
                <input type="text" id = 'fullname' required className={inputClass}/>
            </div>
             <div className={controllerClass}>
                <label htmlFor="email" className={labelClass}>Email</label>
                <input type="email" id = 'email' required className={inputClass}/>
            </div>
            <div className={controllerClass}>
                <label htmlFor="number" className={labelClass}>Number</label>
                <input type="text" id = 'number' required className={inputClass}/>
            </div>
            <div className={controllerClass}>
                <label htmlFor="email" className={labelClass}>Email</label>
                <input type="email" id = 'email' required className={inputClass}/>
            </div>
            <div className={controllerClass}>
                <label htmlFor="password" className={labelClass}>Password</label>
                <input type="password" id = 'password' required className={inputClass}/>
            </div>
            <Button>Register</Button>
        </form>
    </Card>
  )
}
