import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import '../css section/Admin.css'

export default function Adminpage() {
    const [list, setlist] = useState([]);




    const allusers = () => {
        Axios.get('http://localhost:3005/userdetails/get')
            .then(res => setlist(res.data))
            .catch(err => console.log(err));
    };
    // console.log(list);

    const handledelete = (_id) => {
        Axios.delete(`http://localhost:3005/userdetails/delete/${_id}`)
            .then(res => {
                console.log(res)
                alert(`Deleted Sucessfully ! ${_id}`)
                allusers()
            })
            .catch(err => console.log(err))
    }

    
    useEffect(() => {
        allusers()
    }, [])


    return (
        <div>
            <nav>
                <ul>
                    <li>Users List</li>
                    <li>User Details</li>
                </ul>
            </nav>
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
    );
}

