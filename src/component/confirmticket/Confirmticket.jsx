import React from 'react';
import Booking from "../../assets/images/booking.png";
import UPI from "../../assets/images/upi.png";
import Credit from "../../assets/images/credit.png";
import Paylater from "../../assets/images/paylater.png";
import Net from "../../assets/images/net.png";
import MWallets from "../../assets/images/m-wallets.png"
import { Link } from 'react-router-dom';
import Navbar from "../../component/navbar/Navbar"
import Footer from "../../component/footer/Footer"

const Confirmticket = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-white flex flex-col justify-center items-center px-16 max-md:px-5">
                <div className="flex w-full max-w-[1493px] flex-col mt-10 max-md:max-w-full max-md:my-10">
                    <div className="text-blue-950 text-xl font-bold self-center whitespace-nowrap font-[Poppins]">
                        Pay to confirm booking
                    </div>
                    <div className="self-stretch mt-16 max-md:max-w-full max-md:mt-10">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch w-[65%] max-md:w-full max-md:ml-0">
                                <div className="bg-blue-950 grow w-[700px] pl-16 pr-20 py-12 rounded-2xl max-md:max-w-full max-md:mt-10 max-md:px-5">
                                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                        <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
                                            <div className="flex flex-col items-stretch my-auto max-md:max-w-full max-md:mt-10">
                                                <div className="text-white text-2xl font-semibold max-md:max-w-full">
                                                    Booking Detail
                                                </div>
                                                <div className="text-white text-xl font-medium leading-8 mt-8 max-md:max-w-full">
                                                    Schedule
                                                </div>
                                                <div className="text-white text-md leading-7 mt-7">
                                                    Movie Title
                                                </div>
                                                <div className="text-white text-xl font-medium leading-8 whitespace-nowrap mt-1.5 self-start">
                                                    EVENT NAME
                                                </div>
                                                <div className="text-white text-md leading-7 mt-5">
                                                    Date
                                                </div>
                                                <div className="text-white text-xl font-medium leading-8 whitespace-nowrap mt-1.5 self-start">
                                                    Mon, 23 Oct 2023
                                                </div>
                                                <div className="text-neutral-400 text-lg leading-7 mt-5">
                                                    Ticket (3)
                                                </div>
                                                <div className="text-white text-xl font-medium leading-8 whitespace-nowrap mt-1.5 self-start">
                                                    C8, C9, C10
                                                </div>
                                                <div className="text-white text-sm font-medium mt-9 max-md:max-w-full">
                                                    Theater:
                                                </div>
                                                <div className="text-white text-xl font-semibold mt-7 max-md:max-w-full">
                                                    HITEX Exhibition Centre
                                                </div>
                                                <div className="text-white text-md font-light mt-5 max-md:max-w-full">
                                                    HITEX Exhibition Centre, Hitex Road, Izzathnagar,
                                                    Kothaguda, Telangana, India
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-stretch w-[39%] ml-5 max-md:w-full max-md:ml-0">
                                            <img
                                                srcSet={Booking} alt='booking'
                                                className="aspect-[0.8] object-contain object-center w-full overflow-hidden mt-5 max-md:mt-10"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-stretch w-[30%] ml-5 max-md:w-full max-md:ml-0">
                                <div className="flex flex-col max-md:max-w-full max-md:mt-10">
                                    <div className="justify-center items-stretch bg-white self-stretch flex flex-col p-8 rounded-3xl border-2 border-dashed border-blue-950 max-md:max-w-full max-md:px-5">
                                        <div className="text-blue-950 text-2xl font-medium max-md:max-w-full">
                                            Offers
                                        </div>
                                        <div className="justify-between items-stretch flex gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
                                            <div className="justify-between items-center flex gap-2.5">
                                                <img
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/93e2f9a3ab332727d07dceec0d7d91924df0a1bce654f8e4f84ece11c0d38c0e?" alt='img'
                                                    className="aspect-square object-contain object-center w-5 fill-blue-950 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-neutral-800 text-base font-medium self-stretch grow whitespace-nowrap">
                                                    50% off up to ₹100 | Use code BOOKNOW
                                                </div>
                                            </div>
                                            <Link className="text-blue-950 text-base font-medium">
                                                Apply
                                            </Link>
                                        </div>
                                        <div className="justify-between items-stretch flex w-full gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
                                            <div className="justify-between items-center flex gap-2.5">
                                                <img
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/93e2f9a3ab332727d07dceec0d7d91924df0a1bce654f8e4f84ece11c0d38c0e?" alt='img'
                                                    className="aspect-square object-contain object-center w-5 fill-blue-950 overflow-hidden shrink-0 max-w-full my-auto"
                                                />
                                                <div className="text-neutral-800 text-base font-medium self-stretch grow whitespace-nowrap">
                                                    20% off | Use code FIRSTTIME
                                                </div>
                                            </div>
                                            <Link className="text-blue-950 text-base font-medium">
                                                Apply
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="justify-center items-stretch border bg-white self-stretch flex flex-col mt-5 px-8 py-4 rounded-xl border-solid border-zinc-500 border-opacity-50 max-md:max-w-full max-md:px-5">
                                        <div className="justify-between items-center flex gap-5 max-md:max-w-full max-md:flex-wrap">
                                            <div className="items-stretch flex gap-2.5 my-auto">
                                                <img
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/93c146497e8165cb89e62d813ff44ceaae8089be958bef572eb8b97e70731be6?" alt='img'
                                                    className="aspect-square object-contain object-center w-8 fill-blue-950 overflow-hidden shrink-0 max-w-full"
                                                />
                                                <div className="text-neutral-800 text-xl font-medium grow whitespace-nowrap self-start">
                                                    Apply Code
                                                </div>
                                            </div>
                                            <div className="text-zinc-500 text-opacity-50 text-sm font-medium whitespace-nowrap items-stretch self-stretch grow justify-center px-6 py-5 border-b-zinc-500 border-b-opacity-50 border-b border-solid max-md:px-5">
                                                <input type="text" placeholder='Enter Code' className=' p-5' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="justify-center items-stretch border bg-white self-stretch flex flex-col mt-5 p-8 rounded-xl border-solid border-zinc-500 border-opacity-50 max-md:max-w-full max-md:px-5">
                                        <div className="text-neutral-800 text-xl font-medium max-md:max-w-full">
                                            Bill details
                                        </div>
                                        <div className="justify-between items-stretch flex gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
                                            <div className="text-zinc-500 text-xs font-medium">
                                                Base Ticket Fare
                                            </div>
                                            <div className="text-zinc-500 text-xs font-medium">
                                                ₹1000.00
                                            </div>
                                        </div>
                                        <div className="justify-between items-stretch flex gap-5 mt-2.5 max-md:max-w-full max-md:flex-wrap">
                                            <div className="text-zinc-500 text-xs font-medium">
                                                Total Travellers
                                            </div>
                                            <div className="text-zinc-500 text-xs font-medium">3</div>
                                        </div>
                                        <div className="justify-between items-stretch flex gap-5 mt-2.5 max-md:max-w-full max-md:flex-wrap">
                                            <div className="text-zinc-500 text-xs font-medium">
                                                CGST & SGST
                                            </div>
                                            <div className="text-zinc-500 text-xs font-medium">
                                                ₹500.00
                                            </div>
                                        </div>
                                        <div className="justify-between items-stretch flex gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
                                            <div className="text-neutral-700 text-xl font-medium">
                                                Total Charge
                                            </div>
                                            <div className="text-neutral-700 text-xl font-medium">
                                                ₹3500.00
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/confirmbooking" className="text-[#0A075F] text-bold font-semibold self-center whitespace-nowrap mt-10 max-md:mt-10">
                                        Next
                                    </Link>
                                    <button className="text-pink-600 text-bold font-semibold self-center whitespace-nowrap mt-10 max-md:mt-10">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex max-w-[686px] flex-col px-5 mt-14">
                        <div className="text-neutral-800 text-xl font-medium whitespace-nowrap self-start max-md:ml-1.5">
                            All Payment Options
                        </div>
                        <div className="justify-between items-stretch bg-white flex max-w-[934px] gap-5 p-6 border-b-zinc-500 border-b-opacity-50 border-b border-solid max-md:flex-wrap max-md:px-5 mt-10 hover:bg-slate-100 cursor-pointer">
                            <div className="flex justify-between gap-5 items-start">
                                <img
                                    srcSet={UPI} alt='upi'
                                    className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                                    <div className="text-neutral-800 text-base font-medium">
                                        UPI Payment
                                    </div>
                                    <div className="text-zinc-500 text-xs font-medium whitespace-nowrap">
                                        Pay instantly with UPI Apps
                                    </div>
                                </div>
                            </div>
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca78962ae7e140872f25e9fa10c6b8a4d1b99760ba9116ba004892f21d629bb9?" alt='img'
                                className="aspect-[0.8] object-contain object-center w-2 fill-neutral-800 overflow-hidden self-center shrink-0 max-w-full my-auto"
                            />
                        </div>
                        <div className="justify-between items-stretch bg-white flex max-w-[934px] gap-5 p-6 border-b-zinc-500 border-b-opacity-50 border-b border-solid max-md:flex-wrap max-md:px-5 hover:bg-slate-100 cursor-pointer">
                            <div className="flex justify-between gap-5 items-start">
                                <img
                                    srcSet={Credit} alt='credit'
                                    className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                                    <div className="text-neutral-800 text-base font-medium">
                                        Credit / Debit Card
                                    </div>
                                    <div className="text-zinc-500 text-xs font-medium whitespace-nowrap">
                                        Visa, Mastercard, amex, Rupay and more
                                    </div>
                                </div>
                            </div>
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca78962ae7e140872f25e9fa10c6b8a4d1b99760ba9116ba004892f21d629bb9?" alt='img'
                                className="aspect-[0.8] object-contain object-center w-2 fill-neutral-800 overflow-hidden self-center shrink-0 max-w-full my-auto"
                            />
                        </div>
                        <div className="justify-between items-stretch bg-white flex max-w-[934px] gap-5 p-6 border-b-zinc-500 border-b-opacity-50 border-b border-solid max-md:flex-wrap max-md:px-5 hover:bg-slate-100 cursor-pointer">
                            <div className="flex justify-between gap-5 items-start">
                                <img
                                    srcSet={Paylater} alt='paylater'
                                    className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                                    <div className="text-neutral-800 text-base font-medium">
                                        Paylater
                                    </div>
                                    <div className="text-zinc-500 text-xs font-medium whitespace-nowrap">
                                        LazyPay, Simpl, ZestMoney.
                                    </div>
                                </div>
                            </div>
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca78962ae7e140872f25e9fa10c6b8a4d1b99760ba9116ba004892f21d629bb9?" alt='img'
                                className="aspect-[0.8] object-contain object-center w-2 fill-neutral-800 overflow-hidden self-center shrink-0 max-w-full my-auto"
                            />
                        </div>
                        <div className="justify-between items-stretch bg-white flex max-w-[934px] gap-5 p-6 border-b-zinc-500 border-b-opacity-50 border-b border-solid max-md:flex-wrap max-md:px-5 hover:bg-slate-100 cursor-pointer">
                            <div className="flex justify-between gap-5 items-start">
                                <img
                                    srcSet={Net} alt='net'
                                    className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                                    <div className="text-neutral-800 text-base font-medium">
                                        Net Banking
                                    </div>
                                    <div className="text-zinc-500 text-xs font-medium whitespace-nowrap">
                                        We Support all major banks
                                    </div>
                                </div>
                            </div>
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca78962ae7e140872f25e9fa10c6b8a4d1b99760ba9116ba004892f21d629bb9?" alt='img'
                                className="aspect-[0.8] object-contain object-center w-2 fill-neutral-800 overflow-hidden self-center shrink-0 max-w-full my-auto"
                            />
                        </div>
                        <div className="justify-between items-stretch bg-white flex max-w-[934px] gap-5 p-6 border-b-zinc-500 border-b-opacity-50 border-b border-solid max-md:flex-wrap max-md:px-5 hover:bg-slate-100 cursor-pointer">
                            <div className="flex justify-between gap-5 items-start">
                                <img
                                    srcSet={MWallets} alt='MWallets'
                                    className="aspect-squa re object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                                    <div className="text-neutral-800 text-base font-medium">
                                        Mobile Wallets
                                    </div>
                                    <div className="text-zinc-500 text-xs font-medium whitespace-nowrap">
                                        Amazonpay, Mobikwik, Payzapp, PayPal
                                    </div>
                                </div>
                            </div>
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca78962ae7e140872f25e9fa10c6b8a4d1b99760ba9116ba004892f21d629bb9?" alt='img'
                                className="aspect-[0.8] object-contain object-center w-2 fill-neutral-800 overflow-hidden self-center shrink-0 max-w-full my-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Confirmticket


