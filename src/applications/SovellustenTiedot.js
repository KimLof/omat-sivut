import React, { useState, useEffect, useRef } from 'react';

function SovellusTiedot() {
    return (
        <div className="main-content">
            <div>
                <h1>Sovellusten ja pelien esittely</h1>

                <h2>15-peli</h2>
                <p>15-peli on ensimmäinen tämän sivuston tarjoama sovellus,
                    ja se on toteutettu React-ohjelmistokehyksellä.
                    Peli koostuu 15 numeroidusta laatasta sekä yhdestä tyhjästä ruudusta.
                    Pelaajan tavoitteena on järjestää laatat numerojärjestykseen käyttämällä hyväkseen tyhjää tilaa ja
                    siirtämällä laattoja ympäri pelialuetta.</p>
                <p>Laattoja voi liikuttaa klikkaamalla niitä tai käyttämällä nuolinäppäimiä.
                    Pelin voi aloittaa alusta milloin tahansa 'Sekoita' -painikkeella.</p>

                <h2>Laskin</h2>
                <p>Laskin-sovellus on yksinkertainen ja intuitiivinen,
                    ja se mahdollistaa peruslaskutoimitukset suoraan sivustollani.
                    Lisäksi laskin tukee näppäimistöltä tapahtuvaa syöttöä,
                    mikä nopeuttaa laskutoimitusten suorittamista.</p>

                <h2>Sääsovellus</h2>
                <p>Sääsovelluksemme tuo ajankohtaiset säätiedot suoraan OpenWeatherMap-palvelusta.
                    Saat nopeasti tietää paikalliset sääolosuhteet olitpa sitten kotona tai matkoilla.</p>

                <h2>Valuuttamuunnin</h2>
                <p>Valuuttamuunnin on kätevä työkalu,
                    joka hyödyntää freecurrencyapi:n tarjoamia ajantasaisia valuuttakursseja.
                    Muunna eri valuuttoja reaaliajassa ja pysy ajan tasalla maailmanmarkkinoiden liikkeistä.</p>

                <h2>Käärme-peli</h2>
                <p>Käärme-peli on klassinen selainpeli,
                    jossa ohjaat käärmettä kasvattaaksesi sen pituutta syömällä omenoita ja
                    välttämällä törmäyksiä seinään tai käärmeen omaan häntään.
                    Pelin grafiikka on toteutettu canvas-elementillä.
                    Peliä voi ohjata joko nuolinäppäimillä tai WASD-näppäimillä.</p>
            </div>
        </div>


    );
}

export default SovellusTiedot;