import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './_header.scss'

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'nav__link nav__link-active' : 'nav__link'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) =>
            isActive ? 'nav__link nav__link-active' : 'nav__link'
          }
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
