import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import "./upcoming.css"
import { eventsData } from "../eventslist/eventslist.data";
import event1 from "../../assets/images/product1.png"


const UpComing = () => {
    const [items, setItems] = useState(eventsData)
    return (
        <div className='upcoming'>
            <div className='event-container'>
                <div className='event_content'>
                    <h1>Upcoming Events</h1>
                    <div className='Dropdown'>
                        <div class="dropdownbutton">
                            <div>
                                <button class="dropbutton">Weekly <FaAngleDown className='downarrow' /></button>

                            </div>
                            <div class="dropdowncontent">
                                <a href="#">Events</a>
                                <a href="#">Events 2</a>
                                <a href="#">Events 3</a>
                            </div>
                        </div>
                        <div class="dropdownbutton">
                            <div>
                                <button class="dropbutton">Event Type <FaAngleDown className='downarrow' /></button>

                            </div>
                            <div class="dropdowncontent">
                                <a href="#">Events</a>
                                <a href="#">Events 2</a>
                                <a href="#">Events 3</a>
                            </div>
                        </div>
                        <div class="dropdownbutton">
                            <div>
                                <button class="dropbutton">Any Category <FaAngleDown className='downarrow' /></button>

                            </div>
                            <div class="dropdowncontent">
                                <a href="#">Events</a>
                                <a href="#">Events 2</a>
                                <a href="#">Events 3</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='event'>
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
                <button className='Button'>Load More</button>
        </div>
    )
}

export default UpComing
