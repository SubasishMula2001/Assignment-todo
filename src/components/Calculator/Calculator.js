import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className='calculator-container'>
      <h2>Calculator</h2>
      <input
        type="text"
        placeholder="Enter an expression"
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={handleCalculate}>Calculate</button>
      <div className='calculator-result'>Result: {result}</div>
    </div>
  );
}

export default Calculator;
