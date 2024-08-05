import React from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Main/>
    <Footer/>
    </>

    
  );
}

export default App;
