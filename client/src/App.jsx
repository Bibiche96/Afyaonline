import React from "react";
import './App.css'
import Home from './components/Home';
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'


function App() {
  return (
    <Homepage>
      <Navbar />
      <Home />
    </Homepage>

  )
}

export default App;
