import React, { useState } from "react";
import "./login.css";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";
function Landing({ loggedIn, username }) {
    return (<div>
        <Link
            to="/"
            style={{ display: loggedIn ? "none" : "block" }}
            className="nav-item"
            id="landing"
        >
            <h3>Hello, {username}</h3>
        </Link>


        <Routes>
            <Route path="/" element={<Homepage />}></Route>
        </Routes>
    </div>);
}

export default Landing;

