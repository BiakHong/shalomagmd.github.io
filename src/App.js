import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import FacebookVideo from './FacebookVideo';
import PastorCard from './Pastor';
import Navbar from './Navbar';
function App() {
  return (
    <Router>
      <Navbar /> {/* Place the Navbar outside the <Routes> */}
      <Routes>
        <Route path="/FacebookVideo" element={<FacebookVideo />} />
        <Route path="/Pastor" element={<PastorCard />} />
      </Routes>
    </Router>
  );
}

export default App;  
  
  





