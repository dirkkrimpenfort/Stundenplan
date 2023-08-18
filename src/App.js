import React from 'react';
import './App.css';
import Card from './components/Card';
import db from './db.json';
//second commit
function App() {
  const cards = db.cards;

  return (
    <div className="App">
      <h1>Stundenplan Klasse 4b Albert-Schweitzer-Grundschule Lauenau</h1>
      <div className="cards-container">
        {cards.map((card, index) => (
          <Card key={index} cardData={card} />
        ))}
      </div>
      <footer>Erstellt von Dirk Krimpenfort Tel. 0160 92940540</footer>
    </div>
  );
}

export default App;
