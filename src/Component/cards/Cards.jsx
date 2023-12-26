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
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
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
                    <div className="container py-5 mt-8 ml-8 flex flex-wrap items-center justify-center gap-8">
                        <Link to="/eventslist">
                            <div className="bg-white shadow shadow-black flex w-[343px] flex-col items-stretch pb-6 rounded-2xl mb-5 justify-center">
                                <img
                                    srcSet={product1} alt='product1'
                                    className="aspect-[1.7] object-contain object-center w-full overflow-hidden"
                                />
                                <div className="self-center flex justify-between gap-5 mt-5 items-start w-full">
                                    <div className="flex basis-[0%] flex-col items-stretch px-5">
                                        <div className="text-indigo-600 text-center text-xs font-bold whitespace-nowrap">
                                            APR
                                        </div>
                                        <div className="text-black text-3xl font-bold whitespace-nowrap mt-2">
                                            14
                                        </div>
                                    </div>
                                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5">
                                        <div className="text-black text-base font-bold leading-6">
                                            JYJ 2011 JYJ Worldwide Concert Barcelona
                                        </div>
                                        <div className="text-neutral-500 text-sm leading-5 mt-5">
                                            Directly seated and inside for you to enjoy the show.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container py-5 mt-8 ml-8 flex flex-wrap items-center justify-center gap-8">
                        <Link to="/eventslist">
                            <div className="bg-white shadow shadow-black flex w-[343px] flex-col items-stretch pb-6 rounded-2xl mb-5 justify-center">
                                <img
                                    srcSet={product1} alt='product1'
                                    className="aspect-[1.7] object-contain object-center w-full overflow-hidden"
                                />
                                <div className="self-center flex justify-between gap-5 mt-5 items-start w-full">
                                    <div className="flex basis-[0%] flex-col items-stretch px-5">
                                        <div className="text-indigo-600 text-center text-xs font-bold whitespace-nowrap">
                                            APR
                                        </div>
                                        <div className="text-black text-3xl font-bold whitespace-nowrap mt-2">
                                            14
                                        </div>
                                    </div>
                                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5">
                                        <div className="text-black text-base font-bold leading-6">
                                            JYJ 2011 JYJ Worldwide Concert Barcelona
                                        </div>
                                        <div className="text-neutral-500 text-sm leading-5 mt-5">
                                            Directly seated and inside for you to enjoy the show.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container py-5 mt-8 ml-8 flex flex-wrap items-center justify-center gap-8">
                        <Link to="/eventslist">
                            <div className="bg-white shadow shadow-black flex w-[343px] flex-col items-stretch pb-6 rounded-2xl mb-5 justify-center">
                                <img
                                    srcSet={product1} alt='product1'
                                    className="aspect-[1.7] object-contain object-center w-full overflow-hidden"
                                />
                                <div className="self-center flex justify-between gap-5 mt-5 items-start w-full">
                                    <div className="flex basis-[0%] flex-col items-stretch px-5">
                                        <div className="text-indigo-600 text-center text-xs font-bold whitespace-nowrap">
                                            APR
                                        </div>
                                        <div className="text-black text-3xl font-bold whitespace-nowrap mt-2">
                                            14
                                        </div>
                                    </div>
                                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5">
                                        <div className="text-black text-base font-bold leading-6">
                                            JYJ 2011 JYJ Worldwide Concert Barcelona
                                        </div>
                                        <div className="text-neutral-500 text-sm leading-5 mt-5">
                                            Directly seated and inside for you to enjoy the show.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container py-5 mt-8 ml-8 flex flex-wrap items-center justify-center gap-8">
                        <Link to="/eventslist">
                            <div className="bg-white shadow shadow-black flex w-[343px] flex-col items-stretch pb-6 rounded-2xl mb-5 justify-center">
                                <img
                                    srcSet={product1} alt='product1'
                                    className="aspect-[1.7] object-contain object-center w-full overflow-hidden"
                                />
                                <div className="self-center flex justify-between gap-5 mt-5 items-start w-full">
                                    <div className="flex basis-[0%] flex-col items-stretch px-5">
                                        <div className="text-indigo-600 text-center text-xs font-bold whitespace-nowrap">
                                            APR
                                        </div>
                                        <div className="text-black text-3xl font-bold whitespace-nowrap mt-2">
                                            14
                                        </div>
                                    </div>
                                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5">
                                        <div className="text-black text-base font-bold leading-6">
                                            JYJ 2011 JYJ Worldwide Concert Barcelona
                                        </div>
                                        <div className="text-neutral-500 text-sm leading-5 mt-5">
                                            Directly seated and inside for you to enjoy the show.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container py-5 mt-8 ml-8 flex flex-wrap items-center justify-center gap-8">
                        <Link to="/eventslist">
                            <div className="bg-white shadow shadow-black flex w-[343px] flex-col items-stretch pb-6 rounded-2xl mb-5 justify-center">
                                <img
                                    srcSet={product1} alt='product1'
                                    className="aspect-[1.7] object-contain object-center w-full overflow-hidden"
                                />
                                <div className="self-center flex justify-between gap-5 mt-5 items-start w-full">
                                    <div className="flex basis-[0%] flex-col items-stretch px-5">
                                        <div className="text-indigo-600 text-center text-xs font-bold whitespace-nowrap">
                                            APR
                                        </div>
                                        <div className="text-black text-3xl font-bold whitespace-nowrap mt-2">
                                            14
                                        </div>
                                    </div>
                                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5">
                                        <div className="text-black text-base font-bold leading-6">
                                            JYJ 2011 JYJ Worldwide Concert Barcelona
                                        </div>
                                        <div className="text-neutral-500 text-sm leading-5 mt-5">
                                            Directly seated and inside for you to enjoy the show.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container py-5 mt-8 ml-8 flex flex-wrap items-center justify-center gap-8">
                        <Link to="/eventslist">
                            <div className="bg-white shadow shadow-black flex w-[343px] flex-col items-stretch pb-6 rounded-2xl mb-5 justify-center">
                                <img
                                    srcSet={product1} alt='product1'
                                    className="aspect-[1.7] object-contain object-center w-full overflow-hidden"
                                />
                                <div className="self-center flex justify-between gap-5 mt-5 items-start w-full">
                                    <div className="flex basis-[0%] flex-col items-stretch px-5">
                                        <div className="text-indigo-600 text-center text-xs font-bold whitespace-nowrap">
                                            APR
                                        </div>
                                        <div className="text-black text-3xl font-bold whitespace-nowrap mt-2">
                                            14
                                        </div>
                                    </div>
                                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5">
                                        <div className="text-black text-base font-bold leading-6">
                                            JYJ 2011 JYJ Worldwide Concert Barcelona
                                        </div>
                                        <div className="text-neutral-500 text-sm leading-5 mt-5">
                                            Directly seated and inside for you to enjoy the show.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container py-5 mt-8 ml-8 flex flex-wrap items-center justify-center gap-8">
                        <Link to="/eventslist">
                            <div className="bg-white shadow shadow-black flex w-[343px] flex-col items-stretch pb-6 rounded-2xl mb-5 justify-center">
                                <img
                                    srcSet={product1} alt='product1'
                                    className="aspect-[1.7] object-contain object-center w-full overflow-hidden"
                                />
                                <div className="self-center flex justify-between gap-5 mt-5 items-start w-full">
                                    <div className="flex basis-[0%] flex-col items-stretch px-5">
                                        <div className="text-indigo-600 text-center text-xs font-bold whitespace-nowrap">
                                            APR
                                        </div>
                                        <div className="text-black text-3xl font-bold whitespace-nowrap mt-2">
                                            14
                                        </div>
                                    </div>
                                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5">
                                        <div className="text-black text-base font-bold leading-6">
                                            JYJ 2011 JYJ Worldwide Concert Barcelona
                                        </div>
                                        <div className="text-neutral-500 text-sm leading-5 mt-5">
                                            Directly seated and inside for you to enjoy the show.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container py-5 mt-8 ml-8 flex flex-wrap items-center justify-center gap-8">
                        <Link to="/eventslist">
                            <div className="bg-white shadow shadow-black flex w-[343px] flex-col items-stretch pb-6 rounded-2xl mb-5 justify-center">
                                <img
                                    srcSet={product1} alt='product1'
                                    className="aspect-[1.7] object-contain object-center w-full overflow-hidden"
                                />
                                <div className="self-center flex justify-between gap-5 mt-5 items-start w-full">
                                    <div className="flex basis-[0%] flex-col items-stretch px-5">
                                        <div className="text-indigo-600 text-center text-xs font-bold whitespace-nowrap">
                                            APR
                                        </div>
                                        <div className="text-black text-3xl font-bold whitespace-nowrap mt-2">
                                            14
                                        </div>
                                    </div>
                                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5">
                                        <div className="text-black text-base font-bold leading-6">
                                            JYJ 2011 JYJ Worldwide Concert Barcelona
                                        </div>
                                        <div className="text-neutral-500 text-sm leading-5 mt-5">
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
