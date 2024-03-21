import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
<>
<div className="login-container" >
      <div className="logo-container">
        <img src="/carsell-logo.png" alt="Carsell Logo" />
        <h1>Welcome to Carsell</h1>
        <p>Buy and sell cars effortlessly</p>
      </div>
      <div className="login-options">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="additional-options">
          <Link to="/signup">Sign Up</Link>
          <Link to="/forgot-password">Forgot Password</Link>
        </div>
      </div>
    </div></> 
    )
}

export default Login