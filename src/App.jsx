import { useState } from "react";
import "./App.css";

function App() {
  const [isSignup, setIsSignup] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    const user = {
      name: name,
      email: email,
      password: password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    setMessage("Signup successful! Now login.");
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      setMessage("Please signup first!");
      return;
    }

    if (
      email === savedUser.email &&
      password === savedUser.password
    ) {
      setMessage(`Welcome, ${savedUser.name}! 🎉`);
    } else {
      setMessage("Invalid email or password!");
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h1>{isSignup ? "Create Account" : "Welcome Back"}</h1>

        <p className="subtitle">
          {isSignup
            ? "Signup to create your account"
            : "Login to your account"}
        </p>

        <form onSubmit={isSignup ? handleSignup : handleLogin}>
          {isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {isSignup && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}

          <button type="submit">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        {message && <p className="message">{message}</p>}

        <p className="switch">
          {isSignup
            ? "Already have an account?"
            : "Don't have an account?"}

          <button
            className="switchBtn"
            onClick={() => {
              setIsSignup(!isSignup);
              setMessage("");
            }}
          >
            {isSignup ? " Login" : " Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default App;