import React, { useState } from 'react';
// import { evaluate } from 'mathjs';
import './Calculator.css'; 

function Calculator() {
  const [input, setInput] = useState('');

  // Function to handle button clicks
  const handleClick = (value) => {
    if (value === '=') {
      try {
        // Evaluating the expression
        setInput(eval(input).toString()); // alternatives are available for this.
      } catch {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput(''); // Clearing the input
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || '0'}</div>  {/*if input exists display or 0 */}
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
        <button className="clear" onClick={() => handleClick('C')}>
          C
        </button>
      </div>
    </div>
  );
}

export default Calculator;
