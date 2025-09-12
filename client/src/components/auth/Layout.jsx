import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex h-screen w-screen bg-green-500' >
      <div className='flex items-center justify-center bg-black text-white w-1/2 h-full'>
        <h1>Hi Welcome to DesiStore</h1>
      </div>

      
        <Outlet/>
      
    </div>
  )
}

export default Layout
