import React, { useState, useEffect } from 'react'
import './Home.css'
import carousel0 from '../../Images/carousel0.jpg'
import carousel1 from '../../Images/carousel1.jpg'
import carousel2 from '../../Images/carousel2.jpg'
import carousel3 from '../../Images/carousel3.jpg'

function Home() {
  const [carouselIndex, setCarouselIndex] = useState(3);
  const CarouselImage = [carousel0, carousel1, carousel2, carousel3];
  // setInterval(() => {
  //   changeCarasoleIndex();
  // }, 2000);
  // const changeCarasoleIndex = () => {
  //   setCarouselIndex(carouselIndex === CarouselImage.length - 1 ? 0 : carouselIndex + 1);
  // }
  // useEffect(() => {
  //   const changeCarasoleIndex = () => {
  //     setCarasoleIndex(carasoleIndex === CarasoleImage.length - 1 ? 0 : carasoleIndex + 1);
  //     setTime(new Date());
  //   }
  //   return () => {
  //     changeCarasoleIndex();
  //   };
  // }, [time]);
  return (
    <div className='page-container' >
      <div className='welcome-page' style={{ backgroundImage: `url(${CarouselImage[carouselIndex]})` }}>
        {/* <p>Fashion - Paradise</p> */}
      </div>
      <div className='search-section'>
        <div className='select-section'>
          <div className='select-section-button' >Men</div >
          <div className='select-section-button'>Women</div >
          <div className='select-section-button'>Boys</div >
          <div className='select-section-button'>Girls</div >
          <div className='select-section-button'>Kids</div >
        </div>
        <input type='text' placeholder='Search...' />
      </div>
    </div>
  )
}

export default Home
