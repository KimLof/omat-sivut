import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import FifteenGame from './Numeropeli';
import Weather from './Saasovellus';
import CurrencyConverter from './Valuuttamuunnin';
import Calculator from './Laskin';
import SnakeGame from './Matopeli';

function GameRoutes() {
  return (
    <Routes>
      <Route path="/15-peli" element={<FifteenGame />} />
      <Route path="/laskin" element={<Calculator />} />
      <Route path="/saasovellus" element={<Weather />} />
      <Route path="/valuuttamuunnin" element={<CurrencyConverter />} />
      <Route path="/matopeli" element={<SnakeGame />} />
    </Routes>
  );
}


// function TextBox() {
//   return (
//     <div className="text-box">
//     </div>
//   );
// }

function Menu() {
  return (
    <div className="menu">
      <ul>
        <li><Link to="/15-peli">15-peli</Link></li>
        <li><Link to="/matopeli">Käärme-peli</Link></li>
        <li><Link to="/laskin">Laskin</Link></li>
        <li><Link to="/saasovellus">Sääsovellus</Link></li>
        <li><Link to="/valuuttamuunnin">Valuuttamuunnin</Link></li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <div className="left-side">
          <TextBox />
        </div>
        <div className="right-side">
          <div className="game-container">
            <GameRoutes />
          </div>
          <Menu />
        </div>
      </div>
    </Router>
  );

}

export default App;
