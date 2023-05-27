import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='page-container' >
      <div className='welcome-page'>
        <p>Fashion - Paradise</p>
      </div>
      <div className='search-section'>
        <div className='select-section'>
          <div className='select-section-button' >Men</div >
          <div className='select-section-button'>Women</div >
          <div className='select-section-button'>Boys</div >
          <div className='select-section-button'>Girls</div >
          <div className='select-section-button'>Kids</div >
        </div>
        <input type='text' placeholder='Search...'/>
      </div>
    </div>
  )
}

export default Home
