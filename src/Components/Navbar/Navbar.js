import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import './Navbar.css'

const Nav = styled.nav`
  width: calc(100% - 40px);
  height: 55px;
  background-color:#0F1111;
  color : white;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Fashion Paradise
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar