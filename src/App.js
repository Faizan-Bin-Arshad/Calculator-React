import './App.css';
import Navbar from './Components/Navbar';
import Calculator_Keypad from './Components/Calculator_Keypad';
import React from 'react'

function App() {
  return (
    <>
    <Navbar heading='Calculator'/>
    <Calculator_Keypad/>
    </>
  );
}

export default App;
