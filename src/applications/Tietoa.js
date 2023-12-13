import React, { useState, useEffect, useRef } from 'react';

function Tietoa() {
    return (
        <div className="main-content">
            <div>
                <h1>Tietoa minusta ja sivusta</h1>
                <h2>Minä</h2>
                <p>Olen Kim, 23-vuotias tietojenkäsittelyn opiskelija ja opiskelen Savonia ammattikorkekoulussa.</p>
                <p>Olen opiskellut tietojenkäsittelyä 3 vuotta ja valmistun 2024 keväällä/syksyllä riippuen opinnäytetyöstä.</p>
                <h2>Tämä sivu</h2>
                <p>Sivu on tehty täysin projekti mielessä</p>
                <p>Tämä sivu on tehty Reactilla ja ulkoasu on toteutettu CSS:llä. Sivun koodi on saatavilla <a href="https://github.com/KimLof/omat-sivut" target="_blank" rel="noopener noreferrer">GitHubissa.</a></p>
                <p>Sivu pyörii omistamallani Raspberry pi pientietokoneella</p>
                <p>Sivun oikealla yläkulmassa on dropdown valikko mistä näet eri sovelluksia mitä olen tehnyt. Sovelluksia
                    lisään ajanmyötä lisää.</p>
            </div>
        </div>

    );
}

export default Tietoa;