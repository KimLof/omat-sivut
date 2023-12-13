import React, { useState, useEffect, useRef } from 'react';

function Tietoa() {
    return (
        <div className="main-content">
    <div>
        <h1>Minusta ja sivustostani</h1>
        <h2>Kuka olen?</h2>
        <p>Olen Kim, 23-vuotias tietojenkäsittelyn opiskelija Savonia-ammattikorkeakoulusta. Olen suorittanut kolme vuotta opintojani ja aikatauluni mukaan valmistunen vuonna 2024 kevään tai syksyn aikana, opinnäytetyöni edistymisestä riippuen.</p>
        <h2>Sivustosta</h2>
        <p>Tämä sivusto on luotu projektinäytteenä että harjoitusalueena uusille taidoille, joita opin matkan varrella. Se on rakennettu käyttäen Reactia ja sivuston ulkoasu on suunniteltu CSS:llä.</p>
        <p>Voit tutustua koodiini <a href="https://github.com/KimLof/omat-sivut" target="_blank" rel="noopener noreferrer">GitHubissa</a>. Se tarjoaa katsauksen projektini etenemiseen ja antaa esimerkin koodaustaidoistani.</p>
        <p>Sivun yläkulmassa olevasta pudotusvalikosta löydät valikoiman sovelluksia ja pelejä, joiden parissa olen työskennellyt. Pyrin lisäämään uusia projekteja säännöllisesti, jotta voit seurata kehitystäni ja oppimistani.</p>
    </div>
</div>


    );
}

export default Tietoa;