import React from 'react'

import './order.css';

const Order = ({ item }) => {
  return (
    <div className="wardrobe-product-cart">
      <div className="wardrobe-product-img-container">
        <img src={item.img} alt="" />
      </div>
      <div className="product_info">
        <p className="product_title">
          {item.info }
      
          </p>

        <div className="product_rating">
          <label>
              <i class="fa fa-star" aria-hidden="true" style={{color:'rgb(192,192,192)'}} ></i>
              <i class="fa fa-star" aria-hidden="true"  style={{color:'rgb(192,192,192)'}} ></i>
              <i class="fa fa-star" aria-hidden="true"  style={{color:'rgb(192,192,192)'}} ></i>
              <i class="fa fa-star" aria-hidden="true"  style={{color:'rgb(192,192,192)'}} ></i>
              <i class="fa fa-star" aria-hidden="true"  style={{color:'rgb(192,192,192)'}} ></i>
          </label>
        </div>
        <p className="product_price">
          {item.offer}
        </p>
        <p className="size">
          <h3>Size : {item.size}</h3>
        </p>
        <p className="color">
          <h3> Color : {item.Color}</h3>
        </p>
        <p className="quantity">
          Items selected: {item.quantity}
        </p>

       

      </div>

      <p className='delivery'>
        delivered
       </p>
    </div>


  )

}

export default Order;
