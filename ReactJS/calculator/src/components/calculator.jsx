import React, { useState } from 'react';
// import { evaluate } from 'mathjs';
import './Calculator.css'; 
import Button from './Button';

function Calculator() {
  const [input, setInput] = useState('');
  const [switch1, setSwitch1] = useState(false);

  // Function to handle button clicks
  const handleClick = (value) => {
    if (value === '=') {
      try {
        // Evaluating the expression
        setInput(eval(input).toString()); // alternatives are available for this.
      } catch {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };  

  function handleSwitch1() {
    setSwitch1(!switch1);
  }
  function handleClear()
  {
      setInput(''); // Clearing the input
  } 



  return (
    <div className="calculator">
      <div className="display">{input || '0'}</div>  {/*if input exists display or 0 */}
      
      <div className="buttons">
      {/* <button className= "clear" onClick={() => setSwitch1(!switch1) }>
          {switch1 ? "OFF" : "ON" }
        </button> */}
        <Button cssclass = "clear" onClickHandler = {handleSwitch1}> {switch1 ? "OFF" : "ON" } </Button>
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button> 
        ))}
        {/* <button className="clear" onClick={() => setInput('')}>
          C
        </button> */}
        <Button cssclass = "clear" onClickHandler = {handleClear}> C </Button>

      </div>
    </div>
  );
}

export default Calculator;
