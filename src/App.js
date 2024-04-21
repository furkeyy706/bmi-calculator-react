import { useState } from 'react';
import './App.css';

function BmiCalculator() {
  const [heightValue, setHeightValue] = useState('');
  const [weightValue, setWeightValue] = useState('');
  const [bmiValue, setBmiValue] = useState('');
  const [bmiMessage, setBmiMessage] = useState('');
  const [bmiMessageClass, setBmiMessageClass] = useState('');

  const calculateBmi = () => {
    if (heightValue && weightValue) {
      const heightInMeters = heightValue / 100;
      const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2);
      setBmiValue(bmi);

      let message = '';
      let messageClass = '';
      if (bmi < 18.5) {
        message = 'You are Underweight.';
        messageClass = 'underweight';
      } else if (bmi >= 18.5 && bmi < 25) {
        message = 'You are Normal weight.';
        messageClass = 'normal-weight';
      } else if (bmi >= 25 && bmi < 30) {
        message = 'You are Overweight.';
        messageClass = 'overweight';
      } else {
        message = 'You are Obese.';
        messageClass = 'obese';
      }
      setBmiMessage(message);
      setBmiMessageClass(messageClass);
    } else {
      setBmiValue('');
      setBmiMessage('');
      setBmiMessageClass('');
    }
  };

  return (
    <div className="main-container">
      <h1>Body Mass Index Calculator</h1>
      <div className="input-container">
        <label htmlFor="height">Enter Your Height (cm):</label>
        <input
          type="number"
          id="height"
          value={heightValue}
          onChange={e => setHeightValue(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="weight">Enter Your Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weightValue}
          onChange={e => setWeightValue(e.target.value)}
        />
      </div>
      <button className="calculate-button" onClick={calculateBmi}>
        Click to Calculate BMI
      </button>
      {bmiValue && bmiMessage && (
        <div className="result">
          <p>
            Your BMI: <span className="bmi-value"> {bmiValue} </span>
          </p>
          <p>
            Result:{' '}
            <span className={`bmi-message ${bmiMessageClass}`}>
              {' '}
              {bmiMessage}{' '}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default BmiCalculator;
