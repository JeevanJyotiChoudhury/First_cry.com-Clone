import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Allproduct from "./Components/Allproduct";
import Bottomnavbar from "./Components/Bottomnavbar";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import Singleproduct from "./Components/Singleproduct";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Bottomnavbar />
      <Routes>
        <Route path="/" element={<Homepage />}/> 
        <Route path="/login" element={<Login />}/> 
        <Route path="/register" element={<Register />}/> 
        <Route path="/cart" element={<Cart />}/> 
        <Route path="/products" element={<Allproduct />}/>
        <Route path="/products/:id" element={<Singleproduct />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
