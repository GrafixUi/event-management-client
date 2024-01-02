import React, { useEffect, useMemo, useRef } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const MobileSidebar = ({ show, setShow, setLoginModal }) => {
  const variants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    closed: { opacity: 0, x: "-100%", transition: { duration: 0.3 } },
  };
  const showRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showRef.current && !showRef.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const body = document.querySelector("html");

  const overflowHidden = () => {
    if (show) {
      return (body.style.overflow = "hidden");
    } else {
      return {
        body: {
          one: (body.style.overflowY = "auto"),
          two: (body.style.overflowX = "hidden"),
        },
      };
    }
  };
  useMemo(() => overflowHidden(), [show]);

  return (
    <div
      className={`w-full h-full bg-black/40 fixed top-0 z-40 left-0 transition-all duration-500 ${show ? "flex" : "hidden"
        }`}
    >
      <motion.div
        animate={show ? "open" : "closed"}
        variants={variants}
        ref={showRef}
        className={`flex flex-col gap-4 justify-start items-start w-[250px] bg-white absolute top-0 z-20 h-screen p-6 ${show ? "left-0" : "-left-[100vw]"
          }`}
      >
        <div className="sticky top-0 z-2 bg-white w-full flex flex-col gap-6 items-start justify-start">
          <NavLink
            to="/"
            className={`border py-3 px-6 rounded bg-primary border-primary text-gray-400 transition-all duration-300 text-base font-semibold`}
          >
            Login
          </NavLink>
          <div
            onClick={() => {
              navigate("/");
              setShow(false);
              setLoginModal(true);
            }}
            className="cursor-pointer text-gray-400 text-base font-medium"
          >
            Create events
          </div>
        </div>
        <NavLink to="/" className={`text-base font-semibold text-gray-400`}>
          Home
        </NavLink>
        <NavLink to="/" className={`text-base font-semibold text-gray-400`}>
          Events
        </NavLink>
        <NavLink to="/" className={`text-base font-semibold text-gray-400`}>
          Movies
        </NavLink>
        <NavLink to="/" className={`text-base font-semibold text-gray-400`}>
          Upcoming Events
        </NavLink>
        <NavLink to="/" className={`text-base font-semibold text-gray-400`}>
          Upcoming Movies
        </NavLink>
        <NavLink to="/" className={`text-base font-semibold text-gray-400`}>
          Venus
        </NavLink>
        <NavLink to="/" className={`text-base font-semibold text-gray-400`}>
          How it workS?
        </NavLink>
      </motion.div>
    </div>
  );
};

export default MobileSidebar;
