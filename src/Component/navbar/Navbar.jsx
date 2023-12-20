import React from 'react';
import "./navbar.css";
import Dropdown from 'react-bootstrap/Dropdown';
import Logo from "../../assets/images/logo.png"
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className=''>
        <div className='navtop'>
          <img src={Logo} alt='Logo' className='Logo' />
          <div>
            <CiSearch className='searchicons' />
            <input type="text" className='Search' placeholder='What event are you looking for today?' />
          </div>
        </div>
        <div className='navdown'>
          <div class="dropdown">
            <div>
              <button class="dropbtn">Browse All Categories <FaAngleDown className='downarrow' /></button>
              
            </div>
            <div class="dropdown-content">
              <a href="#">Events</a>
              <a href="#">Events 2</a>
              <a href="#">Events 3</a>
            </div>
          </div>
          <div className='navitems'>
            <a>Events</a>
            <a>Movies</a>
            <a>Upcoming Events</a>
            <a>Upcoming Movies</a>
            <a>Venus</a>
            <a>How it works?</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
