import React from "react";
import styled from "styled-components";


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Containers = styled.div`
  flex: 1;
  margin: 2px;
  min-width: 400px;
  height: 550px;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
// const Offer=styled.div`
// color:blue;
// `;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
// const Name = styled.div`
// display:flex;
// flex:flex-wrap;
// position: bottom;
// align-items:baseline;
// `;

const Product = ({ item }) => {
  var rate = [false,false,false,false,false];
  for(var i=0;i<5;i++){
    if(item.rating >= (i+1)){
      rate[i]=true;
    }
  }
  return (
    <Containers>
      <Circle />
      <Image src={item.images[0]} />
      <Info>
        <Icon>
          {/* <ShoppingCartOutlined /> */}
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        </Icon>
        <Icon>
          {/* <SearchOutlined /> */}
          <i class="fa fa-search" aria-hidden="true"></i>
        </Icon>
        <Icon>
          {/* <FavoriteBorderOutlined /> */}
          <i class="fa fa-heart-o" aria-hidden="true"></i>
        </Icon>
      </Info>

      <div className="details">
        <p>{item.name}</p>
      </div>
      <div className="Container">
        <label>
          <div className="Rating">
          <i class="fa fa-star" aria-hidden="true" style={{ color: `${ item.rating>=1?'#d4af37':'rgb(192,192,192)' }` }} ></i>
          <i class="fa fa-star" aria-hidden="true" style={{ color: `${ item.rating>=2?'#d4af37':'rgb(192,192,192)' }` }} ></i>
          <i class="fa fa-star" aria-hidden="true" style={{ color: `${ item.rating>=3?'#d4af37':'rgb(192,192,192)' }` }} ></i>
          <i class="fa fa-star" aria-hidden="true" style={{ color: `${ item.rating>=4?'#d4af37':'rgb(192,192,192)' }` }} ></i>
          <i class="fa fa-star" aria-hidden="true" style={{ color: `${ item.rating>=5?'#d4af37':'rgb(192,192,192)' }` }} ></i>
          </div>
        </label>
      </div>
      <div className="rupee">
        <p style={{ fontWeight: '1000', fontSize: '1rem' }} >&#x20B9;{item.price} &nbsp;&nbsp;&nbsp;<label style={{ fontSize: '1.5rem', fontWeight: '1000', color: 'green' }} >{item.off}%&nbsp;off</label></p>
      </div>
    </Containers>

  );
};

export default Product;