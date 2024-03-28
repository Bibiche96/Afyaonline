import React from "react";
import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './components/Home';
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Pageinscription from "./components/pageinscription";
import Connexion from "./components/pageconnexion";
import Doctorprofile from "./components/doctorprofile";
import Dashboard from "./components/dashboard";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor" element={<Doctorprofile />} />
          <Route path="/sign" element={<Pageinscription/>} />
          <Route path="/login" element={ <Connexion/>} />

    

        </Routes>
        <Footer />
       
      </BrowserRouter>


    </>
    // <Homepage>
    //  
    //   
    // </Homepage>
    // 

    //

    // 

    // <Dashboard/>

  )
}

export default App;
