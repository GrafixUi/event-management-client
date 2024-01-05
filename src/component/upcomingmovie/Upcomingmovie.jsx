import React, { useState } from 'react';
import product1 from "../../assets/images/product1.png";
import { upcomingData } from "./upcomingmovie.data";
import { Link } from 'react-router-dom';

const Upcomingevents = () => {
    const [items, setItems] = useState(upcomingData);

    return (
        <div className=" py-5 mt-8 grid grid-cols-3 w-[1000px] max-sm:grid-cols-1 max-sm:w-[320px] items-center self-center justify-center ml-7 max-sm:-ml-1 max-sm:self-center max-sm:items-center">
            {items.map((item) => (
                <Link to="/movieslist">
                    <div key={item.id} className="bg-white shadow-sm shadow-slate-300 flex w-[300px] flex-col items-stretch pb-6 rounded-2xl mb-5 justify-center transition duration-500 hover:scale-105">
                        <img
                            loading="lazy"
                            srcSet={product1} alt='product'
                            className="aspect-[1.7] object-contain object-center w-full overflow-hidden"
                        />
                        <div className="self-center flex justify-between gap-5 mt-0.5 items-start w-full">
                            <div className="flex basis-[0%] flex-col self-center items-stretch px-5">
                                <h1 className="text-indigo-600 text-center text-xs font-bold whitespace-nowrap">
                                    APR
                                </h1>
                                <h3 className="text-black text-xl font-bold whitespace-nowrap mt-2">
                                    14
                                </h3>
                            </div>
                            <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5">
                                <h1 className="text-black text-xs font-bold leading-5">
                                    {item.title}
                                </h1>
                                <h3 className="text-neutral-500 text-xs leading-2 mt-1">
                                    {item.desc}
                                </h3>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Upcomingevents;
