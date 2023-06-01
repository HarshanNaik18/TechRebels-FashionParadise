import React from 'react'
import { popularProducts } from "../cart/data";
import Product from "./product";
import "./recomendation.css";
import { PoductsList } from '../../ProductData/ProductData';

const Products = () => {
  return (
    <div className="container">
      <div className="title">
        <p>Deals of The Day...</p>
      </div>

      <div className="home-inner_container">
        {
          PoductsList.map((item) => (
            <Product item={item} key={item.id} />
          ))
        }
      </div>
    </div>


  );
};

export default Products;