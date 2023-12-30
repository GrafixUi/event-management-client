import React from "react";
import logo from "../../assets/images/logo.png";
import profile from "../../assets/images/profile.png";
import { Link } from "react-router-dom/dist";

const Navbar = () => {
  return (
    <div className="bg-blue-950 flex flex-col justify-center items-center px-16 py-6 max-md:px-5">
      <div className="flex w-full max-w-[1616px] items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
        <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="flex grow basis-[0%] flex-col items-stretch max-md:max-w-full">
            <div className="flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
              <Link to="/">
                <img
                  loading="lazy"
                  srcSet={logo}
                  alt="logo"
                  className="aspect-[3.49] object-contain object-center w-[157px] overflow-hidden shrink-0 max-w-full"
                />
              </Link>
              <input
                className="bg-white flex gap-4 pl-8 py-3 w-[550px] rounded-3xl border-l-stone-300 border-y-stone-300 border border-none self-start items-start max-md:max-w-full max-md:flex-wrap max-md:px-5"
                type="text"
                placeholder="What event are you looking for today?"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d33a891fae5f17b24199cc9e0896d75af3c9dd205130969a03bcc4d394462bc?"
                alt="img"
                className="aspect-square absolute top-11 max-sm:hidden object-contain object-center w-[13px] ml-48 fill-stone-300 overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="flex w-full items-start justify-between gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
              <div className="flex-col overflow-hidden self-stretch relative flex aspect-[5.354838709677419] items-stretch gap-1.5 px-3 py-2">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/00492f6bb241f746b7077950cb81e15f1b9703090fe8ff016a38b3651dc10197?"
                  alt="img"
                  className="absolute h-full w-full object-cover object-center inset-0"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/107117cb6f7149fa46fd5d916ea6701ee32a8d16e75d1b8811076d65de102c4b?"
                  alt="img"
                  className="aspect-[0.94] object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full"
                />
                <button className="relative text-white -top-6 text-xs ml-5 font-bold">
                  Browse All Categories{" "}
                </button>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/93dae0c53ba4b2700f0cc88f3a2dc0352d1442d944c30ec4e6f9629cf3115bf0?"
                  alt="img"
                  className="aspect-[1.67] object-contain object-center w-2.5 fill-white overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
              </div>
              <Link
                to="/eventslist"
                className="text-white text-xs leading-6 self-center my-auto"
              >
                Events
              </Link>
              <Link
                to="/movieslist"
                className="text-white text-xs leading-6 self-center my-auto"
              >
                Movies
              </Link>
              <Link className="text-white text-xs leading-6 my-auto">
                Upcoming Events
              </Link>
              <Link className="text-white text-xs leading-6 my-auto">
                Upcoming Movies
              </Link>
              <Link className="text-white text-xs leading-6 self-center whitespace-nowrap my-auto">
                Venus
              </Link>
              <Link className="text-white text-xs leading-6 self-center grow whitespace-nowrap max-md:mt-10 max-sm:hidden">
                How it works?{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="self-center flex  items-center justify-between my-auto max-sm:hidden">
          <div className="text-white text-lg leading-6 my-auto mr-6">
            <span className="font-semibold">Hello, </span>
            <span className="font-semibold">Username </span>
          </div>
          <img
            loading="lazy"
            srcSet={profile}
            alt="profile"
            className="aspect-square object-contain object-center w-[80px] overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
