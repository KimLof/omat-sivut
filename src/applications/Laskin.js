import React, { useState, useEffect  } from 'react';
import '../styles/Laskin.css';

const Calculator = () => {
    const [currentValue, setCurrentValue] = useState('0');
    const [previousValue, setPreviousValue] = useState(null);
    const [operator, setOperator] = useState(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);

    

    const inputDigit = (digit) => {
        if (waitingForOperand) {
            setCurrentValue(String(digit));
            setWaitingForOperand(false);
        } else {
            setCurrentValue(currentValue === '0' ? String(digit) : currentValue + digit);
        }
    };

    const inputDot = () => {
        if (waitingForOperand) {
            setCurrentValue('0.');
            setWaitingForOperand(false);
        } else if (!currentValue.includes('.')) {
            setCurrentValue(currentValue + '.');
            setWaitingForOperand(false);
        }
    };

    const clearAll = () => {
        setCurrentValue('0');
        setPreviousValue(null);
        setOperator(null);
        setWaitingForOperand(false);
    };

    const performOperation = (nextOperator) => {
        const inputValue = parseFloat(currentValue);

        if (previousValue == null) {
            setPreviousValue(inputValue);
        } else if (operator) {
            const previousValueFloat = parseFloat(previousValue);
            const newValue = performCalculation[operator](previousValueFloat, inputValue);
            setCurrentValue(String(newValue));
            setPreviousValue(newValue);
        }

        setWaitingForOperand(true);
        setOperator(nextOperator);
    };

    const performCalculation = {
        '/': (firstValue, secondValue) => firstValue / secondValue,
        '*': (firstValue, secondValue) => firstValue * secondValue,
        '+': (firstValue, secondValue) => firstValue + secondValue,
        '-': (firstValue, secondValue) => firstValue - secondValue,
        '=': (firstValue, secondValue) => secondValue
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key >= 0 && event.key <= 9) {
                inputDigit(event.key);
            } else if (event.key === '.' || event.key === ',') {
                inputDot();
            } else if (event.key === 'Enter' || event.key === '=') {
                performOperation('=');
            } else if (event.key === '+') {
                performOperation('+');
            } else if (event.key === '-') {
                performOperation('-');
            } else if (event.key === '*') {
                performOperation('*');
            } else if (event.key === '/') {
                performOperation('/');
            } else if (event.key === 'Escape') { // Use Escape to clear
                clearAll();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentValue, performOperation, inputDigit, inputDot, clearAll]);

    return (
        <div className="calculator">
            <h1 className='otsikko'>Laskin</h1>
            <div className="calculator-display">{currentValue}</div>
            <div className="calculator-keys">
                <button onClick={() => inputDigit('7')}>7</button>
                <button onClick={() => inputDigit('8')}>8</button>
                <button onClick={() => inputDigit('9')}>9</button>
                <button className="operator" onClick={() => performOperation('/')}>/</button>

                <button onClick={() => inputDigit('4')}>4</button>
                <button onClick={() => inputDigit('5')}>5</button>
                <button onClick={() => inputDigit('6')}>6</button>
                <button className="operator" onClick={() => performOperation('*')}>*</button>

                <button onClick={() => inputDigit('1')}>1</button>
                <button onClick={() => inputDigit('2')}>2</button>
                <button onClick={() => inputDigit('3')}>3</button>
                <button className="operator" onClick={() => performOperation('-')}>-</button>

                <button className='zero' onClick={() => inputDigit('0')}>0</button>
                <button onClick={inputDot}>.</button>
                <button className="operator" onClick={() => performOperation('+')}>+</button>

                <button className="all-clear" onClick={clearAll}>AC</button>
                <button className="equal-sign" onClick={() => performOperation('=')}>=</button>
            </div>
        </div>
    );


};

export default Calculator;
