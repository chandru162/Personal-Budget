import React from 'react';
import { Link } from 'react-router-dom'; 
import '../css section/calcu.css';

export default function Calculater() {
  return (
    <div id='calcu-parant'>
      <Link to={"/ordinary-calculator"}><button>Ordinary Calculator</button></Link> 
      <Link to={"/emi-calculator"}><button>EMI Calculator</button></Link>
      <Link to={"/currency-converter"}><button>Currency Converter</button></Link>

    </div>
  );
}
