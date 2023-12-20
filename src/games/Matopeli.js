import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../styles/Matopeli.css';

const scale = 19;
const rows = 19;
const columns = 19;

function SnakeGame() {
    const canvasRef = useRef(null);
    const [snake, setSnake] = useState([]);
    const [food, setFood] = useState({ x: scale * 10, y: scale * 10 });
    const [direction, setDirection] = useState({ x: scale, y: 0 });
    const [gameStarted, setGameStarted] = useState(false);
    const [hasMoved, setHasMoved] = useState(true);
    const [speed, setSpeed] = useState(150); // Oletusnopeus


    const startGame = () => {
        setSnake([{ x: scale * 5, y: scale * 5 }]);
        setFood({ x: scale * 10, y: scale * 10 });
        setDirection({ x: scale, y: 0 });
        setGameStarted(true);
    };

    const handleKeyDown = useCallback((e) => {
        if (!hasMoved) return;

        const key = e.key;
        const newDirection = { x: 0, y: 0 };

        switch (key) {
            case 'ArrowLeft':
            case 'a':
                if (direction.x === 0) {
                    newDirection.x = -scale;
                    newDirection.y = 0;
                }
                break;
            case 'ArrowUp':
            case 'w':
                if (direction.y === 0) {
                    newDirection.x = 0;
                    newDirection.y = -scale;
                }
                break;
            case 'ArrowRight':
            case 'd':
                if (direction.x === 0) {
                    newDirection.x = scale;
                    newDirection.y = 0;
                }
                break;
            case 'ArrowDown':
            case 's':
                if (direction.y === 0) {
                    newDirection.x = 0;
                    newDirection.y = scale;
                }
                break;
            default:
                return;
        }

        if (newDirection.x !== 0 || newDirection.y !== 0) {
            setDirection(newDirection);
            setHasMoved(false);
        }
    }, [direction, scale, hasMoved, setDirection, setHasMoved]);

    const [touchStart, setTouchStart] = useState({ x: null, y: null });
    const [touchEnd, setTouchEnd] = useState({ x: null, y: null });

    // Laskee swipe-eleen suunnan
    const handleTouchStart = (e) => {
        const touch = e.touches[0];
        setTouchStart({ x: touch.clientX, y: touch.clientY });
    };

    const handleTouchMove = (e) => {
        const touch = e.touches[0];
        setTouchEnd({ x: touch.clientX, y: touch.clientY });
    };

    const handleTouchEnd = () => {
        if (!touchStart.x || !touchStart.y) {
            return;
        }

        const deltaX = touchEnd.x - touchStart.x;
        const deltaY = touchEnd.y - touchStart.y;

        // Käsittele vain suhteellisen selkeät swipe-liikkeet
        if (Math.abs(deltaX) > Math.abs(deltaY)) { // vaakasuora liike
            if (deltaX > 0) {
                setDirection({ x: scale, y: 0 }); // swipe oikealle
            } else {
                setDirection({ x: -scale, y: 0 }); // swipe vasemmalle
            }
        } else { // pystysuora liike
            if (deltaY > 0) {
                setDirection({ x: 0, y: scale }); // swipe alas
            } else {
                setDirection({ x: 0, y: -scale }); // swipe ylös
            }
        }

        // Nollaa kosketuspisteet
        setTouchStart({ x: null, y: null });
        setTouchEnd({ x: null, y: null });
    };

    useEffect(() => {
        if (!gameStarted) return;

        const context = canvasRef.current.getContext('2d');
        window.addEventListener('keydown', handleKeyDown);

        const interval = setInterval(() => {
            context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            context.fillStyle = 'red';
            context.fillRect(food.x, food.y, scale, scale);

            context.fillStyle = 'green';
            for (let i = 0; i < snake.length; i++) {
                context.fillRect(snake[i].x, snake[i].y, scale, scale);

                // Tarkista törmääkö käärme itseensä
                if (i > 0 && snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
                    endGame();
                    return;
                }
            }

            // Liikuta käärmeen päätä
            let newSnake = [...snake];
            const head = { x: newSnake[0].x + direction.x, y: newSnake[0].y + direction.y };
            newSnake.unshift(head);

            // Tarkista törmääkö käärme seinään
            if (head.x < 0 || head.y < 0 || head.x >= canvasRef.current.width || head.y >= canvasRef.current.height) {
                endGame();
                return;
            }

            if (!hasMoved) {
                setHasMoved(true);
            }

            if (head.x === food.x && head.y === food.y) {
                setFood({ x: Math.floor(Math.random() * columns) * scale, y: Math.floor(Math.random() * rows) * scale });
            } else {
                newSnake.pop();
            }

            setSnake(newSnake);
        }, speed);

        function endGame() {
            window.alert('Game Over');
            clearInterval(interval);
            window.removeEventListener('keydown', handleKeyDown);
            setGameStarted(false);
        }

        return () => {
            clearInterval(interval);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [gameStarted, snake, direction, food, hasMoved, speed, handleKeyDown]);


    return (
        <>
            <div className="speed-buttons">
                <button className={`button ${speed === 200 ? 'button-active' : ''}`} onClick={() => setSpeed(200)}>Hidas</button>
                <button className={`button ${speed === 150 ? 'button-active' : ''}`} onClick={() => setSpeed(150)}>Keskinopea</button>
                <button className={`button ${speed === 100 ? 'button-active' : ''}`} onClick={() => setSpeed(100)}>Nopea</button>
            </div >
            <div className="game-container">
                <canvas
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    ref={canvasRef}
                    width={`${scale * columns}px`}
                    height={`${scale * rows}px`}
                    className="snake-game"
                />
                {!gameStarted && <button className="button" onClick={startGame}>Aloita</button>}
            </div>
        </>
    );
}

export default SnakeGame;
