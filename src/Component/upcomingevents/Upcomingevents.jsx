import React, { useState } from 'react';
import { upcomingData } from "./upcomingevents.data";
import product1 from "../../assets/images/product1.png";
import { Link } from 'react-router-dom';

const Upcomingevents = () => {
    const [items, setItems] = useState(upcomingData);
    return (
        <div>
            <div className=" py-5 mt-8 ml-8 flex flex-wrap items-center justify-center gap-8 max-sm:-ml-1">
                {items.map((item) => (
                    <Link to="/eventslist">
                        <div key={item.id} className="bg-white shadow shadow-black flex w-[343px] flex-col items-stretch pb-6 rounded-2xl mb-5 justify-center">
                            <img
                                loading="lazy"
                                srcSet={product1} alt='product1'
                                className="aspect-[1.7] object-contain object-center w-full overflow-hidden"
                            />
                            <div className="self-center flex justify-between gap-5 mt-5 items-start w-full">
                                <div className="flex basis-[0%] flex-col items-stretch px-5">
                                    <div className="text-indigo-600 text-center text-xs font-bold whitespace-nowrap">
                                        APR
                                    </div>
                                    <div className="text-black text-3xl font-bold whitespace-nowrap mt-2">
                                        14
                                    </div>
                                </div>
                                <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5">
                                    <div className="text-black text-base font-bold leading-6">
                                        {item.title}
                                    </div>
                                    <div className="text-neutral-500 text-sm leading-5 mt-5">
                                        {item.desc}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Upcomingevents