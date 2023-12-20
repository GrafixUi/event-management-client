import React, { useState } from 'react';
import "./eventselection.css";
import vendorlogo from "../../assets/images/vendorlogo.png";
import Star from "../../Component/rating/Rating";
import { eventselectionData } from "../../pages/eventselection/eventselection.data";
import Event from "../../assets/images/product3.png";
import Location from "../../assets/images/location.png"
const Eventselection = () => {
    const [items, setItems] = useState(eventselectionData)
    return (
        <div className='eventselection'>
            <div className='headerpage'>
                <div className='pagecontent'>
                    <h1>Event Name</h1>
                    <p>HITEX Exhibition Centre, Hitex Road, Izzathnagar, Kothaguda, Telangana, India</p>
                </div>
                <div >
                    <button className='pagebutton'>Book Now</button>
                </div>
            </div>
            <div className='section'>
                <div className='sectiontop'>
                    <div className='sectioncontent'>
                        <div className='sectioncontent_left'>
                            <p>DEC</p>
                            <h4>08</h4>
                        </div>
                        <div className='sectioncontent_left1'>
                            <h4><span>Released:</span>2021</h4>
                            <h4><span>Gener:</span>Comedy</h4>
                            <h4><span>PG Rating:</span>AM</h4>
                        </div>
                    </div>
                    <div className="sectioncontent_rigth">
                        <h4>theater:</h4>
                        <h3>HITEX Exhibition Centre</h3>
                        <p>HITEX Exhibition Centre, Hitex Road, Izzathnagar,
                            Kothaguda, Telangana, India</p>
                    </div>
                </div>
                <div className='sectionrigth'>
                    <img src={vendorlogo} alt="vendorlogo" />
                    <div>
                        <h3>airb123</h3>
                        <h4>Premium Digital Studio</h4>
                        <Star />
                        <button className='sectionrigth_button'>Contact Me</button>
                    </div>
                </div>
            </div>
            <div>
                <div className='section2'>
                    <div className='section2_content'>
                        <h2> About This Event </h2 >
                        <p>About the movie
                            Eswar, an IT employee, moves into a new house with his pregnant wife. Ilamparuthi, a government employee, has been living next door for over 15 years with his wife and daughter. Things take a turn when Eswar buys a car and parks it in their common parking space. Did their ego win over them or did they realize their mistake?</p>
                        <div>
                            <h4>Movie or Event type</h4>
                            <p>Drama,</p>
                        </div>
                    </div>
                    <div className='section2_location'>
                        <h4>Location:</h4>
                        <img src={Location} alt="Location" className='section2_location' />
                    </div>
                </div>
            </div>
            <div className='section3'>
                <div>
                    <h2>Recoomended For You</h2>
                    <div className='section3show'>
                        {items.map((item) => (
                            <div className='section3_events'>
                                <img src={Event} alt='Event' />
                                <div className='section3container'>
                                    <div className='section3down'>
                                        <h3 className='section3month'>{item.Month}</h3>
                                        <p className='section3Date'>{item.Date}</p>
                                    </div>
                                    <div className='section3content'>
                                        <h3 className='section3heading'>{item.Title}</h3>
                                        <p className='section3desc'>{item.Decs}</p>
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

export default Eventselection

