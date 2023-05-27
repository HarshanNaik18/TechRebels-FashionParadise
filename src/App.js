import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Wardrobe from './Components/Wardrobe/Wardrobe';

function App() {
  return (
    <div className='AppBody'>
      <Router>
        <Navbar />
          <Routes >
            <Route exact path="/" element={<Home />} />
            <Route exact path="/wardrobe" element={<Wardrobe />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
