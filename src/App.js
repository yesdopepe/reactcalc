import React, { useState } from 'react';
import './App.css';

const CalculatorApp = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      clearInput();
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const handleKeyPress = (event) => {
    const key = event.key;

    if ((key >= '0' && key <= '9') || key === '/' || key === '*' || key === '-' || key === '+' || key === '.') {
      handleButtonClick(key);
    } else if (key === 'Enter') {
      calculateResult();
    } else if (key === 'Escape') {
      clearInput();
    }
  };

  return (
    <div className="calculator" tabIndex="0" onKeyDown={handleKeyPress}>
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button className="function" onClick={() => handleButtonClick('C')}>C</button>
        {['7', '8', '9', '/'].map((button) => (
          <button key={button} onClick={() => handleButtonClick(button)}>{button}</button>
        ))}
        {['4', '5', '6', '*'].map((button) => (
          <button key={button} onClick={() => handleButtonClick(button)}>{button}</button>
        ))}
        {['1', '2', '3', '-'].map((button) => (
          <button key={button} onClick={() => handleButtonClick(button)}>{button}</button>
        ))}
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button className="function" onClick={() => calculateResult()}>=</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
      </div>
    </div>
  );
};

export default CalculatorApp;