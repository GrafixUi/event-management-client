import React from 'react';
import product1 from "../../assets/images/product1.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom/dist';

const Cards = () => {
    return (
        <div>
            <Swiper className=''
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={1}
                slidesPerView={3}
                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    390: {
                        slidesPerView: 1,
                    },
                    480: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 3,
                    },
                    1536: {
                        slidesPerView: 4,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="container py-5 mt-8 flex flex-wrap items-center justify-center max-sm:mt-10 max-sm:ml-4">
                        <Link to="/eventslist">
                            <div className="bg-white shadow-sm shadow-slate-300 flex w-[300px] flex-col items-stretch pb-3 rounded-2xl mb-5 justify-center transition duration-500 hover:scale-105 max-sm:w-[250px] max-sm:-ml-8">
                                <img
                                    loading="lazy"
                                    srcSet={product1} alt='product1'
                                    className="aspect-[1.7] object-contain object-center w-full overflow-hidden"
                                />
                                <div className="self-center flex justify-between gap-5 mt-0.5 items-start w-full">
                                    <div className="flex basis-[0%] flex-col max-sm:w-12 justify-center align-middle  items-center self-center px-5">
                                        <div className="text-indigo-600 max-sm:w-2 text-center text-xs max-sm:text-[10px] font-bold whitespace-nowrap">
                                            APR
                                        </div>
                                        <div className="text-black text-xl max-sm:w-2 font-bold whitespace-nowrap mt-2">
                                            14
                                        </div>
                                    </div>
                                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5 max-sm:-ml-2">
                                        <div className="text-black text-xs max-sm:text-[9px] max-sm:w-28 max-sm:-ml-8 font-bold leading-5 max-sm:leading-2">
                                            JYJ 2011 JYJ Worldwide Concert Barcelona
                                        </div>
                                        <div className="text-neutral-500 text-xs max-sm:text-[8px] max-sm:w-28 max-sm:-ml-8 leading-2 mt-1 max-sm:leading-2">
                                            Directly seated and inside for you to enjoy the show.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container py-5 mt-8 flex flex-wrap items-center justify-center max-sm:mt-10 max-sm:ml-4">
                        <Link to="/eventslist">
                            <div className="bg-white shadow-sm shadow-slate-300 flex w-[300px] flex-col items-stretch pb-3 rounded-2xl mb-5 justify-center transition duration-500 hover:scale-105 max-sm:w-[250px] max-sm:-ml-8">
                                <img
                                    loading="lazy"
                                    srcSet={product1} alt='product1'
                                    className="aspect-[1.7] object-contain object-center w-full overflow-hidden"
                                />
                                <div className="self-center flex justify-between gap-5 mt-0.5 items-start w-full">
                                    <div className="flex basis-[0%] flex-col max-sm:w-12 justify-center align-middle  items-center self-center px-5">
                                        <div className="text-indigo-600 max-sm:w-2 text-center text-xs max-sm:text-[10px] font-bold whitespace-nowrap">
                                            APR
                                        </div>
                                        <div className="text-black text-xl max-sm:w-2 font-bold whitespace-nowrap mt-2">
                                            14
                                        </div>
                                    </div>
                                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5 max-sm:-ml-2">
                                        <div className="text-black text-xs max-sm:text-[9px] max-sm:w-28 max-sm:-ml-8 font-bold leading-5 max-sm:leading-2">
                                            JYJ 2011 JYJ Worldwide Concert Barcelona
                                        </div>
                                        <div className="text-neutral-500 text-xs max-sm:text-[8px] max-sm:w-28 max-sm:-ml-8 leading-2 mt-1 max-sm:leading-2">
                                            Directly seated and inside for you to enjoy the show.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container py-5 mt-8 flex flex-wrap items-center justify-center max-sm:mt-10 max-sm:ml-4">
                        <Link to="/eventslist">
                            <div className="bg-white shadow-sm shadow-slate-300 flex w-[300px] flex-col items-stretch pb-3 rounded-2xl mb-5 justify-center transition duration-500 hover:scale-105 max-sm:w-[250px] max-sm:-ml-8">
                                <img
                                    loading="lazy"
                                    srcSet={product1} alt='product1'
                                    className="aspect-[1.7] object-contain object-center w-full overflow-hidden"
                                />
                                <div className="self-center flex justify-between gap-5 mt-0.5 items-start w-full">
                                    <div className="flex basis-[0%] flex-col max-sm:w-12 justify-center align-middle  items-center self-center px-5">
                                        <div className="text-indigo-600 max-sm:w-2 text-center text-xs max-sm:text-[10px] font-bold whitespace-nowrap">
                                            APR
                                        </div>
                                        <div className="text-black text-xl max-sm:w-2 font-bold whitespace-nowrap mt-2">
                                            14
                                        </div>
                                    </div>
                                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5 max-sm:-ml-2">
                                        <div className="text-black text-xs max-sm:text-[9px] max-sm:w-28 max-sm:-ml-8 font-bold leading-5 max-sm:leading-2">
                                            JYJ 2011 JYJ Worldwide Concert Barcelona
                                        </div>
                                        <div className="text-neutral-500 text-xs max-sm:text-[8px] max-sm:w-28 max-sm:-ml-8 leading-2 mt-1 max-sm:leading-2">
                                            Directly seated and inside for you to enjoy the show.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container py-5 mt-8 flex flex-wrap items-center justify-center max-sm:mt-10 max-sm:ml-4">
                        <Link to="/eventslist">
                            <div className="bg-white shadow-sm shadow-slate-300 flex w-[300px] flex-col items-stretch pb-3 rounded-2xl mb-5 justify-center transition duration-500 hover:scale-105 max-sm:w-[250px] max-sm:-ml-8">
                                <img
                                    loading="lazy"
                                    srcSet={product1} alt='product1'
                                    className="aspect-[1.7] object-contain object-center w-full overflow-hidden"
                                />
                                <div className="self-center flex justify-between gap-5 mt-0.5 items-start w-full">
                                    <div className="flex basis-[0%] flex-col max-sm:w-12 justify-center align-middle  items-center self-center px-5">
                                        <div className="text-indigo-600 max-sm:w-2 text-center text-xs max-sm:text-[10px] font-bold whitespace-nowrap">
                                            APR
                                        </div>
                                        <div className="text-black text-xl max-sm:w-2 font-bold whitespace-nowrap mt-2">
                                            14
                                        </div>
                                    </div>
                                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5 max-sm:-ml-2">
                                        <div className="text-black text-xs max-sm:text-[9px] max-sm:w-28 max-sm:-ml-8 font-bold leading-5 max-sm:leading-2">
                                            JYJ 2011 JYJ Worldwide Concert Barcelona
                                        </div>
                                        <div className="text-neutral-500 text-xs max-sm:text-[8px] max-sm:w-28 max-sm:-ml-8 leading-2 mt-1 max-sm:leading-2">
                                            Directly seated and inside for you to enjoy the show.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container py-5 mt-8 flex flex-wrap items-center justify-center max-sm:mt-10 max-sm:ml-4">
                        <Link to="/eventslist">
                            <div className="bg-white shadow-sm shadow-slate-300 flex w-[300px] flex-col items-stretch pb-3 rounded-2xl mb-5 justify-center transition duration-500 hover:scale-105 max-sm:w-[250px] max-sm:-ml-8">
                                <img
                                    loading="lazy"
                                    srcSet={product1} alt='product1'
                                    className="aspect-[1.7] object-contain object-center w-full overflow-hidden"
                                />
                                <div className="self-center flex justify-between gap-5 mt-0.5 items-start w-full">
                                    <div className="flex basis-[0%] flex-col max-sm:w-12 justify-center align-middle  items-center self-center px-5">
                                        <div className="text-indigo-600 max-sm:w-2 text-center text-xs max-sm:text-[10px] font-bold whitespace-nowrap">
                                            APR
                                        </div>
                                        <div className="text-black text-xl max-sm:w-2 font-bold whitespace-nowrap mt-2">
                                            14
                                        </div>
                                    </div>
                                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5 max-sm:-ml-2">
                                        <div className="text-black text-xs max-sm:text-[9px] max-sm:w-28 max-sm:-ml-8 font-bold leading-5 max-sm:leading-2">
                                            JYJ 2011 JYJ Worldwide Concert Barcelona
                                        </div>
                                        <div className="text-neutral-500 text-xs max-sm:text-[8px] max-sm:w-28 max-sm:-ml-8 leading-2 mt-1 max-sm:leading-2">
                                            Directly seated and inside for you to enjoy the show.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container py-5 mt-8 flex flex-wrap items-center justify-center max-sm:mt-10 max-sm:ml-4">
                        <Link to="/eventslist">
                            <div className="bg-white shadow-sm shadow-slate-300 flex w-[300px] flex-col items-stretch pb-3 rounded-2xl mb-5 justify-center transition duration-500 hover:scale-105 max-sm:w-[250px] max-sm:-ml-8">
                                <img
                                    loading="lazy"
                                    srcSet={product1} alt='product1'
                                    className="aspect-[1.7] object-contain object-center w-full overflow-hidden"
                                />
                                <div className="self-center flex justify-between gap-5 mt-0.5 items-start w-full">
                                    <div className="flex basis-[0%] flex-col max-sm:w-12 justify-center align-middle  items-center self-center px-5">
                                        <div className="text-indigo-600 max-sm:w-2 text-center text-xs max-sm:text-[10px] font-bold whitespace-nowrap">
                                            APR
                                        </div>
                                        <div className="text-black text-xl max-sm:w-2 font-bold whitespace-nowrap mt-2">
                                            14
                                        </div>
                                    </div>
                                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5 max-sm:-ml-2">
                                        <div className="text-black text-xs max-sm:text-[9px] max-sm:w-28 max-sm:-ml-8 font-bold leading-5 max-sm:leading-2">
                                            JYJ 2011 JYJ Worldwide Concert Barcelona
                                        </div>
                                        <div className="text-neutral-500 text-xs max-sm:text-[8px] max-sm:w-28 max-sm:-ml-8 leading-2 mt-1 max-sm:leading-2">
                                            Directly seated and inside for you to enjoy the show.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container py-5 mt-8 flex flex-wrap items-center justify-center max-sm:mt-10 max-sm:ml-4">
                        <Link to="/eventslist">
                            <div className="bg-white shadow-sm shadow-slate-300 flex w-[300px] flex-col items-stretch pb-3 rounded-2xl mb-5 justify-center transition duration-500 hover:scale-105 max-sm:w-[250px] max-sm:-ml-8">
                                <img
                                    loading="lazy"
                                    srcSet={product1} alt='product1'
                                    className="aspect-[1.7] object-contain object-center w-full overflow-hidden"
                                />
                                <div className="self-center flex justify-between gap-5 mt-0.5 items-start w-full">
                                    <div className="flex basis-[0%] flex-col max-sm:w-12 justify-center align-middle  items-center self-center px-5">
                                        <div className="text-indigo-600 max-sm:w-2 text-center text-xs max-sm:text-[10px] font-bold whitespace-nowrap">
                                            APR
                                        </div>
                                        <div className="text-black text-xl max-sm:w-2 font-bold whitespace-nowrap mt-2">
                                            14
                                        </div>
                                    </div>
                                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5 max-sm:-ml-2">
                                        <div className="text-black text-xs max-sm:text-[9px] max-sm:w-28 max-sm:-ml-8 font-bold leading-5 max-sm:leading-2">
                                            JYJ 2011 JYJ Worldwide Concert Barcelona
                                        </div>
                                        <div className="text-neutral-500 text-xs max-sm:text-[8px] max-sm:w-28 max-sm:-ml-8 leading-2 mt-1 max-sm:leading-2">
                                            Directly seated and inside for you to enjoy the show.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                

            </Swiper>
        </div >
    )
}

export default Cards
