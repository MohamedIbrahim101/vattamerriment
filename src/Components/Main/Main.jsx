import React,{useEffect} from 'react';
import './main.scss';
import img from '../../Assets/img(1).jpg'
import img2 from '../../Assets/img(2).jpg'
import img3 from '../../Assets/img(3).jpg'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data =[
    {
        id:1,
        imgSrc: img,
        destTitle: 'Cottage',
        location: 'New Zealand',
        grade: 'Hotel Rent',
        fees: '$600',
        description: 'To write about the content of the rooms.'
    },

    {
        id:2,
        imgSrc:img2,
        destTitle: 'Cottage',
        location: 'New Zealand',
        grade: 'Hotel Rent',
        fees: '$600',
        description: 'To write about the content of the rooms.'
    },
    {
        id:3,
        imgSrc:img3,
        destTitle: 'Cottage',
        location: 'New Zealand',
        grade: 'Hotel Rent',
        fees: '$600',
        description: 'To write about the content of the rooms.'
    },
]
const Main = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})  
      }, [])
  
    return (
    <section className='main container section'>

        <div className="secTitle">
            <h3 data-aos="fade-right"  className="title">
                Most visited Destination
            </h3>
        </div>

        <div className="secContent grid">
            {
                /*  */
            }

            {
                Data.map(({id, imgSrc, description, destTitle, fees, grade, location })=>{
                return(
                    <div key={id} data-aos="fade-up" className="singleDestination">

                        <div className="imageDiv">
                            <img src={imgSrc} alt={destTitle} />
                        </div>

                        <div className="cardInfo">
                            <h4 className="destTitle">
                                {destTitle}
                            </h4>
                            <span className="continent flex">
                                {/* logo if needed*/}
                            </span>
                            <div className="fees flex">
                                <div className="grade">
                                    <span>{grade} <small>+1</small></span>
                                </div>
                                <div className="price">
                                    <h5>{fees}</h5>
                                </div>
                            </div>

                            <div className="desc">
                                <p>{description}</p>
                            </div>

                            <button className='btn flex'>
                                DETAILS <HiOutlineClipboardCheck className="icon" />
                            </button>
                        </div>

                    </div>
                )

                })
            }

        </div>
    </section>
    )
}

export default Main