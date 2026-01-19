import React from 'react'
import Button from '../components/Button'
import WrapCard from '../components/WrapCard'

const controllerClass = 'mb-3'
const labelClass = 'text-lg block'
const inputClass = 'border border-blue-400 w-100 text-lg p-1 rounded-md'

export default function Login() {
  return (
    <WrapCard>
            <form action="">
                
                 <div className={controllerClass}>
                    <label htmlFor="email" className={labelClass}>Email</label>
                    <input type="email" id = 'email' required className={inputClass}/>
                </div>
             
                <div className={controllerClass}>
                    <label htmlFor="password" className={labelClass}>Password</label>
                    <input type="password" id = 'password' required className={inputClass}/>
                </div>
                <Button>Login</Button>
            </form>
        </WrapCard>
  )
}
