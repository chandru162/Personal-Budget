import React from 'react'
// import '../css section/Login.css'

export default function Login() {
  return (
      <div className="signup-container">
          <form className="signup-form" >
              <h2>Log In</h2>
              <br />
              <h1>Welcome Back!</h1>
              <div className="form-group">
                
                  <label htmlFor="email">Email:</label>
                  <input
                      type="email"
                      id="email"
                      
                      required
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                      type="password"
                      id="password"
                      
                      required
                  />
              </div>

              <button type="submit">Login Now</button>
          </form>
      </div>
  );

  
}
