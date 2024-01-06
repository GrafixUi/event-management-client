import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/images/logo.png";
import bg from "../../assets/images/background.png";
import dropdown from "../../assets/icons/dropdown.svg";
import img1 from "../../assets/images/img1.png";
import baner from "../../assets/images/banner.png";
import Upcomingevent from "../../component/upcomingevent/Upcomingevents";
import Upcomingmovies from "../../component/upcomingmovie/Upcomingmovie";
import { Link } from "react-router-dom";
import Footer from "../../component/footer/Footer";
import Explore from "../home/explore/Explore"
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import FAQ from "../home/faq/FAQ";
import CardComponent from "../../component/cato-card/cato-card";
import Featured from "./featured/Featured";

const Home = () => {
  //dropdown for filter
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search) {
      navigate(`/gigs?search=${search}`);
    }
  }

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

  const shopopen = useRef(null)
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

  const dropDownOpen = useRef(null)
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
    <div className="bg-white flex flex-col container-xl">
      <div className="flex-col overflow-hidden self-stretch relative flex min-h-[550px]  w-full  justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <img
          loading="lazy"
          srcSet={bg}
          alt="bg"
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <div className="relative flex w-full max-w-[1220px] flex-col items-stretch mb-16 max-md:max-w-full max-md:mb-10">
          <div className="flex items-stretch justify-between gap-5 mt-14 pr-2 h-[400px] max-md:max-w-full max-md:flex-wrap max-md:mt-10">
            <div className="self-center flex grow basis-[0%] flex-col my-auto items-start max-md:max-w-full max-sm:mt-32">
              <div className="text-white text-3xl font-bold self-stretch mt-3 p-6 max-md:max-w-full max-md:text-1xl max-sm:self-center">
                <span className="font-medium text-[35px]">Find the Your</span>{" "}
                <span className="text-[40px] font-thin header-style-font">Favorites</span>
                <br />
                Events & Movies
              </div>
              {/* <div className=" pl-6">
                <form action="#" className="search-form">
                  <input type="text" placeholder="Find your Events and Movies" required className="" />
                  <button className="material-symbols-outlined" type="sumbit">search</button>
                </form>
              </div> */}
            </div>
            <img
              loading="lazy"
              srcSet={img1}
              alt="img1"
              className="aspect-square max-sm:hidden object-contain object-center w-full overflow-hidden grow basis-[0%] w-50 "
            />
          </div>
        </div>
      </div>
      <div className="text-[#242565] text-3xl font-bold flex flex-col  self-center items-center  mt-16 max-md:max-w-full max-md:mt-10 max-sm:text-xl">
        Explore your Events and Movies
        <Explore />
      </div>

      <div className=" flex self-center items-center justify-center">
        <Upcomingevent />
      </div>
      <Link
        to="eventslist"
        className="text-indigo-600 text-center text-lg font-bold whitespace-nowrap shadow-2xl self-center justify-center items-stretch mt-16 px-8 py-3 rounded-[50px] border-[1.5px] border-solid border-indigo-600 max-md:mt-10 max-md:px-5  hover:text-white group relative flex overflow-hidden"
      >
        <span className=" absolute left-0 w-full h-0 transition-all bg-indigo-500 opacity-100 group-hover:h-full group-hover:top-0 duration-200 ease"></span>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
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
      <div className="self-center flex w-[1087px] max-w-full justify-between gap-5 mt-32 px-5 items-start max-md:flex-wrap max-md:mt-10">
        <div className="text-blue-950 text-2xl font-bold grow shrink basis-auto mt-3 max-sm:ml-20">
          Upcoming Movies
        </div>
        <div className="flex items-stretch gap-5 max-md:max-w-full max-md:flex-wrap max-sm:hidden">
          <div
            ref={dropdownRef}
            className="bg-violet-50 flex items-stretch justify-between gap-5 px-6 py-4 rounded-[50px] max-md:px-5"
          >
            <div ref={dropdownRef}>
              <button
                type="button"
                onClick={handleSortToggle}
                className="flex items-center"
              >
                <span className="p-1 text-[#015464] text-sm">WeekDays</span>
                <img
                  src={dropdown}
                  alt="Dropdown"
                  className="w-3 h-3"
                  width={3}
                  height={3}
                />
              </button>
              {isSortOpen && (
                <ul className="absolute mt-5 mr-96 z-50 p-2 py-2 w-36 bg-[#ffffff] border border-gray-200 shadow-lg rounded-md flex flex-col">
                  <button className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 ">
                    12-01-2024{" "}
                  </button>
                  <button className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 ">
                    12-01-2024{" "}
                  </button>{" "}
                  <button className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 ">
                    12-01-2024{" "}
                  </button>{" "}
                </ul>
              )}
            </div>
          </div>
          <div ref={shopopen} className="bg-violet-50 flex items-stretch justify-between gap-5 px-6 py-4 rounded-[50px] max-md:px-5">
            <div ref={dropdownRef}>
              <button
                type="button"
                onClick={handleShowToggle}
                className="flex items-center"
              >
                <span className="p-1 text-[#015464] text-sm">EventType</span>
                <img
                  src={dropdown}
                  alt="Dropdown"
                  className="w-3 h-3"
                  width={3}
                  height={3}
                />
              </button>
              {isShowOpen && (
                <ul className="absolute mt-5 mr-96 p-2 z-50 py-2 w-32 bg-[#ffffff] border border-gray-200 shadow-lg rounded-md flex flex-col">
                  <button className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 ">
                    12-01-2024{" "}
                  </button>
                  <button className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 ">
                    12-01-2024{" "}
                  </button>{" "}
                  <button className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 ">
                    12-01-2024{" "}
                  </button>{" "}
                </ul>
              )}
            </div>
          </div>
          <div ref={dropDownOpen} className="bg-violet-50 flex items-stretch justify-between gap-4 px-6 py-4 rounded-[50px] max-md:px-5">
            <div ref={dropdownRef}>
              <button
                type="button"
                onClick={handleDropdownToggle}
                className="flex items-center"
              >
                <span className="p-1 text-[#015464] text-sm">Any Category</span>
                <img
                  src={dropdown}
                  alt="Dropdown"
                  className="w-3 h-3"
                  width={3}
                  height={3}
                />
              </button>
              {isDropdownOpen && (
                <ul className="absolute mt-5 mr-96 z-50 p-2 py-2 w-32 bg-[#ffffff] border border-gray-200 shadow-lg rounded-md flex flex-col">
                  <button className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 ">
                    12-01-2024{" "}
                  </button>
                  <button className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 ">
                    12-01-2024{" "}
                  </button>{" "}
                  <button className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 ">
                    12-01-2024{" "}
                  </button>{" "}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className=" flex self-center items-center justify-center">
        <Upcomingmovies />
      </div>
      <Link
        to="movieslist"
        className="text-indigo-600 text-center text-lg font-bold whitespace-nowrap shadow-2xl self-center justify-center items-stretch mt-16 px-8 py-3 rounded-[50px] border-[1.5px] border-solid border-indigo-600 max-md:mt-10 max-md:px-5 hover:text-white group relative flex overflow-hidden"
      >
        <span className=" absolute left-0 w-full h-0 transition-all bg-indigo-500 opacity-100 group-hover:h-full group-hover:top-0 duration-200 ease"></span>
        <span className=" relative">Load More</span>
      </Link>
      <div className="justify-center text-pink-600 text-center text-sm font-bold leading-5 tracking-wider self-center whitespace-nowrap mt-32 max-md:mt-10">
        FAQ
      </div>
      <div className="justify-center text-zinc-700 text-center text-5xl max-sm:text-xl font-bold leading-10 self-center mt-8 max-md:max-w-full max-md:text-4xl">
        Common questions
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
      <Footer />
    </div>
  );
};

export default Home;
