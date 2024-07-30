import React, {useState} from 'react';
import './navbar.scss';
import { IoIosCloseCircle } from "react-icons/io";
import { IoGrid } from "react-icons/io5";
import logo from '../../Assets/logo.png'



const Navbar = () => {

    const [active, setActive]= useState('navBar')
//open toggle navbar
const showNav = ()=>{
    setActive('navBar activeNavbar')
}

//close navbar
const removeNavbar = ()=>{
    setActive('navBar')
}
    return (
        <section className='navBarSection'>
            <header className='header flex'>
                <div className='logoDiv'>
                    <a href='#' className='logo flex'>
                      <img src={logo} alt="" />
                    </a>
                </div>
                <div className={active}>
                    <ul className='navLists flex'>
                        <li className='navItem'>
                            <a href="#" className='navLink'>Home</a>
                        </li>
                        <li className='navItem'>
                            <a href="#" className='navLink'>Gallery</a>
                        </li>
                        <li className='navItem'>
                            <a href="#" className='navLink'>About Us</a>
                        </li>
                        <li className='navItem'>
                            <a href="" className='navLink'>Contact Us</a>
                        </li>
                        
                        <button className='btn'>
                            <a href="#">BOOK NOW</a>
                        </button>
                    </ul>
                    <div onClick={removeNavbar} className="closeNavbar">
                    <IoIosCloseCircle className='icon'/>
                    </div>
                </div>
                
                <div onClick={showNav} className="toggleNavbar">
                <IoGrid className='icon'/>
                </div>


            </header>
        </section>
    )
}

export default Navbar