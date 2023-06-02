import React, { useEffect, useState } from 'react';
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, where } from 'firebase/firestore';
import { auth, db } from '../../Firebase/Firebase';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Basket from './basket';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const MySwal = withReactContent(Swal);

const Cart = () => {
  const [cartData, setCartData] = useState([]);

  const Cartbg = styled.div`
  background-color:${cartData.length > 0 ? 'lightgrey' : 'white'};`
  const handleSuccess = () => {
    MySwal.fire({
      icon: 'success',
      title: 'Payment was successful',
      timer: 4000,
    });
  };

  const handleFailure = () => {
    MySwal.fire({
      icon: 'error',
      title: 'Payment was not successful',
      timer: 4000,
    });
  };



  const payNow = async (token) => {
    try {
      const response = await axios({
        url: 'YOUR_SERVER_ENDPOINT', // Replace with your server endpoint
        method: 'post',
        data: {
          amount: cartData.reduce((total, item) => total + item.price, 0) * 100,
          token,
        },
      });
      if (response.status === 200) {
        handleSuccess();
        cartData.forEach(async (product) => {
          const collectionRef = collection(db, "order");
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
            toast.success("Item purchased");
          })
            .catch((e) => {
              console.log(e);
              toast.error("Error while adding to cart")
            });
          const id = product.id;
          await deleteDoc(doc(db, "fav", id))
            .then(
              toast.error(product.name + " removed from favourites", {
                autoClose: 1000,
                pauseOnHover: false,
                closeOnClick: true
              })
            ).catch((err) => console.log(err));
        })
      }
    } catch (error) {
      handleFailure();
      console.log(error);
    }
  };

  useEffect(() => {
    const collectionRef = collection(db, 'cart');
    const userid = auth.currentUser.uid;
    const q = query(collectionRef, where('user', '==', userid));
    const Fetchdata = onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((item) => {
        data.push({ ...item.data(), id: item.id });
      });
      setCartData(data);
      console.log(data);
    });
    return () => {
      Fetchdata();
    };
  }, []);

  return (
    <>
      <Cartbg>
        <div className="title">
          <p>Your shopping basket</p>
        </div>
        {
          cartData.length > 0 ?
            cartData && cartData.map((item, index) => (
              <Basket product={item} key={index} />
            ))
            :
            <h1 style={{ width: '100%', textAlign: 'center', background: 'white' }} >Cart is Empty</h1>
        }
      </Cartbg>
      <div style={{display:'flex',width:'95%',justifyContent:'center', margin:'1rem'}} >
      {
        cartData.length > 0 ?
          <StripeCheckout
            token={payNow}
            stripeKey="pk_test_51Mb3okSIOkM9Vi78rdyJfqgdjOZdpQeuGnrb01ouB5AqlVAXfHejRAGJPSuvLy4Om92d03jrkuVPnHpLdDz0pZqI00RZaw8hKe" // Replace with your Stripe publishable key
            name="Fashion Paradise" // Replace with your website name
            amount={cartData.reduce((total, item) => total + item.price, 0) * 100}
            currency="INR"
            billingAddress={false}
            shippingAddress={false}
          >
            <button className="pay-button" style={{ width: '5rem', height: '2rem', background: 'orangered', color:'white',borderRadius:'10px' }} >Pay Now</button>
          </StripeCheckout>
          :
          ''
      }
      </div>
    </>
  );
};

export default Cart;
