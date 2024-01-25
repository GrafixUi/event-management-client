import React, { useEffect, useRef } from 'react';
import header from "../../assets/images/header.png";

const carouselItems = [
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1703750644861_patramitroweb.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1703857318721_chndesktop.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1703162228341_web.jpg",
  
];

const Headerswiper = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    let currentSlide = 0;

    const interval = setInterval(() => {
      currentSlide = (currentSlide + 1) % carouselItems.length;
      carouselRef.current.querySelectorAll('[data-carousel-item]').forEach((item, index) => {
        item.classList.toggle('hidden', index !== currentSlide);
      });
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="default-carousel" className="relative w-full top-0" data-carousel="slide" ref={carouselRef}>
      <div className="relative h-[285px] sm:h-[230px]   top-7 overflow-hidden ">
        {carouselItems.map((imageUrl, index) => (
          <div key={index} className={`duration-700 ease-in-out ${index === 0 ? '' : 'hidden'}`} data-carousel-item>
            <img src={imageUrl} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Headerswiper;
