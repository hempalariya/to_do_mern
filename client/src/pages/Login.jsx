import React, { useState } from 'react'
import Button from '../components/Button'
import WrapCard from '../components/WrapCard'

const controllerClass = 'mb-3'
const labelClass = 'text-lg block'
const inputClass = 'border border-blue-400 w-100 text-lg p-1 rounded-md'

export default function Login() {

    const [cred, setCred] = useState({
        email:'',
        password:''
    })

    function handleChange(e){
        const {name, value} = e.target
        setCred({...cred, [name]: value})
    }

    async function handleLoginUser(e){
        e.preventDefault()
        const response = await fetch('http://localhost:8000/user/login', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cred)
        })
        const data = await response.json()
        console.log(data)

        // http://localhost:5173/register

    }

    console.log(cred)

  return (
    <WrapCard>
            <form onSubmit={handleLoginUser}>
                
                 <div className={controllerClass}>
                    <label htmlFor="email" className={labelClass}>Email</label>
                    <input type="email" id = 'email' name='email' onChange={handleChange} required className={inputClass}/>
                </div>
             
                <div className={controllerClass}>
                    <label htmlFor="password" className={labelClass}>Password</label>
                    <input type="password" id = 'password' name = 'password' onChange={handleChange} required className={inputClass}/>
                </div>
                <Button>Login</Button>
            </form>
        </WrapCard>
  )
}
