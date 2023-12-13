import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import GameRoutes from './routes/GameRoutes';
import './styles/App.css';

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
