import React, { useEffect, useRef } from "react";
import header from "../../assets/images/header.png";
import {axiosAuth} from "../../utils/axios";

const Headerswiper = () => {
  const [events, setEvents] = React.useState([]);
  const carouselRef = useRef(null);
  useEffect(() => {
   const getEvents = async () => {
    try{
      const res = await axiosAuth.get("/banners");
      if(res.status === 200){
        setEvents(res.data.data);
      }
    }
    catch(err){
      console.log(err);
    }
   }
   getEvents();
  }, []);


  const carouselItems = events.map((event) => event.attributes.imgurl);

  useEffect(() => {
    let currentSlide = 0;
    const interval = setInterval(() => {
      currentSlide = (currentSlide + 1) % carouselItems.length;
      carouselRef.current
        .querySelectorAll("[data-carousel-item]")
        .forEach((item, index) => {
          item.classList.toggle("hidden", index !== currentSlide);
        });
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselItems]);

  return (
    <div className="flex flex-col justify-between p-2 my-5">
  {/* ... (Previous code) */}
  
  <div
    id="default-carousel"
    className="relative w-full"
    data-carousel="slide"
    ref={carouselRef}
  >
    <div className="h-[200px]  sm:h-[300px] md:h-[350px] lg:h-[400px]">
      {carouselItems.map((imageUrl, index) => (
        <div
          key={index}
          className={`duration-700 ease-in-out ${
            index === 0 ? "" : "hidden"
          }`}
          data-carousel-item
        >
          <img
            src={imageUrl}
            className="absolute block w-full h-full object-cover object-center"
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}
    </div>
  </div>
</div>
  )
};

export default Headerswiper;
