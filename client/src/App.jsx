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
import ShopLayout from './components/shopping-view/ShopLayout'
import NotFound from './pages/NotFound'
import ShopAccount from './pages/shopping-view/ShopAccount'
import ShopCheckout from './pages/shopping-view/ShopCheckout'
import ShopHome from './pages/shopping-view/ShopHome'
import Shoplisting from './pages/shopping-view/Shoplisting'

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

      <Route path='/shop' element={<ShopLayout/>} >
            <Route path='account' element={<ShopAccount/>} />
            <Route path="checkout" element={<ShopCheckout/>}/>
            <Route path='home' element={<ShopHome/>} />
            <Route path="listing" element={<Shoplisting/>}/>
      </Route>

      <Route path="*" element={<NotFound/>} />


    </Routes>
      
  </div>
  )
}

export default App
