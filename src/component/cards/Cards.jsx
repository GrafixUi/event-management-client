import React from 'react';
import product1 from "../../assets/images/product1.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom/dist';
import axios from 'axios';
import {useEffect , useState} from 'react'
const Cards = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const upcomingDataNew = async () => {
          try {
            const upcomingEvents = await axios.get(
              `${process.env.REACT_APP_BACKENDURL}/events`
            );
            setItems(upcomingEvents.data.data);
          } catch (err) {
            console.log(err);
          }
        };
        upcomingDataNew();
      }, []);

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
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 2,
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
               {
                     items.map((item) => (
                      <SwiperSlide>
                      <Link to={`/eventselection?eventid=${item.id}`}>
                        <div key={item.id} className="bg-white shadow-sm shadow-slate-300 flex w-[300px] flex-col items-stretch pb-2 rounded-2xl mb-2 justify-center transition duration-500 hover:scale-105 max-sm:w-[220px] max-sm:ml-14 ml-12">
                            <img
                                loading="lazy"
                                srcSet={product1} alt='product'
                                className="object-contain object-center w-full overflow-hidden"
                            />
                            <div className="self-center flex justify-between  mt-0.5 items-start w-full">
                                <div className="flex basis-[0%] flex-col self-center items-stretch px-6 max-sm:w-12 max-sm:-ml-2">
                                    <h1 className="text-indigo-600 text-center text-xs font-bold whitespace-nowrap max-sm:text-[10px]">
                                        {item.attributes.month}
                                    </h1>
                                    <h3 className="text-black text-xl font-bold whitespace-nowrap mt-2">
                                        {item.attributes.day}
                                    </h3>
                                </div>
                                <div className="self-stretch flex grow basis-[0%] max-sm:-ml-2 flex-col items-stretch px-12 max-sm:w-32">
                                    <h1 className="text-black text-xs font-bold leading-1 max-sm:text-[10px]  max-sm:-ml-8 max-sm:leading-2 max-sm:w-32">
                                        {item.attributes.eventtitle}
                                    </h1>
                                    <h3 className="text-neutral-500 text-xs max-sm:text-[8px] max-sm:w-28 max-sm:-ml-8 leading-2 mt-1 max-sm:leading-2">
                                        {item.attributes.description}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </Link>
                 </SwiperSlide>
                     ))
               }

            </Swiper>
        </div >
    )
}

export default Cards
