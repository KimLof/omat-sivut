import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FifteenGame from './Numeropeli';
import Weather from './Saasovellus';
import CurrencyConverter from './Valuuttamuunnin';
import Calculator from './Laskin';
import SnakeGame from './Matopeli';
import Tietoa from './Tietoa';

function GameRoutes() {
    return (
        <div className="content-box">
            <Routes>
                <Route path="/tietoa" element={<Tietoa />} />
                <Route path="/15-peli" element={<FifteenGame />} />
                <Route path="/laskin" element={<Calculator />} />
                <Route path="/saasovellus" element={<Weather />} />
                <Route path="/valuuttamuunnin" element={<CurrencyConverter />} />
                <Route path="/matopeli" element={<SnakeGame />} />
            </Routes>
        </div>
    );
}

export default GameRoutes;
