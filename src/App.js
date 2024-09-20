import React from 'react'
import './App.css';
import Selectcomponent from './Selectcomponent'
import Formcomponent from './Formcomponent';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

function App() {
  return (
    <>
    {/* <Selectcomponent/> */}
    <Formcomponent/>
    
    </>
  );
}

export default App;
