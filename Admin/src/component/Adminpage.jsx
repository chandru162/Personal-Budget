import React, { useEffect, useState } from 'react';
import Axios from 'axios'; 
import '../css section/Admin.css'

export default function Adminpage() {
    const [list, setlist] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3005/userdetails/get')
            .then(res => setlist(res.data))
            .catch(err => console.log(err));
    },[]);
        console.log( list);

    const handledelete = (email)=>{
        Axios.delete(`http://localhost:3005/userdetails/delete/${email}`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    


    return (
        <div>
            <div className="user-cards">
                {list.map((x) => (
                    <div key={x.id} className='card-1'>
                        <p>Name : {x.name}</p>
                        <p>Email : {x.email}</p>
                        <p>Password: {x.password}</p>
                        <button id='remove-btn' onClick={()=>handledelete(x.email)}>Remove</button>
                    </div>
                ))}
            </div>
            
        </div>
    );
}
