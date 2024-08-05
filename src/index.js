import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './Components/Admin/Admin'
import Sidenav from './Components/Sidenav/Sidenav';
import Dashboardroom from './Components/Dashboardroom/Dashboardroom';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
    <Routes>
      <Route path='/' Component={App}/>
      <Route path='/admin' Component={Admin}/>
      <Route path='/sidenav' Component={Sidenav}/>
      <Route path='/dashboard' Component={Dashboardroom}/>
      {/* <Route path='/roomstatus'exact element={<Dashboardroom/>} ></Route> */}
      

    </Routes>
    </BrowserRouter>
   
  
);
