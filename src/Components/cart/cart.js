import React from 'react';
import { cartProducts } from './data';

import Basket from './basket';
import styled from 'styled-components';
import './basket.css'
const Cartbg = styled.div`
background-color:lightgrey;
`
const Cart = () => {
  return (
    <Cartbg>
      <div className="title">
        <p>Your shopping basket</p>
      </div>
      {cartProducts.map((item) => (
        <Basket item={item} key={item.id} />
      ))}

    </Cartbg>
  )

}

export default Cart;

