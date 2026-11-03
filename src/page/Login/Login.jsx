import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
   const [email,setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Email:", email);
    console.log("User Password:", password);
    navigate('/dashboard');
};
  return(
<div className="login-container">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p>Login to access your LUXE Dashboard</p>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          
          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};  

export default Login;