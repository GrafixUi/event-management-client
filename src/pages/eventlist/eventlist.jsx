import React from "react";
import filter from "../../assets/images/filter.png";
import Eventslist from "../../component/eventslist/eventslist";
import Headerswiper from "../../component/header-swiper/Header-swiper";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";

const eventlist = () => {
  return (
    <div className="bg-white flex flex-col">
      <Navbar />
      <div className="">
        <Headerswiper />
      </div>
      <div className="self-center flex w-full max-w-[1652px] flex-col mt-20 max-md:max-w-full max-md:my-10">
        <div className="self-stretch max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-1/5 ml-8 max-md:w-full max-md:ml-0 max-sm:p-5">
              <div className="shadow-lg bg-white flex w-full flex-col mx-auto pt-4 pb-9 px-5 rounded-3xl items-start max-md:mt-10 max-md:pl-5">
                <div className="justify-between items-center bg-white self-stretch flex gap-5 py-1.5">
                  <div className="text-zinc-500 text-2xl font-semibold tracking-wide my-auto">
                    Filter
                  </div>
                  <img
                    loading="lazy"
                    src={filter}
                    alt="filter"
                    className="aspect-[0.9] object-contain object-center w-[19px] stroke-[1.8px] stroke-zinc-500 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                </div>

                <div className="text-neutral-500 text-sm  font-medium whitespace-nowrap ml-2.5 mt-10 max-md:mt-10">
                  Select your city
                </div>
                <div className="self-stretch flex items-stretch justify-between gap-5 mt-8 flex-wrap pr-5">
                  <div className="flex items-stretch gap-1.5">
                    <button className="text-neutral-500 text-xs whitespace-nowrap border grow justify-center items-stretch px-4 py-3 rounded-3xl border-solid border-neutral-400 max-md:pr-5">
                      Bangalore
                    </button>
                    <button className="text-neutral-500 text-xs whitespace-nowrap border grow justify-center items-stretch px-4 py-3.5 rounded-3xl border-solid border-neutral-400 max-md:px-5">
                      Delhi
                    </button>
                    <button className="text-neutral-500 text-xs whitespace-nowrap border grow justify-center items-stretch px-3 py-3.5 rounded-3xl border-solid border-neutral-400 max-md:px-5">
                      Mumbai
                    </button>
                  </div>
                </div>
                <div className="text-neutral-500 text-sm font-medium whitespace-nowrap ml-2.5 mt-10 max-md:mt-10">
                  Select your Language{" "}
                </div>
                <div className="flex items-stretch gap-3 mt-8">
                  <button className="text-neutral-500 text-xs border grow justify-center items-stretch px-7 py-3.5 rounded-3xl border-solid border-neutral-400 max-md:px-5">
                    Tamil
                  </button>
                  <button className="text-neutral-500 text-xs border grow justify-center items-stretch px-6 py-3.5 rounded-3xl border-solid border-neutral-400 max-md:px-5">
                    English
                  </button>
                </div>

                <div className="text-neutral-500 text-sm font-medium whitespace-nowrap ml-2.5 mt-8">
                  Select your Format
                </div>
                <div className="flex items-stretch gap-1.5 mt-8">
                  <button className="text-neutral-500 text-xs whitespace-nowrap border grow justify-center items-stretch px-7 py-3.5 rounded-3xl border-solid border-neutral-400 max-md:px-5">
                    2D
                  </button>
                  <button className="text-neutral-500 text-xs whitespace-nowrap border grow justify-center items-stretch px-7 py-3.5 rounded-3xl border-solid border-neutral-400 max-md:px-5">
                    3D
                  </button>
                  <button className="text-neutral-500 text-xs whitespace-nowrap border grow justify-center items-stretch px-6 py-3.5 rounded-3xl border-solid border-neutral-400 max-md:px-5">
                    IMAX
                  </button>
                </div>
              </div>
            </div>
            <Eventslist />
          </div>
        </div>{" "}
      </div>
      <Footer />
    </div>
  );
};

export default eventlist;
