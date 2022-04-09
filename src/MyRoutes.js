import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './Pages/Cart'
import Home from './Pages/Home'


const MyRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            
        </Routes>
    </Router>
  )
}

export default MyRoutes