import React, { useState } from 'react'
import './DressDisplay.css'


function DressDisplay({ open, onClose, data }) {
    const img = ["https://m.media-amazon.com/images/I/61VxZexOopL._UX679_.jpg", "https://m.media-amazon.com/images/I/6134ZYQDdRL._UX679_.jpg", "https://m.media-amazon.com/images/I/51pJ7pJX+xL._UX679_.jpg", "https://m.media-amazon.com/images/I/51LpmgFcC0L._UX679_.jpg", "https://m.media-amazon.com/images/I/514Teh0-U8L._UX679_.jpg",];
    const [displayImg, setDisplayImg] = useState(img[0]);
    if (!open) return null;
    return (
        <div className='overlay-wrapper' >
            {/* <button onClick={onClose}>Click</button> */}
            <div className='wrapper-container'>
                <div className='wrapper-img-container'>
                    <div className='wrapper-img-array-container' >
                        {
                            img.map((pic) => (
                                <img src={pic} onClick={() => setDisplayImg(pic)} alt="" />
                            ))
                        }
                    </div>
                    <img src={displayImg} alt='' />
                </div>
                <div className='wrapper-card-info-container'>
                    <div className='wrapper-card-info-header'>
                        <label style={{ fontSize: '1.5rem', fontWeight: '800' }} >Brand : Puma</label>
                        <i class="fa fa-times" aria-hidden="true" style={{ marginRight: '1rem', fontWeight: 'bold', fontSize: '2rem', color: 'red' }} onClick={onClose}></i>
                    </div>
                    <div className='wrapper-card-info-price-section'>
                        <label style={{ fontSize: '2rem', fontWeight: '800' }}>
                            <i class="fa fa-inr" aria-hidden="true" style={{ fontWeight: '800', fontSize: '0.75rem' }}></i>
                            1000
                            <label style={{ fontSize: '3rem', fontWeight: 'bolder', color: 'green', paddingLeft: '3rem' }} >25% off</label>
                        </label>
                        <label>(Inclusive of all taxes)</label>
                    </div>
                    <div className='wrapper-card-info-details'>
                        <p style={{ display: 'flex', gap: '10px', fontSize: '1.2rem', fontWeight: '600', color: "grey" }}>
                            <label>Size :</label>
                            <select>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>
                        </p>
                        <p style={{ display: 'flex', gap: '10px', fontSize: '1.2rem', fontWeight: '600', color: "grey" }}>
                            <label>color :</label>
                            <select>
                                <option>Black</option>
                                <option>White</option>
                                <option>Grey</option>
                                <option>Red</option>
                            </select>
                        </p>
                        <label style={{color:'grey', fontSize:'1.3rem',fontWeight:'700'}}>Details :</label>
                        <ul style={{fontSize:'1.1rem', fontWeight:'100'}}>
                            <li>Care Instructions: Machine Wash</li>
                            <li>Fit Type: Regular Fit</li>
                            <li>Style Name:-Tee</li>
                            <li>Model Name:-ESS Big Cat Heather Tee</li>
                            <li>Brand Color:-Puma Black Heather</li>
                            <li>Activity Group:-Basics</li>
                            <li>Care Instructions: Machine Wash</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DressDisplay
