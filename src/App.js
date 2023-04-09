import Landing from './Landing.js';
import Login from './login.js';
import Dashboard from './Dashboard.js';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import React from 'react';
// 
import '@fontsource/inter/variable.css';
import '@aws-amplify/ui-react/styles.css';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Dashboard" element={<Login />} />
       
      </Routes>
    </div>
  );
}

export default App;
