import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Button from '../components/Button'
import WrapCard from '../components/WrapCard'
import Input from '../components/Input'


export default function Register() {
    const [user, setUser] = useState({
        fullName: '',
        email: '',
        number: '',
        password: ''
    }) 
    const navigate = useNavigate()
    

    const handleChange = (e) => {
        const {name, value} = e.target
        setUser({...user, [name]: value})
    }

    async function handleRegisterUser(e){
        e.preventDefault()
        const response = await fetch('http://localhost:8000/user/register', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const data = await response.json()
        console.log(data)
        localStorage.setItem('user', JSON.stringify(data))
        navigate('/dashboard')
    }
    console.log(user)


  return (
    <WrapCard>
        <form onSubmit={handleRegisterUser}>
            <Input onChange={handleChange} label={'Full Name'} labelFor={'fullname'} id={'fullname'} name={'fullname'} type={'fullname'}/>
            <Input onChange={handleChange} label={'Email'} labelFor={'email'} id={'email'} name={'email'} type={'email'}/>
            <Input onChange={handleChange} label={'Number'} labelFor={'number'} id={'number'} name={'number'} type={'text'}/> 
            <Input onChange={handleChange} label={'Password'} labelFor={'password'} id={'password'} name={'password'} type={'password'}/>
            
            <Button>Register</Button>
        </form>
    </WrapCard>
  )
}
