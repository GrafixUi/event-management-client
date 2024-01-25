import React, { useEffect, useRef } from "react";
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
      carouselRef.current
        .querySelectorAll("[data-carousel-item]")
        .forEach((item, index) => {
          item.classList.toggle("hidden", index !== currentSlide);
        });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" flex flex-col justify-between">
    {/* <div></div>
      <section class="text-gray-600 body-font py-10">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-6xl text-4xl mb-4 font-medium text-gray-900">
              Events Tailored <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A0DD2] via-[#FE326B] to-[#FC8D51]  inline-block">
                Just For You
              </span>
            </h1>
            <p class="mb-8 text-lg leading-relaxed w-[600px] text-center mx-auto">
              Transforming the way events are created, promoted, connected, and
              experienced, discover your perfect event experience with us!
            </p>
          </div>
        </div>
      </section> */}

      <div
        id="default-carousel"
        className="relative  w-full"
        data-carousel="slide"
        ref={carouselRef}
      >
        <div className="h-[400px] max-md:w-full  max-sm:h-[130px] ">
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
                className="absolute block w-full h-full object-cover "
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Headerswiper;
