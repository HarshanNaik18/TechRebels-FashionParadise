import React from "react";
import "./basket.css"
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Basket = ({ product }) => {

  const removeFromCart = async (e) => {
    e.preventDefault();
    const id = product.id;
    await deleteDoc(doc(db, "cart", id))
      .then(
        toast.error(product.name + " removed from cart", {
          autoClose: 1000,
          pauseOnHover: false,
          closeOnClick: true
        })
      ).catch((err) => console.log(err));
  }
  return (
    <div className="product--cart">
      <div className="product-img-container">
        <img src={product.images[0]} alt="" />
      </div>
      <div className="product_info">
        <p className="product_title">{product.name}</p>

        <div className="product_rating">
          <label>
            <i class="fa fa-star" aria-hidden="true" style={{ color: `${product.rating >= 1 ? '#d4af37' : 'rgb(192,192,192)'}` }} ></i>
            <i class="fa fa-star" aria-hidden="true" style={{ color: `${product.rating >= 2 ? '#d4af37' : 'rgb(192,192,192)'}` }} ></i>
            <i class="fa fa-star" aria-hidden="true" style={{ color: `${product.rating >= 3 ? '#d4af37' : 'rgb(192,192,192)'}` }} ></i>
            <i class="fa fa-star" aria-hidden="true" style={{ color: `${product.rating >= 4 ? '#d4af37' : 'rgb(192,192,192)'}` }} ></i>
            <i class="fa fa-star" aria-hidden="true" style={{ color: `${product.rating >= 5 ? '#d4af37' : 'rgb(192,192,192)'}` }} ></i>
            &nbsp;&nbsp;&nbsp;&nbsp;<label style={{ fontSize: '0.7rem', fontWeight: '1000' }} > ({product.noOfRatings}&nbsp;Ratings) </label>
          </label>
        </div>
        <p className="product_price" style={{ color: 'black', fontSize: '1rem', fontWeight: '700' }}>
          <i class="fa fa-inr" aria-hidden="true" style={{ fontWeight: '800', fontSize: '0.75rem' }}></i>
          &nbsp;{product.price}
        </p>
        <p className="size">
          <h3>Size :
            <select>
              {
                product.size.map((size) => (
                  <option value={size}>{size.toUpperCase()}</option>
                ))
              }
            </select>
          </h3>
        </p>
        <p className="color">
          <h3> Color :
            <select>
              {
                product.color.map((color ) => (
                  <option value={color}>{color.toUpperCase()}</option>
                ))
              }
            </select>
          </h3>
        </p>
        <p className="quantity">
          Items selected: 1
        </p>

        <button
          style={{ width: '200px', fontWeight: '500', border: '2px solid grey', borderRadius: '5px' }}
          onClick={removeFromCart}
        >
          Remove from the Cart
        </button>
        <div className="finalrupee">
          <label>Price : </label>
          <label>(1 items) &#x20B9;{product.price}</label>
        </div>
      </div>
      <ToastContainer />
    </div>


  );
};

export default Basket;