import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import DashBoard from './pages/DashBoard'


export default function App() {
  return (
    <Routes>
      <Route path='/' element = {<Layout/>}>
        <Route index element = {<Home />}/>
        <Route path='/login' element = {<Login />}/>
        <Route path='/register' element = {<Register />}/>
        <Route path='/dashboard' element = {<DashBoard/>}/>
      </Route>
    </Routes>
  )
}
