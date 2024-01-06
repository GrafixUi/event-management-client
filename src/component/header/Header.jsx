import React, { useEffect, useRef } from 'react';
import header from "../../assets/images/header.png";

const carouselItems = [
    "https://event-management-wolfertech.netlify.app/static/media/background.1eb325ebab89068a98d5.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuFGx2xKfVX0QXtu14A53kDiVjIGhy02cCVQ&usqp=CAU",
    "https://assets.mspimages.in/gear/wp-content/uploads/2022/11/Bhediya-Poster-MySmartPrice.jpeg",
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
        <div id="default-carousel" className="relative w-full" data-carousel="slide" ref={carouselRef}>
            <div className="relative h-[500px] md:h-[500px] overflow-hidden rounded-lg max-sm:h-[300px]">
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
