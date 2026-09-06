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

      alert('Registration successful! Please login to continue.');

      setIsLoginView(true);
      setEmail('');
      setPassword('');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const savedEmail = localStorage.getItem('reactUserEmail');
    const savedPassword = localStorage.getItem('reactUserPassword');

    if (email === savedEmail && password === savedPassword) {
      alert('Login Successful! 🎉');
    } else {
      alert('Invalid Email or Password ⚠️');
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="user-icon">👤</div>

        <h1>
          {isLoginView ? 'Welcome Back' : 'Create Account'}
        </h1>

        <p className="subtitle">
          {isLoginView
            ? 'Login to continue'
            : 'Join us and get started'}
        </p>

        <form onSubmit={isLoginView ? handleLogin : handleSignup}>

          <div className="input-group">
            <span>✉️</span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <span>🔒</span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">
            {isLoginView ? 'Login' : 'Register'}
          </button>

        </form>

        <div className="divider">
          <span></span>
          <p>or</p>
          <span></span>
        </div>

        <p className="switch-text">
          {isLoginView
            ? "Don't have an account?"
            : 'Already have an account?'}{' '}

          <span onClick={() => {
            setIsLoginView(!isLoginView);
            setEmail('');
            setPassword('');
          }}>
            {isLoginView ? 'Sign Up' : 'Login'}
          </span>
        </p>

      </div>

      <p className="footer">
        SIMPLE • FAST • SECURE
      </p>

    </div>
  );
}