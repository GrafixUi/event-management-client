import React from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue-950 w-full"> {/* Updated styling here */}
      <div className="w-[1200px] max-md:w-[500px] mx-auto p-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-6 px-4 max-md:max-px-4 max-xl:w-[1000px] max-sm:w-[390px]">
        <div className="max-sm:w-[300px] max-md:w-[300px] mt-0 md:mt-[110px]">
          <img
            loading="lazy"
            srcSet={Logo}
            alt="logo"
            className="aspect-[3.49] object-contain object-center w-full overflow-hidden flex justify-center align-middle items-center"
          />
        </div>
        <div>
          <div className="text-white text-lg font-bold capitalize mb-4">
            Plan Events
          </div>
          <div className="text-zinc-100 text-sm flex flex-col font-medium leading-7 mb-6">
            <Link to="#" className="mb-2">
              Create and Set Up
            </Link>
            <Link to="#" className="mb-2">
              Sell Tickets
            </Link>
            <Link to="#" className="mb-2">
              Online RSVP
            </Link>
            <Link to="#">Online Events</Link>
          </div>
        </div>
        <div>
          <div className="text-white text-lg font-bold capitalize mb-4">
            Eventick
          </div>
          <div className="text-zinc-100 flex flex-col text-sm font-medium leading-7 mb-6">
            <Link to="/about" className="mb-2">
              About Us
            </Link>
            <Link to="#" className="mb-2">
              Press
            </Link>
            <Link to="/contact" className="mb-2">
              Contact Us
            </Link>
            <Link to="#" className="mb-2">
              Help Center
            </Link>
            <Link to="#" className="mb-2">
              How it Works
            </Link>
            <Link to="#" className="mb-2">
              Privacy
            </Link>
            <Link to="#">Terms</Link>
          </div>
        </div>

        <div className=" ">
          <div className="text-white text-lg font-bold capitalize mb-4 ">
            Stay in the loop
          </div>
          <div className="text-zinc-100 text-sm leading-6 mb-6 max-sm:w-80">
            Join our mailing list to stay in the loop with our newest for Event
            and concert
          </div>
          <div className="bg-white flex  max-sm:hidden items-center justify-between pl-1 pr-2.5 py-2 rounded-[45.595px] border-2 border-solid border-zinc-100 max-xl:hidden max-lg:hidden max-md:flex-wrap max-md:pl-5">
            <input className="text-neutral-400 border border-none text-xs my-auto p-3" type="text" placeholder="Enter your email address.." />
            <button className="text-white text-xs tracking-wider whitespace-nowrap justify-center items-stretch shadow-2xl bg-pink-600 self-stretch px-4 py-4 rounded-[50px]  max-md:px-5">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="bg-slate-600 self-stretch h-px mb-6 max-sm:w-[390px]" />
      <div className="text-white text-center text-sm pb-4 leading-6 max-sm:w-[390px]">
        Copyright © 2023 TicketVerse{" "}
      </div>
    </div>
  );
};

export default Footer;
