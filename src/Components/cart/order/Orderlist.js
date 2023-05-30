import React from 'react'
 import { orderproducts } from '../data';
import Order from './order';

const Orderlist = () => {
  const arr =[1,2,3,4,5,6,7,8,9,10];
  return (
    <div className='order-box'>
      
      {orderproducts.map((item) => (
        <Order item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Orderlist;
