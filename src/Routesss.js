import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from './Blog'
import Homepage from './Homepage'
import Login from './Login'
import Register from './Register'

function Routesss() {
  return (
    <div>
        <Routes>
          <Route path='/' element = {<Homepage/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
    </div>
  )
}

export default Routesss