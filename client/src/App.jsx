import React from "react";
import './App.css';
import { Router } from "express";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './components/Home';
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Pageinscription from "./components/pageinscriptiondoctor";
import Connexion from "./components/pageconnexion";
import Doctorprofile from "./components/doctorprofile";
import Dashboard from "./components/dashboard";
import Appointmentavalability from "./components/appointmentavailability";
import PageinscriptionPatient from "./components/inscriptionpatient";
import ConnexionDoctor from "./components/pageconnexion";
import ConnexionPatient from "./components/connexionpatient";
import AppointmentList from "./components/appointmentlist";
import AppointmentForm from "./components/appointmentform";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RegisteredDoctor from "./components/doctoregister";


function App() {
  return (
    <>
      <RegisteredDoctor />

    </>




  )
}

export default App;
