import React, { useState } from "react";

const calculateExpression = (expression) => {
  // Improved tokenization to handle decimals
  const tokens = expression.match(/\d*\.?\d+|\D+/g);
  const values = [];
  const operators = [];

  const applyOperator = () => {
    const right = values.pop();
    const left = values.pop();
    const operator = operators.pop();

    switch (operator) {
      case "+":
        values.push(left + right);
        break;
      case "-":
        values.push(left - right);
        break;
      case "*":
        values.push(left * right);
        break;
      case "/":
        values.push(left / right);
        break;
      default:
        throw new Error("Unknown operator");
    }
  };

  const precedence = (op) => {
    if (op === "+" || op === "-") return 1;
    if (op === "*" || op === "/") return 2;
    return 0;
  };

  tokens?.forEach((token) => {
    if (/\d*\.?\d+/.test(token)) {
      values.push(parseFloat(token));
    } else if (["+", "-", "*", "/"].includes(token)) {
      while (
        operators.length &&
        precedence(operators[operators.length - 1]) >= precedence(token)
      ) {
        applyOperator();
      }
      operators.push(token);
    }
  });

  while (operators.length) {
    applyOperator();
  }

  return values[0];
};

const Calculator = () => {
  const [display, setDisplay] = useState("");
  const [hasDecimal, setHasDecimal] = useState(false);

  const appendToDisplay = (input) => {
    // Handle decimal point logic
    if (input === ".") {
      if (hasDecimal) return; // Prevent multiple decimals in a number
      if (display === "" || /[+\-*/]$/.test(display)) {
        setDisplay(display + "0."); // Add leading zero for decimal
      } else {
        setDisplay(display + ".");
      }
      setHasDecimal(true);
      return;
    }

    // Reset decimal flag when an operator is entered
    if (["+", "-", "*", "/"].includes(input)) {
      setHasDecimal(false);
    }

    // Prevent leading zeros
    if (input === "0" && display === "0") return;
    if (/\d/.test(input) && display === "0") {
      setDisplay(input);
      return;
    }

    setDisplay(display + input);
  };

  const clearDisplay = () => {
    setDisplay("");
    setHasDecimal(false);
  };

  const calculate = () => {
    try {
      const result = calculateExpression(display);
      // Format the result to handle decimal places properly
      const formattedResult = Number.isInteger(result)
        ? result.toString()
        : result.toFixed(8).replace(/\.?0+$/, "");
      setDisplay(Number.isFinite(result) ? formattedResult : "Error");
      setHasDecimal(formattedResult.includes("."));
    } catch (error) {
      setDisplay("Error");
      setHasDecimal(false);
    }
  };

  const CalcButton = ({ value, onClick, className = "" }) => (
    <button
      onClick={onClick}
      className={`h-16 text-lg font-medium rounded-lg transition-all duration-200 
        ${
          className.includes("operator")
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : className.includes("equals")
            ? "bg-green-600 hover:bg-green-700 text-white col-span-2"
            : className.includes("clear")
            ? "bg-red-600 hover:bg-red-700 text-white"
            : "bg-gray-700 hover:bg-gray-600 text-gray-200"
        } ${className}`}
    >
      {value}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-2xl p-6 space-y-4">
        {/* Display */}
        <input
          type="text"
          value={display}
          readOnly
          className="w-full h-20 bg-gray-900 text-right text-3xl text-white px-4 rounded-lg"
        />

        {/* Keypad */}
        <div className="grid grid-cols-4 gap-3">
          <CalcButton value="7" onClick={() => appendToDisplay("7")} />
          <CalcButton value="8" onClick={() => appendToDisplay("8")} />
          <CalcButton value="9" onClick={() => appendToDisplay("9")} />
          <CalcButton
            value="+"
            onClick={() => appendToDisplay("+")}
            className="operator"
          />

          <CalcButton value="4" onClick={() => appendToDisplay("4")} />
          <CalcButton value="5" onClick={() => appendToDisplay("5")} />
          <CalcButton value="6" onClick={() => appendToDisplay("6")} />
          <CalcButton
            value="-"
            onClick={() => appendToDisplay("-")}
            className="operator"
          />

          <CalcButton value="1" onClick={() => appendToDisplay("1")} />
          <CalcButton value="2" onClick={() => appendToDisplay("2")} />
          <CalcButton value="3" onClick={() => appendToDisplay("3")} />
          <CalcButton
            value="×"
            onClick={() => appendToDisplay("*")}
            className="operator"
          />

          <CalcButton value="." onClick={() => appendToDisplay(".")} />
          <CalcButton value="0" onClick={() => appendToDisplay("0")} />
          <CalcButton
            value="÷"
            onClick={() => appendToDisplay("/")}
            className="operator"
          />

          <CalcButton value="C" onClick={clearDisplay} className="clear" />
          <CalcButton value="=" onClick={calculate} className="equals" />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
