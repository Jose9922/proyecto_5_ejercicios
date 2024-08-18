import React, { useState } from 'react';
import './Header1.css';

export const Header1 = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const add = () => {
        setResult(parseFloat(num1) + parseFloat(num2));
    };

    const subtract = () => {
        setResult(parseFloat(num1) - parseFloat(num2));
    };

    const multiply = () => {
        setResult(parseFloat(num1) * parseFloat(num2));
    };

    const divide = () => {
        if (parseFloat(num2) === 0) {
            setResult('Error: División por 0');
        } else {
            setResult(parseFloat(num1) / parseFloat(num2));
        }
    };

    const reset = () => {
        setNum1('');
        setNum2('');
        setResult('');
    };

    return (
        <div className="calculator-container">
            <h1 className="calculator-title">Calculadora</h1>
            <div className="input-container">
                <input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    placeholder="Número 1"
                    className="calculator-input"
                />
                <input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    placeholder="Número 2"
                    className="calculator-input"
                />
            </div>
            <div className="button-container">
                <button onClick={add} className="calculator-button">Sumar</button>
                <button onClick={subtract} className="calculator-button">Restar</button>
                <button onClick={multiply} className="calculator-button">Multiplicar</button>
                <button onClick={divide} className="calculator-button">Dividir</button>
                <hr></hr>
                <button onClick={reset} className="reset-button">Reiniciar</button>
            </div>
            <h2 className="result-display">Resultado: {result}</h2>
        </div>
    );
};
