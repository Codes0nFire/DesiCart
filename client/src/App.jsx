import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import { Route, Routes } from 'react-router-dom'
import Layout from './components/auth/Layout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'


import AdminLayout from './components/admin-view/AdminLayout'
import AdminDashboard from './pages/admin-view/AdminDashboard'
import AdminFeatures from './pages/admin-view/AdminFeatures'
import AdminOrders from './pages/admin-view/AdminOrders'
import AdminProducts from './pages/admin-view/AdminProducts'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='w-screen h-screen bg-green-400'>

  
    
    <Routes>

      <Route path="/auth"  element={<Layout/>}>
           <Route path='login' element={<Login/>} />
           <Route path="register" element={<Register/>}/>
      </Route>

      <Route path="/admin"  element={<AdminLayout/>}>
           <Route path='dashboard' element={<AdminDashboard/>} />
           <Route path="features" element={<AdminFeatures/>}/>
            <Route path='orders' element={<AdminOrders/>} />
           <Route path="products" element={<AdminProducts/>}/>
      </Route>


    </Routes>
      
  </div>
  )
}

export default App
