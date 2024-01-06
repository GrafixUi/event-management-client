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
                    <div className="container py-5 mt-8 flex flex-wrap items-center justify-center">
                        <Link to="/eventslist">
                            <div className="bg-white shadow shadow-black flex w-[300px] flex-col items-stretch pb-6 rounded-2xl mb-2 justify-center">
                                <img
                                    srcSet={product1} alt='product1'
                                    className="aspect-[1.7] object-contain object-center w-full overflow-hidden"
                                />
                                <div className="self-center flex justify-between gap-5 mt-1 items-start w-full">
                                    <div className="flex justify-center items-center self-center basis-[0%] flex-col  px-5">
                                        <h1 className="text-indigo-600 text-center text-xs font-bold whitespace-nowrap">
                                            APR
                                        </h1>
                                        <p className="text-black text-3xl font-bold whitespace-nowrap mt-2">
                                            14
                                        </p>
                                    </div>
                                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5">
                                        <h2 className="text-black text-xs font-bold leading-5">
                                            JYJ 2011 JYJ Worldwide Concert Barcelona
                                        </h2>
                                        <h2 className="text-neutral-500 text-xs leading-2 mt-1">
                                            Directly seated and inside for you to enjoy the show.
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container py-5 mt-8  flex flex-wrap items-center justify-center gap-8">
                        <Link to="/eventslist">
                            <div className="bg-white shadow shadow-black flex w-[300px] flex-col items-stretch pb-6 rounded-2xl mb-5 justify-center">
                                <img
                                    srcSet={product1} alt='product1'
                                    className="aspect-[1.7] object-contain object-center w-full overflow-hidden"
                                />
                                <div className="self-center flex justify-between gap-5 mt-1 items-start w-full">
                                    <div className="flex basis-[0%] flex-col items-center justify-center self-center px-5">
                                        <h1 className="text-indigo-600 text-center text-xs font-bold whitespace-nowrap">
                                            APR
                                        </h1>
                                        <p className="text-black text-3xl font-bold whitespace-nowrap mt-2">
                                            14
                                        </p>
                                    </div>
                                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5">
                                        <h2 className="text-black text-xs font-bold leading-5">
                                            JYJ 2011 JYJ Worldwide Concert Barcelona
                                        </h2>
                                        <h2 className="text-neutral-500 text-xs leading-2 mt-1">
                                            Directly seated and inside for you to enjoy the show.
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container py-5 mt-8 flex flex-wrap items-center justify-center gap-8">
                        <Link to="/eventslist">
                            <div className="bg-white shadow shadow-black flex w-[300px] flex-col items-stretch pb-6 rounded-2xl mb-5 justify-center">
                                <img
                                    srcSet={product1} alt='product1'
                                    className="aspect-[1.7] object-contain object-center w-full overflow-hidden"
                                />
                                <div className="self-center flex justify-between gap-5 mt-1 items-start w-full">
                                    <div className="flex basis-[0%] flex-col items-center self-center px-5">
                                        <h1 className="text-indigo-600 text-center text-xs font-bold whitespace-nowrap">
                                            APR
                                        </h1>
                                        <p className="text-black text-3xl font-bold whitespace-nowrap mt-2">
                                            14
                                        </p>
                                    </div>
                                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5">
                                        <h2 className="text-black text-xs font-bold leading-5">
                                            JYJ 2011 JYJ Worldwide Concert Barcelona
                                        </h2>
                                        <h2 className="text-neutral-500 text-xs leading-2 mt-1">
                                            Directly seated and inside for you to enjoy the show.
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container py-5 mt-8  flex flex-wrap items-center justify-center gap-8">
                        <Link to="/eventslist">
                            <div className="bg-white shadow shadow-black flex w-[300px] flex-col items-stretch pb-6 rounded-2xl mb-5 justify-center">
                                <img
                                    srcSet={product1} alt='product1'
                                    className="aspect-[1.7] object-contain object-center w-full overflow-hidden"
                                />
                                <div className="self-center flex justify-between gap-5 mt-1 items-start w-full">
                                    <div className="flex basis-[0%] flex-col self-center px-5">
                                        <div className="text-indigo-600 text-center text-xs font-bold whitespace-nowrap">
                                            APR
                                        </div>
                                        <div className="text-black text-3xl font-bold whitespace-nowrap mt-2">
                                            14
                                        </div>
                                    </div>
                                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5">
                                        <h2 className="text-black text-xs font-bold leading-5">
                                            JYJ 2011 JYJ Worldwide Concert Barcelona
                                        </h2>
                                        <h2 className="text-neutral-500 text-xs leading-2 mt-1">
                                            Directly seated and inside for you to enjoy the show.
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container py-5 mt-8 flex flex-wrap items-center justify-center gap-8">
                        <Link to="/eventslist">
                            <div className="bg-white shadow shadow-black flex w-[300px] flex-col items-stretch pb-6 rounded-2xl mb-5 justify-center">
                                <img
                                    srcSet={product1} alt='product1'
                                    className="aspect-[1.7] object-contain object-center w-full overflow-hidden"
                                />
                                <div className="self-center flex justify-between gap-5 mt-1 items-start w-full">
                                    <div className="flex basis-[0%] flex-col items-stretch self-center px-5">
                                        <h1 className="text-indigo-600 text-center text-xs font-bold whitespace-nowrap">
                                            APR
                                        </h1>
                                        <p className="text-black text-3xl font-bold whitespace-nowrap mt-2">
                                            14
                                        </p>
                                    </div>
                                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5">
                                        <h2 className="text-black text-xs font-bold leading-5">
                                            JYJ 2011 JYJ Worldwide Concert Barcelona
                                        </h2>
                                        <h2 className="text-neutral-500 text-xs leading-2 mt-1">
                                            Directly seated and inside for you to enjoy the show.
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="container py-5 mt-8 flex flex-wrap items-center justify-center gap-8">
                        <Link to="/eventslist">
                            <div className="bg-white shadow shadow-black flex w-[300px] flex-col items-stretch pb-6 rounded-2xl mb-5 justify-center">
                                <img
                                    srcSet={product1} alt='product1'
                                    className="aspect-[1.7] object-contain object-center w-full overflow-hidden"
                                />
                                <div className="self-center flex justify-between gap-5 mt-1 items-start w-full">
                                    <div className="flex basis-[0%] flex-col items-stretch self-center px-5">
                                        <h1 className="text-indigo-600 text-center text-xs font-bold whitespace-nowrap">
                                            APR
                                        </h1>
                                        <p className="text-black text-3xl font-bold whitespace-nowrap mt-2">
                                            14
                                        </p>
                                    </div>
                                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5">
                                        <h2 className="text-black text-xs font-bold leading-5">
                                            JYJ 2011 JYJ Worldwide Concert Barcelona
                                        </h2>
                                        <h2 className="text-neutral-500 text-xs leading-2 mt-1">
                                            Directly seated and inside for you to enjoy the show.
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container py-5 mt-8 flex flex-wrap items-center justify-center gap-8">
                        <Link to="/eventslist">
                            <div className="bg-white shadow shadow-black flex w-[300px] flex-col items-stretch pb-6 rounded-2xl mb-5 justify-center">
                                <img
                                    srcSet={product1} alt='product1'
                                    className="aspect-[1.7] object-contain object-center w-full overflow-hidden"
                                />
                                <div className="self-center flex justify-between gap-5 mt-1 items-start w-full">
                                    <div className="flex basis-[0%] flex-col items-stretch self-center px-5">
                                        <h1 className="text-indigo-600 text-center text-xs font-bold whitespace-nowrap">
                                            APR
                                        </h1>
                                        <p className="text-black text-3xl font-bold whitespace-nowrap mt-2">
                                            14
                                        </p>
                                    </div>
                                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5">
                                        <h2 className="text-black text-xs font-bold leading-5">
                                            JYJ 2011 JYJ Worldwide Concert Barcelona
                                        </h2>
                                        <h2 className="text-neutral-500 text-xs leading-5 mt-1">
                                            Directly seated and inside for you to enjoy the show.
                                        </h2>
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
