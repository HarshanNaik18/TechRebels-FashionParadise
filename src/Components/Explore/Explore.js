import React from 'react'
import './Explore.css'

function Explore() {
    return (
        <div className='Exlopre-container' >
            <div className='search-section'>
                <div style={{ width: "5%", height: "0.5rem" }}></div>
                <ul className='select-section'>
                    <li className='select-section-button' >Men</li >
                    <li className='select-section-button'>Women</li >
                    <li className='select-section-button'>Sports</li >
                    {/* <li className='select-section-button'>Girls</li > */}
                    <li className='select-section-button'>Kids</li >
                </ul>
                <input type='text' placeholder='Search...' />
                <div style={{ width: "5%", height: "0.5rem" }}></div>
            </div>
            <div className='explore-section'>
                <div className='display-section'>
                    display
                </div>
                <div className='categoty-section'>
                    Filter
                </div>
            </div>
        </div>
    )
}

export default Explore
