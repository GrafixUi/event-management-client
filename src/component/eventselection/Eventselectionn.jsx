import React from "react";
import header from "../../assets/images/header2.png";
import vendor from "../../assets/images/vendorlogo.png";
import location from "../../assets/images/location.png";
import Rating from "../rating/Rating";
import Cards from "../cards/Cards";
import frame from "../../assets/images/Frame.png";
import Navbar from "../../component/navbar/Navbar"
import Footer from "../../component/footer/Footer"
import { Link } from "react-router-dom";
const Eventselectionn = () => {
  
  return (
    <div className="bg-white flex flex-col ">
      <Navbar />
      <div className=" flex-col overflow-hidden self-stretch relative flex min-h-[450px] w-full justify-center items-center px-16 max-md:max-w-full max-md:mt-10 max-md:px-5  max-sm:-mt-0 ">
        <img
          srcSet={header}
          alt="header"
          className="absolute h-[500px] w-full object-cover  object-center inset-0 max-md:h-[300px]"
        />
        <div className=" container justify-around ite relative flex w-full max-w-[1438px] items-stretch gap-5 mt-72 px-px max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-sm:self-center max-sm:items-center max-sm:ml-20">
          <div className="flex flex-col items-stretch max-md:max-w-full">
            <div className="text-white text-3xl max-md:max-w-full max-md:text-4xl">
              Event Name
            </div>
            <div className="text-neutral-300 text-lg font-light mt-5 max-md:max-w-full">
              HITEX Exhibition Centre, Hitex Road, Izzathnagar, Kothaguda,
              Telangana, India
            </div>
          </div>
          <Link
            to="/eventticket"
            class="relative group overflow-hidden px-10 h-16 rounded-md flex space-x-2 items-center bg-gradient-to-r bg-blue-950 max-sm:-ml-20"
          >
            <span class="relative text-white font-bold text-lg">Book Now</span>
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
          </Link>
        </div>
      </div>
      <div className="self-center flex w-full max-w-[1300px] flex-col items-stretch mt-5 max-md:max-w-full p-4">
        <div className="max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[68%] max-md:w-full max-md:ml-0 shadow-sm shadow-slate-300 rounded-lg">
              <div className="bg-white flex w-full grow items-stretch justify-between gap-5 mx-auto pl-16 pr-20 py-10 rounded-2xl max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:px-5">
                <div className="flex items-stretch justify-between gap-5 max-sm:self-center max-sm:items-center">
                  <div className="backdrop-blur-[3.950000047683716px] bg-blue-950 flex grow basis-[0%] flex-col items-center pl-4 pr-8 py-6 rounded-xl ">
                    <h1 className="text-white text-lg font-semibold leading-6 uppercase whitespace-nowrap">
                      dec
                    </h1>
                    <h3 className="text-white text-4xl font-bold self-stretch whitespace-nowrap mt-4 max-md:text-4xl">
                      08
                    </h3>
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
                <div className="flex flex-col items-stretch mt-3 self-start">
                  <div className="text-black text-sm font-medium">Theater:</div>
                  <div className="text-blue-950 text-sm font-semibold mt-3">
                    HITEX Exhibition Centre
                  </div>
                  <div className="text-blue-950 text-xs font-light mt-4">
                    HITEX Exhibition Centre, Hitex Road, Izzathnagar, <br />
                    Kothaguda, Telangana, India
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[32%] ml-5 max-md:w-full max-md:ml-0 shadow-sm shadow-slate-300 rounded-lg">
              <div className="bg-white grow w-full pl-16 pr-20 py-9 rounded-2xl max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0 max-sm:self-center max-sm:items-center">
                    <img
                      srcSet={vendor}
                      alt="vendor"
                      className="aspect-square object-contain object-center w-[110px] justify-center items-center overflow-hidden shrink-0 max-w-full max-md:mt-10"
                    />
                  </div>
                  <div className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0 ">
                    <div className="flex grow flex-col items-stretch max-md:mt-10">
                      <div className="text-neutral-500  text-base font-bold leading-5">
                        airb123
                      </div>
                      <div className="text-neutral-500 text-base leading-5 whitespace-nowrap mt-2.5 max-md:mr-1">
                        Premium Digital Studio
                      </div>
                      <div className="flex justify-between gap-1 mt-1.5 items-start max-md:mr-1">
                        <div className="items-stretch flex gap-1 pr-3 py-0.5">
                          <Rating />
                        </div>
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
        <div className="mt-8 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[68%] max-md:w-full max-md:ml-0 shadow-sm shadow-slate-300 rounded-lg">
              <div className="bg-white flex grow flex-col w-full pl-10 pr-20 py-8 rounded-2xl items-start max-md:max-w-full max-md:mt-10 max-md:px-5">
                <h1 className="text-zinc-700 text-xl font-bold leading-7 max-md:max-w-full">
                  About This Event
                </h1>
                <p className="justify-center text-neutral-500 text-sm leading-6 max-w-[645px] mt-8 max-md:max-w-full">
                  About the movie
                  <br />
                  Eswar, an IT employee, moves into a new house with his
                  pregnant wife. Ilamparuthi, a government employee, has been
                  living next door for over 15 years with his wife and daughter.
                  Things take a turn when Eswar buys a car and parks it in their
                  common parking space. Did their ego win over them or did they
                  realize their mistake?
                </p>
                <h3 className="text-neutral-400 text-base leading-6 mt-5 max-md:max-w-full max-md:mt-10">
                  Movie or Event type
                </h3>
                <h3 className="justify-center text-neutral-500 text-base leading-6 underline mt-1 max-md:max-w-full">
                  Drama,
                </h3>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[32%] h- ml-5 max-md:w-full max-md:ml-0 shadow-sm shadow-slate-300 rounded-lg">
              <div className="bg-white flex grow flex-col items-stretch w-full mt-2.5 pl-9 pr-11 pt-5 pb-11 rounded-2xl max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="text-black text-sm font-medium">Location:</div>
                <img
                  srcSet={location}
                  alt="location"
                  className="aspect-[1.61] object-contain object-center w-full overflow-hidden mt-3.5 max-md:mr-0.5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border bg-blue-950 self-stretch flex w-full flex-col justify-center items-center mt-12 px-16 py-5 border-solid border-zinc-200 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="flex w-full max-w-[1465px] flex-col items-stretch mb-4 max-md:max-w-full">
          <div className="justify-center text-white text-2xl font-bold leading-8 max-md:max-w-full">
            Recommended For You
          </div>
          <Cards />
        </div>
      </div>
      <div className=" self-center items-center justify-center flex max-w-full flex-col mt-20 max-md:my-10 max-sm:ml-0">
        <h1 className=" items-end text-zinc-700 text-xl font-bold leading-7 whitespace-nowrap ml-6 self-start max-md:ml-2.5">
          Reviews
        </h1>
        <div className="  flex  gap-3.5 ml-6 mt-14  max-md:ml-2.5 max-md:mt-10">
          <h3 className="  text-zinc-700 text-base font-bold leading-6 grow whitespace-nowrap">
            902 reviews for this Gig
          </h3>
          <div className="flex gap-1 py-px self-start items-start">
            <div className="items-stretch flex gap-1 py-0.5">
              <Rating />
            </div>
          </div>
        </div>
        <div className="items-center self-stretch flex flex-col mt-3 pb-5 px-5 max-md:max-w-full">
          <div className="self-stretch pb-6 px-4 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col pb-2 px-1 max-md:mt-8">
                  <div className="flex items-stretch justify-between gap-2.5">
                    <h2 className="text-blue-500 text-base font-semibold leading-4 self-center whitespace-nowrap my-auto">
                      5 Stars
                    </h2>
                    <div className="fill-zinc-200 self-center flex grow basis-[0%] flex-col justify-center items-stretch my-auto pr-3">
                      <div className="bg-amber-400 flex shrink-0 h-2 flex-col rounded-[999px]" />
                    </div>{" "}
                    <div className="text-blue-500 text-sm leading-6 whitespace-nowrap">
                      (852)
                    </div>
                  </div>{" "}
                  <div className="flex items-stretch justify-between gap-2.5 mt-2 max-md:mr-2">
                    <div className="text-blue-500 text-base font-semibold leading-4 self-center whitespace-nowrap my-auto">
                      4 Stars
                    </div>{" "}
                    <div className="fill-zinc-200 self-center flex grow basis-[0%] flex-col justify-center my-auto pr-16 items-start max-md:pr-5">
                      <div className="bg-amber-400 flex w-[9px] shrink-0 h-2 flex-col rounded-[999px]" />
                    </div>{" "}
                    <div className="text-blue-500 text-base leading-6 whitespace-nowrap">
                      (37)
                    </div>
                  </div>{" "}
                  <div className="flex items-stretch justify-between gap-2.5 mt-2">
                    <div className="text-blue-500 text-base font-semibold leading-4 self-center whitespace-nowrap my-auto">
                      3 Stars
                    </div>{" "}
                    <div className="fill-zinc-200 self-center flex grow basis-[0%] flex-col justify-center my-auto pr-16 items-start max-md:pr-5">
                      <div className="bg-amber-400 flex w-[15px] shrink-0 h-2 flex-col rounded-[999px]" />
                    </div>{" "}
                    <div className="text-blue-500 text-sm leading-6 whitespace-nowrap">
                      (9)
                    </div>
                  </div>{" "}
                  <div className="flex items-stretch justify-between gap-2.5 mt-2">
                    <div className="text-blue-500 text-base font-semibold leading-4 self-center whitespace-nowrap my-auto">
                      2 Stars
                    </div>{" "}
                    <div className="fill-zinc-200 self-center flex grow basis-[0%] flex-col justify-center my-auto pr-16 items-start max-md:pr-5">
                      <div className="bg-amber-400 flex w-3.5 shrink-0 h-2 flex-col rounded-[999px]" />
                    </div>{" "}
                    <div className="text-blue-500 text-sm leading-6 whitespace-nowrap">
                      (2)
                    </div>
                  </div>{" "}
                  <div className="flex items-stretch justify-between gap-2.5 mt-2">
                    <div className="text-blue-500 text-base font-semibold leading-4 self-center whitespace-nowrap my-auto">
                      1 Star
                    </div>{" "}
                    <div className="fill-zinc-200 self-center flex grow basis-[0%] flex-col justify-center my-auto pr-16 items-start max-md:pr-5">
                      <div className="bg-amber-400 flex w-3.5 shrink-0 h-2 flex-col rounded-[999px]" />
                    </div>{" "}
                    <div className="text-blue-500 text-sm leading-6 whitespace-nowrap">
                      (2)
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex flex-col max-md:mt-8">
                  <div className="text-zinc-700 text-base font-semibold leading-6">
                    Rating Breakdown
                  </div>{" "}
                  <div className="items-stretch flex w-full justify-between gap-5 mt-4 pb-2 px-px">
                    <div className="text-neutral-400 text-base leading-6">
                      Seller communication level
                    </div>{" "}
                    <div className="flex items-stretch gap-1 self-start">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdb3dc49426c084e2519525f533bbf9f55d5fb91719ec0788bd6eb62158a7d65?"
                        alt="img"
                        className="aspect-square object-contain object-center w-[15px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                      />{" "}
                      <div className="text-amber-400 text-sm font-bold leading-5 mt-1 self-start">
                        4.9
                      </div>
                    </div>
                  </div>{" "}
                  <div className="items-stretch flex w-full justify-between gap-5 pb-2 px-px">
                    <div className="text-neutral-400 text-base leading-6">
                      Recommend to a friend
                    </div>{" "}
                    <div className="flex items-stretch gap-1 self-start">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f48a24d352d80756cf41639cad242272e5baef79d86bdee8164b529893c00c28?"
                        alt="img"
                        className="aspect-square object-contain object-center w-[15px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                      />{" "}
                      <div className="text-amber-400 text-sm font-bold leading-5 mt-1 self-start">
                        4.9
                      </div>
                    </div>
                  </div>{" "}
                  <div className="items-stretch flex w-full justify-between gap-5 px-px">
                    <div className="text-neutral-400 text-base leading-6">
                      Service as described
                    </div>{" "}
                    <div className="flex items-stretch gap-1 self-start">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/72e0526c9c7bbdd4ea708b644d0bd15707cdde08736d4003aa558067fa5c8104?"
                        alt="img"
                        className="aspect-square object-contain object-center w-[15px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                      />{" "}
                      <div className="text-amber-400 text-sm font-bold leading-5 mt-1 self-start">
                        4.9
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className=" flex">
            <input
              type="text"
              placeholder="search reviews"
              className=" border bg-white flex w-[338px] max-w-full justify-between gap-5 mt-2 pl-3.5 p-2 border-solid border-stone-300 self-start max-md:ml-2.5 "
            />

            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c00625ce9079d76300de144b9854e33e50b2ab9ad7b9ebf7dfc1df4615e53733?"
              alt="img"
              className="aspect-[1.14] object-contain object-center w-12 justify-center items-center overflow-hidden self-stretch z-[1] shrink-0 max-w-full mt-2"
            />
          </div>
          <div className="items-center flex gap-0 ml-4 mt-4 self-start max-md:ml-2.5">
            <div className="text-zinc-700 text-base leading-6 my-auto">
              Sort By
            </div>{" "}
            <div className="items-stretch rounded bg-white self-stretch flex justify-between gap-3 pl-3.5 pr-8 py-2 max-md:pr-5">
              <div className="text-zinc-700 text-base font-semibold leading-6">
                Most relevant
              </div>{" "}
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f022e0377bd873752717a2b6b4bf6002774651b5f58c2faaf12e8f97dd268ad?"
                alt="img"
                className="aspect-square object-contain object-center w-[11px] justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
            </div>
          </div>{" "}
          <div className="flex items-stretch gap-5 ml-4 mt-3 self-start max-md:ml-2.5">
            <div className="border bg-white flex w-[18px] shrink-0 h-[18px] flex-col rounded-sm border-solid border-stone-300" />{" "}
            <div className="text-neutral-500 text-base leading-6 self-center grow whitespace-nowrap my-auto">
              Delivery images (558)
            </div>
          </div>
        </div>{" "}
      </div>
      <Footer />
    </div>
  );
};

export default Eventselectionn;
