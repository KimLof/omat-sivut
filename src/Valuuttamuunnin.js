import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
        <div>
            <input
                type="number"
                value={muunnettavaSumma}
                onChange={(e) => setMuunnettavaSumma(e.target.value)}
                onKeyDown={kasitteleEnter}
            />
            <select value={lahdeValuutta} onChange={(e) => setLahdeValuutta(e.target.value)}>
                {Object.keys(valuutat).map(valuutta => (
                    <option key={valuutta} value={valuutta}>{valuutta}</option>
                ))}
            </select>
            <select value={kohdeValuutta} onChange={(e) => setKohdeValuutta(e.target.value)}>
                {Object.keys(valuutat).map(valuutta => (
                    <option key={valuutta} value={valuutta}>{valuutta}</option>
                ))}
            </select>
            <button onClick={muunnaValuutta}>Muunna</button>
            {muunnettuSumma && <p>Muunnettu summa: {muunnettuSumma} {kohdeValuutta}</p>}
        </div>
    );
};

export default CurrencyConverter;
