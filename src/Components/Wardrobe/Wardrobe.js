import React, { useState, useEffect } from 'react'
import './Wardrobe.css'
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, where } from 'firebase/firestore';
import { auth, db } from '../../Firebase/Firebase';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function FavCard({ product }) {

  const removeFromFav = async (e) => {
    e.preventDefault();
    const id = product.id;
    await deleteDoc(doc(db, "fav", id))
      .then(
        toast.error(product.name + " removed from favourites", {
          autoClose: 1000,
          pauseOnHover: false,
          closeOnClick: true
        })
      ).catch((err) => console.log(err));
  }

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
    }).then(() => {
      toast.success("Added to cart");
      console.log("done");
    })
      .catch((e) => {
        console.log(e);
        toast.error("Error while adding to cart")
      });

  }

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
            </label> : ''
        }
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', zIndex: '1' }}  >
          <div className='card-icons' style={{ backgroundColor: '#ff7f00', color: 'white', width: '30%', textDecoration: 'none' }}  >
            <label
              onClick={removeFromFav}
            >Romove From</label>
            <i class="fa fa-heart-o" aria-hidden="true" ></i>
          </div>
          <a className='card-icons' style={{ backgroundColor: '#ff7f00', color: 'white', width: '30%', textDecoration: 'none' }} href='http://localhost:3001/' >
            <label>AR View</label>
            <i class="fa fa-street-view" aria-hidden="true" ></i>
          </a>
          <div className='card-icons' style={{ backgroundColor: '#ff9f00', color: 'white', width: '30%' }} >
            <label
              onClick={addToCart}
            >Add to Cart</label>
            <i class="fa fa-shopping-cart" aria-hidden="true" ></i>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

function OrderDiv() {
  const [favdata, setFavData] = useState([]);
  useEffect(() => {
    const collectionRef = collection(db, "fav");
    const userid = auth.currentUser.uid;
    const q = query(collectionRef, where("user", "==", userid));
    const Fetchdata = onSnapshot(q, querySnapshot => {
      const data = [];
      querySnapshot.forEach(item => {
        data.push({ ...item.data(), id: item.id });
      });
      setFavData(data);
    });
    return () => {
      Fetchdata();
    }
    //eslint-disable-next-line
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center' }} >
      <h2 style={{ width: '100%', textAlign: 'center' }}>Favourites</h2>
      <div className='order-div-container'>
        {
          (favdata.length > 0) ?
            favdata && favdata.map((item, index) => (
              <FavCard product={item} key={index} />
            ))
            :
            <h4>No selected data found</h4>
        }
      </div>
    </div>
  )
}

function FavDiv() {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
  const [favdata, setFavData] = useState([]);
  useEffect(() => {
    const collectionRef = collection(db, "fav");
    const userid = auth.currentUser.uid;
    const q = query(collectionRef, where("user", "==", userid));
    const Fetchdata = onSnapshot(q, querySnapshot => {
      const data = [];
      querySnapshot.forEach(item => {
        data.push({ ...item.data(), id: item.id });
      });
      setFavData(data);
    });
    return () => {
      Fetchdata();
    }
    //eslint-disable-next-line
  }, []);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center' }} >
      <h2 style={{ width: '100%', textAlign: 'center' }}>Favourites</h2>
      <div className='order-div-container'>
        {
          (favdata.length > 0) ?
            favdata && favdata.map((item, index) => (
              <FavCard product={item} key={index} />
            ))
            :
            <h4>No selected data found</h4>
        }
      </div>
    </div>
  )
}

function RecomendationDiv() {
  return (
    <div>
      RecomendationDiv
    </div>
  )
}


function Wardrobe() {
  const [divIndex, setDivIndex] = useState(0);
  const divisionArray = [<OrderDiv />, <FavDiv />, <RecomendationDiv />]
  return (
    <div className='wardrobe-container'>
      <div className='wardrobe-top-container'>
        <label
          onClick={() => setDivIndex(1)}
        >
          Your Favourite
        </label>
        <label
          onClick={() => setDivIndex(0)}
        >
          Your Orders
        </label>
        <label
          onClick={() => setDivIndex(2)}
        >
          Recomendations
        </label>
      </div>
      {
        divisionArray[divIndex]
      }

    </div>
  )
}

export default Wardrobe
