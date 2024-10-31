import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function Nav() {
  return (
    <nav>
          <Link to="/">
            <img src={logo} alt="logo"  /> 
          </Link>
        <ul>
        <li>
            <Link to="/">Dashboard </Link>
        </li>
        <li>
            <Link to="/markdown">Markdown </Link>
        </li>
        </ul>
    </nav>
  )
}

export default Nav