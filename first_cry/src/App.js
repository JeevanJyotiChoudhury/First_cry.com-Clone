import React from 'react';
import './App.css';
import Bottomnavbar from './Components/Bottomnavbar';
import Footer from './Components/Footer';
import Topslider from './Components/Homepagecomponents/Topslider';
import Navbar from './Components/Navbar';
import data from "./db.json"

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <Bottomnavbar/>
      <Footer/> */}
      <Topslider/>
    </div>
  );
}

export default App;
