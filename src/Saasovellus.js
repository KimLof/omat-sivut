import React, { useState } from 'react';
import './Saasovellus.css';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const fetchWeather = async (e) => {
        e.preventDefault();
        if (!city) {
            setError('Anna kaupungin nimi');
            return;
        }

        const apiKey = '309279414fa3d50a47854b04cde0caf4';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.cod !== 200) {
                setError('Kaupunkia ei löytynyt');
                setWeather(null);
            } else {
                setWeather(data);
                setError('');
            }
        } catch (error) {
            setError('Virhe haettaessa säätietoja');
        }
    };

    return (
        <div className="weather-app">
            <form onSubmit={fetchWeather}>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Hae kaupungin nimellä..."
                />
                <button type="submit">Hae</button>
            </form>
            {error && <p className="error-message">{error}</p>}
            {weather && (
                <div className="weather-info">
                    <h2>{weather.name}</h2>
                    <p>Lämpötila: {weather.main.temp} °C</p>
                    <p>Taivas: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
