import {useState } from 'react'
import '../css section/Managment.css'
import Axios from 'axios'
import { useAuth } from './Auth'
import { Link } from 'react-router-dom'

export default function Managment() {
  const Auth = useAuth()

  // const [email, setemail] = useState(Auth.email)
  const email = Auth.email
  const [purpose, setpurpose] = useState("")
  const [expence, setexpence] = useState()



  const addexpence = () => {
    Axios.post('http://localhost:3005/history/post', { email, purpose, expence })
      .then(res => console.log(res.data),
        alert("Added successfully !!"))
      .catch(err => console.log(err))
    // console.log(email, purpose, expence)

  }
  return (
    <div className='todo-container'>
      <div className='todo-body'>
        <h3>Add expence :</h3>
        {/* <label>Email :</label>
        <input type="email" value={email} onChange={(e) => { setemail(e.target.value) }} /> */}
        <label>purpose :</label>
        <input type="text" value={purpose} onChange={(e) => { setpurpose(e.target.value) }} required placeholder='enter the your purpose'/>
        <label>Amount :</label>
        <input type="number" value={expence} onChange={(e) => { setexpence(e.target.value) }} required placeholder='enter your expence'/>
        <button onClick={addexpence}>Add</button>
      </div>
      <Link to={'/userhistory'}>History</Link>

    </div>
  )
}
