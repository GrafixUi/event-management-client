import React, { useEffect, useRef, useState } from 'react';
import Logo from "../../assets/images/logo.png";
import bg from "../../assets/images/bg.png";
import dropdown from "../../assets/icons/dropdown.svg";
// import btn1 from "../../assets/images/btn1.png";
// import btn2 from "../../assets/images/btn2.png";
import img1 from "../../assets/images/img1.png";
import baner from "../../assets/images/banner.png";
import conference from "../../assets/images/conferences.png";
import Entertainment from "../../assets/images/entertainment.png";
import Sport from "../../assets/images/sports.png";
import Travel from "../../assets/images/travel.png";
import Festival from "../../assets/images/festivals.png";
import Workshop from "../../assets/images/workshop.png";
import UpCominevent from "../../component/upcomingevents/Upcomingevents"
import Upcomingevent from '../../component/upcomingevent/Upcomingevents';
import Upcomingmovies from "../../component/upcomingmovie/Upcomingmovie";
import { Link } from 'react-router-dom';
import Footer from "../../component/footer/Footer"
const Home = () => {
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
    return (
        <div className="bg-white flex flex-col ">
            <div className="flex-col overflow-hidden self-stretch relative flex min-h-[747px] w-full justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
                <img
                    loading="lazy"
                    srcSet={bg} alt='bg'
                    className="absolute h-full w-full object-cover object-center inset-0"
                />
                <div className="relative flex w-full max-w-[1620px] flex-col items-stretch mb-16 max-md:max-w-full max-md:mb-10">
                    <div className="flex w-full items-stretch justify-between gap-5 pr-20 max-md:max-w-full  max-md:pr-5 max-sm:w-44 max-sm:-mt-40 max-sm:-ml-8">
                        <img
                            loading="lazy"
                            srcSet={Logo} alt='logo'
                            className="aspect-[3.49] object-contain object-center w-[250px] overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="self-center flex items-stretch justify-between gap-5 my-auto max-sm:w-5">
                            <button className="text-white text-base font-medium whitespace-nowrap justify-center items-stretch shadow-sm bg-pink-600 grow px-5 py-4 rounded-[50px] max-sm:px-3 max-sm:py-2">
                                <Link to="register">Create Event</Link>
                            </button>
                            <button className="text-white text-base whitespace-nowrap justify-center items-stretch grow px-12 py-2.5 rounded-[50px] border-[1.5px] border-solid border-white max-md:px-5 max-sm:px-3 max-sm:py-2">
                                <Link to="login">Login</Link>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-stretch justify-between gap-5 mt-14 pr-2 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                        <div className="self-center flex grow basis-[0%] flex-col my-auto items-start max-md:max-w-full">
                            {/* <img
                                loading="lazy" alt='img'
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f03ee049ab72c2667a3ec0da5c2ef34b2ecdff6a4e03abe75ae41470494e42a?"
                                className="aspect-[0.66] object-contain object-center w-[29px] stroke-[2.333px] stroke-indigo-600 stroke-opacity-20 overflow-hidden max-w-full"
                            /> */}
                            <div className="text-white text-6xl font-semibold self-stretch mt-9 max-md:max-w-full max-md:text-4xl">
                                <span className="font-medium">Find the Your</span>{" "}
                                <span className="">Favorites</span>
                                <br />
                                Events & Movies
                            </div>
                            <div className="flex max-w-[733px] justify-center items-stretch py-px mt-7">
                                <input type="text" placeholder='Enter Your email..' className="text-neutral-400 text-xs my-auto bg-white flex items-center justify-between gap-5 pl-9 pr-2.5 w-96  max-md:max-w-60 max-md:flex-wrap max-md:pl-5 px-8 py-4 border-none " />
                                <button className="text-white text-center text-lg font-bold leading-4 whitespace-nowrap justify-center items-stretch bg-pink-600 px-8 py-4  self-start max-md:px-5">
                                    Search
                                </button>
                            </div>

                        </div>
                        <img
                            loading="lazy"
                            srcSet={img1} alt='img1'
                            className="aspect-square object-contain object-center w-full overflow-hidden grow basis-[0%] max-md:max-w-full"
                        />
                        {/* <img
                            loading="lazy" alt='img'
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a1d4d9d16a3631ea0a416772740b701a9318c579447591f6ed9b7b75d526cae?"
                            className="aspect-[0.85] object-contain object-center w-[17px] stroke-[2px] stroke-white overflow-hidden self-center shrink-0 max-w-full my-auto"
                        /> */}
                    </div>
                </div>
            </div>
            <div className="text-[#242565] text-3xl font-bold self-center mt-16 max-md:max-w-full max-md:mt-10 max-sm:text-xl">
                Explore the your Events and Movies
            </div>
            <div className="self-center  max-w-full mt-24 max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[32%] max-md:w-full max-md:ml-0">
                        <Link to="eventslist" className="flex-col text-white text-2xl font-medium uppercase relative whitespace-nowrap shadow-sm overflow-hidden aspect-[2.4615384615384617] grow justify-center items-center px-8 py-11 rounded-xl max-md:mt-10 max-md:px-5  text-center  bg-cover bg-center" style={{
                            backgroundImage: `url(${conference})`,
                        }}>
                            conference
                        </Link>
                    </div>
                    <div className="flex flex-col items-stretch w-[52%] max-md:w-full max-md:ml-0">
                        <Link to="eventslist" className="flex-col text-white text-2xl font-medium uppercase relative whitespace-nowrap shadow-sm overflow-hidden aspect-[2.4615384615384617] grow justify-center items-center px-8 py-11  rounded-xl max-md:mt-10 max-md:px-5  text-center  bg-cover bg-center" style={{
                            backgroundImage: `url(${Entertainment})`,
                        }}>
                            Entertainment
                        </Link>
                    </div>
                    <div className="flex flex-col items-stretch w-[52%] max-md:w-full max-md:ml-0">
                        <Link to="eventslist" className="flex-col text-white text-2xl font-medium uppercase relative whitespace-nowrap shadow-sm overflow-hidden aspect-[2.4615384615384617] grow justify-center items-center px-8 py-11 rounded-xl max-md:mt-10 max-md:px-5  text-center  bg-cover bg-center" style={{
                            backgroundImage: `url(${Travel})`,
                        }}>
                            Travel
                        </Link>
                    </div>
                    <div className="flex flex-col items-stretch w-[52%] max-md:w-full max-md:ml-0">
                        <Link to="eventslist" className="flex-col text-white text-2xl font-medium uppercase relative whitespace-nowrap shadow-sm overflow-hidden aspect-[2.4615384615384617] grow justify-center items-center px-8 py-11 rounded-xl max-md:mt-10 max-md:px-5  text-center  bg-cover bg-center" style={{
                            backgroundImage: `url(${Festival})`,
                        }}>
                            Festivals
                        </Link>
                    </div>
                    <div className="flex flex-col items-stretch w-[52%] max-md:w-full max-md:ml-0">
                        <Link to="eventslist" className="flex-col text-white text-2xl font-medium uppercase relative whitespace-nowrap shadow-sm overflow-hidden aspect-[2.4615384615384617] grow justify-center items-center px-8 py-11 rounded-xl max-md:mt-10 max-md:px-5  text-center  bg-cover bg-center" style={{
                            backgroundImage: `url(${Workshop})`,
                        }}>
                            Workshop
                        </Link>
                    </div>
                    <div className="flex flex-col items-stretch w-[52%] max-md:w-full max-md:ml-0">
                        <Link to="eventslist" className="flex-col text-white text-2xl font-medium uppercase relative whitespace-nowrap shadow-sm overflow-hidden aspect-[2.4615384615384617] grow justify-center items-center px-8 py-11 rounded-xl max-md:mt-10 max-md:px-5  text-center  bg-cover bg-center" style={{
                            backgroundImage: `url(${Sport})`,
                        }}>
                            Sport
                        </Link>
                    </div>

                </div>
            </div>
            <Upcomingevent />
            <UpCominevent />
            <Link to="eventslist" className="text-indigo-600 text-center text-lg font-bold whitespace-nowrap shadow-2xl self-center justify-center items-stretch mt-16 px-12 py-6 rounded-[50px] border-[1.5px] border-solid border-indigo-600 max-md:mt-10 max-md:px-5  hover:text-white group relative flex overflow-hidden">
                <span className=' absolute left-0 w-full h-0 transition-all bg-indigo-500 opacity-100 group-hover:h-full group-hover:top-0 duration-200 ease'></span>
                <span className=' relative'>Load More</span>
            </Link>
            <Upcomingmovies />
            <Link to="eventslist" className="text-indigo-600 text-center text-lg font-bold whitespace-nowrap shadow-2xl self-center justify-center items-stretch mt-16 px-12 py-6 rounded-[50px] border-[1.5px] border-solid border-indigo-600 max-md:mt-10 max-md:px-5  hover:text-white group relative flex overflow-hidden">
                <span className=' absolute left-0 w-full h-0 transition-all bg-indigo-500 opacity-100 group-hover:h-full group-hover:top-0 duration-200 ease'></span>
                <span className=' relative'>Load More</span>
            </Link>
            <div className="flex-col overflow-hidden self-stretch relative flex min-h-[252px] w-full justify-center items-center mt-11 px-16 py-10 max-md:max-w-full max-md:mt-10 max-md:px-5">
                <img
                    loading="lazy"
                    srcSet={baner} alt='banner'
                    className="absolute h-full w-full object-cover object-center inset-0"
                />
                <div className="relative flex w-[1056px] max-w-full items-center justify-between gap-5 px-px max-md:flex-wrap">
                    <img
                        loading="lazy"
                        srcSet={Logo} alt='logo'
                        className="aspect-[3.66] object-contain object-center w-[318px] overflow-hidden my-auto"
                    />
                    <div className="self-stretch flex flex-col items-stretch">
                        <div className="text-white text-4xl font-bold">
                            Make your own Event{" "}
                        </div>
                        <div className="text-neutral-400 text-lg mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                        </div>
                        <Link to="login" className="text-white text-center text-lg font-bold shadow-2xl bg-pink-600 justify-center items-center mt-6 px-16 py-6 rounded-[50px] max-md:px-5">
                            Create Events
                        </Link>
                    </div>
                </div>
            </div>
            <div className="self-center flex w-[1087px] max-w-full justify-between gap-5 mt-32 px-5 items-start max-md:flex-wrap max-md:mt-10">
                <div className="text-blue-950 text-4xl font-bold grow shrink basis-auto mt-3 max-sm:ml-5">
                    Upcoming Movies
                </div>
                <div className="flex items-stretch gap-5 max-md:max-w-full max-md:flex-wrap max-sm:hidden">
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
            <Upcomingevent />
            <Upcomingevent />
            <Link to="movieslist" className="text-indigo-600 text-center text-lg font-bold whitespace-nowrap shadow-2xl self-center justify-center items-stretch mt-16 px-12 py-6 rounded-[50px] border-[1.5px] border-solid border-indigo-600 max-md:mt-10 max-md:px-5 hover:text-white group relative flex overflow-hidden">
                <span className=' absolute left-0 w-full h-0 transition-all bg-indigo-500 opacity-100 group-hover:h-full group-hover:top-0 duration-200 ease'></span>
                <span className=' relative'>Load More</span>
            </Link>
            <div className="justify-center text-pink-600 text-center text-sm font-bold leading-5 tracking-wider self-center whitespace-nowrap mt-32 max-md:mt-10">
                FAQ
            </div>
            <div className="justify-center text-zinc-700 text-center text-5xl font-bold leading-10 self-center mt-8 max-md:max-w-full max-md:text-4xl">
                Common questions
            </div>
            <div className="justify-between items-stretch self-center flex w-[1115px] max-w-full gap-5 mt-12 px-5 py-7 border-b-zinc-300 border-b border-solid max-md:flex-wrap max-md:mt-10">
                <div className=' relative w-[1115px] overflow-hidden pb-3'>
                    <input className=' peer absolute top-0 inset-x-0 w-[1115px] max-w-full h-12 opacity-0 z-10 cursor-pointer' type='checkbox' />
                    <div className=' w-full flex items-center'>
                        <h1 className=' text-lg font-semibold text-[#404145] max-sm:w-72 max-sm:text-[18px]'>What’s the difference between the Free plan and the Unlimited plan?</h1>
                    </div>
                    <div className=' max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40'>
                        <div className=' text-[#404145] p-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.
                        </div>
                    </div>
                    <div className=' absolute top-3 right-3 text-[#404145] peer-checked:rotate-180 transition-transform duration-500 rotate-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" /></svg>
                    </div>
                </div>
            </div>
            <div className="justify-between items-stretch self-center flex w-[1115px] max-w-full gap-5 px-5 py-7 border-b-zinc-300 border-b border-solid max-md:flex-wrap max-md:mt-10">
                <div className=' relative w-[1115px] overflow-hidden pb-3'>
                    <input className=' peer absolute top-0 inset-x-0 w-[1115px] max-w-full h-12 opacity-0 z-10 cursor-pointer' type='checkbox' />
                    <div className=' w-full flex items-center'>
                        <h1 className=' text-lg font-semibold text-[#404145]'>Do you offer live support?</h1>
                    </div>
                    <div className=' max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40'>
                        <div className=' text-[#404145] p-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.
                        </div>
                    </div>
                    <div className=' absolute top-3 right-3 text-[#404145] peer-checked:rotate-180 transition-transform duration-500 rotate-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" /></svg>
                    </div>
                </div>
            </div>
            <div className="justify-between items-stretch self-center flex w-[1115px] max-w-full gap-5 px-5 py-7 border-b-zinc-300 border-b border-solid max-md:flex-wrap max-md:mt-10">
                <div className=' relative w-[1115px] overflow-hidden pb-3'>
                    <input className=' peer absolute top-0 inset-x-0 w-[1115px] max-w-full h-12 opacity-0 z-10 cursor-pointer' type='checkbox' />
                    <div className=' w-full flex items-center'>
                        <h1 className=' text-lg font-semibold text-[#404145]'>Can I suggest new features?</h1>
                    </div>
                    <div className=' max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40'>
                        <div className=' text-[#404145] p-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.
                        </div>
                    </div>
                    <div className=' absolute top-3 right-3 text-[#404145] peer-checked:rotate-180 transition-transform duration-500 rotate-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" /></svg>
                    </div>
                </div>
            </div>
            <div className="justify-between items-stretch self-center flex w-[1115px] max-w-full gap-5  px-5 py-7 border-b-zinc-300 border-b border-solid max-md:flex-wrap max-md:mt-10">
                <div className=' relative w-[1115px] overflow-hidden pb-3'>
                    <input className=' peer absolute top-0 inset-x-0 w-[1115px] max-w-full h-12 opacity-0 z-10 cursor-pointer' type='checkbox' />
                    <div className=' w-full flex items-center'>
                        <h1 className=' text-lg font-semibold text-[#404145]'>Is my data secure? Are my clients protected?</h1>
                    </div>
                    <div className=' max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40'>
                        <div className=' text-[#404145] p-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.
                        </div>
                    </div>
                    <div className=' absolute top-3 right-3 text-[#404145] peer-checked:rotate-180 transition-transform duration-500 rotate-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" /></svg>
                    </div>
                </div>
            </div>
            <div className="justify-between items-stretch self-center flex w-[1115px] max-w-full gap-5 px-5 py-7 border-b-zinc-300 border-b border-solid max-md:flex-wrap max-md:mt-10">
                <div className=' relative w-[1115px] overflow-hidden pb-3'>
                    <input className=' peer absolute top-0 inset-x-0 w-[1115px] max-w-full h-12 opacity-0 z-10 cursor-pointer' type='checkbox' />
                    <div className='  w-full flex items-center'>
                        <h1 className=' text-lg font-semibold text-[#404145]'>In which countries can I use Fiverr Workspace?</h1>
                    </div>
                    <div className=' max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40'>
                        <div className=' text-[#404145] p-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.
                        </div>
                    </div>
                    <div className=' absolute top-3 right-3 text-[#404145] peer-checked:rotate-180 transition-transform duration-500 rotate-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" /></svg>
                    </div>
                </div>
            </div>
            <div className="justify-between items-stretch self-center flex w-[1115px] max-w-full gap-5 px-5 py-7 border-b-zinc-300 border-b border-solid max-md:flex-wrap max-md:mt-10">
                <div className=' relative w-[1115px] overflow-hidden pb-3'>
                    <input className=' peer absolute top-0 inset-x-0 w-[1115px] max-w-full h-12 opacity-0 z-10 cursor-pointer' type='checkbox' />
                    <div className=' w-full flex items-center'>
                        <h1 className=' text-lg font-semibold text-[#404145] max-sm:w-72 max-sm:text-[18px]'>What’s the difference between the Free plan and the Unlimited plan?</h1>
                    </div>
                    <div className=' max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40'>
                        <div className=' text-[#404145] p-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.
                        </div>
                    </div>
                    <div className=' absolute top-3 right-3 text-[#404145] peer-checked:rotate-180 transition-transform duration-500 rotate-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" /></svg>
                    </div>
                </div>
            </div>
            <div className="justify-between items-stretch self-center flex w-[1115px] max-w-full gap-5 px-5 py-7 border-b-zinc-300 border-b border-solid max-md:flex-wrap max-md:mt-10">
                <div className=' relative w-[1115px] overflow-hidden pb-3'>
                    <input className=' peer absolute top-0 inset-x-0 w-[1115px] max-w-full h-12 opacity-0 z-10 cursor-pointer' type='checkbox' />
                    <div className='  w-full flex items-center'>
                        <h1 className=' text-lg font-semibold text-[#404145] max-sm:w-72 max-sm:text-[18px]'>Which currencies does Fiverr Workspace support?</h1>
                    </div>
                    <div className=' max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40'>
                        <div className=' text-[#404145] p-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.
                        </div>
                    </div>
                    <div className=' absolute top-3 right-3 text-[#404145] peer-checked:rotate-180 transition-transform duration-500 rotate-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" /></svg>
                    </div>
                </div>
            </div>
            <div className="justify-between items-stretch self-center flex w-[1115px] max-w-full gap-5 px-5 py-7 border-b-zinc-300 border-b border-solid max-md:flex-wrap max-md:mt-10">
                <div className=' relative w-[1115px] overflow-hidden pb-3'>
                    <input className=' peer absolute top-0 inset-x-0 w-[1115px] max-w-full h-12 opacity-0 z-10 cursor-pointer' type='checkbox' />
                    <div className=' w-full flex items-center'>
                        <h1 className=' text-lg font-semibold text-[#404145]'>When will I be billed?</h1>
                    </div>
                    <div className=' max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40'>
                        <div className=' text-[#404145] p-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.
                        </div>
                    </div>
                    <div className=' absolute top-3 right-3 text-[#404145] peer-checked:rotate-180 transition-transform duration-500 rotate-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" /></svg>
                    </div>
                </div>
            </div>


            <div className="justify-center text-center text-base font-bold leading-7 self-center max-w-[552px] mt-14 max-md:max-w-full max-md:mt-10">
                I’ve got more questions!
                <br />
                <span className="">We can’t wait to hear them. </span>
                <span className="text-emerald-500">Chat with us</span>
                <span className=""> or </span>
                <span className="text-emerald-500">drop us a message</span>
                <span className=""> any time.</span>
            </div>
            <Footer />
        </div >
    )
}

export default Home



