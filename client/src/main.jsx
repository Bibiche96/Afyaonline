import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import DoctorProfile from './components/doctorprofile.jsx';
import PageinscriptionPatient from './components/inscriptionpatient.jsx';
import Pageinscription from './components/pageinscriptiondoctor.jsx';
import ConnexionDoctor from './components/pageconnexion.jsx';
import ConnexionPatient from './components/connexionpatient.jsx';
import AppointmentList from './components/appointmentlist.jsx';
import AppointmentForm from './components/appointmentform.jsx';
import Dashboard from './components/dashboard.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Sidebar from './components/sidebar.jsx';
import Doctorslist from './components/doctorslist';
import Patientlist from './components/patientslist';



const router = createBrowserRouter([
  {
    path: "/",
    element:
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/registerpatient",
        element: <PageinscriptionPatient />
      },
      {
        path: "/registerdoctor",
        element: < Pageinscription />
      },
    ]
  },
  {
    path: "dashboard",
    element: <><Sidebar /><Outlet /></>,
    children: [
      {
        path: "dashboard/",
        element: <Dashboard />
      },
      {
        path: "doctors",
        element: <Doctorslist />
      },
      {
        path: "patients",
        element: <Patientlist />
      }
    ]
  },
  {
    path: "/doctor",
    element: <DoctorProfile />
  },
  {
    path: "/logindoctor",
    element: < ConnexionDoctor />
  },
  {
    path: "/loginpatient",
    element: < ConnexionPatient />
  },
  {
    path: "/appointmentlist",
    element: < AppointmentList />
  },
  {
    path: "/appointmentform",
    element: < AppointmentForm />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)



