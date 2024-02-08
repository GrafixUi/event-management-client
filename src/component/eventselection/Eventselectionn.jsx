import React from "react";
import header from "../../assets/images/header2.png";
import vendor from "../../assets/images/vendorlogo.png";
import location from "../../assets/images/location.png";
import Cards from "../cards/Cards";
import frame from "../../assets/images/Frame.png";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../utils/store";
import SubFAQ from "../../pages/home/faq/SubFAQ";
import Testimonials from "../../pages/home/faq/Testimonials";
import Review from "../../pages/home/faq/Review";

const Eventselectionn = () => {
  const requestParams = new URLSearchParams(window.location.search);
  const eventid = requestParams.get("eventid");
  const [eventData, setEventData] = useState();
  const navigate = useNavigate();
  const isAuth = useStore((state) => state.isAuthenticated);
  useEffect(() => {
    const eventDataNew = async () => {
      try {
        const events = await axios.get(
          `${process.env.REACT_APP_BACKENDURL}/events/${eventid}`
        );
        setEventData(events.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    eventDataNew();
  }, []);

  console.log(isAuth);

  function handleBookEvent() {
    if (isAuth === true) {
      navigate(`/eventticket?eventid=${eventid}`);
    } else {
      navigate(`/login`);
    }
  }

  console.log(eventData?.attributes);

  return (
    <div className="bg-white flex flex-col  ">
      <Navbar />

      {/* bottom part */}
      <div className="fixed bottom-0 md:hidden grid gap-2 grid-cols-2 px-10 py-3 w-full z-20 bg-[#f0f3ff]">
        <div className="text-[#061046] font-bold pt-2 text-sm text-center flex justify-center">
          {eventData?.attributes?.eventtitle}
        </div>
        <div>
          <button
            onClick={handleBookEvent}
            className="relative group rounded-lg  flex items-center px-6 py-2 bg-gradient-to-r bg-blue-950"
          >
            <span className="relative text-white font-light text-md">
              Book Now
            </span>
            <div className="flex items-center -space-x-3 translate-x-3">
              <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      <div className="flex-col overflow-hidden relative flex min-h-[450px] w-full justify-center items-center px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5 max-sm:-mt-0">
        <img
          srcSet={eventData?.attributes?.eventimg}
          alt="header"
          className="absolute h-[500px] max-sm:h-full w-full object-top object-cover inset-0 max-md:h-[300px]"
        />
        <div className="relative flex w-full max-w-[1438px] items-stretch justify-around gap-5 mt-72 mb-3 px-px max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-sm:mt-72">
          <div className="flex flex-col items-stretch max-md:max-w-full max-sm:items-center max-sm:justify-center">
            <div className="text-white text-3xl  max-md:max-w-full max-md:text-1xl">
              {eventData?.attributes?.eventtitle}
            </div>
            <div className="text-neutral-300 text-md font-light  max-md:max-w-full max-sm:ml-4">
              {eventData?.attributes?.locationname},{" "}
              {eventData?.attributes?.address}
            </div>
          </div>
          <button
            onClick={handleBookEvent}
            class="relative group max-sm:hidden overflow-hidden px-10 h-16 rounded-md flex space-x-2 items-center bg-gradient-to-r bg-blue-950 max-sm:mt-14"
          >
            <span class="relative text-white font-bold text-lg ">Book Now</span>
            <div class="flex items-center -space-x-3 translate-x-3">
              <div class="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* bottom */}

      <div className="self-center px-12 max-sm:px-1 flex w-full max-w-[1300px] flex-col items-stretch mt-5 max-md:max-w-full p-4">
        <div className="max-md:max-w-full max-sm:p-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[68%] max-md:w-full max-md:ml-0 shadow-sm shadow-slate-300 rounded-lg max-sm:-mt-5">
              <div className="bg-white flex w-full grow items-stretch justify-between gap-5 mx-auto pl-16 pr-20 py-10 rounded-2xl max-sm:-mt-5 max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:px-5">
                <div className="flex items-stretch justify-start gap-5 max-sm:self-center max-sm:items-center">
                  <div className="backdrop-blur-[3.950000047683716px] bg-blue-950 flex grow basis-[0%] flex-col items-center pl-4 pr-4 py-6 rounded-xl">
                    <h1 className="text-white text-lg font-semibold leading-6 uppercase whitespace-nowrap">
                      {eventData?.attributes?.month}
                    </h1>
                    <h3 className="text-white text-4xl font-bold self-stretch whitespace-nowrap mt-4 max-md:text-4xl text-center">
                      {eventData?.attributes?.day}
                    </h3>
                  </div>
                  <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                    <div className="items-stretch flex justify-between gap-3">
                      <div className="text-black text-sm">Released:</div>
                      <div className="text-black text-sm">
                        {eventData?.attributes?.year}
                      </div>
                    </div>
                    <div className="items-stretch flex justify-between gap-3 mt-5">
                      <div className="text-black text-sm">Domain:</div>
                      <div className="text-black text-sm">
                        {eventData?.attributes?.domaintype}
                      </div>
                    </div>
                    <div className="items-stretch w-full flex justify-between gap-3 mt-5">
                      <div className="text-black text-sm">Category:</div>
                      <div className="text-black text-sm">
                        {eventData?.attributes?.category}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch mt-3 self-start">
                  <div className="text-black text-sm font-medium">Address:</div>
                  <div className="text-blue-950 text-lg font-semibold mt-3">
                    {eventData?.attributes?.locationname}
                  </div>
                  <div className="text-blue-950 text-md font-light mt-4">
                    {eventData?.attributes?.locationname} <br />
                    {eventData?.attributes?.address} <br />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[32%] ml-5 max-md:w-full max-md:ml-0 shadow-sm shadow-slate-300 rounded-lg max-sm:mt-8">
              <div className="bg-white grow w-full pl-16 pr-20 py-9 rounded-2xl max-md:max-w-full max-md:mt-10 max-md:px-5 max-sm:mt-5">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 max-sm:-mt-5">
                  <div className="flex flex-col items-stretch w-[450px] max-md:w-full max-md:ml-0 max-sm:self-center max-sm:items-center">
                    <img
                      srcSet={vendor}
                      alt="vendor"
                      className="aspect-square object-contain object-center w-[150px] justify-center items-center overflow-hidden shrink-0 max-w-full max-md:mt-10"
                    />
                  </div>
                  <div className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0 ">
                    <div className="flex grow flex-col items-stretch max-md:mt-10">
                      <div className="text-neutral-500  text-base font-bold leading-5">
                        {eventData?.attributes?.organisername}
                      </div>
                      {/* <div className="text-neutral-500 text-base leading-5 whitespace-nowrap mt-2.5 max-md:mr-1">
                        Premium Digital Studio
                      </div> */}
                      <div className="flex justify-between gap-1 mt-1.5 items-start max-md:mr-1">
                        <div className="items-stretch flex gap-1 pr-3 py-0.5"></div>
                      </div>
                      <Link
                        to="/contact"
                        className="text-neutral-500 text-center text-sm font-semibold leading-4 items-stretch rounded border justify-center mt-5 px-7 py-3.5 border-solid border-neutral-500 max-md:px-5"
                      >
                        Contact Me
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 max-md:max-w-full max-sm:p-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[50%] max-md:w-full max-md:ml-0 shadow-sm shadow-slate-300 rounded-lg max-sm:-mt-5">
              {/* Movie Content */}
              <div className="bg-white flex grow flex-col w-full pl-10 pr-20 py-8 rounded-2xl items-start max-md:max-w-full max-md:mt-10 max-md:px-5">
                <h1 className="text-zinc-700 text-xl font-bold leading-7 max-md:max-w-full">
                  About This Event
                </h1>
                <p className="justify-center text-neutral-500 text-sm leading-6 max-w-[645px] mt-8 max-md:max-w-full">
                  {eventData?.attributes?.description}
                </p>
                {/* <h3 className="text-neutral-400 text-base leading-6 mt-5 max-md:max-w-full max-md:mt-10">
                  Movie or Event type
                </h3>
                <h3 className="justify-center text-neutral-500 text-base leading-6 underline mt-1 max-md:max-w-full">
                  Drama,
                </h3> */}
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[50%] ml-5 max-md:w-full max-md:ml-0 shadow-sm shadow-slate-300 rounded-lg max-sm:mt-5">
              <div className="bg-white flex grow flex-col items-stretch w-full mt-2.5 pl-9 pr-11 pt-5 pb-11 rounded-2xl max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="text-black text-sm font-medium">Location:</div>
                <div className="google-map-code max-sm:w-full">
                  <iframe
                    src={eventData?.attributes?.mapurl}
                    width="100%"
                    height="300px"
                    frameborder="0"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                    title="maps"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border bg-blue-950 self-stretch flex w-full flex-col justify-center items-center mt-12 px-16 py-5 border-solid border-zinc-200 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="flex w-full max-w-[1465px] flex-col items-stretch mb-4 max-md:max-w-full">
          <div className="justify-center pb-6 text-white text-2xl font-bold  max-md:max-w-full">
            Recommended For You
          </div>
          <Cards />
        </div>
      </div>

      {/* <Testimonials /> */}
      <Review type="event" id={eventid} />
      <SubFAQ type="event" id={eventid} />
      <Footer />
    </div>
  );
};

export default Eventselectionn;
