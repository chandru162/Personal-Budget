import { useEffect, useState } from 'react';
import Axios from 'axios';
import '../css section/Admin.css'


export default function Adminpage() {
    // const [list, setlist] = useState([]);
    const[list1,setlist1]=useState([])




    // const allusers = () => {
    //     Axios.get('http://localhost:3005/user/get')
    //         .then(res => setlist(res.data))
    //         .catch(err => console.log(err));
    // };
    const allmails = ()=>{
        Axios.get('http://localhost:3005/utoamail/get')
            .then(res => setlist1(res.data))
            .catch(err => console.log(err));
    }
    // console.log(list);

    // const handledelete = (_id) => {
    //     Axios.delete(`http://localhost:3005/user/delete/${_id}`)
    //         .then(res => {
    //             console.log(res)
    //             alert(`Deleted Sucessfully ! ${_id}`)
    //             allusers()
    //         })
    //         .catch(err => console.log(err))
    // }
    const handledelete1 = (_id) => {
        Axios.delete(`http://localhost:3005/utoamail/delete/${_id}`)
            .then(res => {
                console.log(res)
                alert(`Deleted Sucessfully ! ${_id}`)
                allusers()
            })
            .catch(err => console.log(err))
    }

    
    useEffect(() => {
        // allusers()
        allmails()
    }, [])


    return (
        <div>
            <>
            {/* <div className="user-cards">
                {list.map((x) => (
                    <div key={x._id} className='card-1'>
                        <p>ID : {x._id}</p>
                        <p>Name : {x.name}</p>
                        <p>Email : {x.email}</p>
                        <p>Password: {x.password}</p>
                        <button id='remove-btn' onClick={() => handledelete(x._id)}>Remove</button>
                    </div>
                ))}
            </div> */}
                <div className="user-cards2">
                    {list1.map((x) => (
                        <div key={x._id} className='card-2'>
                            <p>ID : {x._id}</p>
                            <p>Name : {x.name}</p>
                            <p>Email : {x.email}</p>
                            <p>Message: {x.message}</p>
                            <button id='remove-btn' onClick={() => handledelete1(x._id)}>Remove</button>
                        </div>
                    ))}
                </div>
            </>

        </div>
    );
}

