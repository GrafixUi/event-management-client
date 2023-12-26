
import React, { useState } from 'react';
import Dashboard from "../dashboard/Dashboard";

const Vendorlogin = () => {
    const [isToggled, setIsToggled] = useState(false)
    return (
        <div>
            <div className="items-center bg-white bg-opacity-90 flex flex-col justify-center px-16 py-12 max-md:px-5">
                <div className="w-full max-w-[1499px] mt-10 mb-52 max-md:max-w-full max-md:my-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                            <div className="items-stretch flex grow flex-col pr-2 pb-2.5 max-md:mt-10">
                                <button
                                    onClick={() => setIsToggled(!isToggled)}
                                    className="border border-[color:var(--NestMart-BorderColor-1,#E5E5E5)] bg-white flex items-stretch justify-between gap-3.5 px-7 py-5 rounded-xl border-solid max-md:px-5 hover:bg-gray-200">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe4a4694c1bb53a052c6ee9967fae763cea8958649ce2c486f5943f630e9eac7?" alt='imh'
                                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                    />
                                    <div className="text-zinc-500 text-base font-bold leading-5 tracking-normal self-center grow whitespace-nowrap my-auto">
                                        Dashboard
                                    </div>
                                </button>
                                <button
                                    onClick={() => setIsToggled(!isToggled)}
                                    className="border border-[color:var(--NestMart-BorderColor-1,#E5E5E5)]  flex items-stretch justify-between gap-3.5 mt-2.5 px-7 py-5 rounded-xl border-solid max-md:px-5 hover:bg-gray-200">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe4a4694c1bb53a052c6ee9967fae763cea8958649ce2c486f5943f630e9eac7?" alt='imh'
                                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                    />
                                    <div className="text-zinc-500 text-base font-bold leading-5 tracking-normal self-center grow whitespace-nowrap my-auto">
                                        Ticket list
                                    </div>
                                </button>
                                <button
                                    onClick={() => setIsToggled(!isToggled)}
                                    className="border border-[color:var(--NestMart-BorderColor-1,#E5E5E5)] bg-white flex items-stretch justify-between gap-3.5 mt-2.5 px-7 py-5 rounded-xl border-solid max-md:px-5 hover:bg-gray-200">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e7811bb6b1033630cf0948a7f6c3328d4fcc305f686c637970ee6a5523aba22?" alt='img'
                                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                    />
                                    <div className="text-zinc-500 text-base font-bold leading-5 tracking-normal self-center grow whitespace-nowrap my-auto">
                                        Add a Event/Movie
                                    </div>
                                </button>
                                <button 
                                    onClick={() => setIsToggled(!isToggled)}  
                                    className="border border-[color:var(--NestMart-BorderColor-1,#E5E5E5)] bg-white flex items-stretch justify-between gap-2.5 mt-2.5 px-8 py-5 rounded-xl border-solid max-md:px-5 hover:bg-gray-200">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d875ccb0275122d27cf3e890de3181bca444339db30e255eccf4aecab885f6d1?" alt='img'
                                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                    />
                                    <div className="text-zinc-500 text-base font-bold leading-5 tracking-normal self-center grow whitespace-nowrap my-auto">
                                        My address
                                    </div>
                                </button>
                                <button
                                    onClick={() => setIsToggled(!isToggled)}  
                                    className="border border-[color:var(--NestMart-BorderColor-1,#E5E5E5)] bg-white flex items-stretch justify-between gap-2.5 mt-2.5 px-8 py-5 rounded-xl border-solid max-md:px-5 hover:bg-gray-200">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ef51b2b0f4fdb6bc72068521282ebd7a94f0daf720f0edd54c29ebf0f3029a5?" alt='img'
                                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                    />
                                    <div className="text-zinc-500 text-base font-bold leading-5 tracking-normal self-center grow whitespace-nowrap my-auto">
                                        Account details
                                    </div>
                                </button>
                                <button 
                                    onClick={() => setIsToggled(!isToggled)}  
                                    className="border border-[color:var(--NestMart-BorderColor-1,#E5E5E5)] bg-white flex items-stretch justify-between gap-2 mt-2.5 px-9 py-5 rounded-xl border-solid max-md:px-5 hover:bg-gray-200">
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
                        <div>
                            {isToggled && <Dashboard />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vendorlogin
