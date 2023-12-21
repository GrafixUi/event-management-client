import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import "./upcoming.css"
import { eventsData } from "../eventslist/eventslist.data";
import event2 from "../../assets/images/product2.png"
import Card from 'react-bootstrap/Card';


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
                <div className='events'>
                    {items.map((item) => (
                        <Card style={{ width: '18rem' }} className='shadow p-3 mb-5 bg-body-tertiary rounded card' >
                            <Card.Img variant="top" src={event2} />
                            <Card.Body className='eventContainer'>
                                <div>
                                    <div className='eventdown'>
                                        <h3 className='month'>{item.Month}</h3>
                                        <p className='Date'>{item.Date}</p>
                                    </div>
                                </div>
                                <div className='eventcontent'>
                                    <Card.Title className='eventtitle'>{item.Title}</Card.Title>
                                    <Card.Text>{item.Decs}
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
            <button className='Button'>Load More</button>
        </div>
    )
}

export default UpComing
