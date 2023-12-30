import React, { useEffect, useState } from "react";
  import { Link, useLocation, useNavigate } from "react-router-dom";
  import "./Navbar.css";
  import newRequest from "../../utils/newRequest";
  import logo from "../../assets/images/logo.png";

  function Navbar() {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const { pathname } = useLocation();

    const isActive = () => {
      window.scrollY > 0 ? setActive(true) : setActive(false);
    };

    useEffect(() => {
      window.addEventListener("scroll", isActive);
      return () => {
        window.removeEventListener("scroll", isActive);
      };
    }, []);

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const navigate = useNavigate();

    const handleLogout = async () => {
      try {
        await newRequest.post("/auth/logout");
        localStorage.setItem("currentUser", null);
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
        <div className="container">
          <div className="logo">
            <Link to="/">
                <img
                  loading="lazy"
                  srcSet={logo}
                  alt="logo"
                  className="aspect-[3.49] object-contain object-center w-[157px] overflow-hidden shrink-0 max-w-full"
                />
              </Link>
            
          </div>
          <div className="links">
            <Link to="/login" className="link">Create</Link>
            <Link className="link" to="/register">
              <button>Join</button>
            </Link>
          </div>
        </div>
        {(active || pathname !== "/") && (
          <>
            <hr />
            <div className="menu">
              <Link className="link menuLink" to="/">
                Events
              </Link>
              <Link className="link menuLink" to="/">
                Movies
              </Link>
              <Link className="link menuLink" to="/">
                Upcoming Events
              </Link>
              <Link className="link menuLink" to="/">
                Upcoming Movies
              </Link>
              <Link className="link menuLink" to="/">
                Venus
              </Link>
              <Link className="link menuLink" to="/">
                How it works?
              </Link>

            </div>
            <hr />
          </>
        )}
      </div>
    );
  }
  export default Navbar;