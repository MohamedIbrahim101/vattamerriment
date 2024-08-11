import React,{useEffect} from 'react';
import './main.scss';
import img from '../../Assets/img(1).jpg'
import img2 from '../../Assets/img(2).jpg'
import img3 from '../../Assets/img(3).jpg'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data1 =[
    {
        id:1,
        imgSrc: img,
        destTitle: 'Upper + Lower',
        location: 'New Zealand',
        description: 'Both Upper And Lower'
    },

    {
        id:2,
        imgSrc:img2,
        destTitle: 'Upper',
        location: 'New Zealand',
        grade: 'Hotel Rent',
        fees: '$500',
        description: 'To write about the content of the rooms.'
    },
    {
        id:3,
        imgSrc:img3,
        destTitle: 'Lower',
        location: 'New Zealand',
        grade: 'Hotel Rent',
        fees: '$600',
        description: 'To write about the content of the rooms.'
    },
]

const Data2 =[
    {
        id:1,
        imgSrc: img,
        destTitle: 'Upper + Lower',
        location: 'New Zealand',
        description: 'Both Upper And Lower'
    },

    {
        id:2,
        imgSrc:img2,
        destTitle: 'Upper',
        location: 'New Zealand',
        grade: 'Hotel Rent',
        fees: '$50',
        description: 'To write about the content of the rooms.'
    },
    {
        id:3,
        imgSrc:img3,
        destTitle: 'Lower',
        location: 'New Zealand',
        grade: 'Hotel Rent',
        fees: '$60',
        description: 'To write about the content of the rooms.'
    },
]

const Data3=[
    {
        id:1,
        imgSrc: img,
        destTitle: 'Upper + Lower',
        location: 'New Zealand',
        description: 'Both Upper And Lower'
    },

    {
        id:2,
        imgSrc:img2,
        destTitle: 'Upper',
        location: 'New Zealand',
        grade: 'Hotel Rent',
        fees: '$5',
        description: 'To write about the content of the rooms.'
    },
    {
        id:3,
        imgSrc:img3,
        destTitle: 'Lower',
        location: 'New Zealand',
        grade: 'Hotel Rent',
        fees: '$6',
        description: 'To write about the content of the rooms.'
    },
]
const Main = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})  
      }, [])

      const AddToRoom = (id, dataSet) => {
        let selectedRooms = [];
    
        if (id === 1) {
          selectedRooms = dataSet.filter(room => room.id === 2 || room.id === 3);
        } else {
          const selectedRoom = dataSet.find(room => room.id === id);
          if (selectedRoom) {
            selectedRooms = [selectedRoom];
          }
        }
    
        console.log('Selected rooms:', selectedRooms);
    }    
    const renderSection = (title, data) => (
        <section className='main container section'>
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">{title}</h3>
            </div>
            <div className="secContent grid">
                {data.map((room, index) => (
                    <div key={index} data-aos="fade-up" className="singleDestination">
                        <div className="imageDiv">
                            <img src={room.imgSrc} alt={room.destTitle} />
                        </div>
                        <div className="cardInfo">
                            <h4 className="destTitle">{room.destTitle}</h4>
                            <div className="fees flex">
                                <div className="grade">
                                    <span>{room.grade} <small>+1</small></span>
                                </div>
                                <div className="price">
                                    <h5>{room.fees}</h5>
                                </div>
                            </div>
                            <div className="desc">
                                <p>{room.description}</p>
                            </div>
                            <button onClick={() => AddToRoom(room.id, data)} className='btn flex'>
                                DETAILS <HiOutlineClipboardCheck className="icon" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )

    return (
        <>
            {renderSection('Cottage 1', Data1)}
            {renderSection('Cottage 2', Data2)}
            {renderSection('Cottage 3', Data3)}
        </>
    )
}

export default Main