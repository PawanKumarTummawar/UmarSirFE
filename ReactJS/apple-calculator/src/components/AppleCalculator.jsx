import React, { useState } from "react";
import "./AppleCalculator.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  // Function to handle button clicks
  const handleClick = (value) => {
    if (value === "=") {
      try {
        const result = eval(input);
        setHistory([...history, { expression: input, result }]); // Save the expression and result to history
        setInput(result.toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput(""); // Clear the input
    } else if (value === "DEL") {
      setInput(input.slice(0, -1)); // Delete last character
    } else {
      setInput(input + value); // Append clicked value to input
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        {input || "0"}
      </div>

      <div className="buttons">
        {[
          "7", "8", "9", "/",
          "4", "5", "6", "*",
          "1", "2", "3", "-",
          "0", ".", "=", "+",
          "DEL", "C"
        ].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)} className="button">
            {btn}
          </button>
        ))}
      </div>

      <div className="history">
        <h3>History</h3>
        {history.length > 0 ? (
          <ul>
            {history.map((entry, index) => (
              <li key={index}>
                <span>{entry.expression} = {entry.result}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No history yet</p>
        )}
      </div>
    </div>
  );
}

export default Calculator;
