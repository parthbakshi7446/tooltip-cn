import React from 'react';
import './App.css';
import Button from "./components/button/button";

function App() {
  return (
    <div className="app" style={{backgroundColor:"darkblue",height:"5vh",display:"flex" }}>
      <select name="cars" id="cars"   style={{position:"absolute",top:"-30%",left:"10%"}}>  
        <option value="top">Top</option>
        <option value="bottom">Bottom</option>
        <option value="left">Left</option>
        <option value="right">Right</option>
      </select>
      <Button />
      
    </div>
  );
}

export default App;
