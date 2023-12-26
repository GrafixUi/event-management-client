import React from 'react';
import header from "../../assets/images/header2.png";
import vendor from "../../assets/images/vendorlogo.png";
import vector from "../../assets/icons/Vector.svg";
import Rating from "../rating/Rating";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Link } from 'react-router-dom';

const Eventticket = () => {
    return (
        <div className="bg-white flex flex-col items-stretch">
            <Navbar />
            <div className="flex-col overflow-hidden relative flex min-h-[582px] w-full justify-center items-center px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5 max-sm:-mt-0">
                <img
                    loading="lazy"
                    srcSet={header} alt='header'
                    className="absolute h-full w-full object-cover object-center inset-0"
                />
                <div className="relative flex w-full max-w-[1438px] items-stretch justify-between gap-5 mt-96 mb-3 px-px max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-sm:ml-20">
                    <div className="flex flex-col items-stretch max-md:max-w-full">
                        <div className="text-white text-3xl max-md:max-w-full max-md:text-4xl">
                            Event Name
                        </div>
                        <div className="text-neutral-300 text-lg font-light mt-5 max-md:max-w-full">
                            HITEX Exhibition Centre, Hitex Road, Izzathnagar, Kothaguda,
                            Telangana, India
                        </div>
                    </div>
                    <Link to="/confirmticket" className="text-white text-base font-bold whitespace-nowrap bg-blue-950 justify-center items-center mt-10 px-16 py-6 rounded-2xl self-end max-md:px-5">
                        BOOK NOW
                    </Link>
                </div>
            </div>
            <div className="self-center w-full max-w-[1478px] mt-16 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[66%] max-md:w-full max-md:ml-0 shadow-sm shadow-slate-300 rounded-lg">
                        <div className="bg-white flex w-full grow items-stretch justify-between gap-5 mx-auto px-16 py-10 rounded-2xl max-md:max-w-full max-md:flex-wrap max-md:mt-8 max-md:px-5">
                            <div className="flex items-stretch justify-between gap-5">
                                <div className="backdrop-blur-[3.950000047683716px] bg-blue-950 flex grow basis-[0%] flex-col items-center pl-3 pr-5 pt-4 pb-6 rounded-xl">
                                    <div className="text-white text-xl font-semibold leading-6 uppercase whitespace-nowrap">
                                        dec
                                    </div>
                                    <div className="text-white text-6xl font-bold self-stretch whitespace-nowrap mt-5 max-md:text-4xl">
                                        08
                                    </div>
                                </div>
                                <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                                    <div className="items-stretch flex justify-between gap-3">
                                        <div className="text-black text-sm">Released:</div>
                                        <div className="text-black text-sm">2021</div>
                                    </div>
                                    <div className="items-stretch flex justify-between gap-3 mt-5">
                                        <div className="text-black text-sm">Gener:</div>
                                        <div className="text-black text-sm">Comedy</div>
                                    </div>
                                    <div className="items-stretch flex justify-between gap-3 mt-5">
                                        <div className="text-black text-sm">PG Rating:</div>
                                        <div className="text-black text-sm">AM</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-stretch mt-2 self-start">
                                <div className="text-black text-sm font-medium">Theater:</div>
                                <div className="text-blue-950 text-sm font-semibold mt-4">
                                    HITEX Exhibition Centre
                                </div>
                                <div className="text-blue-950 text-xs font-light mt-4">
                                    HITEX Exhibition Centre, Hitex Road, Izzathnagar, <br />
                                    Kothaguda, Telangana, India
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0 shadow-sm shadow-slate-300 rounded-lg">
                        <div className="bg-white grow w-full px-20 py-9 rounded-2xl max-md:max-w-full max-md:mt-8 max-md:px-5">
                            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 ">
                                <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0 max-sm:self-center max-sm:items-center">
                                    <img
                                        loading="lazy" 
                                        srcSet={vendor} alt='vendor'
                                        className="aspect-square object-contain object-center w-[110px] justify-center items-center overflow-hidden shrink-0 max-w-full max-md:mt-10"
                                    />
                                </div>
                                <div className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0">
                                    <div className="flex grow flex-col items-stretch max-md:mt-10">
                                        <div className="text-neutral-500 text-base font-bold leading-5">
                                            airb123
                                        </div>
                                        <div className="text-neutral-500 text-base leading-5 whitespace-nowrap mt-2.5 max-md:mr-0.5">
                                            Premium Digital Studio
                                        </div>
                                        <div className="flex justify-between gap-1 mt-1.5 items-start max-md:mr-0.5">
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
            <div className="self-center w-full max-w-[1478px] mt-12 max-md:max-w-full max-md:my-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[66%] max-md:w-full max-md:ml-0 shadow-sm shadow-slate-300 rounded-lg">
                        <div className="bg-white flex grow flex-col items-stretch w-full pl-14 pr-20 py-12 rounded-[32px] max-md:max-w-full max-md:mt-8 max-md:px-5">
                            <div className="text-blue-950 text-3xl font-bold mr-6 mt-12 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
                                Select Your Seat
                            </div>
                            <div className=" bg-zinc-300 hover:bg-blue-950 flex w-[590px] max-w-full items-center justify-between gap-5 mr-6 mt-20 pl-16 pr-12 py-8 rounded-xl max-md:flex-wrap max-md:mr-2.5 max-md:mt-10 max-md:px-5">
                                <button className=" text-start text-white text-xl font-extrabold leading-6 uppercase grow shrink basis-auto my-auto">
                                    Gold tickets
                                </button>
                                <div className="justify-center text-white text-xl font-medium uppercase my-auto">
                                    Price
                                </div>
                            </div>
                            <div className=" bg-zinc-300 hover:bg-blue-950 flex w-[590px] max-w-full items-center justify-between gap-5 mr-6 mt-20 pl-16 pr-12 py-8 rounded-xl max-md:flex-wrap max-md:mr-2.5 max-md:mt-10 max-md:px-5">
                                <button className=" text-start text-white text-xl font-extrabold leading-6 uppercase grow shrink basis-auto my-auto">
                                    Gold tickets
                                </button>
                                <div className="justify-center text-white text-xl font-medium uppercase my-auto">
                                    Price
                                </div>
                            </div>
                            <div className=" bg-zinc-300 hover:bg-blue-950 flex w-[590px] max-w-full items-center justify-between gap-5 mr-6 mt-20 pl-16 pr-12 py-8 rounded-xl max-md:flex-wrap max-md:mr-2.5 max-md:mt-10 max-md:px-5">
                                <button className=" text-start text-white text-xl font-extrabold leading-6 uppercase grow shrink basis-auto my-auto">
                                    Gold tickets
                                </button>
                                <div className="justify-center text-white text-xl font-medium uppercase my-auto">
                                    Price
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0 shadow-sm shadow-slate-300 rounded-lg">
                        <div className="flex flex-col px-5 max-md:max-w-full max-md:mt-8">
                            <div className="bg-blue-950 self-stretch flex mt-5 flex-col pl-14 pr-20 py-11 rounded-xl items-start max-md:max-w-full max-md:px-5">
                                <div className="text-zinc-300 text-lg leading-7">
                                    Movie Title
                                </div>
                                <div className="text-white text-3xl font-bold uppercase whitespace-nowrap mt-5">
                                    Event name
                                </div>
                                <div className="text-zinc-300 text-lg mt-9">Seat No </div>
                                <div className="text-white text-2xl font-semibold mt-3.5">
                                    D4,D3
                                </div>
                            </div>
                            <div className="justify-center items-stretch bg-white self-stretch flex flex-col mt-5 p-8 rounded-3xl border-2 border-dashed border-blue-950 max-md:max-w-full max-md:px-5">
                                <div className="text-blue-950 text-2xl font-medium max-md:max-w-full">
                                    Offers
                                </div>
                                <div className="justify-between items-stretch flex gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
                                    <div className="justify-between items-center flex gap-2.5">
                                        <img
                                            loading="lazy"
                                            src={vector} alt='vector'
                                            className="aspect-square object-contain object-center w-5 fill-blue-950 overflow-hidden shrink-0 max-w-full my-auto"
                                        />
                                        <div className="text-neutral-800 text-base font-medium self-stretch grow whitespace-nowrap">
                                            50% off up to ₹100 | Use code BOOKNOW
                                        </div>
                                    </div>
                                    <Link className="text-blue-950 text-base font-medium grow whitespace-nowrap">
                                        Apply
                                    </Link>
                                </div>
                                <div className="justify-between items-stretch flex w-full gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
                                    <div className="justify-between items-center flex gap-2.5">
                                        <img
                                            loading="lazy"
                                            src={vector} alt='vector'
                                            className="aspect-square object-contain object-center w-5 fill-blue-950 overflow-hidden shrink-0 max-w-full my-auto"
                                        />
                                        <div className="text-neutral-800 text-base font-medium self-stretch grow whitespace-nowrap">
                                            20% off | Use code FIRSTTIME
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
                                            src={vector} alt='vector'
                                            className="aspect-square object-contain object-center w-8 fill-blue-950 overflow-hidden shrink-0 max-w-full"
                                        />
                                        <div className="text-neutral-800 text-xl font-medium grow whitespace-nowrap self-start">
                                            Apply Code
                                        </div>
                                    </div>
                                    <div className="text-zinc-500 text-opacity-50 text-sm font-medium whitespace-nowrap items-stretch self-stretch grow justify-center px-6 py-5 border-b-zinc-500 border-b-opacity-50 border-b border-solid max-md:px-5">
                                        <input type="text" placeholder='Enter Code' className=' p-5' />
                                    </div>
                                </div>
                            </div>
                            <div className="justify-center items-stretch border bg-white self-stretch flex flex-col mt-5 p-8 rounded-xl border-solid border-zinc-500 border-opacity-50 max-md:max-w-full max-md:px-5">
                                <div className="text-neutral-800 text-xl font-medium max-md:max-w-full">
                                    Bill details
                                </div>
                                <div className="justify-between items-stretch flex gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
                                    <div className="text-zinc-500 text-xs font-medium">
                                        Base Ticket Fare
                                    </div>
                                    <div className="text-zinc-500 text-xs font-medium">
                                        ₹1000.00
                                    </div>
                                </div>
                                <div className="justify-between items-stretch flex gap-5 mt-2.5 max-md:max-w-full max-md:flex-wrap">
                                    <div className="text-zinc-500 text-xs font-medium">
                                        Total Travellers
                                    </div>
                                    <div className="text-zinc-500 text-xs font-medium">3</div>
                                </div>
                                <div className="justify-between items-stretch flex gap-5 mt-2.5 max-md:max-w-full max-md:flex-wrap">
                                    <div className="text-zinc-500 text-xs font-medium">
                                        CGST & SGST
                                    </div>
                                    <div className="text-zinc-500 text-xs font-medium">
                                        ₹500.00
                                    </div>
                                </div>
                                <div className="justify-between items-stretch flex gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
                                    <div className="text-neutral-700 text-xl font-medium">
                                        Total Charge
                                    </div>
                                    <div className="text-neutral-700 text-xl font-medium">
                                        ₹3500.00
                                    </div>
                                </div>
                            </div>
                            <div className="text-zinc-500 text-xs font-medium self-center mt-5 max-md:max-w-full">
                                Discounts, offers and price concessions will be applied later
                                during payment
                            </div>
                            <Link to="/confirmticket" className="text-white text-center text-base font-semibold whitespace-nowrap justify-center items-center bg-blue-950 self-center w-[404px] max-w-full mt-11 px-16 py-5 rounded-xl max-md:mt-10 max-md:px-5 cursor-pointer">
                                Book Now
                            </Link>
                            <div className="text-pink-600 text-base font-semibold self-center whitespace-nowrap mt-5 cursor-pointer">
                                Cancel
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Eventticket







