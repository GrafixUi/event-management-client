import React from 'react'
import "./header.css"
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../assets/images/logo.png"
import img from "../../assets/images/img1.png"

const Header = () => {
  return (
    <div className='nav'>
      <Navbar expand="lg" className="bg-body-tertiary nav">
        <Container fluid>
          <Navbar.Brand href="#"><img src={Logo} alt="Logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '0px' }}
              navbarScroll
            >

            </Nav>
            <Form className="d-flex">
              <button className='headerbutton'>Create Event</button>
              <button className='button1'>Login</button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <div className="swiperslide">
          <div className="swipercontent">
            <h1 className="header-title">
              Find the Your <span className="headercontent">Favorites</span>
              <br />
              Events & Movies
            </h1>
            <form className="form">
              <input className="search"
                type="email"
                placeholder="Find your Events and Movies"
              />
              <button className="button" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="rightside">
            <img src={img} alt="" className="rightimg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
