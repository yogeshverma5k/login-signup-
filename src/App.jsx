import React, { useState } from 'react';
import './index.css';

export default function App() {
  const [isLoginView, setIsLoginView] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Eye button ke liye state (true = dikhega, false = hidden)
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('reactUserEmail', email);
      localStorage.setItem('reactUserPassword', password);
      alert('Registration Successful! Now please login.');
      setIsLoginView(true);
      setEmail(''); 
      setPassword('');
      setShowPassword(false); // Reset eye button
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem('reactUserEmail');
    const storedPassword = localStorage.getItem('reactUserPassword');

    if (email === storedEmail && password === storedPassword) {
      alert('Login Successful! Welcome.');
      setEmail(''); 
      setPassword('');
      setShowPassword(false);
    } else {
      alert('Invalid Credentials!');
    }
  };

  return (
    <div className="container">
      <h2>{isLoginView ? 'React Login' : 'React Sign Up'}</h2>
      <form onSubmit={isLoginView ? handleLogin : handleSignup}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          required 
        />
        
        {/* Password Container */}
        <div className="password-wrapper">
          <input 
            type={showPassword ? 'text' : 'password'} // Yahan type change hoga
            placeholder="Password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            required 
          />
          {/* Eye Button */}
          <span 
            className="eye-icon" 
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>

        <button type="submit">
          {isLoginView ? 'Login' : 'Register'}
        </button>
      </form>
      <p>
        {isLoginView ? "Don't have an account?" : "Already have an account?"} {' '}
        <span className="toggle-link" onClick={() => {
          setIsLoginView(!isLoginView);
          setShowPassword(false); // View change hone par eye reset
        }}>
          {isLoginView ? 'Sign Up' : 'Login'}
        </span>
      </p>
    </div>
  );
}
