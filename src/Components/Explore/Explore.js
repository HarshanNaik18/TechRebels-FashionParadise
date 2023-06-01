import React, { useState, useEffect } from 'react'
import './Explore.css'
import DressDisplay from '../DressDisplay/DressDisplay';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import { PoductsList } from '../../ProductData/ProductData';


function ClothCard({product}) {
    const navigate = useNavigate();

    return (
        <div className='explore-section-card-container'>
            <div className='explore-section-card-image'>
                <img src={product.images[0]} alt='' />
            </div>
            <div className='explore-section-card-info'>
                <label style={{ fontWeight: '800', color: '#3e4152', fontSize: '1rem' }} >
                    {product.name}
                </label>
                <label style={{ fontWeight: '800', fontSize: '1.1rem' }}>
                    <i class="fa fa-inr" aria-hidden="true" style={{ fontWeight: '800', fontSize: '0.75rem' }}></i>
                    {product.price} &emsp;
                    <label style={{ fontSize: '1.5rem', color: 'green', fontWeight:'1000' }} >
                    {product.off}% off
                    </label>
                </label>
                <label style={{ fontSize: '0.9rem', fontWeight: '800' }}>
                    <label style={{ fontWeight: '800', color: '#3e4152', fontSize: '.75rem' }}>
                        Size :
                    </label>
                    {
                        product.size.map((size)=>(
                            <>&nbsp;&nbsp;{size.toUpperCase()}</>
                        ))
                    }
                    {/* &nbsp;S,&nbsp; M,&nbsp; L,&nbsp;XL */}
                </label>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', zIndex:'1' }}  >
                    <div className='card-icons-one' style={{ backgroundColor: '#fb641b', color: 'white' }} >
                        <label>View in Detail</label>
                        <i class="" aria-hidden="true" ></i>
                    </div>
                    {/* <a className='card-icons' style={{ backgroundColor: '#ff7f00', color: 'white', textDecoration:"none" }} href='http://localhost:3001/' >
                        <label>AR View</label>
                        <i class="fa fa-street-view" aria-hidden="true" ></i>
                    </a>
                    <div className='card-icons' style={{ backgroundColor: '#ff9f00', color: 'white' }} onClick={addToCart} >
                        <label>Add to Cart</label>
                        <i class="fa fa-shopping-cart" aria-hidden="true" ></i>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

const slideBar = {
    display: 'flex',
    width: '0%',
    flex: '0',
}

function FilterSection({ clothesType, isClicked }) {
    return (
        <div className={isClicked ? { slideBar } : 'categoty-section'}>
            <div className='categoty-section-top' >
                <p>
                    Filter
                </p>
                <i class="fa fa-times" aria-hidden="true" />
            </div>
            <div className='filter-section'>
                <div className='filter-area'>
                    <label>Category</label>
                    <select >
                        <option value="">All</option>
                        {
                            clothesType.map((type) => (
                                <option value={type}>{type}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='filter-area'>
                    <label>Brand</label>
                    <select>
                        <option value="">All</option>
                        {
                            clothesType.map((type) => (
                                <option value={type}>{type}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='filter-area'>
                    <label>Price</label>
                    <select>
                        <option value="">All</option>
                        {
                            clothesType.map((type) => (
                                <option value={type}>{type}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='filter-area'>
                    <label>Colour</label>
                    <select>
                        <option value="">All</option>
                        {
                            clothesType.map((type) => (
                                <option value={type}>{type}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='filter-area'>
                    <label>Discounts</label>
                    <select>
                        <option value="">All</option>
                        {
                            clothesType.map((type) => (
                                <option value={type}>{type}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </div>
    );
}

function Explore() {
    const [isClicked, setIsClicked] = useState(false);
    const [openDressDisplay, setOpenDressDisplay] = useState(false);
    const [data, setData] = useState('');
    const [displayProductData, setDisplayProductData]=useState([]);

    const clothesType = ["WinterWear", "Topwear", "Bottomwear", "Raincoats", "Gowns", "Clothing Accessories", "Jumpsuits and Dungar", "Kurtas", "Ethnic Sets", "Fabrics", "Sarees", "Kids", "Lehenga Cholis", "Windcheaters", "Innerwear and Swimwear", "Tracksuits", "Blazers", "Waistcoats"];

    useEffect(() => {
        const getDisplayData = () =>{
            const dataList = [];
            PoductsList.map((data)=>(
                dataList.push(data)
            ));
            setDisplayProductData(dataList);
        }
      return () => {
        getDisplayData();
      };
    }, []);

    return (
        <div className='Exlopre-container' >
            <DressDisplay open={openDressDisplay} onClose={() => setOpenDressDisplay(false)} product={data} key={data.name} />
            <div className='search-section'>
                {/* <button onClick={() => setIsClicked(!isClicked)}>CLick</button> */}
                <div style={{ width: "5%", height: "0.5rem" }}></div>
                <ul className='select-section' >
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
                    {
                        displayProductData&&displayProductData.map((product, index) => (
                            <div onClick={() => {
                                setOpenDressDisplay(true);
                                setData(product);
                            }}>
                                <ClothCard product={product} key={index} />
                            </div>
                        ))
                    }

                </div>
                <FilterSection clothesType={clothesType} isClicked={isClicked} />
            </div>
        </div>
    )
}

export default Explore
