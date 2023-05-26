import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className='AppBody'>
      <Router>
        <Navbar />
        <div className='App'>
          <Routes >
            <Route path="/" exact element={<Home />} />

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
