import React, { useState, useEffect } from 'react';
import '../css section/CurrencyConverter.css';
import Calculater from '../component/Calculater'

const CurrencyConverter = () => {
    const [amount, setAmount] = useState('');
    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [targetCurrency, setTargetCurrency] = useState('EUR');
    const [convertedAmount, setConvertedAmount] = useState('');

    useEffect(() => {
        const fetchConversionRate = async () => {
            const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
            const data = await response.json();
            const rate = data.rates[targetCurrency];
            setConvertedAmount((parseFloat(amount) * rate).toFixed(2));
        };

        fetchConversionRate();
    }, [amount, baseCurrency, targetCurrency]);

    return (
        <>
        <Calculater/>
        <div className="currency-converter">

            <h2>Currency Converter</h2>
            <div>
                <label>Amount ({baseCurrency}):</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <div>
                <label>From:</label>
                <select value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    {/* Add other currencies as needed */}
                </select>
            </div>
            <div>
                <label>To:</label>
                <select value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    {/* Add other currencies as needed */}
                </select>
            </div>
            {convertedAmount && <div className="converted-amount">Converted Amount: {convertedAmount}</div>}
        </div>
        </>
    );
};

export default CurrencyConverter;
