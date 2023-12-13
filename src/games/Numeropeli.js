import React, { useState, useEffect } from 'react';
import '../styles/Numeropeli.css';

function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function isSolvable(tiles) {
    let inversionCount = 0;
    for (let i = 0; i < tiles.length; i++) {
        if (tiles[i] != null) {
            for (let j = i + 1; j < tiles.length; j++) {
                if (tiles[j] != null && tiles[i] > tiles[j]) {
                    inversionCount++;
                }
            }
        }
    }
    return inversionCount % 2 === 0;
}

function isSolved(tiles) {
    for (let i = 0; i < tiles.length - 1; i++) {
        if (tiles[i] !== i) {
            return false;
        }
    }
    return true;
}

function FifteenGame() {
    const [tiles, setTiles] = useState([...Array(15).keys(), null]);
    const [isGameStarted, setIsGameStarted] = useState(false);

    useEffect(() => {
        if (isGameStarted && isSolved(tiles)) {
            alert("Pääsit pelin läpi!");
            setIsGameStarted(false);
        }
    }, [tiles, isGameStarted]);

    const moveTile = (index) => {
        const newTiles = [...tiles];
        const emptyIndex = newTiles.indexOf(null);
        const { row: emptyRow, col: emptyCol } = getRowCol(emptyIndex);
        const { row, col } = getRowCol(index);

        if (Math.abs(row - emptyRow) + Math.abs(col - emptyCol) === 1) {
            newTiles[emptyIndex] = newTiles[index];
            newTiles[index] = null;
            setTiles(newTiles);
        }
    };

    const shuffleTiles = () => {
        let shuffledTiles;
        do {
            shuffledTiles = shuffleArray([...Array(15).keys(), null]);
        } while (!isSolvable(shuffledTiles));
        setTiles(shuffledTiles);
        setIsGameStarted(true);
    };

    const getRowCol = (index) => {
        return { row: Math.floor(index / 4), col: index % 4 };
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (isGameStarted) {
                const emptyIndex = tiles.indexOf(null);
                const { row, col } = getRowCol(emptyIndex);

                switch (event.key) {
                    case 'ArrowUp':
                    case 'w':
                        if (row < 3) moveTile(emptyIndex + 4);
                        break;
                    case 'ArrowDown':
                    case 's':
                        if (row > 0) moveTile(emptyIndex - 4);
                        break;
                    case 'ArrowLeft':
                    case 'a':
                        if (col < 3) moveTile(emptyIndex + 1);
                        break;
                    case 'ArrowRight':
                    case 'd':
                        if (col > 0) moveTile(emptyIndex - 1);
                        break;
                    default:
                        break;
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [tiles, isGameStarted, moveTile]);

    return (
        <div className="game-container1">
            <h1 className='Otsikko'>15-peli</h1>
            <div className="game-board">
                {tiles.map((tile, index) => {
                    // Tarkista onko tiili punainen sen arvon perusteella
                    const isRed = [0, 1, 2, 3, 8, 9, 10, 11, ].includes(tile);
                    return (
                        <div
                            key={index}
                            className={`tile ${tile === null ? 'tile-empty' : ''} ${isRed ? 'tile-red' : ''}`}
                            onClick={() => isGameStarted && moveTile(index)}
                        >
                            {tile !== null ? tile + 1 : ''}
                        </div>
                    );
                })}
            </div>
            <p> </p>
            <button className="button" onClick={shuffleTiles}>Sekoita</button>
        </div>
    );
}

export default FifteenGame;
