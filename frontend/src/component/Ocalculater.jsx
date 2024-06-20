import React, { useState } from 'react';
import '../css section/Ocalculater.css'
import Calculater from './Calculater'


export default function Ocalculater() {

    const [input,setinput]=useState('')

  return (
    <>
    
    <div className='calbody'>
        <h1>Calculator</h1>
      <input type="text" value={input}/>
      <br />
      <br />
      <button className="cal-btn"onClick={()=>{setinput(input+'7')}}>7</button>
      <button className="cal-btn"onClick={()=>{setinput(input+'8')}}>8</button>
      <button className="cal-btn"onClick={()=>{setinput(input+'9')}}>9</button>
      <button className="cal-btn"onClick={() => { setinput('') }}>C</button>
      
      <br />
      <button className="cal-btn"onClick={()=>{setinput(input+'4')}}>4</button>
      <button className="cal-btn"onClick={()=>{setinput(input+'5')}}>5</button>
      <button className="cal-btn"onClick={()=>{setinput(input+'6')}}>6</button>
      <button className="cal-btn"onClick={()=>{setinput(input+'*')}}>*</button>
      
      <br />
      <button className="cal-btn"onClick={()=>{setinput(input+'1')}}>1</button>
      <button className="cal-btn"onClick={()=>{setinput(input+'2')}}>2</button>
      <button className="cal-btn"onClick={()=>{setinput(input+'3')}}>3</button>
      <button className="cal-btn"onClick={()=>{setinput(input+'-')}}>-</button>

      <br />
      <button className="cal-btn"onClick={()=>{setinput(input+'.')}}>.</button>
      <button className="cal-btn"onClick={()=>{setinput(input+'0')}}>0</button>
      <button className="cal-btn"onClick={()=>{setinput(eval(input)+'')}}>=</button>
      <button className="cal-btn"onClick={() => { setinput(input + '/') }}>/</button>
      <button className="cal-btn"onClick={() => { setinput(input + '+') }}>+</button>
      <button className="cal-btn"onClick={() => { setinput(input.slice(0,input.length-1))}}>BS</button>
      
    </div>
    </>
  )
}