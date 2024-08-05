import React from 'react';
import { useState } from 'react';
import Sidenav from '../Sidenav/Sidenav';
import Box from '@mui/material/Box';
import Dashnav from '../Dashnav/Dashnav';
import img from '../../Assets/img(1).jpg';
import img2 from '../../Assets/img(2).jpg';
import img3 from '../../Assets/img(3).jpg';
import  './dashboardroom.scss'
import Switch from '@mui/material/Switch';



const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Dashboardroom =() =>{

    return (
        <>
        <Dashnav/>
        <Box height={30} />

        <Box sx={{ display: 'flex' }}>
        <Sidenav/>
        <Box sx={{flexGrow:1, p:8}}>
        
      <div className="container">
        <div className="cards">
            <div className="card-img">
                <img src={img2} alt="" />
            </div>
            <div className="card-body">
                <h2>Upper</h2>
                <p>                            When you get into a hotel room, you lock the door, and you know there is a secrecy, there is a luxury, there is fantasy. There is comfort. There is reassurance.
                </p>
            </div>
            <div className="card-footer">
            <Switch {...label} defaultChecked />
            </div>
        </div>
        <div className="cards">
            <div className="card-img">
                <img src={img3} alt="" />
            </div>
            <div className="card-body">
                <h2>Lower</h2>
                <p>When you get into a hotel room, you lock the door, and you know there is a secrecy, there is a luxury, there is fantasy. There is comfort. There is reassurance.
                </p>
            </div>
            <div className="card-footer">
            <Switch {...label} defaultChecked />
            </div>
        </div>
        <div className="cards">
            <div className="card-img">
                <img src={img3} alt="" />
            </div>
            <div className="card-body">
                <h2>Upper & Lower</h2>
                <p>When you get into a hotel room, you lock the door, and you know there is a secrecy, there is a luxury, there is fantasy. There is comfort. There is reassurance.
                </p>
            </div>
            <div className="card-footer">
            <Switch {...label} defaultChecked />
            </div>
        </div>
       
      </div>
        </Box>
        </Box>
        </>

    )
}

export default Dashboardroom