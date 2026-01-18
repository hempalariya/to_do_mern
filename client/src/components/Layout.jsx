import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <main className='h-full'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}
