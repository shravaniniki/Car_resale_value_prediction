import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [username, setUsername] = useState(''); // State to store the username
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    console.log(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to backend
    fetch('http://localhost:8081/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Login failed');
      }
    })
    .then(data => {
      console.log('Login response:', data);
      setUsername(data.username);
      navigate('/home')
      // Handle success or display error messages
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle error
      alert("Username or password is wrong");
    });
  };

  return (
<>
<div className="login-container" >
      
      <div className="login-options">
      <div className="logo-container">
        <h1>CarSell</h1>
      </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group" >
            <label>Username</label>
            <input type="text" name="username" value={formData.username}  onChange={handleChange}  required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" value={formData.password}  onChange={handleChange}  required />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="additional-options">
          <h3>New User?</h3>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div></> 
    )
}

export default Login