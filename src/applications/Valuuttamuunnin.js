import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Valuuttamuunnin.css';

const CurrencyConverter = () => {
    const [valuutat, setValuutat] = useState({});
    const [muunnettavaSumma, setMuunnettavaSumma] = useState('');
    const [lahdeValuutta, setLahdeValuutta] = useState('EUR');
    const [kohdeValuutta, setKohdeValuutta] = useState('USD');
    const [muunnettuSumma, setMuunnettuSumma] = useState('');

    const valuuttaSelitykset = {
        EUR: 'Euro (€)',
        USD: 'Yhdysvaltain dollari ($)',
        JPY: 'Japanin jeni (¥)',
        BGN: 'Bulgarian lev (лв)',
        CZK: 'Tšekin koruna (Kč)',
        DKK: 'Tanskan kruunu (kr)',
        GBP: 'Englannin punta (£)',
        HUF: 'Unkarin forintti (Ft)',
        PLN: 'Puolan złoty (zł)',
        RON: 'Romanian leu (lei)',
        SEK: 'Ruotsin kruunu (kr)',
        CHF: 'Sveitsin frangi (CHF)',
        ISK: 'Islannin kruunu (kr)',
        NOK: 'Norjan kruunu (kr)',
        HRK: 'Kroatian kuna (kn)',
        RUB: 'Venäjän rupla (₽)',
        TRY: 'Turkin liira (₺)',
        AUD: 'Australian dollari (A$)',
        BRL: 'Brasilian real (R$)',
        CAD: 'Kanadan dollari (C$)',
        CNY: 'Kiinan juani (¥)',
        HKD: 'Hongkongin dollari (HK$)',
        IDR: 'Indonesian rupia (Rp)',
        ILS: 'Israelin sekeli (₪)',
        INR: 'Intian rupia (₹)',
        KRW: 'Etelä-Korean won (₩)',
        MXN: 'Meksikon peso (Mex$)',
        MYR: 'Malesian ringgit (RM)',
        NZD: 'Uuden-Seelannin dollari (NZ$)',
        PHP: 'Filippiinien peso (₱)',
        SGD: 'Singaporen dollari (S$)',
        THB: 'Thaimaan baht (฿)',
        ZAR: 'Etelä-Afrikan rand (R)'
    };

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
            <div className="content">
                <div className="muunnin">
                    <h2>Valuuttamuunnin</h2>
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
                <div className="selitykset">
                    <h2>Selitykset</h2>
                    <div className="valuutta-selitykset">
                        {Object.entries(valuuttaSelitykset).map(([koodi, selitys]) => (
                            <div key={koodi}>{koodi} = {selitys}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

};

export default CurrencyConverter;
