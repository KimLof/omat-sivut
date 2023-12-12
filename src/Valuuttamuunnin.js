import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Valuuttamuunnin.css';

const CurrencyConverter = () => {
    const [valuutat, setValuutat] = useState({});
    const [muunnettavaSumma, setMuunnettavaSumma] = useState('');
    const [lahdeValuutta, setLahdeValuutta] = useState('EUR');
    const [kohdeValuutta, setKohdeValuutta] = useState('USD');
    const [muunnettuSumma, setMuunnettuSumma] = useState('');

    const haeValuuttakurssit = async () => {
        try {
            const response = await axios.get('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_lcqdjbgILcCN0cPDzuqGnKfwqp6lrXZK979ndV8c');
            setValuutat(response.data.data);
        } catch (error) {
            console.error('Virhe valuuttakurssien haussa', error);
        }
    };

    useEffect(() => {
        haeValuuttakurssit();
    }, []);

    const muunnaValuutta = () => {
        if (!muunnettavaSumma || !valuutat || !valuutat[lahdeValuutta] || !valuutat[kohdeValuutta]) {
            return;
        }
        const tulos = (muunnettavaSumma / valuutat[lahdeValuutta]) * valuutat[kohdeValuutta];
        setMuunnettuSumma(tulos.toFixed(2));
    };

    const kasitteleEnter = (e) => {
        if (e.key === 'Enter') {
            muunnaValuutta();
        }
    };

    return (
        <div className="container">
            <h1>Valuuttamuunnin</h1>
            <div className="input-group">
                <input
                    type="number"
                    className="input"
                    value={muunnettavaSumma}
                    onChange={(e) => setMuunnettavaSumma(e.target.value)}
                    onKeyDown={kasitteleEnter}
                    placeholder="Syötä summa..."
                />
            </div>
            <div className="input-group">
                <select className="select" value={lahdeValuutta} onChange={(e) => setLahdeValuutta(e.target.value)}>
                    {Object.keys(valuutat).map(valuutta => (
                        <option key={valuutta} value={valuutta}>{valuutta}</option>
                    ))}
                </select>
            </div>
            <div className="input-group">
                <select className="select" value={kohdeValuutta} onChange={(e) => setKohdeValuutta(e.target.value)}>
                    {Object.keys(valuutat).map(valuutta => (
                        <option key={valuutta} value={valuutta}>{valuutta}</option>
                    ))}
                </select>
            </div>
            <button className="button" onClick={muunnaValuutta}>Muunna</button>
            {muunnettuSumma && (
                <div className="output">
                    <div>Muunnettu summa:</div>
                    <div className="output-amount">{muunnettuSumma} {kohdeValuutta}</div>
                </div>
            )}
        </div>
    );
};

export default CurrencyConverter;
