import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import SubHeader from './SubHeader';
import GameRoutes from './GameRoutes';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <SubHeader />
                <main className="main-content">
                    <GameRoutes />
                </main>
            </div>
        </Router>
    );
}

export default App;
