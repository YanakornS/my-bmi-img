// src/BMICalculator.js
class BMICalculator {
    calculateBMI(weightInKg, heightInMeters) {
      if (heightInMeters <= 0 || weightInKg <= 0) {
        return "Invalid input. Weight and height must be positive values.";
      }
  
      const bmi = weightInKg / (heightInMeters * heightInMeters);
      return bmi;
    }
  
    interpretBMI(bmi) {
      if (bmi < 18.5) {
        return "Underweight";
      } else if (bmi < 24.9) {
        return "Normal weight";
      } else if (bmi < 29.9) {
        return "Overweight";
      } else {
        return "Obese";
      }
    }
  }
  
  export default BMICalculator;