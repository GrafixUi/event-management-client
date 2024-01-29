import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/images/logo.png";
import dropdown from "../../assets/icons/dropdown.svg";
import baner from "../../assets/images/banner.png";
import Upcomingevent from "../../component/upcomingevent/Upcomingevents";
import Upcomingmovies from "../../component/upcomingmovie/Upcomingmovie";
import { Link } from "react-router-dom";
import Footer from "../../component/footer/Footer";
import Explore from "../home/explore/Explore";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import FAQ from "../home/faq/FAQ";
import Header from "../../component/header/Header";
import { useStore } from "../../utils/store";
import Feature from "./faq/Feature";

const Home = () => {
  //dropdown for filter
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search) {
      navigate(`/gigs?search=${search}`);
    }
  };

  const [isShowOpen, setShowOpen] = useState(false);

  const handleShowToggle = () => {
    setShowOpen(!isShowOpen);
  };
  const [isSortOpen, setSortOpen] = useState(false);

  const handleSortToggle = () => {
    setSortOpen(!isSortOpen);
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSortOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const shopopen = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dropDownOpen = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  
  return (
    <div className="bg-white flex flex-col container-xl mx-auto">
      <div className="mt-12">
        <Header />
      </div>
      <div className="text-[#242565] text-3xl font-bold mt-10 flex flex-col self-center items-center max-md:max-w-full max-md:mt-5 max-sm:text-xl">
        Explore your Events and Movies
        <Explore />
      </div>

      <div className=" flex self-center items-center justify-center">
        <Upcomingevent />
      </div>
      <Link
        to="eventslist"
        className="text-indigo-600 text-center text-lg font-bold whitespace-nowrap shadow-2xl self-center justify-center items-stretch px-8 py-3 rounded-[50px] border-[1.5px] border-solid border-indigo-600  max-md:px-5  hover:text-white group relative flex overflow-hidden"
      >
        <span className=" absolute left-0 w-full h-0 transition-all bg-indigo-500 opacity-100 group-hover:h-full group-hover:top-0 duration-200 ease" />
        <span className=" relative">Load More</span>
      </Link>
      <div className="flex-col overflow-hidden self-stretch relative flex min-h-[252px] w-full justify-center items-center mt-11 px-16 py-10 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <img
          loading="lazy"
          srcSet={baner}
          alt="banner"
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <div className="relative flex w-[1056px] max-w-full items-center justify-between gap-5 px-px max-md:flex-wrap">
          <img
            loading="lazy"
            srcSet={Logo}
            alt="logo"
            className="aspect-[3.66] object-contain object-center w-[318px] overflow-hidden my-auto"
          />
          <div className="self-stretch flex flex-col items-stretch">
            <div className="text-white text-3xl font-bold">
              Make your own Event{" "}
            </div>
            <div className="text-neutral-400 text-sm mt-5">
              Make your events visible by ticketverse
            </div>
            <Link
              to="login"
              className="text-white text-center w-72 flex self-center text-lg font-bold shadow-2xl bg-pink-600 justify-center items-center mt-6 px- py-3 rounded-[40px] max-md:px-5 max-sm:w-52"
            >
              Create Events
            </Link>
          </div>
        </div>
      </div>

      <div className=" flex self-center items-center justify-center">
        <Upcomingmovies />
      </div>
      <Link
        to="movieslist"
        className="text-indigo-600 text-center text-lg font-bold whitespace-nowrap shadow-2xl self-center justify-center items-stretch  px-8 py-3 rounded-[50px] border-[1.5px] border-solid border-indigo-600  max-md:px-5 hover:text-white group relative flex overflow-hidden"
      >
        <span className=" absolute left-0 w-full h-0 transition-all bg-indigo-500 opacity-100 group-hover:h-full group-hover:top-0 duration-200 ease" />
        <span className=" relative">Load More</span>
      </Link>
      <Feature  />
      <div className="justify-center text-pink-600 text-center text-sm font-bold leading-5 tracking-wider self-center whitespace-nowrap mt-32 max-md:mt-10">
        FAQ
      </div>
      <div className="justify-center text-zinc-700 text-center text-5xl max-sm:text-xl font-bold leading-10 self-center mt-8 max-md:max-w-full max-md:text-4xl">
        Common Questions
      </div>

      <FAQ />

      <div className="justify-center text-center text-base font-bold leading-7 self-center max-w-[552px] mt-14 max-md:max-w-full max-md:mt-10 mb-12">
        I’ve got more questions!
        <br />
        <span className="">We can’t wait to hear them. </span>
        <span className="text-emerald-500">Chat with us</span>
        <span className=""> or </span>
        <span className="text-emerald-500">drop us a message</span>
        <span className=""> any time.</span>
      </div>
    </div>
  );
};

export default Home;
