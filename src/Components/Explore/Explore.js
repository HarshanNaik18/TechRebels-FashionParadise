import React, { useState, useEffect } from 'react'
import './Explore.css'
import DressDisplay from '../DressDisplay/DressDisplay';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import { PoductsList } from '../../ProductData/ProductData';


function ClothCard({ product }) {

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
                    <label style={{ fontSize: '1.5rem', color: 'green', fontWeight: '1000' }} >
                        {product.off}% off
                    </label>
                </label>
                {
                    product.size.length > 0 ?
                        <label style={{ fontSize: '0.9rem', fontWeight: '800' }}>

                            <label style={{ fontWeight: '800', color: '#3e4152', fontSize: '.75rem' }}>
                                Size :
                            </label>
                            {
                                product.size.map((size) => (
                                    <>&nbsp;&nbsp;{size.toUpperCase()}</>
                                ))
                            }
                            {/* &nbsp;S,&nbsp; M,&nbsp; L,&nbsp;XL */}
                        </label> : 
                        <label style={{ fontSize: '0.9rem', fontWeight: '800', color:'white' }}>
                            Size :
                        <label style={{ fontWeight: '800', color: '#3e4152', fontSize: '.75rem' }}>
                        </label>
                    </label>
                }

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', zIndex: '1' }}  >
                    <div className='card-icons-one' >
                        <label>View in Detail</label>
                        <i class="" aria-hidden="true" ></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Explore() {
    const navigate = useNavigate();
    const [displayProductData, setDisplayProductData] = useState([]);

    const [sectionValue, setSectionValue] = useState('');
    const [categoryValue, setCategoryValue] = useState('');
    const [brandValue, setBrandValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [ratingValue, setRatingValue] = useState(0);
    const [search, setSearch] = useState('');

    const Category = ["Shirt", "Top", "Raincoats", "Kurta", "Ethnic wear", "Skirts","jeans", "sarees", "jump suits", "Windcheaters", "Trackpants", "jersey", "Waistcoats","shorts","casual","shoes","frock"];
    const brand = ['Puma', "Nike", "One8", "Levi's","Yash Gallery","Kanishka","Hopscotch","SWORNOF","jusball","nauti nati"];

    // const filterData = () => {
    //     console.log(sectionValue+categoryValue+brandValue+priceValue+ratingValue+search);
    // }

    useEffect(() => {
        const filterData = () => {
            const data = PoductsList.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) && item.brand.toLowerCase().includes(brandValue.toLowerCase()) && item.gender.toLowerCase().includes(categoryValue.toLowerCase()) && item.rating >= parseInt(ratingValue));
            setDisplayProductData(data);
            console.log(data);
            console.log(sectionValue + categoryValue + brandValue + priceValue + ratingValue + search);
        }
        return () => {
            filterData();
        }
    }, [sectionValue, categoryValue, brandValue, priceValue, ratingValue, search]);

    useEffect(() => {
        const getDisplayData = () => {
            const dataList = [];
            PoductsList.map((data) => (
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
            <div className='search-section'>
                <div className='filter-area'>
                    <label>Section</label>
                    <select
                        onChange={(e) => {
                            setSectionValue(e.target.value);
                            // filterData();
                        }}
                    >
                        <option value="">All</option>
                        <option value="male">Men</option>
                        <option value="female">Women</option>
                        <option value="boys">Boys</option>
                        <option value="girls">Girls</option>
                        <option value="kids">Kids</option>
                        <option value="sports">Sports</option>


                    </select>
                </div>
                <div className='filter-area'>
                    <label>Category</label>
                    <select
                        onChange={(e) => {
                            setCategoryValue(e.target.value);
                            // filterData();
                        }}
                    >
                        <option value="">All</option>
                        {
                            Category.map((type) => (
                                <option value={type}>{type}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='filter-area'>
                    <label>Brand</label>
                    <select onChange={(e) => {
                        setBrandValue(e.target.value);
                        // filterData();
                    }}
                    >
                        <option value="">All</option>
                        {
                            brand.map((type) => (
                                <option value={type}>{type}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='filter-area'>
                    <label>Price</label>
                    <select onChange={(e) => {
                        setPriceValue(e.target.value);
                        // filterData();
                    }}
                    >
                        <option value="">All</option>
                        {
                            Category.map((type) => (
                                <option value={type}>{type}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='filter-area'>
                    <label>Rating</label>
                    <select onChange={(e) => {
                        setRatingValue(e.target.value);
                        // filterData();
                    }}
                    >
                        <option value="0" >All</option>
                        <option value="2">Above 2</option>
                        <option value="3">Above 3</option>
                        <option value="4">Above 4</option>
                    </select>
                </div>
                <input type='text' placeholder='Search...'
                    onChange={(e) => {
                        setSearch(e.target.value);
                        // filterData();
                    }}
                />
            </div>
            <div className='display-section'>
                {
                    displayProductData && displayProductData.map((product, index) => (
                        <div onClick={() => {
                            // setOpenDressDisplay(true);
                            // setData(product);
                            sessionStorage.setItem("Display-Product", JSON.stringify(product));
                            navigate('/show_details');
                        }}>
                            <ClothCard product={product} key={index} />
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Explore
