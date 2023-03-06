
import React from 'react';
import "./signup.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// Define a custom component for the sign up form
function Signup() {
  // Use React hooks to manage the state of the form inputs and errors
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [errors, setErrors] = React.useState({});

  // set loggedIn to true in local storage
  window.localStorage.setItem('loggedIn', true);

  // Use React hook to access the history object for navigation
  const navigate = useNavigate();

  // Define a function to handle the form submission
  function handleSubmit(event) {
    // Prevent the default browser behavior of reloading the page
    event.preventDefault();

    // Validate the form inputs and set errors if any
    let isValid = true;
    let newErrors = {};


    // Check if username is empty or less than 8 characters or contains spaces
    if (username.length < 8 || username.includes(' ')) {
      isValid = false;
      newErrors.username = 'Username must be at least 8 characters long and cannot contain spaces.';
    }
    if (!username || !password) {
      isValid = false;
      newErrors.username = 'Username and password are required.';
    }

    // Check if password is empty or less than 8 characters or contains spaces or does not meet complexity requirements
    if (!password || password.length < 8 || password.includes(' ') || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[^A-Za-z]/.test(password)) {
      isValid = false;
      newErrors.password = 'Password must be at least 8 characters long and cannot contain spaces. It must also contain at least one upper case letter, one lower case letter and one non-letter character.';
    }

    // Check if confirm password is empty or does not match password
    if (!confirmPassword || confirmPassword !== password) {
      isValid = false;
      newErrors.confirmPassword = 'Confirm password must match password.';
    }

    // Set the errors state with the new errors object
    setErrors(newErrors);

    // post request to the backend with username and password
    axios
      .post("http://localhost:5000/api/signup", { username, password })
      .then((res) => {
        console.log(res);
        localStorage.setItem('username', username);
        localStorage.setItem('loggedIn', true);
        navigate('/landing', { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Return the JSX code for rendering the sign up form component
  return (
    <div className="sign-up-form">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value.trim())} />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value.trim())} />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value.trim())} />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

// Export the sign up form component as default
export default Signup;
