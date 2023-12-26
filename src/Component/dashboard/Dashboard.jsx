import React from 'react'
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="flex flex-col items-stretch w-[67%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col items-center mt-6 max-md:max-w-full max-md:mt-10">
                    <div className="text-slate-700 text-3xl font-bold leading-10 tracking-normal self-stretch max-md:max-w-full">
                        Your Ticket sold
                    </div>
                    <div className="bg-neutral-100 self-stretch flex w-full items-stretch justify-between gap-5 mt-8 px-9 py-6 rounded-2xl max-md:max-w-full max-md:flex-wrap max-md:px-5">
                        <div className="flex justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap">
                            <div className="justify-center text-slate-700 text-base font-bold leading-5 tracking-normal">
                                Order ID
                            </div>
                            <div className="justify-center text-slate-700 text-base font-bold leading-5 tracking-normal self-center my-auto">
                                Date
                            </div>
                            <div className="justify-center text-slate-700 text-base font-bold leading-5 tracking-normal self-center my-auto">
                                Status
                            </div>
                            <div className="justify-center text-slate-700 text-base font-bold leading-5 tracking-normal mt-1">
                                Total
                            </div>
                        </div>
                        <div className="justify-center text-slate-700 text-base font-bold leading-5 tracking-normal self-center my-auto">
                            Actions
                        </div>
                    </div>
                    <div className="flex w-[829px] max-w-full justify-between gap-5 mt-6 pr-3 py-1.5 items-start max-md:flex-wrap">
                        <div className="max-md:max-w-full">
                            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                <div className="flex flex-col items-stretch w-[21%] max-md:w-full max-md:ml-0">
                                    <div className="flex grow flex-col items-stretch my-auto max-md:mt-10">
                                        <div className="text-zinc-500 text-base leading-6 whitespace-nowrap">
                                            #1357
                                        </div>
                                        <div className="text-zinc-500 text-base leading-6 whitespace-nowrap mt-12 max-md:mt-10">
                                            #2468
                                        </div>
                                        <div className="text-zinc-500 text-base leading-6 whitespace-nowrap mt-12 max-md:mt-10">
                                            #2366
                                        </div>
                                        <div className="text-zinc-500 text-base leading-6 whitespace-nowrap mt-12 max-md:mt-10">
                                            #2367
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
                                    <div className="flex grow flex-col items-stretch max-md:mt-10">
                                        <div className="text-zinc-500 text-base leading-6 whitespace-nowrap">
                                            {" "}
                                            March 15, 2021
                                        </div>
                                        <div className="text-zinc-500 text-base leading-6 whitespace-nowrap mt-11 max-md:mt-10">
                                            June 29, 2021
                                        </div>
                                        <div className="text-zinc-500 text-base leading-6 whitespace-nowrap mt-11 max-md:mt-10">
                                            August 02, 2021
                                        </div>
                                        <div className="text-zinc-500 text-base leading-6 whitespace-nowrap mt-11 max-md:mt-10">
                                            {" "}
                                            March 05, 2021
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0">
                                    <div className="flex grow flex-col items-stretch max-md:mt-10">
                                        <div className="text-amber-300 text-base leading-6 whitespace-nowrap">
                                            Processing
                                        </div>
                                        <div className="text-lime-500 text-base leading-6 whitespace-nowrap mt-11 max-md:mt-10">
                                            Completed
                                        </div>
                                        <div className="text-lime-500 text-base leading-6 whitespace-nowrap mt-11 max-md:mt-10">
                                            Completed
                                        </div>
                                        <div className="text-lime-500 text-base leading-6 whitespace-nowrap mt-11 max-md:mt-10">
                                            Completed
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-stretch w-[28%] ml-5 max-md:w-full max-md:ml-0">
                                    <div className="flex grow flex-col items-stretch max-md:mt-10">
                                        <div className="text-zinc-500 text-base leading-6 whitespace-nowrap">
                                            $125.00 for 2 item
                                        </div>
                                        <div className="text-zinc-500 text-base leading-6 whitespace-nowrap mt-11 max-md:mt-10">
                                            $364.00 for 5 item
                                        </div>
                                        <div className="text-zinc-500 text-base leading-6 whitespace-nowrap mt-11 max-md:mt-10">
                                            $280.00 for 3 item
                                        </div>
                                        <div className="text-zinc-500 text-base leading-6 whitespace-nowrap mt-11 max-md:mt-10">
                                            $126.00 for 4 item
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex basis-[0%] flex-col items-stretch">
                            <Link className="text-emerald-400 text-base leading-6 whitespace-nowrap">
                                View
                            </Link>
                            <Link className="text-emerald-400 text-base leading-6 whitespace-nowrap mt-12 max-md:mt-10">
                                View
                            </Link>
                            <Link className="text-emerald-400 text-base leading-6 whitespace-nowrap mt-12 max-md:mt-10">
                                View
                            </Link>
                            <Link className="text-emerald-400 text-base leading-6 whitespace-nowrap mt-12 max-md:mt-10">
                                View
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
