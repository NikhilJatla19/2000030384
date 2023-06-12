import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NumberManagementService from './NumberManagementService';

function App() {
  return (
    <div>
    <h1>2000030384</h1>
    <Router>
    <Routes>
        <Route path="/numbers" element={<NumberManagementService />}>
        </Route>
      </Routes>
    </Router>
    <button onClick={() => window.location.href='http://localhost:3000/numbers'}>Number Management Service</button>
  </div>
  );
}

export default App;
