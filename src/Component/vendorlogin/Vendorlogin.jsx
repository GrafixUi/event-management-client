import React from 'react';
import { Link } from 'react-router-dom';

const Vendorlogin = () => {
    return (
        <div className="items-center bg-white bg-opacity-90 flex flex-col justify-center px-16 py-12 max-md:px-5">
            <div className="w-full max-w-[1499px] mt-80 mb-[479px] max-md:max-w-full max-md:my-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                        <div className="items-stretch flex grow flex-col pr-2 pb-2.5 max-md:mt-10">
                            <button className="border border-[color:var(--NestMart-BorderColor-1,#E5E5E5)] bg-white flex items-stretch justify-between gap-3.5 px-7 py-5 rounded-xl border-solid max-md:px-5 hover:bg-gray-200">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe4a4694c1bb53a052c6ee9967fae763cea8958649ce2c486f5943f630e9eac7?" alt='imh'
                                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="text-zinc-500 text-base font-[1] leading-5 tracking-normal self-center grow whitespace-nowrap my-auto">
                                    Dashboard
                                </div>
                            </button>
                            <button className="border border-[color:var(--NestMart-BorderColor-1,#E5E5E5)] bg-neutral-900 flex items-stretch justify-between gap-3.5 mt-2.5 px-7 py-5 rounded-xl border-solid max-md:px-5 hover:bg-gray-200">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/112f52f88be89a704c7196038d6e174148e914a7198c4b1e4c2dd8b066e74d14?" alt='img'
                                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="text-white text-base font-bold leading-5 tracking-normal self-center grow whitespace-nowrap my-auto">
                                    Ticket list
                                </div>
                            </button>
                            <button className="border border-[color:var(--NestMart-BorderColor-1,#E5E5E5)] bg-white flex items-stretch justify-between gap-3.5 mt-2.5 px-7 py-5 rounded-xl border-solid max-md:px-5 hover:bg-gray-200">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e7811bb6b1033630cf0948a7f6c3328d4fcc305f686c637970ee6a5523aba22?" alt='img'
                                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="text-zinc-500 text-base font-bold leading-5 tracking-normal self-center grow whitespace-nowrap my-auto">
                                    Add a Event/Movie
                                </div>
                            </button>
                            <button className="border border-[color:var(--NestMart-BorderColor-1,#E5E5E5)] bg-white flex items-stretch justify-between gap-2.5 mt-2.5 px-8 py-5 rounded-xl border-solid max-md:px-5 hover:bg-gray-200">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d875ccb0275122d27cf3e890de3181bca444339db30e255eccf4aecab885f6d1?" alt='img'
                                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="text-zinc-500 text-base font-bold leading-5 tracking-normal self-center grow whitespace-nowrap my-auto">
                                    My address
                                </div>
                            </button>
                            <button className="border border-[color:var(--NestMart-BorderColor-1,#E5E5E5)] bg-white flex items-stretch justify-between gap-2.5 mt-2.5 px-8 py-5 rounded-xl border-solid max-md:px-5 hover:bg-gray-200">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ef51b2b0f4fdb6bc72068521282ebd7a94f0daf720f0edd54c29ebf0f3029a5?" alt='img'
                                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="text-zinc-500 text-base font-bold leading-5 tracking-normal self-center grow whitespace-nowrap my-auto">
                                    Account details
                                </div>
                            </button>
                            <button className="border border-[color:var(--NestMart-BorderColor-1,#E5E5E5)] bg-white flex items-stretch justify-between gap-2 mt-2.5 px-9 py-5 rounded-xl border-solid max-md:px-5 hover:bg-gray-200">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/41b4b0c71ab0887a1b2119a8748985fa4f70d9e27800654230d14c625e3110d6?" alt='img'
                                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="text-zinc-500 text-base font-bold leading-5 tracking-normal self-center grow whitespace-nowrap my-auto">
                                    Log out
                                </div>
                            </button>
                        </div>
                    </div>
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
            </div>
        </div>
    )
}

export default Vendorlogin
