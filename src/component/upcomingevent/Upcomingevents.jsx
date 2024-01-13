import React, { useEffect, useRef, useState } from "react";
import product1 from "../../assets/images/product1.png";
import dropdown from "../../assets/icons/dropdown.svg";
import { upcomingData } from "./upcomingevents.data";
import { Link } from "react-router-dom";
import axios from "axios";

const Upcomingevents = () => {
    const datetime = new Date();
    const date = datetime.getDate();
    console.log(date);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const upcomingDataNew = async () => {
      try {
        const upcomingEvents = await axios.get(
          `${process.env.REACT_APP_BACKENDURL}/events?pagination[pageSize]=3`
        );
        setItems(upcomingEvents.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    upcomingDataNew();
  }, []);
  //dropdown for filter

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

  console.log(items);

  return (
    <div className="flex flex-col">
      <div className="self-center flex w-[1087px] max-w-full justify-between gap-5 mt-6 px-5 items-start max-md:flex-wrap max-md:mt-10 max-sm:w-80 max-sm:mt-5 max-sm:self-center max-sm:items-center">
        <div className="text-blue-950 text-2xl font-bold grow shrink basis-auto mt-2.5 max-sm:self-center max-sm:items-center max-sm:ml-5">
          Upcoming Events
        </div>
        <div className=" flex items-center justify-center gap-5 max-md:max-w-full max-md:flex-wrap max-sm:hidden">
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
                <ul className="absolute mt-5 mr-96 p-2 z-50 py-2 w-36 bg-[#ffffff] border border-gray-200 shadow-lg rounded-md flex flex-col">
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
          <div
            ref={shopopen}
            className="bg-violet-50 flex items-stretch justify-between gap-5 px-6 py-4 rounded-[50px] max-md:px-5"
          >
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
                <ul className="absolute mt-5 mr-96 z-50 py-2 w-36 p-2 bg-[#ffffff] border border-gray-200 shadow-lg rounded-md flex flex-col">
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
          <div
            ref={dropDownOpen}
            className="bg-violet-50 flex items-stretch justify-between gap-4 px-6 py-4 rounded-[50px] max-md:px-5"
          >
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
                <ul className="absolute mt-5 mr-96 z-50 py-2 w-36 p-2 bg-[#ffffff] border border-gray-200 shadow-lg rounded-md flex flex-col">
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
      <div className=" py-5 mt-8 ml-8 grid grid-cols-3 w-[1000px]  max-sm:grid-cols-2 max-sm:w-[320px] items-center justify-center gap-12 ">
        {items.map((item) => (
          <Link to="/eventslist">
            <div
              key={item.id}
              className="bg-white shadow-sm shadow-slate-300 flex w-[300px] flex-col items-stretch pb-3 rounded-2xl mb-5 justify-center transition duration-500 hover:scale-105 max-sm:w-[170px] max-sm:-ml-8"
            >
              <img
                loading="lazy"
                srcSet={product1}
                alt="product1"
                className="aspect-[1.7] object-contain object-center w-full overflow-hidden"
              />
              <div className="self-center flex justify-between gap-5 mt-0.5 items-start w-full">
                <div className="flex basis-[0%] flex-col max-sm:w-12 justify-center align-middle  items-center self-center px-5">
                  <div className="text-indigo-600 max-sm:w-2 text-center text-xs max-sm:text-[10px] font-bold whitespace-nowrap">
                    {item.attributes.month}
                  </div>
                  <div className="text-black text-xl max-sm:w-2 font-bold whitespace-nowrap mt-2">
                    {item.attributes.day}
                  </div>
                </div>
                <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5 max-sm:-ml-2">
                  <div className="text-black text-xs max-sm:text-[9px] max-sm:w-28 max-sm:-ml-8 font-bold leading-5 max-sm:leading-2">
                    {item.attributes.eventtitle}
                  </div>
                  <div className="text-neutral-500 text-xs max-sm:text-[8px] max-sm:w-28 max-sm:-ml-8 leading-2 mt-1 max-sm:leading-2">
                    {item.attributes.description}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Upcomingevents;
