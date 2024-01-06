import React from 'react';
import header from "../../assets/images/header2.png";
import vendor from "../../assets/images/vendorlogo.png";
import vector from "../../assets/icons/Vector.svg";
import Rating from "../rating/Rating";
import { Link } from 'react-router-dom';
import Navbar from "../../component/navbar/Navbar"
import Footer from "../../component/footer/Footer"

const Eventticket = () => {
    return (
        <div className="bg-white flex flex-col items-stretch">
            <Navbar />
            <div className="flex-col overflow-hidden relative flex min-h-[450px] w-full justify-center items-center px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5 max-sm:-mt-0">
                <img
                    loading="lazy"
                    srcSet={header} alt='header'
                    className="absolute h-[480px] max-sm:h-full w-full object-cover object-center inset-0 max-md:h-[300px]"
                />
                <div className="relative flex w-full max-w-[1438px] items-stretch justify-around gap-5 mt-72 mb-3 px-px max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-sm:ml-20">
                    <div className="flex flex-col items-stretch max-md:max-w-full">
                        <div className="text-white text-3xl max-md:max-w-full max-md:text-4xl">
                            Event Name
                        </div>
                        <div className="text-neutral-300 text-lg font-light mt-5 max-md:max-w-full">
                            HITEX Exhibition Centre, Hitex Road, Izzathnagar, Kothaguda,
                            Telangana, India
                        </div>
                    </div>
                    <Link to="/confirmticket" class="relative group overflow-hidden px-10 h-16 rounded-md flex space-x-2 items-center bg-gradient-to-r bg-blue-950 max-sm:-ml-20">
                        <span class="relative text-white font-bold text-lg">Book Now</span>
                        <div class="flex items-center -space-x-3 translate-x-3">
                            <div class="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="self-center w-full max-w-[1300px] mt-5 max-md:max-w-full max-md:mt-10 max-sm:p-4">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[66%] max-md:w-full max-md:ml-0 shadow-sm shadow-slate-300 rounded-lg">
                        <div className="bg-white flex w-full grow items-stretch justify-between gap-5 mx-auto px-16 py-10 rounded-2xl max-md:max-w-full max-md:flex-wrap max-md:mt-8 max-md:px-5">
                            <div className="flex items-stretch justify-between gap-5">
                                <div className="backdrop-blur-[3.950000047683716px] bg-blue-950 flex grow basis-[0%] flex-col items-center pl-4 pr-8 pt-4 pb-5 rounded-xl">
                                    <h2 className="text-white text-lg font-semibold leading-6 uppercase whitespace-nowrap">
                                        dec
                                    </h2>
                                    <h2 className="text-white text-4xl font-bold self-stretch whitespace-nowrap mt-5 max-md:text-4xl">
                                        08
                                    </h2>
                                </div>
                                <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                                    <div className="items-stretch flex justify-between gap-3">
                                        <h3 className="text-black text-sm">Released:</h3>
                                        <h3 className="text-black text-sm">2021</h3>
                                    </div>
                                    <div className="items-stretch flex justify-between gap-3 mt-5">
                                        <h3 className="text-black text-sm">Gener:</h3>
                                        <h3 className="text-black text-sm">Comedy</h3>
                                    </div>
                                    <div className="items-stretch flex justify-between gap-3 mt-5">
                                        <h3 className="text-black text-sm">PG Rating:</h3>
                                        <h3 className="text-black text-sm">AM</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-stretch mt-2 self-start">
                                <h3 className="text-black text-sm font-medium">Theater:</h3>
                                <h3 className="text-blue-950 text-sm font-semibold mt-4">
                                    HITEX Exhibition Centre
                                </h3>
                                <h2 className="text-blue-950 text-xs font-light mt-4">
                                    HITEX Exhibition Centre, Hitex Road, Izzathnagar, <br />
                                    Kothaguda, Telangana, India
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0 shadow-sm shadow-slate-300 rounded-lg max-sm:mt-3">
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
                                        <h3 className="text-neutral-500 text-base font-bold leading-5">
                                            airb123
                                        </h3>
                                        <h3 className="text-neutral-500 text-base leading-5 whitespace-nowrap mt-2.5 max-md:mr-0.5">
                                            Premium Digital Studio
                                        </h3>
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
            <div className="self-center w-full max-w-[1300px] mb-9 mt-12 max-md:max-w-full max-md:my-10 max-sm:p-5">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 max-sm:-mt-16">
                    <div className="flex flex-col items-stretch w-[66%] max-md:w-full max-md:ml-0 shadow-sm shadow-slate-300 rounded-lg">
                        <div className="bg-white flex grow flex-col items-stretch w-full pl-14 pr-20 py-12 rounded-[32px] max-md:max-w-full max-md:mt-8 max-md:px-5">
                            <h2 className="text-blue-950 text-2xl font-bold mr-6  max-md:max-w-full max-md:mr-2.5 max-md:mt-10 ">
                                Select Your Seat
                            </h2>
                            <div className=" bg-zinc-300 hover:bg-blue-950 flex w-[590px] max-w-full items-center justify-between gap-5 mr-6 mt-20 pl-16 pr-12 py-8 rounded-xl max-md:flex-wrap max-md:mr-2.5 max-md:mt-10 max-md:px-5 cursor-pointer">
                                <button className=" text-start text-white text-xl font-extrabold leading-6 uppercase grow shrink basis-auto my-auto">
                                    Gold tickets
                                </button>
                                <p className="justify-center text-white text-xl font-medium uppercase my-auto">
                                    Price
                                </p>
                            </div>
                            <div className=" bg-zinc-300 hover:bg-blue-950 flex w-[590px] max-w-full items-center justify-between gap-5 mr-6 mt-20 pl-16 pr-12 py-8 rounded-xl max-md:flex-wrap max-md:mr-2.5 max-md:mt-10 max-md:px-5 cursor-pointer">
                                <button className=" text-start text-white text-xl font-extrabold leading-6 uppercase grow shrink basis-auto my-auto">
                                    Gold tickets
                                </button>
                                <p className="justify-center text-white text-xl font-medium uppercase my-auto">
                                    Price
                                </p>
                            </div>
                            <div className=" bg-zinc-300 hover:bg-blue-950 flex w-[590px] max-w-full items-center justify-between gap-5 mr-6 mt-20 pl-16 pr-12 py-8 rounded-xl max-md:flex-wrap max-md:mr-2.5 max-md:mt-10 max-md:px-5 cursor-pointer">
                                <button className=" text-start text-white text-xl font-extrabold leading-6 uppercase grow shrink basis-auto my-auto">
                                    Gold tickets
                                </button>
                                <p className="justify-center text-white text-xl font-medium uppercase my-auto">
                                    Price
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0 shadow-sm shadow-slate-300 rounded-lg">
                        <div className="flex flex-col px-5 max-md:max-w-full max-md:mt-8">
                            <div className="bg-blue-950 self-stretch flex mt-5 flex-col pl-14 pr-20 py-11 rounded-xl items-start max-md:max-w-full max-md:px-5">
                                <h2 className="text-zinc-300 text-lg leading-7">
                                    Movie Title
                                </h2>
                                <h2 className="text-white text-xl font-bold uppercase whitespace-nowrap mt-5">
                                    Event name
                                </h2>
                                <h3 className="text-zinc-300 text-lg mt-5">Seat No </h3>
                                <h3 className="text-white text-2xl font-semibold mt-3.5">
                                    D4,D3
                                </h3>
                            </div>
                            <div className="justify-center items-stretch bg-white self-stretch flex flex-col mt-5 p-8 rounded-3xl border-2 border-dashed border-blue-950 max-md:max-w-full max-md:px-5">
                                <h1 className="text-blue-950 text-xl font-medium max-md:max-w-full">
                                    Offers
                                </h1>
                                <div className="justify-between items-stretch flex gap-5 mt-2 max-md:max-w-full max-md:flex-wrap">
                                    <div className="justify-between items-center flex gap-2.5">
                                        <img
                                            loading="lazy"
                                            src={vector} alt='vector'
                                            className="aspect-square object-contain object-center w-5 fill-blue-950 overflow-hidden shrink-0 max-w-full my-auto"
                                        />
                                        <h3 className="text-neutral-800 text-xs font-medium self-stretch grow whitespace-nowrap flex items-center justify-center">
                                            50% off up to ₹100 | Use code BOOKNOW
                                        </h3>
                                    </div>
                                    <Link className="text-blue-950 text-base font-medium grow whitespace-nowrap">
                                        Apply
                                    </Link>
                                </div>
                                <div className="justify-between items-stretch flex w-full gap-5 mt-1 max-md:max-w-full max-md:flex-wrap">
                                    <div className="justify-between items-center flex gap-2.5">
                                        <img
                                            loading="lazy"
                                            src={vector} alt='vector'
                                            className="aspect-square object-contain object-center w-5 fill-blue-950 overflow-hidden shrink-0 max-w-full my-auto"
                                        />
                                        <h3 className="text-neutral-800 text-xs font-medium self-stretch grow whitespace-nowrap flex items-center justify-center">
                                            20% off up to ₹100 | Use code FIRSTTIME
                                        </h3>
                                    </div>
                                    <Link className="text-blue-950 text-base font-medium ml-2 grow whitespace-nowrap">
                                        Apply
                                    </Link>
                                </div>
                            </div>
                            <div className="justify-center items-stretch border bg-white self-stretch flex flex-col mt-3 px-8 py-4 rounded-xl border-solid border-zinc-500 border-opacity-50 max-md:max-w-full max-md:px-5">
                                <div className="justify-between items-center flex gap-5 max-md:max-w-full max-md:flex-wrap">
                                    <div className="items-stretch flex gap-2.5 my-auto">
                                        <img
                                            loading="lazy"
                                            src={vector} alt='vector'
                                            className="aspect-square object-contain object-center w-6 fill-blue-950 overflow-hidden shrink-0 max-w-full"
                                        />
                                        <h2 className="text-neutral-800 text-md font-medium grow whitespace-nowrap self-start">
                                            Apply Code
                                        </h2>
                                    </div>
                                    <div className="text-zinc-500 text-opacity-50 text-sm font-medium whitespace-nowrap items-stretch self-stretch grow justify-center px-6 py-5 border-b-zinc-500 border-b-opacity-50 border-b border-solid max-md:px-5">
                                        <input type="text" placeholder='Enter Code' className=' p-5 w-48 border border-none' />
                                    </div>
                                </div>
                            </div>
                            <div className="justify-center items-stretch border bg-white self-stretch flex flex-col mt-5 p-8 rounded-xl border-solid border-zinc-500 border-opacity-50 max-md:max-w-full max-md:px-5">
                                <h1 className="text-neutral-800 text-xl font-medium max-md:max-w-full">
                                    Bill details
                                </h1>
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
                                <div className="justify-between items-stretch flex gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
                                    <h3 className="text-neutral-700 text-xl font-medium">
                                        Total Charge
                                    </h3>
                                    <h3 className="text-neutral-700 text-xl font-medium">
                                        ₹3500.00
                                    </h3>
                                </div>
                            </div>
                            <div className="text-zinc-500 text-xs font-medium self-center mt-5 max-md:max-w-full">
                                Discounts, offers and price concessions will be applied later
                                during payment
                            </div>
                            <Link to="/confirmticket" className="text-white text-center text-base font-semibold whitespace-nowrap justify-center items-center bg-blue-950 self-center w-[350px] max-w-full mt-8 px-14 py-5 rounded-xl max-md:mt-10 max-md:px-5 cursor-pointer">
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







