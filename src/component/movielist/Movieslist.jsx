import React, { useState } from 'react';
import product1 from "../../assets/images/product1.png";
import { movieslistData } from "./movieslist.data";
import { Link } from 'react-router-dom';

const Eventslist = () => {
    const [items, setItems] = useState(movieslistData);

    return (
        <div className=' flex flex-col items-center'>
            <div className="text-blue-950 text-4xl font-bold self-center whitespace-nowrap mt-10">
                Movies{" "}
            </div>
            <div className=" py-5 mt-8 grid grid-cols-4 flex-wrap items-center justify-center gap-8 max-sm:grid-cols-1 max-md:grid-cols-2 max-xl:grid-cols-2">
                {items.map((item) => (
                    <Link to="/movieselection">
                        <div key={item.id} className="bg-white shadow-sm shadow-slate-300 flex w-[275px] flex-col items-stretch pb-6 rounded-2xl mb-5 justify-center transition duration-500 hover:scale-105">

                            <img
                                loading="lazy"
                                srcSet={product1} alt='product1'
                                className="aspect-[1.7] object-contain object-center w-full overflow-hidden"
                            />

                            <div className="self-center flex justify-between gap-5 items-start w-full">
                                <div className="flex basis-[0%] flex-col items-stretch self-center px-5">
                                    <h1 className="text-indigo-600 text-center text-xs font-bold whitespace-nowrap">
                                        APR
                                    </h1>
                                    <h2 className="text-black text-3xl font-bold whitespace-nowrap mt-2">
                                        14
                                    </h2>
                                </div>
                                <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5">
                                    <div className="text-black text-xs font-bold leading-5">
                                        {item.title}
                                    </div>
                                    <div className="text-neutral-500 text-xs leading-1 mt-1">
                                        {item.desc}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Eventslist;
