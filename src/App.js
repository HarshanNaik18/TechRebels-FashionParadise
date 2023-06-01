import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Wardrobe from './Components/Wardrobe/Wardrobe';
import Explore from './Components/Explore/Explore';
import UsersLogin from './Components/LoginAndSignUp/UsersLogin';
import Signup from './Components/LoginAndSignUp/Signup';
import Footer from './Components/Footer/Footer';
import Profile from './Components/Profile/Profile';
import Cart from './Components/cart/cart'
import DressDisplay from './Components/DressDisplay/DressDisplay'

function App() {
  return (
    <div className='AppBody'>
      <Router>
        <Navbar />
        <Routes >
          <Route exact path="/" element={<Home />} />
          <Route exact path="/explore" element={<Explore />} />
          {/* <Route exact path="/recomendation" element={<Products />} /> */}
          <Route exact path="/cart" element={<Cart />} />
          {/* <Route exact path="/order" element={<Orderlist />} /> */}
          {/* <Route exact path="/favorite" element={<Favourite />} /> */}
          <Route exact path="/wardrobe" element={<Wardrobe />} />
          <Route exact path="/login" element={<UsersLogin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/profile" element={<Profile />} />
          {/* <Route exact path="/product_info" element={<DressDisplay />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
