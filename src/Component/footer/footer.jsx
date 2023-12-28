import React from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue-950">
      <div className=" container mx-auto p-2 self-stretch grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-2 pt-6 px-4 max-md:max-px-4">
        <div>
          <img
            loading="lazy"
            srcSet={Logo}
            alt="logo"
            className="aspect-[3.49] object-contain object-center w-full overflow-hidden flex justify-center align-middle items-center mt-[110px]"
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
            <Link to="#" className="mb-2">
              About Us
            </Link>
            <Link to="#" className="mb-2">
              Press
            </Link>
            <Link to="#" className="mb-2">
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

        <div>
          <div className="text-white text-lg font-bold capitalize mb-4">
            Stay in the loop
          </div>
          <div className="text-zinc-100 text-sm leading-6 mb-6">
            Join our mailing list to stay in the loop with our newest for Event
            and concert
          </div>
          <div className="bg-white flex max-w-[486px] items-center justify-between gap-5 pl-9 pr-2.5 py-2 rounded-[45.595px] border-2 border-solid border-zinc-100 max-md:flex-wrap max-md:pl-5">
            <div className="text-neutral-400 text-xs my-auto">
              Enter your email address..
            </div>
            <div className="text-white text-xs tracking-wider whitespace-nowrap justify-center items-stretch shadow-2xl bg-pink-600 self-stretch px-4 py-4 rounded-[50px] max-md:px-5">
              Subscibe Now
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-600 self-stretch h-px mb-6" />

      <div className="text-white text-center text-sm mb-4 leading-6">
        Copyright © 2023 TicketVerse{" "}
      </div>
    </div>
  );
};

export default Footer;
