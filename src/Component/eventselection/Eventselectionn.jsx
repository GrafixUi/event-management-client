import React from 'react';
import header from "../../assets/images/header2.png";
import vendor from "../../assets/images/vendorlogo.png";
import location from "../../assets/images/location.png";
import Rating from "../rating/Rating";
import Cards from '../cards/Cards';
import frame from "../../assets/images/Frame.png";
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import { Link } from 'react-router-dom';
const Eventselectionn = () => {
    return (
        <div className="bg-white flex flex-col ">
            <Navbar />
            <div className=" flex-col overflow-hidden self-stretch relative flex min-h-[582px] w-full justify-center items-center px-16 max-md:max-w-full max-md:mt-10 max-md:px-5">
                <img
                    srcSet={header} alt='header'
                    className="absolute h-full w-full object-cover object-center inset-0"
                />
                <div className=" container justify-between ite relative flex w-full max-w-[1438px] items-stretch gap-5 mt-96 px-px max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                    <div className="flex flex-col items-stretch max-md:max-w-full">
                        <div className="text-white text-3xl max-md:max-w-full max-md:text-4xl">
                            Event Name
                        </div>
                        <div className="text-neutral-300 text-lg font-light mt-5 max-md:max-w-full">
                            HITEX Exhibition Centre, Hitex Road, Izzathnagar, Kothaguda,
                            Telangana, India
                        </div>
                    </div>
                    <Link to="/eventticket" className="text-white text-base font-bold whitespace-nowrap bg-blue-950 justify-center items-center mt-10 px-16 py-6 rounded-2xl self-end max-md:px-5">
                        BOOK NOW
                    </Link>
                </div>
            </div>
            <div className="self-center flex w-full max-w-[1540px] flex-col items-stretch mt-8 max-md:max-w-full">
                <div className="max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[68%] max-md:w-full max-md:ml-0 shadow-sm shadow-slate-300 rounded-lg">
                            <div className="bg-white flex w-full grow items-stretch justify-between gap-5 mx-auto pl-16 pr-20 py-10 rounded-2xl max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:px-5">
                                <div className="flex items-stretch justify-between gap-5">
                                    <div className="backdrop-blur-[3.950000047683716px] bg-blue-950 flex grow basis-[0%] flex-col items-center pl-3 pr-5 py-6 rounded-xl">
                                        <div className="text-white text-xl font-semibold leading-6 uppercase whitespace-nowrap">
                                            dec
                                        </div>
                                        <div className="text-white text-6xl font-bold self-stretch whitespace-nowrap mt-4 max-md:text-4xl">
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
                                    <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
                                        <img
                                            srcSet={vendor} alt='vendor'
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
                                            <button className="text-neutral-500 text-center text-sm font-semibold leading-4 items-stretch rounded border justify-center mt-5 px-7 py-3.5 border-solid border-neutral-500 max-md:px-5">
                                                Contact Me
                                            </button>
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
                            <div className="bg-white flex grow flex-col w-full pl-10 pr-20 py-12 rounded-2xl items-start max-md:max-w-full max-md:mt-10 max-md:px-5">
                                <div className="text-zinc-700 text-xl font-bold leading-7 max-md:max-w-full">
                                    About This Event
                                </div>
                                <div className="justify-center text-neutral-500 text-base leading-6 max-w-[645px] mt-10 max-md:max-w-full">
                                    About the movie
                                    <br />
                                    Eswar, an IT employee, moves into a new house with his
                                    pregnant wife. Ilamparuthi, a government employee, has been
                                    living next door for over 15 years with his wife and daughter.
                                    Things take a turn when Eswar buys a car and parks it in their
                                    common parking space. Did their ego win over them or did they
                                    realize their mistake?
                                </div>
                                <div className="text-neutral-400 text-base leading-6 mt-12 max-md:max-w-full max-md:mt-10">
                                    Movie or Event type
                                </div>
                                <div className="justify-center text-neutral-500 text-base leading-6 underline mt-3 max-md:max-w-full">
                                    Drama,
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[32%] ml-5 max-md:w-full max-md:ml-0 shadow-sm shadow-slate-300 rounded-lg">
                            <div className="bg-white flex grow flex-col items-stretch w-full mt-2.5 pl-9 pr-11 pt-5 pb-11 rounded-2xl max-md:max-w-full max-md:mt-10 max-md:px-5">
                                <div className="text-black text-sm font-medium">Location:</div>
                                <img
                                    srcSet={location} alt='location'
                                    className="aspect-[1.61] object-contain object-center w-full overflow-hidden mt-3.5 max-md:mr-0.5"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border bg-blue-950 self-stretch flex w-full flex-col justify-center items-center mt-12 px-16 py-11 border-solid border-zinc-200 max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="flex w-full max-w-[1465px] flex-col items-stretch mb-4 max-md:max-w-full">
                    <div className="justify-center text-white text-2xl font-bold leading-8 max-md:max-w-full">
                        Recommended For You
                    </div>
                    <Cards />
                </div>
            </div>
            <div className=" self-center items-center justify-center flex max-w-full flex-col mt-20 max-md:my-10 max-sm:ml-0">
                <div className=" items-end text-zinc-700 text-xl font-bold leading-7 whitespace-nowrap ml-6 self-start max-md:ml-2.5">
                    Reviews
                </div>
                <div className="  flex  gap-3.5 ml-6 mt-14  max-md:ml-2.5 max-md:mt-10">
                    <div className="  text-zinc-700 text-base font-bold leading-6 grow whitespace-nowrap">
                        902 reviews for this Gig
                    </div>
                    <div className="flex gap-1 py-px self-start items-start">
                        <div className="items-stretch flex gap-1 py-0.5">
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/66f43ca94bde2fe4fab038e983e6893a7b7aa200c89013112b20938173ddbb8a?" alt='img'
                                className="aspect-square object-contain object-center w-[15px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d1bd68eaa3d7b8deb829c55d82ac1f7f7955ce6ec6470833652d8be33ef04f3?" alt='img'
                                className="aspect-square object-contain object-center w-[15px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8299cbf066a92baba2ebd7af54ae99133260f7ddc512c9e4aa6fd574aa5a970?" alt='img'
                                className="aspect-square object-contain object-center w-[15px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/29a3e1ade95afe6e049672fd86ef1871f43eec8be42d1f018e58134a6d228379?" alt='img'
                                className="aspect-square object-contain object-center w-[15px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                            />
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c3613cb8e4b2d5bb9d3fe9026576b82ac55299a51502c333243b7cbfcc5e85e?" alt='img'
                                className="aspect-square object-contain object-center w-[15px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                            />
                        </div>
                        <div className="text-amber-400 text-sm font-bold leading-5 self-stretch grow whitespace-nowrap">
                            4.9
                        </div>
                    </div>
                </div>
                <div className="items-center self-stretch flex flex-col mt-3 pb-5 px-5 max-md:max-w-full">
                    <div className="self-stretch pb-6 px-4 max-md:max-w-full">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                                <div className="items-stretch flex grow flex-col pb-2 px-1 max-md:mt-8">
                                    <div className="flex items-stretch justify-between gap-2.5">
                                        <div className="text-blue-500 text-base font-semibold leading-4 self-center whitespace-nowrap my-auto">
                                            5 Stars
                                        </div>
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
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdb3dc49426c084e2519525f533bbf9f55d5fb91719ec0788bd6eb62158a7d65?" alt='img'
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
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f48a24d352d80756cf41639cad242272e5baef79d86bdee8164b529893c00c28?" alt='img'
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
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/72e0526c9c7bbdd4ea708b644d0bd15707cdde08736d4003aa558067fa5c8104?" alt='img'
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
                    <div className=' flex'>
                        <input type="text" placeholder='search reviews' className=" border bg-white flex w-[338px] max-w-full justify-between gap-5 mt-2 pl-3.5 p-2 border-solid border-stone-300 self-start max-md:ml-2.5 " />

                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c00625ce9079d76300de144b9854e33e50b2ab9ad7b9ebf7dfc1df4615e53733?" alt='img'
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
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f022e0377bd873752717a2b6b4bf6002774651b5f58c2faaf12e8f97dd268ad?" alt='img'
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
                <div className="items-stretch flex w-[712px] max-w-full flex-col ml-4 mt-10 py-11 border-t-zinc-300 border-t border-solid self-start">
                    <div className="items-center flex justify-between gap-4 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                        <div className="justify-center text-white text-sm font-bold leading-5 uppercase whitespace-nowrap items-center bg-zinc-200 aspect-square h-12 my-auto px-5 rounded-3xl">
                            m
                        </div>{" "}
                        <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                            <div className="text-zinc-700 text-base font-bold leading-6">
                                marvinachi
                            </div>{" "}
                            <div className="flex justify-between gap-2 mt-2 py-px items-start">
                                <img
                                    loading="lazy"
                                    srcSet={frame} alt='frame'
                                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                                />{" "}
                                <div className="text-neutral-500 text-sm leading-5 self-stretch grow whitespace-nowrap">
                                    United States
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                    <div className="flex flex-col mt-5 pl-16 items-start max-md:max-w-full max-md:pl-5">
                        <div className="flex items-stretch gap-1.5">
                            <div className="flex justify-between gap-1 py-px items-start">
                                <div className="items-stretch flex gap-1 py-0.5">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5348ebd664b1412c824a1a8713b2b40016ac5ef76b175477473d789f45a3b551?" alt='img'
                                        className="aspect-square object-contain object-center w-[15px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                                    />{" "}
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5be28a53a7db21f9bdacda96055c94478f4122b8eaf3668590c75d509eef8133?" alt='img'
                                        className="aspect-square object-contain object-center w-[15px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                                    />{" "}
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eebe0e5f9f2b9fa8bb7b2afee70cd0d612a9084d6c17dc233dd3bb8dddb586c5?" alt='img'
                                        className="aspect-square object-contain object-center w-[15px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                                    />{" "}
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3ab0251bc6007ca8b89fc849af33e26d53b68d6b248a49c46b245666eb7939b?" alt='img'
                                        className="aspect-square object-contain object-center w-[15px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                                    />{" "}
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1667145b915d8657a2aa255136a72dca8314641288ad04dba6ca591de5635508?" alt='img'
                                        className="aspect-square object-contain object-center w-[15px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                                    />
                                </div>{" "}
                                <div className="text-amber-400 text-sm font-bold leading-5 self-stretch grow whitespace-nowrap">
                                    5
                                </div>
                            </div>{" "}
                            <div className="self-center flex w-px shrink-0 h-[17px] flex-col my-auto border-r-zinc-200 border-r border-solid" />{" "}
                            <div className="justify-center text-neutral-500 text-sm leading-5 self-center grow whitespace-nowrap my-auto">
                                2 months ago
                            </div>
                        </div>{" "}
                        <div className="text-zinc-700 text-base leading-6 self-stretch mt-5 max-md:max-w-full">
                            Great work! I wanted a video to showcase my fitness app and the
                            designer delivered an excellent job and on time. highly satisfied.
                            thank you!
                        </div>{" "}
                        <div className="rounded border flex w-[81px] shrink-0 h-[54px] flex-col mt-5 border-solid border-zinc-100" />{" "}
                        <div className="self-stretch flex justify-between gap-4 mt-4 pr-20 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                            <div className="text-zinc-700 text-sm font-semibold leading-6 grow whitespace-nowrap">
                                Helpful?
                            </div>{" "}
                            <div className="items-stretch flex gap-1 px-px py-1.5">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/95743f235abd1f69dce6abc1906d398abcba71fda3331fb9e1f9250c720211fa?" alt='img'
                                    className="aspect-square object-contain object-center w-3.5 justify-center items-center overflow-hidden shrink-0 max-w-full"
                                />{" "}
                                <div className="text-zinc-700 text-sm font-semibold leading-5 self-start">
                                    Yes
                                </div>{" "}
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f69011f2af7ec8e8890c2f6f9bd40b7a195c45edf18a5b9d6e824be07dec4a4e?" alt='img'
                                    className="aspect-square object-contain object-center w-3.5 justify-center items-center overflow-hidden shrink-0 max-w-full"
                                />{" "}
                                <div className="text-zinc-700 text-sm font-semibold leading-5 grow whitespace-nowrap self-start">
                                    No
                                </div>
                            </div>
                        </div>{" "}
                        <div className="items-stretch self-stretch flex justify-between gap-3 mt-6 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                            <img
                                loading="lazy"
                                srcSet={vendor} alt='vendor'
                                className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full"
                            />{" "}
                            <div className="text-zinc-700 text-base font-bold leading-6 self-center grow whitespace-nowrap my-auto">
                                Seller's Response
                            </div>
                        </div>
                        <div className="text-zinc-700 text-sm leading-6 whitespace-nowrap ml-11 mt-4 max-md:ml-2.5">
                            Thank you so much 😊
                        </div>
                    </div>
                </div>
                <div className="items-stretch flex w-[712px] max-w-full flex-col ml-4 py-11 border-t-zinc-300 border-t border-solid self-start">
                    <div className="items-center flex justify-between gap-4 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                        <div className="justify-center text-white text-sm font-bold leading-5 uppercase whitespace-nowrap items-center bg-zinc-200 aspect-square h-12 my-auto px-5 rounded-3xl max-md:pr-5">
                            j
                        </div>
                        <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                            <div className="text-zinc-700 text-base font-bold leading-6 whitespace-nowrap">
                                jcpconsulting
                            </div>
                            <div className="flex justify-between gap-2 mt-2 py-px items-start">
                                <img
                                    loading="lazy"
                                    srcSet={frame} alt='frame'
                                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="text-neutral-500 text-sm leading-5 self-stretch grow whitespace-nowrap">
                                    United States
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-5 pl-16 items-start max-md:max-w-full max-md:pl-5">
                        <div className="flex items-stretch gap-1.5">
                            <div className="flex justify-between gap-1 py-px items-start">
                                <div className="items-stretch flex gap-1 py-0.5">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/29f35520a716382f9b757f82e796368fcf889ed4e8c6107e74be1d533d7c8baf?" alt='img'
                                        className="aspect-square object-contain object-center w-[15px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fed05d61ed0af8dce876e64621acea59285c86a2725778e052a140046dc7487c?" alt='img'
                                        className="aspect-square object-contain object-center w-[15px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a43e024a936ce46f9354dd068299ceb93829d20baf8b4f655460e1cfbe3ef49b?" alt='img'
                                        className="aspect-square object-contain object-center w-[15px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf0ab5dc4aee626dc136cc2c8723895f5054a10a39f59dd35d5345e7bcf30eb1?" alt='img'
                                        className="aspect-square object-contain object-center w-[15px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/06f586dc429e71ae72f29093298c02b2c7c8291af3c54467dd1b80a6185b4449?" alt='img'
                                        className="aspect-square object-contain object-center w-[15px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                                    />
                                </div>
                                <div className="text-amber-400 text-sm font-bold leading-5 self-stretch grow whitespace-nowrap">
                                    5
                                </div>
                            </div>
                            <div className="self-center flex w-px shrink-0 h-[17px] flex-col my-auto border-r-zinc-200 border-r border-solid" />
                            <div className="justify-center text-neutral-500 text-sm leading-5 self-center grow whitespace-nowrap my-auto">
                                1 month ago
                            </div>
                        </div>
                        <div className="text-zinc-700 text-base leading-6 self-stretch mt-5 max-md:max-w-full">
                            Amazing work. Will def work again with him this was a big project
                            and he knocked it out of the park.
                        </div>
                        <div className="rounded border flex w-[81px] shrink-0 h-[54px] flex-col mt-5 border-solid border-zinc-100" />
                        <div className="self-stretch flex justify-between gap-4 mt-4 pr-20 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                            <div className="text-zinc-700 text-sm font-semibold leading-6 grow whitespace-nowrap">
                                Helpful?
                            </div>
                            <div className="items-stretch flex gap-1 px-px py-1.5">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4258b09181838ebb847ee9ae07e77544ab4edf119337068e619421322574fa8a?" alt='img'
                                    className="aspect-square object-contain object-center w-3.5 justify-center items-center overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="text-zinc-700 text-sm font-semibold leading-5 self-start">
                                    Yes
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d778a97d23d18ca33620a1a5ae1332a792a56c635fb7689863d0e4516f4a02b?" alt='img'
                                    className="aspect-square object-contain object-center w-3.5 justify-center items-center overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="text-zinc-700 text-sm font-semibold leading-5 grow whitespace-nowrap self-start">
                                    No
                                </div>
                            </div>
                        </div>
                        <div className="items-stretch self-stretch flex justify-between gap-3 mt-6 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                            <img
                                loading="lazy"
                                srcSet={frame} alt='frame'
                                className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-zinc-700 text-base font-bold leading-6 self-center grow whitespace-nowrap my-auto">
                                Seller's Response
                            </div>
                        </div>{" "}
                        <div className="text-zinc-700 text-sm leading-6 whitespace-nowrap ml-11 mt-4 max-md:ml-2.5">
                            Thank you so much 😊
                        </div>
                    </div>
                </div>{" "}
                <div className="justify-center text-zinc-700 text-xl font-bold leading-7 whitespace-nowrap ml-12 mt-20 self-start max-md:ml-2.5 max-md:mt-10">
                    FAQ
                </div>{" "}
                <div className="justify-center text-neutral-500 text-base font-semibold leading-6 items-stretch mr-5 mt-3 py-6 border-b-zinc-300 border-b border-solid self-end max-md:max-w-full max-md:mr-2.5">
                    If I provide a website address can you take the screenshots ?
                </div>{" "}
                <div className="justify-center text-neutral-500 text-base font-semibold leading-6 whitespace-nowrap ml-12 mt-7 self-start max-md:ml-2.5">
                    I need to add the voice over, Is that possible ?
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Eventselectionn

