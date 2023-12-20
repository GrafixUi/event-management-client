import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import "./comingmovies.css"
import { eventsData } from "../eventslist/eventslist.data";
import event1 from "../../assets/images/product1.png"


const UpComing = () => {
    const [items, setItems] = useState(eventsData)
    return (
        <div className='upcomingmovie'>
            <div className='movie'>
                <div className='movie_content'>
                    <h1>Upcoming Movies</h1>
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
                <div className='Movies'>
                    {items.map((item) => (
                        <div className='MoviesProduct'>
                            <img src={event1} alt='Event1' className='MoviesImage' />
                            <div className='MoviesContainer'>
                                <div className='Moviesdown'>
                                    <h3 className='Moviesmonth'>{item.Month}</h3>
                                    <p className='MoviesDate'>{item.Date}</p>
                                </div>
                                <div className='Moviescontent'>
                                    <h3 className='MoviesHeading'>{item.Title}</h3>
                                    <p className='MoviesDesc'>{item.Decs}</p>
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
