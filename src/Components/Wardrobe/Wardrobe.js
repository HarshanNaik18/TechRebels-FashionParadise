import React from 'react'
import './Wardrobe.css'
import Orderlist from '../cart/order/Orderlist'

function FavCard() {
  return (
    <div className='explore-section-card-container'>
      <div className='explore-section-card-image'>
        <img src='https://m.media-amazon.com/images/I/41WbpBOdPIL._AC_UL600_FMwebp_QL65_.jpg' alt='' />
      </div>
      <div className='explore-section-card-info'>
        <label style={{ fontWeight: '800', color: '#3e4152', fontSize: '1rem' }} >
          Name
        </label>
        <label style={{ fontWeight: '800', fontSize: '1.1rem' }}>
          <i class="fa fa-inr" aria-hidden="true" style={{ fontWeight: '800', fontSize: '0.75rem' }}></i>
          500 &emsp;
          <label style={{ fontSize: '0.8rem', color: 'green' }} >
            30% off
          </label>
        </label>
        <label style={{ fontSize: '0.9rem', fontWeight: '800' }}>
          <label style={{ fontWeight: '800', color: '#3e4152', fontSize: '.75rem' }}>
            Size :
          </label>
          &nbsp;S,&nbsp; M,&nbsp; L,&nbsp;XL
        </label>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', zIndex: '1' }}  >
          {/* <div className='card-icons' style={{ backgroundColor: '#fb641b', color: 'white' }} >
            <label>Book Mark</label>
            <i class="fa fa-heart-o" aria-hidden="true" ></i>
          </div> */}
          <a className='card-icons' style={{ backgroundColor: '#ff7f00', color: 'white', width:'40%' }} href='http://localhost:3001/' >
            <label>AR View</label>
            <i class="fa fa-street-view" aria-hidden="true" ></i>
          </a>
          <div className='card-icons' style={{ backgroundColor: '#ff9f00', color: 'white', width:'40%' }} >
            <label>Add to Cart</label>
            <i class="fa fa-shopping-cart" aria-hidden="true" ></i>
          </div>
        </div>
      </div>
    </div>
  )
}


function Wardrobe() {
  const a = [1, 2, 3, 4, 5, 6, 7, 8,9,];
  return (
    <div className='wardrobe-container'>
      wardrobe
    </div>
  )
}

export default Wardrobe
