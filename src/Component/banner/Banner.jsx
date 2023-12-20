import React from 'react';
import "./banner.css";
import Logo from "../../assets/images/logo.png"
const Banner = () => {
  return (
    <div className='Banner'>
      <img src={Logo} alt="Logo" className='banner-img' />
      <div className='banner-title'>
        <h1>Make your own Event </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <button className='banner-button'>Create Events</button>
      </div>
    </div>
  )
}

export default Banner
