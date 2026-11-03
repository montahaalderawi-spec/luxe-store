import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './page/Home/Home';
import About from './page/About/About';
import Products from './page/Products/Products';
import Dashboard from './page/Dashboard/Dashboard';
import Login from './page/Login/Login';


const AppRouter = () => {
  return (
  <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/About" element={<About/>}/>
     <Route path="/Products" element={<Products/>}/>
     <Route path="/Dashboard" element={<Dashboard/>}/>
     <Route path="/Login" element={<Login/>}/>
     <Route path="/dashboard" element={<Dashboard />} /> 

  </Routes>
  )
}

export default AppRouter