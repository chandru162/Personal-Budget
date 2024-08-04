
import Adminpage from './component/Adminpage'

import {Routes,Route} from 'react-router-dom'
import UserList from './component/UserList'
import Nopage from './component/Nopage'
import Navbar from './component/Navbar'
import Loader from './component/Loader'
import { useEffect, useState } from 'react'

function App() {
  const[Loading,setLoading]=useState(true);

  useEffect(()=>{
    const timer =setTimeout(()=>setLoading(false),3000);
    return ()=> clearTimeout(timer)
  },[])

  return (
    <>
    {Loading ? <Loader /> :  <><Navbar></Navbar>
    <Routes>
        <Route path='mailbox' element={<Adminpage></Adminpage>}></Route>
        <Route path='/userlist' element={<UserList />}></Route>
        <Route path='*' element={<Nopage />}></Route>
      </Routes>
      </> }
    </>
  )
}

export default App
