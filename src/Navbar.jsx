import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <ul>
            <Link to='/home'>Home</Link>
            <br />
            <Link to='/about'>About</Link>
            <br />
            <Link to='/contact'>Contact</Link>
            <br />
            <Link to='/todo'>Todo App</Link>

        </ul>
    </div>
  )
}
