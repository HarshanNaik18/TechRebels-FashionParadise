import React, { useState } from 'react'
import './Explore.css'
// import axios from 'axios';

// const options = {
//     method: 'GET',
//     url: 'https://kohls.p.rapidapi.com/categories/list',
//     headers: {
//         'X-RapidAPI-Key': '8e0781e248mshc3c3811e36f7cedp13f068jsneed813f35f7a',
//         'X-RapidAPI-Host': 'kohls.p.rapidapi.com'
//     }
// };

// const getData = async() => {
//     try {
//         const response = await axios.request(options);
//         console.log(response.data);
//         return response.data;
//     } catch (error) {
//         console.error(error);
//     }
// }

function ClothCard() {
    return (
        <div className='explore-section-card-container'>
            <div className='explore-section-card-image'>
                <img src='https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/r/n/n/xxl-sksh-rc-11ee-wh-protocol-original-image3hzzzbbjxju-bb.jpeg?q=70' alt='' />
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
                <label>

                <i class="fa fa-heart-o" aria-hidden="true"></i>
                </label>
            </div>
        </div>
    );
}

const slideBar = {
    width: '0%',
    flex: '0',
    display: 'none'
}

function Explore() {
    const [isClicked, setIsClicked] = useState(false);

    const clothesType = ["WinterWear", "Topwear", "Bottomwear", "Raincoats", "Gowns", "Clothing Accessories", "Jumpsuits and Dungar", "Kurtas", "Ethnic Sets", "Fabrics", "Sarees", "Kids", "Lehenga Cholis", "Windcheaters", "Innerwear and Swimwear", "Tracksuits", "Blazers", "Waistcoats"];
    return (
        <div className='Exlopre-container' >
            <div className='search-section'>
                <button onClick={() => setIsClicked(!isClicked)}>CLick</button>
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
                    {
                        clothesType.map((type) => (
                            <ClothCard />
                        ))
                    }

                </div>
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
            </div>
        </div>
    )
}

export default Explore
