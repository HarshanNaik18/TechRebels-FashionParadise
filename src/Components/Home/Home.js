import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
import './Home.css'
// import carousel from '../../Images/carousel.jpg';
import carousel0 from '../../Images/carousel0.jpg'
import carousel1 from '../../Images/carousel1.jpg'
import carousel2 from '../../Images/carousel2.jpg'
import carousel3 from '../../Images/carousel3.jpg'
import Products from '../Recomendation/recomendation';

function Home() {
  const CarouselImage = [carousel0, carousel1, carousel2, carousel3];
  const navigate = useNavigate();
  return (
    <div className='page-container' >
      <Carousel
        autoPlay={true}
        infinteLoop={true}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        showThumbs={false}
        interval={3000}
      >
        {
          CarouselImage.map((url) => (
            <div onClick={() => navigate('/explore')} >
              <img src={url} alt='' />
            </div>
          ))
        }
      </Carousel>
      <Products />
    </div>
  )
}

export default Home
