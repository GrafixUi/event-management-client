import React from 'react';
import header from "../../assets/images/header2.png";
import header2 from "../../assets/images/booking.png";
import vendor from "../../assets/images/vendorlogo.png";
import Rating from '../rating/Rating';
import { Link } from 'react-router-dom';
import Navbar from "../../component/navbar/Navbar"
import Footer from "../../component/footer/Footer"
import {useState, useEffect} from 'react'
import axios from 'axios'
const Moviesticket = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const movieid = searchParams.get("movieid");
    const [items, setItems] = useState([]);
    useEffect(() => {
        const upcomingDataNew = async () => {
          try {
            const upcomingEvents = await axios.get(
              `${process.env.REACT_APP_BACKENDURL}/movies/${movieid}`
            );
            setItems(upcomingEvents.data.data);
          } catch (err) {
            console.log(err);
          }
        };
        upcomingDataNew();
      }, []);

    return (
        <div className="bg-white flex flex-col items-stretch">
            <Navbar />
            <div className="flex-col overflow-hidden relative flex min-h-[550px] w-full justify-center items-center self-center px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
                <img
                    loading="lazy"
                    srcSet={header} alt='header'
                    className="absolute h-[500px] max-sm:h-full w-full object-cover flex items-center self-center justify-center object-center inset-0"
                />
                <div className="relative flex w-full max-w-[1300px] max-sm:self-center max-sm:items-center items-stretch justify-between gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
                    <div className="max-md:max-w-full">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 ">
                            <div className="flex flex-col items-stretch w-[44%] max-md:w-full max-md:ml-0">
                                <img
                                    loading="lazy"
                                    srcSet={header2} alt='header2'
                                    className="aspect-[0.8] object-contain object-center w-[300px] overflow-hidden grow max-md:mt-9 max-sm:ml-6"
                                />
                            </div>
                            <div className="flex flex-col items-stretch w-[40%] ml-5 max-md:w-full max-md:ml-0">
                                <div className="flex flex-col items-stretch my-auto max-md:mt-10">
                                    <h1 className="text-white text-3xl whitespace-nowrap max-md:text-4xl">
                                        {items?.attributes?.movietitle}
                                    </h1>
                                    <p className="text-neutral-400 text-justify text-base mt-7 max-md:mt-10">
                                        <br />
                                       {items?.attributes?.moviedesc}
                                    </p>
                                    <h2 className="text-white text-lg whitespace-nowrap mt-5">
                                        Moive Type : {items?.attributes?.movietype}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="backdrop-blur-[13.899999618530273px] self-center flex grow basis-[0%] flex-col justify-center my-auto px-10 py-10 rounded-3xl items-end max-md:max-w-full max-md:px-5">
                        <Link to="/confirmticket" class="relative group overflow-hidden  px-16 h-16 rounded-md flex space-x-2 items-center bg-gradient-to-r bg-blue-950">
                            <span class="relative text-white font-bold text-xl w-32">Book Now</span>
                            <div class="flex items-center -space-x-3 translate-x-3">
                                <div class="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="self-center w-full max-w-[1300px] max-md:max-w-full max-md:mt-10">
                <div className="max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 max-sm:p-5">
                        <div className="flex flex-col items-stretch w-[68%] max-md:w-full max-md:ml-0 shadow-sm shadow-slate-300 rounded-lg ">
                            <div className="bg-white flex w-full grow items-stretch justify-between gap-5 mx-auto pl-16 pr-20 py-10 rounded-2xl max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:px-5">
                                <div className="flex items-stretch justify-between gap-5">
                                    <div className="backdrop-blur-[3.950000047683716px] bg-blue-950 flex grow basis-[0%] flex-col items-center pl-3 pr-5 rounded-xl">
                                        <h2 className="text-white text-xl mt-5 font-semibold leading-6 uppercase whitespace-nowrap">
                                            {items?.attributes?.month}
                                        </h2>
                                        <h1 className="text-white text-4xl pr-4 pl-4 font-bold self-stretch whitespace-nowrap mt-4 max-md:text-4xl">
                                            {items?.attributes?.day}
                                        </h1>
                                    </div>
                                    <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                                        <div className="items-stretch flex justify-between gap-3">
                                            <h3 className="text-black text-sm">Released:</h3>
                                            <h3 className="text-black text-sm">{items?.attributes?.year}</h3>
                                        </div>
                                        <div className="items-stretch flex justify-between gap-3 mt-5">
                                            <h3 className="text-black text-sm">Genre:</h3>
                                            <h3 className="text-black text-sm">{items?.attributes?.genre}</h3>
                                        </div>
                                        <div className="items-stretch flex justify-between gap-3 mt-5">
                                            <h3 className="text-black text-sm">PG Rating:</h3>
                                            <h3 className="text-black text-sm">AM</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-stretch mt-3 self-start">
                                    <h3 className="text-black text-sm font-medium">Theater:</h3>
                                    <h3 className="text-blue-950 text-lg font-semibold mt-3">
                                        {items?.attributes?.theater}
                                    </h3>
                                    <h3 className="text-blue-950 text-md font-light mt-4">
                                        {items?.attributes?.address}
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[32%] ml-5 max-md:w-full max-md:ml-0 shadow-sm shadow-slate-300 rounded-lg max-sm:mt-6">
                            <div className="bg-white grow w-full pl-16 pr-20 py-9 rounded-2xl max-md:max-w-full max-md:mt-10 max-md:px-5">
                                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 max-sm:-mt-10">
                                    <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0 max-sm:items-center">
                                        <img
                                            loading="lazy"
                                            srcSet={vendor} alt='vendor'
                                            className="aspect-square object-contain object-center w-[110px] justify-center items-center overflow-hidden shrink-0 max-w-full max-md:mt-10"
                                        />
                                    </div>
                                    <div className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0 max-sm:items-center ">
                                        <div className="flex grow flex-col items-stretch max-md:mt-10">
                                            <h3 className="text-neutral-500 text-base font-bold leading-5">
                                                {items?.attributes?.organiser}
                                            </h3>
                                            {/* <h2 className="text-neutral-500 text-base leading-5 whitespace-nowrap mt-2.5 max-md:mr-1">
                                                Premium Digital Studio
                                            </h2> */}
                                            <div className="flex justify-between gap-1 mt-1.5 items-start max-md:mr-1">
                                                <div className="items-stretch flex gap-1 pr-3 py-0.5">
                                                    <Rating />
                                                </div>
                                            </div>
                                            <Link to="/contact" className="text-neutral-500 text-center text-sm font-semibold leading-4 items-stretch rounded border justify-center mt-5 px-7 py-3.5 border-solid border-neutral-500 max-md:px-5">
                                                Contact Me
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-center w-full max-w-[1300px] mt-12 mb-10 max-md:max-w-full max-md:my-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 max-sm:p-5">
                    <div className="flex flex-col items-stretch w-[66%]  max-md:w-full max-md:ml-0 shadow-sm shadow-slate-300 rounded-lg ">
                        <div className="bg-white flex grow flex-col w-full px-10 py-12 rounded-[32px] max-md:max-w-full max-md:mt-8 max-md:px-5">
                            <div className="self-stretch flex flex-col items-center mt-9 max-md:max-w-full">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/27e1bb98651f78aebf8cffa0c6d28d3fd08d7d19c2d9fa3e3efbb8072655f6f4?" alt='img'
                                    className="aspect-[9.29] object-contain object-center w-[873px] fill-[linear-gradient(177deg,#D9D9D9_2.52%,rgba(217,217,217,0.00)_47.43%)] overflow-hidden max-md:max-w-full"
                                />
                                <div className="text-neutral-400 text-xs font-light mt-1">
                                    All eyes this way!
                                </div>
                                <div className="text-neutral-500 text-xs font-light mt-20 max-md:mt-10">
                                    Balcony - Rs. 150.00
                                </div>
                                <div className="w-[655px] max-w-full mt-6">
                                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                        <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                                            <div className="flex grow flex-col items-stretch max-md:mt-10">
                                                <div className="flex flex-col pl-14 items-end max-md:pl-5">
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                    <div className="self-stretch flex items-stretch justify-between gap-5 mt-5">
                                                        <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                        <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                    </div>
                                                </div>
                                                <div className="flex items-stretch justify-between gap-5 mt-5">
                                                    <div className="bg-zinc-300 flex w-8 shrink-0 h-8 flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-8 flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-8 flex-col rounded" />
                                                </div>
                                                <div className="flex items-stretch justify-between gap-5 mt-16 max-md:mt-10">
                                                    <div className="bg-zinc-300 flex w-8 shrink-0 h-[33px] flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                </div>
                                                <div className="flex items-stretch justify-between gap-5 mt-5">
                                                    <div className="bg-zinc-300 flex w-8 shrink-0 h-[33px] flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                </div>
                                                <div className="flex items-stretch justify-between gap-5 mt-5">
                                                    <div className="bg-zinc-300 flex w-8 shrink-0 h-[33px] flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                </div>
                                                <div className="flex items-stretch justify-between gap-5 mt-16 max-md:mt-10">
                                                    <div className="bg-zinc-300 flex w-8 shrink-0 h-8 flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-8 flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-8 flex-col rounded" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-stretch w-[41%] ml-5 max-md:w-full max-md:ml-0">
                                            <div className="flex grow flex-col max-md:mt-10">
                                                <div className="self-stretch flex items-stretch justify-between gap-4">
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                </div>
                                                <div className="self-stretch flex items-stretch justify-between gap-4 mt-5">
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                </div>
                                                <div className="self-stretch flex items-stretch justify-between gap-4 mt-5">
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-8 flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-8 flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-8 flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-8 flex-col rounded" />
                                                </div>
                                                <div className="text-neutral-500 text-xs font-light ml-5 mt-9 self-start max-md:ml-2.5">
                                                    Normal - Rs. 200.00
                                                </div>
                                                <div className="self-stretch flex items-stretch justify-between gap-4 mt-6">
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                </div>
                                                <div className="self-stretch flex items-stretch justify-between gap-4 mt-5">
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                    <div className="bg-red-600 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                    <div className="bg-red-600 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                </div>
                                                <div className="self-stretch flex items-stretch justify-between gap-4 mt-5">
                                                    <div className="bg-lime-600 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                    <div className="bg-lime-600 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                </div>
                                                <div className="text-neutral-500 text-xs font-light self-stretch whitespace-nowrap mt-9">
                                                    Executive - Rs. 250.00
                                                </div>
                                                <div className="self-stretch flex items-stretch justify-between gap-4 mt-6">
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-8 flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-8 flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-8 flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-8 flex-col rounded" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-stretch w-[27%] ml-5 max-md:w-full max-md:ml-0">
                                            <div className="flex grow flex-col items-stretch max-md:mt-10">
                                                <div className="bg-zinc-300 flex shrink-0 h-[33px] flex-col rounded" />
                                                <div className="flex items-stretch justify-between gap-5 mt-5 pr-14 max-md:pr-5">
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-8 shrink-0 h-[33px] flex-col rounded" />
                                                </div>
                                                <div className="flex items-stretch justify-between gap-5 mt-5">
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-8 flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-8 shrink-0 h-8 flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-8 flex-col rounded" />
                                                </div>
                                                <div className="flex items-stretch justify-between gap-5 mt-16 max-md:mt-10">
                                                    <div className="bg-red-600 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-8 shrink-0 h-[33px] flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                </div>
                                                <div className="flex items-stretch justify-between gap-5 mt-5">
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-8 shrink-0 h-[33px] flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                </div>
                                                <div className="flex items-stretch justify-between gap-5 mt-5">
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-8 shrink-0 h-[33px] flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                                </div>
                                                <div className="flex items-stretch justify-between gap-5 mt-16 max-md:mt-10">
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-8 flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-8 shrink-0 h-8 flex-col rounded" />
                                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-8 flex-col rounded" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-[139px] max-w-full flex-col items-stretch ml-28 mt-5 self-start max-md:ml-2.5">
                                <div className="flex items-stretch justify-between gap-5">
                                    <div className="bg-zinc-300 flex w-8 shrink-0 h-[33px] flex-col rounded" />
                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                </div>
                                <div className="flex items-stretch justify-between gap-5 mt-5">
                                    <div className="bg-red-600 flex w-8 shrink-0 h-[33px] flex-col rounded" />
                                    <div className="bg-red-600 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                </div>
                            </div>
                            <div className="self-center z-[1] flex mt-0 w-[180px] max-w-full flex-col items-stretch">
                                <div className="flex items-stretch justify-between gap-4">
                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                </div>
                                <div className="flex items-stretch justify-between gap-4 mt-5">
                                    <div className="bg-red-600 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                    <div className="bg-red-600 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                    <div className="bg-red-600 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                    <div className="bg-red-600 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                </div>
                            </div>
                            <div className="flex mt-0 w-[140px] max-w-full flex-col items-stretch mr-28 self-end max-md:mr-2.5">
                                <div className="flex items-stretch justify-between gap-5">
                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                    <div className="bg-zinc-300 flex w-8 shrink-0 h-[33px] flex-col rounded" />
                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                </div>
                                <div className="flex items-stretch justify-between gap-5 mt-5">
                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                    <div className="bg-zinc-300 flex w-8 shrink-0 h-[33px] flex-col rounded" />
                                    <div className="bg-zinc-300 flex w-[33px] shrink-0 h-[33px] flex-col rounded" />
                                </div>
                            </div>
                            <div className="z-[1] flex items-stretch justify-between gap-5 ml-44 mt-20 self-start max-md:ml-2.5 max-md:mt-10">
                                <div className="bg-red-600 flex w-[25px] shrink-0 h-[27px] flex-col rounded" />
                                <div className="text-neutral-500 text-xs font-light self-center my-auto">
                                    Unavailable
                                </div>
                            </div>
                            <div className="self-center z-[1] flex mt-0 w-[85px] max-w-full items-stretch gap-5">
                                <div className="bg-zinc-300 flex shrink-0 h-[26px] flex-col flex-1 rounded" />
                                <div className="text-neutral-500 text-xs font-light mt-1.5 self-start">
                                    Available
                                </div>
                            </div>
                            <div className="flex mt-0 w-[82px] max-w-full items-stretch gap-5 mr-52 mb-7 self-end max-md:mr-2.5">
                                <div className="bg-lime-600 flex shrink-0 h-[26px] flex-col flex-1 rounded" />
                                <div className="text-neutral-500 text-xs font-light mt-1.5 self-start">
                                    Selected
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0 shadow-sm shadow-slate-300 rounded-lg max-sm:mt-6">
                        <div className="flex flex-col px-5 mt-4 max-md:max-w-full max-md:mt-8">
                            <div className="bg-blue-950  self-stretch flex flex-col pl-14 pr-20 py-11 rounded-xl items-start max-md:max-w-full max-md:px-5 ">
                                <h2 className="text-zinc-300 text-md leading-7">
                                    Movie Title
                                </h2>
                                <h2 className="text-white text-xl font-bold uppercase whitespace-nowrap mt-3.5">
                                    {items?.attributes?.movietitle}
                                </h2>
                                <h2 className="text-zinc-300 text-md mt-7">Seat No </h2>
                                <h1 className="text-white text-lg font-semibold mt-3.5">
                                    D4,D3
                                </h1>
                            </div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4672bdf0d884350fffc7229ebea2f1d26f4e52a26b93bf07fd4d1bf9816fc7a?" alt='img'
                                className="aspect-[498] object-contain object-center w-full stroke-[1px] stroke-zinc-500 stroke-opacity-50 overflow-hidden self-stretch mt-8 max-md:max-w-full"
                            />
                            <div className="justify-center items-stretch bg-white self-stretch flex flex-col mt-5 p-8 rounded-3xl border-2 border-dashed border-blue-950 max-md:max-w-full max-md:px-5">
                                <div className="text-blue-950 text-2xl font-medium max-md:max-w-full">
                                    Offers
                                </div>
                                <div className="justify-between items-stretch flex gap-5 mt-3 max-md:max-w-full max-md:flex-wrap">
                                    <div className="justify-between items-center self-center flex gap-2.5">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/93e2f9a3ab332727d07dceec0d7d91924df0a1bce654f8e4f84ece11c0d38c0e?" alt='img'
                                            className="aspect-square object-contain object-center w-5 fill-blue-950 overflow-hidden shrink-0 max-w-full my-auto"
                                        />
                                        <div className="text-neutral-800 text-xs font-medium self-stretch grow whitespace-nowrap">
                                            50% off up to ₹100 | Use code BOOKNOW
                                        </div>
                                    </div>
                                    <Link className="text-blue-950 text-base font-medium grow whitespace-nowrap">
                                        Apply
                                    </Link>
                                </div>
                                <div className="justify-between items-stretch flex w-full gap-5 mt-2 max-md:max-w-full max-md:flex-wrap">
                                    <div className="justify-between items-center self-center flex gap-2.5">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/93e2f9a3ab332727d07dceec0d7d91924df0a1bce654f8e4f84ece11c0d38c0e?" alt='img'
                                            className="aspect-square object-contain object-center w-5 fill-blue-950 overflow-hidden shrink-0 max-w-full my-auto"
                                        />
                                        <div className="text-neutral-800 text-xs font-medium self-stretch grow whitespace-nowrap">
                                            20% off up to ₹100 | Use code FIRSTTIME
                                        </div>
                                    </div>
                                    <Link className="text-blue-950 text-base font-medium">
                                        Apply
                                    </Link>
                                </div>
                            </div>
                            <div className="justify-center items-stretch border bg-white self-stretch flex flex-col mt-5 px-8 py-4 rounded-xl border-solid border-zinc-500 border-opacity-50 max-md:max-w-full max-md:px-5">
                                <div className="justify-between items-center flex gap-5 max-md:max-w-full max-md:flex-wrap">
                                    <div className="items-stretch flex gap-2.5 my-auto">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/93c146497e8165cb89e62d813ff44ceaae8089be958bef572eb8b97e70731be6?" alt='img'
                                            className="aspect-square object-contain object-center w-8 fill-blue-950 overflow-hidden shrink-0 max-w-full"
                                        />
                                        <div className="text-neutral-800 text-xl font-medium grow whitespace-nowrap self-start">
                                            Apply Code
                                        </div>
                                    </div>
                                    <input className="text-zinc-500 text-opacity-50 w-36  text-sm font-medium whitespace-nowrap items-stretch self-stretch grow justify-center px-6 py-5 border-b-zinc-500 border-b-opacity-50 border border-none max-md:px-5" type='text' placeholder='Enter code' />

                                </div>
                            </div>
                            <div className="justify-center items-stretch border bg-white self-stretch flex flex-col mt-5 p-8 rounded-xl border-solid border-zinc-500 border-opacity-50 max-md:max-w-full max-md:px-5">
                                <h2 className="text-neutral-800 text-xl font-medium max-md:max-w-full">
                                    Bill details
                                </h2>
                                <div className="justify-between items-stretch flex gap-5 mt-3 max-md:max-w-full max-md:flex-wrap">
                                    <h3 className="text-zinc-500 text-xs font-medium">
                                        Base Ticket Fare
                                    </h3>
                                    <h3 className="text-zinc-500 text-xs font-medium">
                                        ₹1000.00
                                    </h3>
                                </div>
                                <div className="justify-between items-stretch flex gap-5 mt-2.5 max-md:max-w-full max-md:flex-wrap">
                                    <h3 className="text-zinc-500 text-xs font-medium">
                                        Total Travellers
                                    </h3>
                                    <h3 className="text-zinc-500 text-xs font-medium">3</h3>
                                </div>
                                <div className="justify-between items-stretch flex gap-5 mt-2.5 max-md:max-w-full max-md:flex-wrap">
                                    <h3 className="text-zinc-500 text-xs font-medium">
                                        CGST & SGST
                                    </h3>
                                    <h3 className="text-zinc-500 text-xs font-medium">
                                        ₹500.00
                                    </h3>
                                </div>
                                <div className="justify-between items-stretch flex gap-5 mt-4 max-md:max-w-full max-md:flex-wrap">
                                    <h3 className="text-neutral-700 text-xl font-medium">
                                        Total Charge
                                    </h3>
                                    <h3 className="text-neutral-700 text-xl font-medium">
                                        ₹3500.00
                                    </h3>
                                </div>
                            </div>
                            <h2 className="text-zinc-500 text-xs font-medium self-center mt-5 max-md:max-w-full">
                                Discounts, offers and price concessions will be applied later
                                during payment
                            </h2>
                            <Link to="/confirmticket" className="text-white text-base text-center font-bold whitespace-nowrap justify-center items-center bg-blue-950 self-center w-[300px] max-w-full mt-11 px-16 py-5 rounded-xl max-md:mt-10 max-md:px-5">
                                Book Now
                            </Link>
                            <button className="text-pink-600 text-base font-semibold self-center whitespace-nowrap mt-5">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Moviesticket





