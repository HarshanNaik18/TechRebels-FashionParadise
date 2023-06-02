import React, { useState, useEffect } from 'react'
import './DressDisplay.css'
import { db } from '../../Firebase/Firebase'
import { collection, addDoc } from 'firebase/firestore';
import { auth } from '../../Firebase/Firebase';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// function DressDisplay({ open, onClose, product }) {
function DressDisplay() {
    const [product, setProducts] = useState(
        {
            name: '',
            brand: '',
            rating: 0,
            noOfRatings: 0,
            price: 0,
            off: 0,
            gender: '',
            categoty: '',
            season: '',
            loc: '',
            size: [],
            color: [],
            images: []
        }
    );

    const [displayImg, setDisplayImg] = useState(product.images[0]);
    // if (!open) return null;

    const addToCart = async (e) => {
        e.preventDefault();
        const collectionRef = collection(db, "cart");
        await addDoc(collectionRef, {
            user: auth.currentUser.uid,
            name: product.name,
            brand: product.brand,
            rating: product.rating,
            noOfRatings: product.noOfRatings,
            price: product.price,
            off: product.off,
            gender: product.gender,
            categoty: product.categoty,
            season: product.season,
            loc: product.loc,
            size: product.size,
            color: product.color,
            images: product.images,
            instructions: product.instructions
        }).then(() => toast.success("Added to cart"))
            .catch((e) => {
                console.log(e);
                toast.error("Error while adding to cart")
            });

    }


    const addToFav = async (e) => {
        e.preventDefault();
        const collectionRef = collection(db, "fav");
        await addDoc(collectionRef, {
            user: auth.currentUser.uid,
            name: product.name,
            brand: product.brand,
            rating: product.rating,
            noOfRatings: product.noOfRatings,
            price: product.price,
            off: product.off,
            gender: product.gender,
            categoty: product.categoty,
            season: product.season,
            loc: product.loc,
            size: product.size,
            color: product.color,
            images: product.images,
            instructions: product.instructions
        })
            .then(() => toast.success("Added to cart"))
            .catch((e) => {
                console.log(e);
                toast.error("Error while adding to cart");
            })
    }
    useEffect(() => {
        const getProductData = () => {
            const Arr = JSON.parse(sessionStorage.getItem("Display-Product"));
            setProducts(Arr);
            console.log(product);
            console.log(Arr);
        }
        return () => {
            getProductData();
        };
        //eslint-disable-next-line
    }, []);


    return (
        <div className='overlay-wrapper' >
            {/* <button onClick={onClose}>Click</button> */}
            <div className='wrapper-container'>
                <div className='wrapper-img-container'>
                    <div className='wrapper-img-array-container' >
                        {
                            product.images && product.images.map((pic) => (
                                <img src={pic} onClick={() => setDisplayImg(pic)} alt="" />
                            ))
                        }
                    </div>
                    <img src={displayImg} alt='' />
                </div>
                <div className='wrapper-card-info-container'>
                    <div className='wrapper-card-info-header'>
                        <label style={{ fontSize: '1.5rem', fontWeight: '800' }} >Brand : {product.brand.toUpperCase()}</label>
                        {/* <i class="fa fa-times" aria-hidden="true" style={{ marginRight: '1rem', fontWeight: 'bold', fontSize: '2rem', color: 'red' }} onClick={onClose}></i> */}
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
                            {
                                product.size && product.size.map((size) => (
                                    <>&nbsp;&nbsp;{size.toUpperCase()}</>
                                ))
                            }
                        </label>
                        <label style={{ display: 'flex', gap: '10px', fontSize: '1.2rem', fontWeight: '600', color: "grey" }}>
                            <label>color :</label>
                            {
                                product.color && product.color.map((color) => (
                                    <>&nbsp;&nbsp;{color.toUpperCase()}</>
                                ))
                            }
                        </label>
                        <label style={{ color: 'grey', fontSize: '1.3rem', fontWeight: '700' }}>Details :</label>
                        <ul style={{ fontSize: '0.8rem', fontWeight: '100' }}>
                            {
                                product.instructions && product.instructions.map((instructions) => (
                                    <li>{instructions}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', zIndex: '1' }}  >
                        <div className='card-icons' style={{ backgroundColor: '#fb641b', color: 'white' }}
                         onClick={addToFav}
                        >
                            <label>Book Mark</label>
                            <i class="fa fa-heart-o" aria-hidden="true" ></i>
                        </div>
                        <a className='card-icons' style={{ backgroundColor: '#ff7f00', color: 'white', textDecoration: "none" }} href='' >
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
            <ToastContainer />
        </div>
    )
}

export default DressDisplay
