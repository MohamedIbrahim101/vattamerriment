import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './Components/Admin/Admin'
import Dashboard from './Components/Dashboard/Dashboard';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
    <Routes>
      <Route path='/' Component={App}/>
      <Route path='/admin' Component={Admin}/>
      <Route path='/dashboard' Component={Dashboard}/>

    </Routes>
    </BrowserRouter>
   
  
);
