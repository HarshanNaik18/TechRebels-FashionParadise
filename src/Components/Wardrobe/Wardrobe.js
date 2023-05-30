import React from 'react'
import './Wardrobe.css'
import Orderlist from '../cart/order/Orderlist'

function Wardrobe() {
  return (
    <div className='wardrobe-container'>
      <div className='wardrobe-fav-container'>
      </div>
      <div className='wardrobe-ordered-container'>
        <label>Ordered</label>
        <Orderlist />
      </div>
    </div>
  )
}

export default Wardrobe
