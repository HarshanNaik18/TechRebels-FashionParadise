import React from 'react'
import styled from "styled-components";

import { popularProducts } from "../cart/data";
import Product from "./product";
import "./recomendation.css";

const container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
 
`;

const Products = () => {
  return (
    <div className="container">
      <div className="title">
        <p>Deals of The Day...</p>
      </div>

      <div className="inner_container">
        {
          popularProducts.map((item) => (
            <Product item={item} key={item.id} />
          ))
        }
        {
          popularProducts.map((item) => (
            <Product item={item} key={item.id} />
          ))
        }
      </div>
    </div>


  );
};

export default Products;