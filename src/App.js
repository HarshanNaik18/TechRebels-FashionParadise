import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Wardrob from './Components/Wardrob/Wardrob';

function App() {
  return (
    <div className='AppBody'>
      <Router>
        <Navbar />
        <div className='App'>
          <Routes >
            <Route path="/" exact element={<Home />} />
            <Route path="/wardrob" exact element={<Wardrob />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
