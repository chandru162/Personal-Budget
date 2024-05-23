import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import { useState } from 'react'
// import '../css section/Login.css'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const handleLogin = (e) => {
        e.preventDefault()
        Axios.get(`http://localhost:3005/user/get/${email}`)
            .then(res => {
                console.log(res)
                if (res.data[0]?.email) {
                    if (res.data[0]?.password === password) {
                        setMessage('')
                        alert('Login successfull')
                        auth.login(res.data[0]?.username)
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
          </form>
      </div>
  );

  
}
