import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Wardrobe from './Components/Wardrobe/Wardrobe';
import Explore from './Components/Explore/Explore';
import UsersLogin from './Components/LoginAndSignUp/UsersLogin';
import Signup from './Components/LoginAndSignUp/Signup';
import Footer from './Components/Footer/Footer';
import Cart from './Components/cart/cart'
import DressDisplay from './Components/DressDisplay/DressDisplay'

function App() {

  const CheckUser = ({ children }) => {
    const user = sessionStorage.getItem("user");
    return user ? children : <Navigate to='/login' />;
  }

  return (
    <div className='AppBody'>
      <Router>
        <Navbar />
        <div className='app'>
        <Routes >
          <Route exact path="/" element={<Home />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/cart" element={<CheckUser><Cart /></CheckUser>} />
          <Route exact path="/wardrobe" element={<CheckUser><Wardrobe /></CheckUser>} />
          <Route exact path="/login" element={<UsersLogin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/show_details" element={<DressDisplay />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
