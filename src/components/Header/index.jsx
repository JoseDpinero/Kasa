import React from 'react'
import {  NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
margin: 40px 100px 0 100px;
`


function Header() {
  return (
    <HeaderWrapper>
      <NavLink to='/' >
      <img src={logo} alt="logo" />
      </NavLink>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-active' : null}>Home</NavLink>
        <NavLink to="/About" className={({ isActive }) => isActive ? 'nav-active':null}>A Propos</NavLink>
      </nav>
    </HeaderWrapper>
  )
}

export default Header
