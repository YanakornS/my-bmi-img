// src/BMICalculatorComponent.jsx
import React, { useState } from "react";
import BMICalculator from "./BMICalculator";

function BMICalculatorComponent() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [interpretation, setInterpretation] = useState("");

  const handleCalculate = () => {
    const calculator = new BMICalculator();
    const bmiValue = calculator.calculateBMI(parseFloat(weight), parseFloat(height));
    const interpretationValue = calculator.interpretBMI(bmiValue);

    setBMI(bmiValue.toFixed(2));
    setInterpretation(interpretationValue);
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <div>
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label>Height (m):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={handleCalculate}>Calculate BMI</button>
      {bmi && <p>Your BMI is: {bmi}</p>}
      {interpretation && <p>Interpretation: {interpretation}</p>}
    </div>
  );
}

export default BMICalculatorComponent;