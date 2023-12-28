// CardComponent.js
import React from 'react';

const CardComponent = ({ imageSrc, title, description, bgColor }) => {
  return (
    <div className={`group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30`}>
      <div className="h-60 w-96">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
          src={imageSrc}
          alt=""
        />
      </div>
      <div className={`absolute inset-0 opacity-90 ${bgColor}`}></div>
      <div className="absolute inset-0 flex translate-y-[8%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-2xl font-medium text-white">{title}</h1>
        <p className="text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardComponent;
