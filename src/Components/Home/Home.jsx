import React,{useEffect} from 'react';
import './home.scss';
import video from '../../Assets/video1.mp4';
import {HiFilter} from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
    useEffect(()=>{
      Aos.init({duration: 2000})  
    }, [])



    return (
       <section className='home'>
        <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>
         <div className="homeContent container">
            <div className="textDiv">
                <span data-aos="fade-up" className='smallText'>
                    Our Packages
                </span>
                <h1 data-aos="fade-up" className="homeTitle">
                    Search your Rooms
                </h1>
            </div>
          <div  data-aos="fade-up" className="cardDiv grid">

            <div className="CheckinInput">
                <label htmlFor="checkin">Check In:</label>
                <div className="input flex">
                <input type="date"/>
                </div>
            </div>

            <div className="CheckoutInput">
                <label htmlFor="checkout">Check Out:</label>
                <div className="input flex">
                    <input type="date"/>  
                </div>
            </div>

            <div className="personInput">
                <label htmlFor="person">No of Persons:</label>
                <div className="input flex">
                    <input type="text" placeholder='Enter no of person..'/>
                </div>
            </div>
            
            <div className="searchOptions flex">
                <HiFilter className="icon"/>
                <span>MORE FILTERS</span>
            </div>
          </div>
         </div>
      
       </section>
    )
}

export default Home