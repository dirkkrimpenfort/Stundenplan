import React from 'react';
import './Card.css';

function Card({ cardData }) {
  return (
    <div className="card">
      <h2>{cardData.Überschrift}</h2>
      {Array.from({ length: 8 }, (_, i) => i + 1).map((index) => (
        <div key={index} className="card-item">
          <div className="time">{cardData[`Zeile${index}_links`]}</div>
          <div className="subject">{cardData[`Zeile${index}_rechts`]}</div>
        </div>
      ))}
    </div>
  );
}


export default Card;

