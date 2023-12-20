import React, { useState } from 'react';
import "./eventslist.css";
import { eventsData } from "./eventslist.data";
import img from "../../assets/images/btn1.png";
import img1 from "../../assets/images/btn2.png";
import event1 from "../../assets/images/product1.png"
const EventsList = () => {
    const [items, setItems] = useState(eventsData)
    return (
        <div className='header'>
            <div className='headerList'>
                <h1 className="headerTitle">Explore the your Events and Movies</h1>
                <div className='buttons'>
                    <div className='buttons'>
                        <img src={img} alt='events' className='btn1' />
                        <h2 className='btnName'>Events</h2>
                    </div>
                    <div className='buttons'>
                        <img src={img1} alt='events' className='btn1' />
                        <h2 className='btnName'>Movies</h2>
                    </div>
                </div>
            </div>
            <div className='events'>
                {items.map((item) => (
                    <div className='eventProduct'>
                        <img src={event1} alt='Event 1' className='eventImage' />
                        <div className='eventContainer'>
                            <div className='eventdown'>
                                <h3 className='month'>{item.Month}</h3>
                                <p className='Date'>{item.Date}</p>
                            </div>
                            <div className='eventcontent'>
                                <h3 className='eventHeading'>{item.Title}</h3>
                                <p className='eventDesc'>{item.Decs}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className='Button'>Load More</button>
        </div>
    )
}

export default EventsList
