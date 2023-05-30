import React from "react";
import "./basket.css"
const Basket = ({ item }) => {
  return (

    <div className="product--cart">
      <div className="product-img-container">
        <img src={item.img} alt="" />
      </div>
      <div className="product_info">
        <p className="product_title">{item.info}</p>

        <div className="product_rating">
          <label>
            <i class="fa fa-star" aria-hidden="true" style={{ color: 'rgb(192,192,192)' }} ></i>
            <i class="fa fa-star" aria-hidden="true" style={{ color: 'rgb(192,192,192)' }} ></i>
            <i class="fa fa-star" aria-hidden="true" style={{ color: 'rgb(192,192,192)' }} ></i>
            <i class="fa fa-star" aria-hidden="true" style={{ color: 'rgb(192,192,192)' }} ></i>
            <i class="fa fa-star" aria-hidden="true" style={{ color: 'rgb(192,192,192)' }} ></i>
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

        <button style={{width:'200px', fontWeight:'500', border:'2px solid grey', borderRadius:'5px'}} >Remove from the Cart</button>
        <div className="finalrupee">
          <label>Price : </label>

          <label>({item.quantity} items) &#x20B9;{item.rupee}</label>
        </div>
      </div>


    </div>


  );
};

export default Basket;