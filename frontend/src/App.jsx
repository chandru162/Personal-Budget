import {useEffect,useState} from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Login from './component/Login';
import Navbar from './component/Navbar';
import './App.css'
import Signin from './component/Signin'
import Home from './component/Home'
import About from './component/About'
import Calculater from './component/Calculater'
import Tips from './component/Tips'
import Profile from './component/Profile'
import Managment from './component/Managment'
import Footer from './component/Footer'
import Ocalculator from './component/Ocalculater';
import EmiCalculator from './component/Emicalculater';
import CurencyConverter from './component/CurencyConverter';
import Nopage from './component/Nopage';
import AuthProvider from './component/Auth';
import RequirdAuth from './component/RequirdAuth'
import History from './component/History';
import Loader from './component/Loader';

function App() {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
    { Loading ? <Loader/> : <> <div className='container-fluid'>

      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/income-managment" element={<RequirdAuth><Managment /></RequirdAuth>}></Route>
          <Route path='/userhistory' element={<History></History>}></Route>

          <Route path="/calculater" element={<RequirdAuth><Calculater /></RequirdAuth>}>
            <Route path='ordinary-calculator' element={<Ocalculator />} />
            <Route path='emi-calculator' element={<EmiCalculator />} />
            <Route path='currency-converter' element={<CurencyConverter />} />
          </Route>

          <Route path="/tips" element={<RequirdAuth><Tips /></RequirdAuth>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="*" element={<Nopage></Nopage>} />
        </Routes>

        <br />
        <br />

        <Footer />
      </AuthProvider>
    </div>
    </>
}
</>
    
  )
}

export default App;
