import React, { useState } from 'react'
import './DressDisplay.css'
import { db } from '../../Firebase/Firebase'
import { collection, setDoc, doc } from 'firebase/firestore';
import { auth } from '../../Firebase/Firebase';


function DressDisplay({ open, onClose, product }) {
    const img = ["https://m.media-amazon.com/images/I/61VxZexOopL._UX679_.jpg", "https://m.media-amazon.com/images/I/6134ZYQDdRL._UX679_.jpg", "https://m.media-amazon.com/images/I/51pJ7pJX+xL._UX679_.jpg", "https://m.media-amazon.com/images/I/51LpmgFcC0L._UX679_.jpg", "https://m.media-amazon.com/images/I/514Teh0-U8L._UX679_.jpg",];
    const [displayImg, setDisplayImg] = useState("https://m.media-amazon.com/images/I/61VxZexOopL._UX679_.jpg");
    if (!open) return null;

    const addToCart = async(e) => {
        e.preventDefault();
        const collectionRef = collection(db, "cart");
        await setDoc(doc(collectionRef,"uid-"+product.name), {
            product:product
        });

        console.log(auth.uid);
    }


    return (
        <div className='overlay-wrapper' >
            {/* <button onClick={onClose}>Click</button> */}
            <div className='wrapper-container'>
                <div className='wrapper-img-container'>
                    <div className='wrapper-img-array-container' >
                        {
                            product.images.map((pic) => (
                                <img src={pic} onClick={() => setDisplayImg(pic)} alt="" />
                            ))
                        }
                    </div>
                    <img src={displayImg} alt='' />
                </div>
                <div className='wrapper-card-info-container'>
                    <div className='wrapper-card-info-header'>
                        <label style={{ fontSize: '1.5rem', fontWeight: '800' }} >Brand : {product.brand.toUpperCase()}</label>
                        <i class="fa fa-times" aria-hidden="true" style={{ marginRight: '1rem', fontWeight: 'bold', fontSize: '2rem', color: 'red' }} onClick={onClose}></i>
                    </div>
                    <div className='wrapper-card-info-price-section'>
                        <label style={{ fontSize: '2rem', fontWeight: '800' }}>
                            <i class="fa fa-inr" aria-hidden="true" style={{ fontWeight: '800', fontSize: '0.75rem' }}></i>
                            {product.price}
                            <label style={{ fontSize: '3rem', fontWeight: 'bolder', color: 'green', paddingLeft: '3rem' }} >
                                {product.off}% off
                            </label>
                        </label>
                        <label>(Inclusive of all taxes)</label>
                    </div>
                    <div className='wrapper-card-info-details'>
                        <label style={{ display: 'flex', gap: '10px', fontSize: '1.2rem', fontWeight: '600', color: "grey" }}>
                            <label>Size :</label>
                            <select>
                                {
                                    product.size.map((size) => (
                                        <option value={size}>{size.toUpperCase()}</option>
                                    ))
                                }
                            </select>
                        </label>
                        <label style={{ display: 'flex', gap: '10px', fontSize: '1.2rem', fontWeight: '600', color: "grey" }}>
                            <label>color :</label>
                            <select>
                                {
                                    product.color.map((color) => (
                                        <option value={color}>{color.toUpperCase()}</option>
                                    ))
                                }
                            </select>
                        </label>
                        <label style={{ color: 'grey', fontSize: '1.3rem', fontWeight: '700' }}>Details :</label>
                        <ul style={{ fontSize: '0.8rem', fontWeight: '100' }}>
                            {
                                product.instructions.map((instructions) => (
                                    <li>{instructions}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', zIndex: '1' }}  >
                        <div className='card-icons' style={{ backgroundColor: '#fb641b', color: 'white' }} >
                            <label>Book Mark</label>
                            <i class="fa fa-heart-o" aria-hidden="true" ></i>
                        </div>
                        <a className='card-icons' style={{ backgroundColor: '#ff7f00', color: 'white', textDecoration: "none" }} href='http://localhost:3001/' >
                            <label>AR View</label>
                            <i class="fa fa-street-view" aria-hidden="true" ></i>
                        </a>
                        <div className='card-icons' style={{ backgroundColor: '#ff9f00', color: 'white' }} onClick={addToCart} >
                            <label>Add to Cart</label>
                            <i class="fa fa-shopping-cart" aria-hidden="true" ></i>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DressDisplay
