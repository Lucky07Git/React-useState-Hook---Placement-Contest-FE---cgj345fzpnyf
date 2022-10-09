
import '../styles/App.css';
import React, { useState } from 'react';

export default function App() {
 //code here 
  const [input, setInput] = useState("");
    const [text, setText] = useState("");
 
    function handleChange(e) {
        const newValue = e.target.value;
        setInput(newValue);
    }
    function handleClick() {
        setText(text + input)
    }
  return (
    <div>
   {/* the <p> tag with id text will show the concatinated string as output on string 
      the <input> tag with id input will take input entered by user */}
  <input id='input' value={inputValue} onChange={changeInput} />
  
      <p id='intro'>Concated String</p>
      <p id='text'>{text} </p>
      <button id='button' onClick={buttonClick}>
        Click me
      </button>
    </div>
  );
}
export default App;
