import React from "react";
import product1 from "../../assets/images/product1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom/dist";
import axios from "axios";
import { useEffect, useState } from "react";
import { likedData } from "../../utils/store";
import { useStore } from "../../utils/store";
import { useNavigate } from "react-router-dom";
import { axiosAuth } from "../../utils/axios";
const Cards = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const upcomingDataNew = async () => {
      try {
        const upcomingEvents = await axios.get(
          `${process.env.REACT_APP_BACKENDURL}/movies`
        );
        setItems(upcomingEvents.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    upcomingDataNew();
  }, []);
  const likedMovies = likedData((state) => state.likedMovies);
  const [likedMoviesArr, setLikedMoviesArr] = useState(likedMovies);
  const navigate = useNavigate();
  const userData = useStore((state) => state.userData);

  const updateLikedMovies = likedData((state) => state.updateLikedMovies);
  const removeLikedMovies = likedData((state) => state.removeLikedMovies);

  const handleLikedMovies = async (id) => {
    if (!userData) {
      navigate("/login");
    }
    try {
      const res = await axiosAuth.put(
        `${process.env.REACT_APP_BACKENDURL}/users/${userData.id}`,
        {
          likedmovie: JSON.stringify([...likedMoviesArr, { id: id }]),
        }
      );
      console.log(res);
      if (res.status === 200) {
        updateLikedMovies({ id });
        setLikedMoviesArr([...likedMoviesArr, { id: id }]);
      }
    } catch {
      console.log("error");
    }
  };
  const handleDislikedMovies = async (id) => {
    if (!userData) {
      navigate("/login");
    }

    try {
      const res = await axiosAuth.put(
        `${process.env.REACT_APP_BACKENDURL}/users/${userData.id}`,
        {
          likedevent: JSON.stringify(
            likedMoviesArr.filter((item) => item.id !== id)
          ),
        }
      );
      if (res.status === 200) {
        setLikedMoviesArr(likedMoviesArr.filter((item) => item.id !== id));
        removeLikedMovies({ id }); // Pass an array
      }
    } catch {
      console.log("error");
    }
  };

  return (
    <div>
      <Swiper
        className=""
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        slidesPerView={3}
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          240: {
            slidesPerView: 1,
          },
          390: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
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
        {items.map((item) => (
          <SwiperSlide>
           
              <div
                key={item.id}
                className="bg-white shadow-sm shadow-slate-300 min-h-[220px] flex flex-col items-stretch pb-2 rounded-2xl mb-2 transition duration-500 hover:scale-105 max-sm:w-[220px] mx-auto"
              >
                <div className="relative group">
                  <img
                    loading="lazy"
                    srcSet={product1}
                    alt="product1"
                    className="object-contain object-center w-full overflow-hidden"
                  />
                  {likedMovies &&
                  likedMovies.find(
                    (likedMovie) => likedMovie.id === item.id
                  ) ? (
                    <div className="absolute top-2 right-2 cursor-pointer heart-icon-wrapper opacity-0 group-hover:opacity-100 transition-opacity duration-300  ">
                      <button onClick={() => handleDislikedMovies(item.id)}>
                        <svg
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                          height="2em"
                          width="2em"
                          className="bg-red-600 rounded-full p-1 text-white"
                        >
                          <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div className="absolute top-2 right-2 cursor-pointer heart-icon-wrapper opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button onClick={() => handleLikedMovies(item.id)}>
                        <svg
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                          height="2em"
                          width="2em"
                          className="bg-black/50 bg-opacity-50 rounded-full p-1 text-white"
                        >
                          <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
                <Link to={`/movieslist`}>
                <div className="self-center flex justify-between gap-5 mt-0.5 items-start w-full">
                  <div className="flex basis-[0%] flex-col self-center items-stretch px-5 max-sm:w-12 max-sm:-ml-2">
                    <h1 className="text-blue-950 text-center text-xs font-bold whitespace-nowrap max-sm:text-[10px]">
                      {item.attributes.month}
                    </h1>
                    <h3 className="text-black text-xl font-bold whitespace-nowrap mt-2">
                      {item.attributes.day}
                    </h3>
                  </div>
                  <div className="self-stretch flex grow basis-[0%] max-sm:-ml-2 flex-col items-stretch px-5 max-sm:w-32">
                    <h1 className="text-black text-md font-bold max-sm:w-32">
                      {item.attributes.movietitle}
                    </h1>
                    <h3 className="text-neutral-500 text-sm max-sm:w-32 mt-1">
                      {item.attributes.moviedesc}
                    </h3>
                  </div>
                </div>
                </Link>
              </div>
           
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Cards;
