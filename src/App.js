import React, { useState } from 'react';
import './App.css';
import Button from "./components/button/button";

function App() {
  const [direction,setDirection] = useState("top");
  function updateVal(e){
    console.log(e.target.value);
    setDirection(e.target.value);
  }
  return (
    <div className="app" style={{backgroundColor:"darkblue",height:"100vh",display:"flex" }}>
      <select name="direc" id="cars"   style={{position:"absolute",top:"30%",left:"40%"}} onChange={updateVal}>  
        <option value="top">Top</option>
        <option value="bottom">Bottom</option>
        <option value="left">Left</option>
        <option value="right">Right</option>
      </select>
      <Button direction={direction}/>
      
    </div>
  );
}

export default App;
