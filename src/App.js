
import './App.css';

import React, { useState } from 'react';
import './App.css';
import TipCalculator from './TipCalculator';
import ResetButton from './ResetButton';

export default function App() {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState(15);
  const [numOfPeople, setNumOfPeople] = useState(1);

  const resetFields = () => {
    setBillAmount('');
    setTipPercentage(15);
    setNumOfPeople(1);
  };

  return (
    <div className="App">
      <h1>Tip Calculator</h1>
      <TipCalculator
        billAmount={billAmount}
        setBillAmount={setBillAmount}
        tipPercentage={tipPercentage}
        setTipPercentage={setTipPercentage}
        numOfPeople={numOfPeople}
        setNumOfPeople={setNumOfPeople}
      />
      <ResetButton resetFields={resetFields} />
    </div>
  );
}





