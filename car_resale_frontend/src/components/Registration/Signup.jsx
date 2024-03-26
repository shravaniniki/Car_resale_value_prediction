// SignUpForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Signup.css"
const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to backend
    fetch('http://localhost:8081/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('SignUp response:', data);
      navigate("/login")
      // Handle success or display error messages
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle error
    });
  };

  return (
    <>
    <div className="login-container" >

      <div className="login-options">
      <div className="logo-container">
        <h1>CarSell</h1>
      </div>
    <div>
      <form onSubmit={handleSubmit}>
      <div className="form-group" >
          <label>Name:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        </div>
        <button type="submit">Sign Up</button>

        <div className="additional-options">
          <h3>Already an User?</h3>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
    </div>
    </div>
    </>
  );
};

export default Signup;
