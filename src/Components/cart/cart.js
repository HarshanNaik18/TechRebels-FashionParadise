import React, { useEffect, useState } from 'react';
import { cartProducts } from './data';

import Basket from './basket';
import styled from 'styled-components';
import './basket.css'
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { auth, db } from '../../Firebase/Firebase';
const Cartbg = styled.div`
background-color:lightgrey;
`


const Cart = () => {
  const [cartData, setCartData] = useState();
  useEffect(() => {
    const collectionRef = collection(db, "cart");
    const userid = auth.currentUser.uid;
    const q = query(collectionRef, where("user", "==", userid));
    const Fetchdata = onSnapshot(q, querySnapshot => {
      const data = [];
      querySnapshot.forEach(item => {
        data.push({ ...item.data(), id: item.id });
      });
      setCartData(data);
      console.log(data);
      // setDisplayProjects(data);
    });
    return () => {
      Fetchdata();
    }
    //eslint-disable-next-line
  }, []);
  return (
    <Cartbg>
      <div className="title">
        <p>Your shopping basket</p>
      </div>
      {
        cartData&&cartData.map((item, index) => (
          <Basket product={item} key={index} />
        ))
      }
      {/* {
        JSON.stringify(cartData)
      } */}
    </Cartbg>
  )

}

export default Cart;

