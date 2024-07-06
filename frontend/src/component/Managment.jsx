import { useEffect, useState } from 'react'
import '../css section/Managment.css'
import Axios from 'axios'

export default function Managment() {
  // const [email, setemail] = useState('')
  const [purpose, setpurpose] = useState("")
  const [expence, setexpence] = useState()


  const addexpence = () => {
    Axios.post('http://localhost:3005/history/post', {purpose, expence})
      .then(res => console.log(res))
      .catch(err => console.log(err))
    // console.log(email, purpose, expence)

  }
  return (
    <div className='todo-container'>
      <div className='todo-body'>
        <h3>Add expence :</h3>
        {/* <label>Email :</label>
        <input type="email" value={email} onChange={(e) => { setemail(e.target.value) }} />
        <label>purpose :</label> */}
        <input type="text" value={purpose} onChange={(e) => { setpurpose(e.target.value) }} />
        <label>Amount :</label>
        <input type="number" value={expence} onChange={(e) => { setexpence(e.target.value) }} />
        <button onClick={addexpence}>Add</button>
      </div>
    </div>
  )
}
