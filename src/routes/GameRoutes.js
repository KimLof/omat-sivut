import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FifteenGame from '../games/Numeropeli';
import Weather from '../applications/Saasovellus';
import CurrencyConverter from '../applications/Valuuttamuunnin';
import Calculator from '../applications/Laskin';
import SnakeGame from '../games/Matopeli';
import Tietoa from '../applications/Tietoa';
import SovellusTiedot from '../applications/SovellustenTiedot';
import Yhteys from '../applications/Yhteys';

function GameRoutes() {
    return (
        <div className="content-box">
            <Routes>
                <Route path="/" element={<Tietoa />} />
                <Route path="/sovellustentiedot" element={<SovellusTiedot />} />
                <Route path="/15-peli" element={<FifteenGame />} />
                <Route path="/laskin" element={<Calculator />} />
                <Route path="/saasovellus" element={<Weather />} />
                <Route path="/valuuttamuunnin" element={<CurrencyConverter />} />
                <Route path="/matopeli" element={<SnakeGame />} />
                <Route path="/yhteys" element={<Yhteys />} />
            </Routes>
        </div>
    );
}

export default GameRoutes;
