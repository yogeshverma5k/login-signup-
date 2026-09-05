import React, { useState } from 'react';

export default function App() {
  const [isLoginView, setIsLoginView] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('reactUserEmail', email);
      localStorage.setItem('reactUserPassword', password);
      alert('Registration Successful! Ab login karein.');
      setIsLoginView(true);
      setEmail(''); setPassword('');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === localStorage.getItem('reactUserEmail') && password === localStorage.getItem('reactUserPassword')) {
      alert('Login Successful!');
    } else {
      alert('Invalid Credentials!');
    }
  };

  return (
    <div style={{ padding: '40px', maxWidth: '350px', margin: '50px auto', fontFamily: 'sans-serif', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2>{isLoginView ? 'React Login' : 'React Sign Up'}</h2>
      <form onSubmit={isLoginView ? handleLogin : handleSignup}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: '90%', padding: '10px', marginBottom: '15px' }} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required style={{ width: '90%', padding: '10px', marginBottom: '15px' }} />
        <button type="submit" style={{ width: '96%', padding: '10px', background: '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }}>
          {isLoginView ? 'Login' : 'Register'}
        </button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '15px' }}>
        {isLoginView ? "Account nahi hai?" : "Pehle se account hai?"} {' '}
        <span style={{ color: '#0070f3', cursor: 'pointer' }} onClick={() => setIsLoginView(!isLoginView)}>
          {isLoginView ? 'Sign Up' : 'Login'}
        </span>
      </p>
    </div>
  );
}
