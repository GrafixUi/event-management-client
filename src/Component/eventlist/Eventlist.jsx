import React, { useState } from 'react'
import "./eventlist.css"
import filter from "../../assets/images/filter.png"
import event1 from "../../assets/images/product1.png"
import { eventsData } from "../../Component/eventslist/eventslist.data";
import header from "../../assets/images/header.png"
const Eventlist = () => {
    const [items, setItems] = useState(eventsData)

    return (
        <div className='eventlist'>
            <img src={header} alt="header" className='Banner' />
            <div className='product'>
                <div className='leftside'>
                    <div className='filter'>
                        <h2>Filter</h2>
                        <img src={filter} alt="filter" className='filterimg'/>
                    </div>
                    <div className='city'>
                        <h4>Select your City</h4>
                        <div className='citybtn'>
                            <button className='citybutton'>Bangalore</button>
                            <button className='citybutton2'>Delhi</button>
                            <button className='citybutton3'>Mumbai</button>
                        </div>
                    </div>
                    <div className='language'>
                        <h4>Select your Language</h4>
                        <div className=''>
                            <button className='languagebtn'>Tamil</button>
                            <button className='languagebtn2'>English</button>
                        </div>
                    </div>
                    <div className='formate'>
                        <h4>Select your Formate</h4>
                        <div>
                            <button className='formatebtn'>2D</button>
                            <button className='formatebtn2'>3D</button>
                            <button className='formatebtn2'>IMAX</button>
                        </div>
                    </div>
                </div>
                <div className='rigthside'>
                    <h1>Events</h1>
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
                </div>
            </div>
        </div>
    )
}

export default Eventlist
