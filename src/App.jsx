import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [isLoginView, setIsLoginView] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('reactUserEmail', email);
      localStorage.setItem('reactUserPassword', password);
      alert('Registration Successful! Now please login.');
      setIsLoginView(true);
      setEmail(''); setPassword('');
      setShowPassword(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === localStorage.getItem('reactUserEmail') && password === localStorage.getItem('reactUserPassword')) {
      alert('Login Successful! Welcome.');
      setEmail(''); setPassword('');
      setShowPassword(false);
    } else {
      alert('Invalid Credentials!');
    }
  };

  return (
    <div className="container">
      <h2>{isLoginView ? 'React Login' : 'React Sign Up'}</h2>
      <form onSubmit={isLoginView ? handleLogin : handleSignup}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        
        <div style={{ position: 'relative', width: '100%' }}>
          <input 
            type={showPassword ? 'text' : 'password'} 
            placeholder="Password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            required 
            style={{ width: '100%', paddingRight: '60px' }} 
          />
          <span 
            onClick={() => setShowPassword(!showPassword)}
            style={{ 
              position: 'absolute', right: '12px', top: '11px', cursor: 'pointer', userSelect: 'none',
              fontSize: '13px', fontWeight: 'bold', color: '#0070f3', background: '#f0f7ff',
              padding: '4px 8px', borderRadius: '5px', border: '1px solid #d0e7ff'
            }}
          >
            {showPassword ? 'HIDE' : 'SHOW'}
          </span>
        </div>

        <button type="submit">{isLoginView ? 'Login' : 'Register'}</button>
      </form>
      <p>
        {isLoginView ? "Don't have an account?" : "Already have an account?"} {' '}
        <span className="toggle-link" onClick={() => { setIsLoginView(!isLoginView); setShowPassword(false); }}>
          {isLoginView ? 'Sign Up' : 'Login'}
        </span>
      </p>
    </div>
  );
}
