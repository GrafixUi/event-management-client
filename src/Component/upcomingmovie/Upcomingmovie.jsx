import React, { useEffect, useRef, useState } from 'react';
import product1 from "../../assets/images/product1.png";
import dropdown from "../../assets/icons/dropdown.svg";
import Upcomingevent from "../upcomingevents/Upcomingevents";
import { upcomingData } from "./upcomingmovie.data";
import { Link } from 'react-router-dom';

const Upcomingevents = () => {
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

    const [items, setItems] = useState(upcomingData);

    return (
        <div className="flex flex-col">
            <div className="self-center flex w-[1087px] max-w-full justify-between gap-5 mt-6 px-5 items-start max-md:flex-wrap max-md:mt-10">
                <div className="text-blue-950 text-4xl font-bold grow shrink basis-auto mt-2.5 max-sm:self-center max-sm:items-center max-sm:ml-5">
                    Upcoming Events
                </div>
                <div className=" flex items-center justify-center gap-1 max-md:max-w-full max-md:flex-wrap max-sm:hidden">
                    <div ref={dropdownRef} className="bg-violet-50 flex items-stretch justify-between gap-5 px-6 py-4 rounded-[50px] max-md:px-5">
                        <div ref={dropdownRef}>

                            <button
                                type="button"
                                onClick={handleSortToggle}
                                className="flex items-center"
                            >
                                <span className="p-1 text-[#015464] text-sm">
                                    Weekdays
                                </span>
                                <img src={dropdown} alt="Dropdown" className="w-3 h-3"
                                    width={3}
                                    height={3} />
                            </button>
                            {isSortOpen && (
                                <ul className="absolute mt-10 mr-96 z-50 py-2 w-40 bg-[#ffffff] border border-gray-200 shadow-lg rounded-md flex flex-col">

                                    <button className=" text-[#015464] text-sm my-3 ">
                                        12-01-2024{" "}
                                    </button>


                                    <button className=" text-[#015464] text-sm my-3 ">
                                        12-01-2024{" "}
                                    </button>
                                    {" "}

                                    <button className=" text-[#015464] text-sm my-3 ">
                                        12-01-2024{" "}
                                    </button>
                                    {" "}
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="bg-violet-50 flex items-stretch justify-between gap-5 px-6 py-4 rounded-[50px] max-md:px-5">
                        <div ref={dropdownRef}>

                            <button
                                type="button"
                                onClick={handleShowToggle}
                                className="flex items-center"
                            >
                                <span className="p-1 text-[#015464] text-sm">
                                    Event Date
                                </span>
                                <img src={dropdown} alt="Dropdown" className="w-3 h-3"
                                    width={3}
                                    height={3} />
                            </button>
                            {isShowOpen && (
                                <ul className="absolute mt-10 mr-96 z-50 py-2 w-40 bg-[#ffffff] border border-gray-200 shadow-lg rounded-md flex flex-col">

                                    <button className=" text-[#015464] text-sm my-3 ">
                                        12-01-2024{" "}
                                    </button>


                                    <button className=" text-[#015464] text-sm my-3 ">
                                        12-01-2024{" "}
                                    </button>
                                    {" "}

                                    <button className=" text-[#015464] text-sm my-3 ">
                                        12-01-2024{" "}
                                    </button>
                                    {" "}
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="bg-violet-50 flex items-stretch justify-between gap-4 px-6 py-4 rounded-[50px] max-md:px-5">
                        <div ref={dropdownRef}>

                            <button
                                type="button"
                                onClick={handleDropdownToggle}
                                className="flex items-center"
                            >
                                <span className="p-1 text-[#015464] text-sm">
                                    Any Category
                                </span>
                                <img src={dropdown} alt="Dropdown" className="w-3 h-3"
                                    width={3}
                                    height={3} />
                            </button>
                            {isDropdownOpen && (
                                <ul className="absolute mt-10 mr-96 z-50 py-2 w-40 bg-[#ffffff] border border-gray-200 shadow-lg rounded-md flex flex-col">

                                    <button className=" text-[#015464] text-sm my-3 ">
                                        12-01-2024{" "}
                                    </button>


                                    <button className=" text-[#015464] text-sm my-3 ">
                                        12-01-2024{" "}
                                    </button>
                                    {" "}

                                    <button className=" text-[#015464] text-sm my-3 ">
                                        12-01-2024{" "}
                                    </button>
                                    {" "}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className=" py-5 mt-8 ml-8 flex flex-wrap items-center justify-center gap-8 max-sm:-ml-1">
                {items.map((item) => (
                    <Link to="/eventslist">
                        <div key={item.id} className="bg-white shadow shadow-black flex w-[343px] flex-col items-stretch pb-3 rounded-2xl mb-5 justify-center transition duration-500 hover:scale-105">
                            <img
                                loading="lazy"
                                srcSet={product1} alt='product1'
                                className="aspect-[1.7] object-contain object-center w-full overflow-hidden"
                            />
                            <div className="self-center flex justify-between gap-5 mt-5 items-start w-full">
                                <div className="flex basis-[0%] flex-col justify-center align-middle mt-5 items-stretch px-5">
                                    <div className="text-indigo-600 text-center text-xs font-bold whitespace-nowrap">
                                        APR
                                    </div>
                                    <div className="text-black text-3xl font-bold whitespace-nowrap mt-2">
                                        14
                                    </div>
                                </div>
                                <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5">
                                    <div className="text-black text-base font-bold leading-6">
                                        {item.title}
                                    </div>
                                    <div className="text-neutral-500 text-sm leading-5 mt-5">
                                        {item.desc}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <Upcomingevent />
        </div>
    );
};

export default Upcomingevents;

