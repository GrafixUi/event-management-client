import "./header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Logo from "../../assets/images/logo.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import img from "../../assets/images/img1.png"
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="nav">
      <div className="nav_content">
        <div className="Content">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <img src={Logo} alt="" />
          </Link>
          {user ? user.username : (
            <div className="">
              <button className="button1">Create Events</button>
              <button className="headerbutton">Login</button>
            </div>
          )}
        </div>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide>
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
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Navbar;

