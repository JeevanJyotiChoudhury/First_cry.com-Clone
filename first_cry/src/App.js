import React from 'react';
import './App.css';
import Bottomnavbar from './Components/Bottomnavbar';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import data from "./db.json"

function App() {
  console.log(data.top_slider)
  return (
    <div className="App">
      <Navbar/>
      <Bottomnavbar/>
      <Footer/>
    </div>
  );
}

export default App;
