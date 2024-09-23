import React from 'react';
import './App.css';
import Formcomponent from './components/Formcomponent';
import DisplayForm from './components/DisplayForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Formcomponent />} />
        <Route path="/DisplayForm" element={<DisplayForm />} />
      </Routes>
    </Router>
  );
}

export default App;
