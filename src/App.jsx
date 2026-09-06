import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [isLoginView, setIsLoginView] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('reactUsers')) || [];

    const alreadyExists = users.some(
      (user) => user.email === email
    );

    if (alreadyExists) {
      alert('This email is already registered!');
      return;
    }

    users.push({
      email: email,
      password: password
    });

    localStorage.setItem('reactUsers', JSON.stringify(users));

    alert('Registration Successful! Now please login.');

    setIsLoginView(true);
    setEmail('');
    setPassword('');
    setShowPassword(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('reactUsers')) || [];

    const user = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (user) {
      alert('Login Successful! Welcome.');
      setEmail('');
      setPassword('');
      setShowPassword(false);
    } else {
      alert('Invalid Credentials!');
    }
  };

  const checkSavedData = () => {
    const users = JSON.parse(localStorage.getItem('reactUsers')) || [];

    if (users.length === 0) {
      alert('No users registered yet!');
      return;
    }

    const data = users
      .map(
        (user, index) =>
          `User ${index + 1}\nEmail: ${user.email}\nPassword: ${user.password}`
      )
      .join('\n\n');

    alert(data);
  };

  return (
    <div className="container">

      <h2>{isLoginView ? 'Login' : 'Sign Up'}</h2>

      <form onSubmit={isLoginView ? handleLogin : handleSignup}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div style={{ position: 'relative', width: '100%' }}>

          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              paddingRight: '45px'
            }}
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '15px',
              top: '14px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              userSelect: 'none'
            }}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#666"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#666"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
              </svg>
            )}
          </span>

        </div>

        <button type="submit">
          {isLoginView ? 'Login' : 'Register'}
        </button>

      </form>

      <button
        type="button"
        onClick={checkSavedData}
        style={{
          marginTop: '10px',
          background: '#555'
        }}
      >
        Check Saved Data
      </button>

      <p>
        {isLoginView
          ? "Don't have an account?"
          : "Already have an account?"}{' '}

        <span
          className="toggle-link"
          onClick={() => {
            setIsLoginView(!isLoginView);
            setEmail('');
            setPassword('');
            setShowPassword(false);
          }}
        >
          {isLoginView ? 'Sign Up' : 'Login'}
        </span>
      </p>

    </div>
  );
}