import React from 'react'
import {Routes, Route, Link} from "react-router-dom"
import Project from './Project'
import ContactUs from './ContactUs'
import Footer from './components/config/Footer'
import Resume from './Resume'
import About from './About'
import LandingPage from './LandingPage'
import './App.css'


export default function App(){
    
      return (
        <>
          <LandingPage />
           <About />
           <Project />
           <ContactUs />
           <Footer />
        </>
    
      )
  }






