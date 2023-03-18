import React from 'react' 

import { Routes , Route , Navigate } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout'
import Singup from '../Pages/Singup'
import Discounts from '../Pages/Discounts'
import Product from '../Pages/Product'

const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to={"home"}/>} />
    <Route path='home' element={<Home/>} />
    <Route path='login' element={<Login/>} />
    <Route path='card' element={<Cart/>} />
    <Route path='checkout' element={<Checkout/>} />
    <Route path='signup' element={<Singup/>} />
    <Route path='discounts' element={<Discounts/>} />
    <Route path='discounts/:id' element={<Product/>}  />
    <Route path='*' element={"404 Not found"} />
  </Routes>
}

export default Routers