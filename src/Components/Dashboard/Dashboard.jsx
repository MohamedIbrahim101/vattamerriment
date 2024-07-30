import React from 'react'
import './dashboard.scss'
import { IoIosCloseCircle } from "react-icons/io";

const Dashboard=()=>{
    return (
     <div className="sidebar">
        <div className="logo-content">
            <div className="logo">
            <IoIosCloseCircle className='icon'/>
                <div className="logo_name">
                    Hotel
                </div>
            </div>
        </div>
     </div>
    )
}

export default Dashboard