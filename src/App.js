import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
     <Router>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            
          </Routes>
      </Router>
    </div>
  );
}

export default App;
