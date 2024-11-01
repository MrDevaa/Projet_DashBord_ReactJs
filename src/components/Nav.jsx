import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

function nav() {
  return (
    <nav>
        <div>
          <Link to="/">
            <img src={logo} alt="logo"  /> 
          </Link>
        </div>
        <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/markdown" className={({ isActive }) => (isActive ? 'active' : '')}>Markdown</NavLink>
        </li>
        </ul>
    </nav>
  )
}

export default nav