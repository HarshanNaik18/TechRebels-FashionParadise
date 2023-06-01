import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

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
  const [user, setUser]=useState(false);


  useEffect(() => {
    onAuthStateChanged(auth, curretUser => {
        if (curretUser) {
          setUser(true);
        }
    });
}, [user]);
  return (
    <Ul open={open}>
      <li onClick={()=>navigate('/')} >Home</li>
      <li onClick={()=>navigate('/explore')} >Explore</li>
      <li onClick={()=>navigate('/cart')} >Cart</li>
      <li onClick={()=>navigate('/wardrobe')} >Wardrobe</li>
      {
        !(user)?<li onClick={()=>navigate('/login')} >Login</li>:<li onClick={()=>{
          signOut(auth);
          toast.error("Logout");
          sessionStorage.removeItem("user");
          navigate('/');
        }} >Logout</li>
      }
      <ToastContainer/>
    </Ul>
  )
}

export default RightNav