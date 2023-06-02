import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { auth, db } from '../../Firebase/Firebase';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Basket from './basket';

const MySwal = withReactContent(Swal);

const Cart = () => {
  const [cartData, setCartData] = useState([]);

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
      <div className="title">
        <p>Your shopping basket</p>
      </div>
      {cartData.length > 0 ? (
        cartData.map((item, index) => <Basket product={item} key={index} />)
      ) : (
        <h1 style={{ width: '100%', textAlign: 'center', background: 'white' }}>Cart is Empty</h1>
      )}
      <StripeCheckout
        token={payNow}
        stripeKey="pk_test_51Mb3okSIOkM9Vi78rdyJfqgdjOZdpQeuGnrb01ouB5AqlVAXfHejRAGJPSuvLy4Om92d03jrkuVPnHpLdDz0pZqI00RZaw8hKe" // Replace with your Stripe publishable key
        name="Fashion Paradise" // Replace with your website name
        amount={cartData.reduce((total, item) => total + item.price, 0) * 100}
        currency="INR"
        billingAddress={false}
        shippingAddress={false}
      >
        <button className="pay-button">Pay Now</button>
      </StripeCheckout>
    </>
  );
};

export default Cart;
