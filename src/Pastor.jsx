// src/components/PastorCard.js
import React from 'react';
import './Pastor.css';

const PastorCard = () => {
  return (
    <div className="pastor-card">
      <img
        src="/biak.jpg" // Replace with the actual image URL
        alt="YouthPastor's Photo"
      />
      <h3>Our Youth Pastor</h3>
      <p>
        Biak Hong has been serving as the Youth Pastor with Shalom AG for 25 years and he is only 23 years old.
      </p>
    </div>
  );
};

export default PastorCard;
