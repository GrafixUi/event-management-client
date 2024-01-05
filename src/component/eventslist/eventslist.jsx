import React, { useState } from 'react';
import product1 from "../../assets/images/product1.png";
import { eventslistData } from "../eventslist/eventslist.data";
import { Link } from 'react-router-dom';

const Eventslist = () => {
    const [items, setItems] = useState(eventslistData);

    return (
        <div className=' items-center self-center flex flex-col justify-center'>
            <div className="text-blue-950 text-4xl font-bold items-center self-center justify-center whitespace-nowrap  mt-10">
                Events{" "}
            </div>
            <div className=" py-5 mt-8 grid grid-cols-4 flex-wrap items-center justify-center gap-10 max-sm:grid-cols-1 max-md:grid-cols-2 max-xl:grid-cols-2">
                {items.map((item) => (
                    <Link to="/eventselection">
                        <div key={item.id} className="bg-white shadow-sm shadow-slate-300 flex w-[300px] flex-col items-stretch pb-6 rounded-2xl mb-5 justify-center transition duration-500 hover:scale-105">

                            <img
                                loading="lazy"
                                srcSet={product1} alt='product1'
                                className="aspect-[1.7] object-contain object-center w-full overflow-hidden"
                            />

                            <div className="self-center flex justify-between gap-5 mt-5 items-start w-full">
                                <div className="flex basis-[0%] flex-col items-center justify-center self-center px-5">
                                    <div className="text-indigo-600 text-center text-xs font-bold whitespace-nowrap">
                                        APR
                                    </div>
                                    <div className="text-black text-3xl font-bold whitespace-nowrap mt-2">
                                        14
                                    </div>
                                </div>
                                <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5">
                                    <div className="text-black text-xs font-bold leading-6">
                                        {item.title}
                                    </div>
                                    <div className="text-neutral-500 text-xs leading-5 mt-5">
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
