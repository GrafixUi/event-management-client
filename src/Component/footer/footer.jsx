import React from 'react'
import "./footer.css"
import Logo from "../../assets/images/logo.png"
const footer = () => {
    return (
        <div className='Footercontainer'>
            <div className='Footercontent'>
                <img src={Logo} alt="Logo" />
                <div className='Footerlinks'>
                    <div className='planevents'>
                        <h2>Plan Events</h2>
                        <div>
                            <a href="#">Create and Set Up</a>
                            <a href="#">Sell Tickets</a>
                            <a href="#">Online RSVP </a>
                            <a href="#">Online Events</a>
                        </div>
                    </div>
                    <div className='pages'>
                        <h2>Eventick</h2>
                        <div>
                            <a href="#">About Us</a>
                            <a href="#">Press</a>
                            <a href="#">Contact Us</a>
                            <a href="#">Help Center </a>
                            <a href="#">How it Works</a>
                            <a href="#">Privacy</a>
                            <a href="#">Terms</a>
                        </div>
                    </div>
                    <div className='Rightside'>
                    <h2>Stay in the loop</h2>
                    <p>Join our mailing list to stay in the loop with our newest for Event and concert</p>
                    <input type="email" placeholder=" Enter Your Email Address" className='Footersearch'/>
                    <button className='btn'>Subscribe</button>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default footer
