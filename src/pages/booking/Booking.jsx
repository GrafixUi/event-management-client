import React from 'react'
import "./booking.css"
import vendorlogo from "../../assets/images/vendorlogo.png";
import Star from "../../Component/rating/Rating";
import vector from "../../assets/icons/Vector.svg"
const Booking = () => {
    return (
        <div className='booking'>
            <div className='bookingpage'>
                <div className='bookingcontent'>
                    <h1>Event Name</h1>
                    <p>HITEX Exhibition Centre, Hitex Road, Izzathnagar, Kothaguda, Telangana, India</p>
                </div>
                <div >
                    <button className='bookingbutton'>Book Now</button>
                </div>
            </div>
            <div className='bookingsection'>
                <div className='bookingtop'>
                    <div className='bookingevent'>
                        <div className='bookingcontent_left'>
                            <p>DEC</p>
                            <h4>08</h4>
                        </div>
                        <div className='bookingcontent_left1'>
                            <h4><span>Released:</span>2021</h4>
                            <h4><span>Gener:</span>Comedy</h4>
                            <h4><span>PG Rating:</span>AM</h4>
                        </div>
                    </div>
                    <div className="bookingcontent_rigth">
                        <h4>theater:</h4>
                        <h3>HITEX Exhibition Centre</h3>
                        <p>HITEX Exhibition Centre, Hitex Road, Izzathnagar,
                            Kothaguda, Telangana, India</p>
                    </div>
                </div>
                <div className='bookingright'>
                    <img src={vendorlogo} alt="vendorlogo" />
                    <div>
                        <h3>airb123</h3>
                        <h4>Premium Digital Studio</h4>
                        <Star />
                        <button className='bookingright_button'>Contact Me</button>
                    </div>
                </div>
            </div>
            <div className='bookintickets'>
                <div className='bookingleft'>
                    <h2>Select Your Seat</h2>
                    <div className='ticket'>
                        <div className='ticket1'>
                            <h3>GOLD TICKETS</h3>
                            <p>PRICE</p>
                        </div>
                        <div className='ticket2'>
                            <h3>GOLD TICKETS</h3>
                            <p>PRICE</p>
                        </div>
                        <div className='ticket3'>
                            <h3>GOLD TICKETS</h3>
                            <p>PRICE</p>
                        </div>
                    </div>
                </div>
                <div className='bookingright_side'>
                    <div className='seat'>
                        <div>
                            <p>Movie Title</p>
                            <h2>EVENT NAME</h2>
                        </div>
                        <div>
                            <p>Seat No</p>
                            <h3>D4,D3</h3>
                        </div>
                    </div>
                    <div className='offers'>
                        <h2>Offers</h2>
                        <div className='offers1'>
                            <img src={vector} alt="vector" />
                            <h3>50% off up to ₹100 | Use code BOOKNOW</h3>
                            <a href="#">Apply</a>
                        </div>
                        <div className='offers2'>
                            <img src={vector} alt="vector" />
                            <h3>20% off up to ₹500 | Use code FIRSTTIME
                            </h3>
                            <a href="#">Apply</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking
