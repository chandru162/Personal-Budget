import React from 'react'
import '../css section/Managment.css'

export default function Managment() {
  return (
    <div className='todo-container'>
      <div className='todo-body'>
        <h3>Add expence :</h3>
        <label>purpose :</label>
        <input type="text" />
        <label>Amount :</label>
        <input type="number" />
        <button>Add</button>
      </div>
    </div>
  )
}
