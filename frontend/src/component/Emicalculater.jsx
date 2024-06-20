import React, { useState } from 'react';
import '../css section/Emicalculater.css';

const EmiCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState('');

  const calculateEMI = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 12 / 100;
    const n = parseFloat(tenure);
    const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(emiValue.toFixed(2));
  };

  return (
    <>

    <div className="emi-calculator">
      <h2>EMI Calculator</h2>
      <div>
        <label>Principal Amount:</label>
        <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
      </div>
      <div>
        <label>Interest Rate (% p.a.):</label>
        <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
      </div>
      <div>
        <label>Tenure (months):</label>
        <input type="number" value={tenure} onChange={(e) => setTenure(e.target.value)} />
      </div>
      <button onClick={calculateEMI}>Calculate EMI</button>
      {emi && <div className="emi-result">EMI: R.S {emi}</div>}
    </div>
    </>
  );
};

export default EmiCalculator;
