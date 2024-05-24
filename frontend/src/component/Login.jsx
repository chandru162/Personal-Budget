import React from 'react'
import Axios from 'axios'
import { Link, NavLink, useNavigate } from 'react-router-dom' 
import { useState } from 'react'
import { useAuth } from "./Auth";

    


export default function Login() {
    const auth=useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const Navigate=useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        Axios.get(`http://localhost:3005/userdetails/get/${email}`)
            .then(res => {
                console.log(res)
                if (res.data[0]?.email) {
                    if (res.data[0]?.password === password) {
                        setMessage('')

                        auth.login(res.data[0]?.name)
                        // auth.login(res.data[0]?.email)
                        alert('Login successful')
                       Navigate("/profile")
                    }
                    else {
                        setMessage("Incorrect password")
                    }
                }
                else {
                    setMessage('Email not found')
                }

            })
            .catch(err => console.log(err))
    }

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleLogin} >
                <h2>Log In</h2>
                <br />
                <h6>Welcome Back!</h6>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Login Now</button>
                <br />
                {message}
                <h5>create a new account ? <NavLink to={"/sign-in"}>sign-in</NavLink></h5>
            </form>
            
        </div>
    );
}
