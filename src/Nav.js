import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <div className='nav-div1'>
        <Link to="/" className='nav-link'>Home</Link>
        <Link to="/register" className='nav-link'>Register</Link>
        <Link to="/login" className='nav-link'>Login</Link>
    </div>
  )
}

export default Nav