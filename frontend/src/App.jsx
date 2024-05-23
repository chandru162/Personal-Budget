
import { Route, Routes } from 'react-router-dom'
import Login from './component/Login';
import Navbar from './component/Navbar';
import './App.css'
// import Login from './component/Login'
// import Navbar from './component/Navbar'
import Signin from './component/Signin'
import Home from './component/Home'
import About from './component/About'
import Calculater from './component/Calculater'
import Tips from './component/Tips'
import Profile from './component/Profile'
import Managment from './component/Managment'
import Footer from './component/Footer'

function App() {

  return (
    <div className='container-fluid' >
  <Navbar></Navbar>
  
     <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/income-managment" element={<Managment></Managment>}></Route>
        <Route path="/calculater" element={<Calculater></Calculater>}></Route>
        <Route path="/tips" element={<Tips></Tips>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/log-in" element={<Login></Login>}></Route>
        <Route path="/sign-in" element={<Signin></Signin>}></Route>
     </Routes>
     <br />
     <br />
    <Footer></Footer>
    </div>
  )
}

export default App
