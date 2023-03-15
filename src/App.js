import Landing from './Landing.js';
import Login from './login.js';
import Dashboard from './Dashboard.js';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import React from 'react';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
