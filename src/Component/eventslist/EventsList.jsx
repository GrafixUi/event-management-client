import React, { useState } from 'react';
import "./eventslist.css";
import { eventsData } from "./eventslist.data";
import img from "../../assets/images/btn1.png";
import img1 from "../../assets/images/btn2.png";
import event2 from "../../assets/images/product2.png"
import Card from 'react-bootstrap/Card';
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
            <button className='Button'>Load More</button>
        </div>
    )
}

export default EventsList
