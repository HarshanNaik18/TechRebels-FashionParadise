import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  right:20px;
  flex-flow: row nowrap;
  li {
    padding: 18px 30px;
  }
  :hover{
    cursor:pointer;
    
  }
  @media (max-width: 950px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    z-index:990;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  const navigate = useNavigate();
  return (
    <Ul open={open}>
      <li onClick={()=>navigate('/')} >Home</li>
      <li onClick={()=>navigate('/explore')} >Explore</li>
      <li>AR Room</li>
      <li onClick={()=>navigate('/wardrobe')} >Wardrobe</li>
      <li>Login</li>
    </Ul>
  )
}

export default RightNav