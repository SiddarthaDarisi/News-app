import React, { useState } from "react";
import "./login.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value.trim());
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate username and password
    if (!username || !password) {
      setError("Username and password are required");
      return;
    }
    if (!password || password.length < 8 || password.includes(' ') || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[^A-Za-z]/.test(password)) {
      setError('Password must be at least 8 characters long and cannot contain spaces. It must also contain at least one upper case letter, one lower case letter and one non-letter character.');
      return;
    }
    if (!username || username.length < 8 || username.includes(' ') || !/[A-Z]/.test(username) || !/[a-z]/.test(username) || !/[^A-Za-z]/.test(username)) {
      setError("username mmust be at least 8 characters long and cannot contain spaces. It must also contain at least one upper case letter, one lower case letter and one non-letter character.");
      return;
    }
    // send a post request to the backend with username and password
    axios
    .post("http://localhost:5000/api/signup", { username, password })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className="container">
      <h1>News App</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="form-control"
          />
        </div>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
       
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
        <p>New user?</p>
        <Link to="/signup" className="btn btn-primary"style={{display:"inline"}}><h3>Signup</h3></Link>
      </form>

    </div>

  );
}

export default Login;

