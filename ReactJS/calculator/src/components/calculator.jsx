import React, { useState } from 'react';
import './Calculator.css'; // Add styling if needed

function Calculator() {
  const [input, setInput] = useState('');

  // Function to handle button clicks
  const handleClick = (value) => {
    if (value === '=') {
      try {
        // Evaluate the expression
        setInput(eval(input).toString()); // Be cautious with eval; alternatives are available.
      } catch {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput(''); // Clear input
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || '0'}</div>
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
