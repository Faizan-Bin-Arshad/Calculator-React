import './App.css';
import Navbar from './Components/Navbar';
import Calculator_Keypad from './Components/Calculator_Keypad';
import React from 'react'

function App() {
  return (
    <>
    <Navbar heading='Calculator'/>
    {/* <Text_Area  secondArr={secondArr}/> */}
    {/* <Calculator_Keypad DefaultArray={DefaultArray}/> */}
    <Calculator_Keypad/>
    </>
  );
}

export default App;
