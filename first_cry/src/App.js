import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import data from "./db.json"

function App() {
  console.log(data.top_slider)
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
