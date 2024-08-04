import React from 'react'
import { useState,useEffect } from 'react';
import Axios from 'axios';

export default function UserList() {
    const [list, setlist] = useState([]);
    // const [list1, setlist1] = useState([])




    const allusers = () => {
        Axios.get('http://localhost:3005/user/get')
            .then(res => setlist(res.data))
            .catch(err => console.log(err));
    };

    const handledelete = (_id) => {
        Axios.delete(`http://localhost:3005/user/delete/${_id}`)
            .then(res => {
                console.log(res)
                alert(`Deleted Sucessfully ! ${_id}`)
                allusers()
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        allusers()
        // allmails()
    }, [])
  return (
    <div>
          <div className="user-cards">
              {list.map((x) => (
                  <div key={x._id} className='card-1'>
                      <p>ID : {x._id}</p>
                      <p>Name : {x.name}</p>
                      <p>Email : {x.email}</p>
                      <p>Password: {x.password}</p>
                      <button id='remove-btn' onClick={() => handledelete(x._id)}>Remove</button>
                  </div>
              ))}
          </div>
      
    </div>
  )
}
