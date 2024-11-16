// import React from 'react'
import Axios from 'axios';
import { useEffect,useState } from 'react';
import { useAuth } from "./Auth";
import '../css section/History.css'

export default function History() {
  const Auth = useAuth()

  const[email,setemail]=useState(Auth.email)
  const [list,setlist]=useState([])

    useEffect(()=>{
      Axios.get(`http://localhost:3005/history/get/${email}`)
      .then(res=>setlist(res.data))
      .catch(err=>console.log(err))
    },[email])


  return (
    <div className='hisdiv'>
      <table>
        <thead>
          <tr>
            <th>Email:</th>
            <th>Purpose:</th>
            <th>Expence:</th>
            <th>Update the list:</th>
            <th>Remove the list</th>  
          </tr>
        </thead>
          {list.map((x)=>(
            <tbody key={x._id}>
              <tr>
                <td>{x.email}</td>
                <td>{x.purpose}</td>
                <td>{x.expence}</td>
                <td><button className='ubutton'>update</button></td>
                <td><button className='dbutton'>Delete</button></td>
              </tr>
            </tbody>
          ))}
      
      </table>
    </div>
  )
}
