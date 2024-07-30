import React,{useEffect} from 'react'
import './footer.scss'
import video from '../../Assets/video2.mp4'
import {FiSend} from 'react-icons/fi'
import {FaHotel} from 'react-icons/fa6'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai'
import {FiChevronRight} from 'react-icons/fi'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})  
      }, [])
  
    return (
        <section className='footer'>
            <div className="videoDiv">
                <video src={video} loop autoPlay muted  type="video/mp4"></video>
            </div>

             <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up"  type="text" placeholder='Enter Email Address' />
                        <button data-aos="fade-up"  className='btn flex'type='submit'>
                          SEND <FiSend className="icon"/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div data-aos="fade-up"  className="logoDiv">
                        <a href="#" className='logo flex'>
                            <FaHotel className="icon"/>Vatta Meriment</a>
                        </div>

                        <div data-aos="fade-up"  className="footerParagraph">
                            When you get into a hotel room, you lock the door, and you know there is a secrecy, there is a luxury, there is fantasy. There is comfort. There is reassurance.
                        </div>

                        <div data-aos="fade-up"  className="footerSocials flex">
                            <AiOutlineTwitter className='icon'/>
                            <AiOutlineYoutube className='icon'/>
                            <AiOutlineFacebook className='icon'/>
                            <AiOutlineInstagram className='icon'/>
                        </div>
                    </div>


                    <div  data-aos="fade-up" className="footerLinks grid">
                        <div className="linkGroup">
                            <span className='groupTitle'>
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Payment
                            </li>

                            
                        </div>

                        <div className="linkGroup">
                            <span className='groupTitle'>
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Payment
                            </li>

                            
                        </div>
                        <div className="linkGroup">
                            <span className='groupTitle'>
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Payment
                            </li>

                            
                        </div>
                    </div>

                    <div  className="footerDiv flex">
                            <small>BEST HOTEL WEBSITE</small>
                            <small>COPYRIGHTS RESERVED - COMPANY 2024</small>
                    </div>

                </div>
             </div>

        </section>
    )
}

export default Footer