import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform login logic here
    // You can make an API call or validate the credentials
    // If the credentials are valid, you can redirect the user to the dashboard
    // Otherwise, you can display an error message

    if (username === 'admin' && password === 'password') {
      // Redirect to the dashboard
      // For example, you can use react-router-dom to navigate to a different route
      // import { useNavigate } from 'react-router-dom';
      // const navigate = useNavigate();
      // navigate('/dashboard');
      console.log('Login successful!');
    } else {
      console.log('Invalid username or password');
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot Password</a>
        </div>

        <button type="submit">Login</button>

        <div className="login-register">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;       