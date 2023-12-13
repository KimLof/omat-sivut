import React, { useState } from 'react';
import '../styles/Saasovellus.css';

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

    const transalateWeather = (icon) => {
        switch (icon) {
            case 'Clear':
                return 'Selkeää';
            case 'Clouds':
                return 'Pilvistä';
            case 'Rain':
                return 'Sateista';
            case 'Snow':
                return 'Lumista';
            case 'Thunderstorm':
                return 'Ukkosta';
            case 'Drizzle':
                return 'Tihkusadetta';
            default:
                return 'Pilvistä';
        }
    };

    return (
        <div className="weather-app">
            <h1>Sääsovellus</h1>
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
            <div className="weather-info">
                <h2>{weather ? weather.name : "Valitse kaupunki ensin"}</h2>
                <p>Lämpötila: {weather ? `${weather.main.temp} °C` : "Lämpötila"}</p>
                <p>Taivas: {weather ? transalateWeather(weather.weather[0].main) : "Taivas"}</p>
                <p>Ilmankosteus: {weather ? `${weather.main.humidity} %` : "Ilmankosteus"}</p>
                <p>Ilmanpaine: {weather ? `${weather.main.pressure} hPa` : "Ilmanpaine"}</p>
                <p>Tuulen nopeus: {weather ? `${weather.wind.speed} m/s` : "Tuulen nopeus"}</p>
            </div>
        </div>
    );
};

export default Weather;
