import React from 'react';
import './App.css';
import Formcomponent from './components/Formcomponent';
import DisplayForm from './components/DisplayForm';
import Selectcomponent from './components/Selectcomponent'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Userloginitem from './components/Userloginitem';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Userloginitem />} />
        
        <Route path="/" element={<Selectcomponent />} />

        <Route path="/" element={<Formcomponent />} />
        <Route path="/DisplayForm" element={<DisplayForm />} />
      </Routes>
    </Router>
  );
}

export default App;
