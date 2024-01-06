import React, { useState } from 'react';
import product1 from "../../assets/images/product1.png";
import { movieslistData } from "./movieslist.data";
import { Link } from 'react-router-dom';

const Eventslist = () => {
    const [items, setItems] = useState(movieslistData);

    return (
        <div className=' flex flex-col items-center'>

            <div className=" py-5 mt-8 grid grid-cols-4 flex-wrap items-center justify-center gap-8 max-sm:grid-cols-2 ">
                {items.map((item) => (
                    <Link to="/movieselection">
                        <div key={item.id} className="bg-white shadow-sm shadow-slate-300 flex w-[300px] flex-col items-stretch pb-6 rounded-2xl mb-5 justify-center transition duration-500 hover:scale-105 max-sm:w-[170px] max-sm:-ml-2">
                            <img
                                loading="lazy"
                                srcSet={product1} alt='product'
                                className="aspect-[1.7] object-contain object-center w-full overflow-hidden"
                            />
                            <div className="self-center flex justify-between gap-5 mt-0.5 items-start w-full">
                                <div className="flex basis-[0%] flex-col self-center items-stretch px-5 max-sm:w-12 max-sm:-ml-2">
                                    <h1 className="text-indigo-600 text-center text-xs font-bold whitespace-nowrap max-sm:text-[10px]">
                                        APR
                                    </h1>
                                    <h3 className="text-black text-xl font-bold whitespace-nowrap mt-2">
                                        14
                                    </h3>
                                </div>
                                <div className="self-stretch flex grow basis-[0%] max-sm:-ml-2 flex-col items-stretch px-5 max-sm:w-32">
                                    <h1 className="text-black text-xs font-bold leading-1 max-sm:text-[10px]  max-sm:-ml-8 max-sm:leading-2 max-sm:w-32">
                                        {item.title}
                                    </h1>
                                    <h3 className="text-neutral-500 text-xs max-sm:text-[8px] max-sm:w-28 max-sm:-ml-8 leading-2 mt-1 max-sm:leading-2">
                                        {item.desc}
                                    </h3>
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
