import "./App.css";
import Homepage from "./Homepage";
import Login from "./login";
import Landing from "./Landing";
import { Routes, Route, Link } from "react-router-dom";
import Signup from "./signup";
import { useEffect, useState } from "react";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
//based on the code, write a code

  useEffect(() => {
    const handleStorageChange = () => {
      console.log('Storage changed!', localStorage.getItem("loggedIn"));
      console.log('Storage changed!', localStorage.getItem("loggedIn"));
      // Update the cart state with the localstorage item value
      setLoggedIn(localStorage.getItem("loggedIn") || false);
      setUsername(localStorage.getItem("username") || "");
    };
    // Add an event listener to the window object
    window.addEventListener("storage", handleStorageChange);
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  return (<div>
    <nav>
      <Link to="/" className="nav-item" id="logo"><h3>News-App</h3></Link>
      <Link
        to="/signup"
        style={{ display: loggedIn ? "none" : "none" }}
        className="nav-item"
        id="signup"
      >
        <h3>Signup</h3>
      </Link>
      <Link to="/Login" style={{ display: loggedIn ? "none" : "block" }} className="nav-item" id="login"><h3>Login</h3></Link>
      {/* <Link
        to="/"
        style={{ display: loggedIn ? "none" : "block" }}
        className="nav-item"
        id="landing"
      >
        <h3>Hello, {username}</h3>
      </Link> */}
    </nav>


    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/landing" element={<Landing props={{loggedIn, username}}/>}></Route>
    </Routes>
  </div>);
};

export default App;
