import React, { useState } from 'react';
import Keypad from './keypad.js';
import './App.css';

function App() 
{
  const [input, setInput] = useState('')
  const [displayResult, setDisplayResult] = useState(false)

  function handleClick(userValue) 
  {
    if(displayResult)
    {
        setInput(userValue)
        setDisplayResult(false) //do not display result in the textbox
    }
    else
    {
        setInput(input + userValue);
    }
  }

  function calculate() 
  {
    const result = eval(input);
    setInput(result.toString());
    setDisplayResult(true);  //to visible the result in textbox
  }

  function handleClear() 
  {
    setInput('');
  }

  return (
    <div className='container'>
      <h1>Calculator App</h1>
      <div className='calculator'>
        <input type='text' className='output' value={input} readOnly />
        <Keypad handleClick={handleClick} calculate={calculate} handleClear={handleClear} />
      </div>
    </div>
  );
}

export default App;
