import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css section/Navbar.css'

export default function Navbar() {
  return (
    <nav>
       <NavLink to={'/'}>Home</NavLink>
       <NavLink to={'/userlist'}>Users</NavLink>
       <NavLink to={'/mailbox'}>Mail</NavLink>
    </nav>
  )
}
