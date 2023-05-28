import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Home.css'
import carousel0 from '../../Images/carousel0.jpg'
import carousel1 from '../../Images/carousel1.jpg'
import carousel2 from '../../Images/carousel2.jpg'
import carousel3 from '../../Images/carousel3.jpg'

function Home() {
  const CarouselImage = [carousel0, carousel1, carousel2, carousel3];

  return (
    <div className='page-container' >
      <Carousel
        ssr
        autoPlay
        infinteLoop={true}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        showThumbs={false}
        interval={3000}
      >
        {
          CarouselImage.map((url) => (
            <div>
              <img src={url} alt='' />
            </div>
          ))
        }
      </Carousel>
      <div className='text-banner-title'>
        DEALS OF THE DAY
      </div>
    </div>
  )
}

export default Home
