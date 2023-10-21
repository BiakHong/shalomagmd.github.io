// src/components/Navbar.js
import React from 'react';
import './Navbar.css';const Navbar = () => {
  return (
    <nav>
      <ul>
          <li><a href="#">Home</a></li>
          <li><a href="/FacebookVideo">Facebook Live</a></li>
          <li><a href="/Pastor">Pastor</a></li>
          <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
