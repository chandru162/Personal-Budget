import { NavLink, Link } from 'react-router-dom';
import '../css section/Navbar.css';
import DesignerLogo from '../assets/images/Designer.png'; 
// import auth from '../component/Auth'

import { useAuth } from "./Auth";

export default function Navbar() {
    const auth=useAuth()
    return (
        <div className='nav-div container-fluid' style={{marginRight:"20px"}}>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/about">
                        <img src={DesignerLogo} alt="Designer Logo" width="50px" height="50px" style={{borderRadius:"50%",boxShadow:"1px 1px 6px black"}} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                            <NavLink className="nav-link" to="/income-managment">Managment</NavLink>
                            <NavLink className="nav-link" to="/calculater">calculater</NavLink>
                            <NavLink className="nav-link" to="/tips">Tips&Triks</NavLink>

                            {/* <NavLink className="nav-link" to="/profile">Profile</NavLink> */}
                            {/* <NavLink className="nav-link" to="/log-in">login</NavLink> */}
                            {/* <NavLink className="nav-link" to="/sign-in">signin</NavLink> */}

                            {auth.user && (<NavLink className="nav-link" to={"/profile"}>Profile</NavLink>)}
                            {!auth.user && (<NavLink className="nav-link" to={"/log-in"}>Login</NavLink>)}
                            {!auth.user && (<NavLink className="nav-link" to={"/sign-in"}>sign in</NavLink>)} 
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
