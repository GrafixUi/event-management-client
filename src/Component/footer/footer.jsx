import React from 'react';
import Logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="bg-blue-950 self-stretch flex w-full flex-col items-center mt-28 pt-12 px-16 max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div className="flex w-full max-w-[1668px] flex-col items-center mt-4 max-md:max-w-full">
                <div className="self-stretch flex items-start justify-between gap-40 max-md:max-w-full max-md:flex-wrap max-sm:gap-5">
                    <img
                        loading="lazy"
                        srcSet={Logo} alt='logo'
                        className="aspect-[3.49] object-contain object-center w-[350px] overflow-hidden mt-6 self-start max-md:max-w-full"
                    />
                    <div className="flex basis-[0%] flex-col items-stretch self-start">
                        <div className="text-white text-lg font-bold capitalize whitespace-nowrap">
                            Plan Events
                        </div>
                        <div className="text-zinc-100 text-sm flex flex-col font-medium leading-7 mt-8">
                            <Link className=' w-32'>Create and Set Up</Link>
                            <Link>Sell Tickets</Link>
                            <Link>Online RSVP</Link>
                            <Link>Online Events</Link>
                        </div>
                    </div>
                    <div className="self-stretch flex basis-[0%] flex-col items-stretch">
                        <div className="text-white text-lg font-bold capitalize whitespace-nowrap">
                            Eventick
                        </div>
                        <div className="text-zinc-100 flex flex-col text-sm font-medium leading-7 mt-8">
                            <Link>About Us</Link>
                            <Link>Press</Link>
                            <Link>Contact Us</Link>
                            <Link>Help Center</Link>
                            <Link>How it Works</Link>
                            <Link>Privacy</Link>
                            <Link>Terms</Link>
                        </div>
                    </div>
                    <div className="flex grow basis-[0%] flex-col items-stretch self-start max-md:max-w-full">
                        <div className="text-white text-lg font-bold capitalize max-md:max-w-full">
                            Stay in the loop
                        </div>
                        <div className="text-zinc-100 text-sm leading-6 mt-8 max-md:max-w-full">
                            Join our mailing list to stay in the loop with our newest for
                            Event and concert
                        </div>
                        <div className="flex max-w-[733px] justify-center items-stretch mt-7 rounded">
                            <input type="text" placeholder='Enter Your email..' className="text-neutral-400 text-xs my-auto bg-white flex items-center justify-between gap-5 pl-9 pr-2.5 w-96  max-md:max-w-full max-md:flex-wrap max-md:pl-5 px-8 py-4 border-none rounded-l-md" />
                            <button className="text-white text-center text-lg font-bold leading-4 whitespace-nowrap justify-center items-stretch bg-pink-600 px-8 py-4  self-start max-md:px-5 rounded-r-md">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-600 self-stretch shrink-0 h-px mt-16 mx-9 max-md:mr-2.5 max-md:mt-10" />
                <div className="text-white text-sm leading-6 mt-8">
                    Copyright © 2023 TicketVerse{" "}
                </div>
            </div>
        </div>

    )
}

export default Footer
