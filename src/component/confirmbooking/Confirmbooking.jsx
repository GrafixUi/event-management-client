import React from 'react';
import QRCode from "react-qr-code";
import booking from "../../assets/images/booking.png";
import Navbar from "../../component/navbar/Navbar"
import Footer from "../../component/footer/Footer"

const Confirmbooking = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-white flex flex-col justify-center items-center px-16 py-12 max-md:px-5">
                <div className="flex w-full max-w-[1452px] flex-col mt-10 max-md:max-w-full max-md:my-10">
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/62f0d58ba90c77648dc55f2938fe6fe5f8c945d6e605a196ea46907291ce3c32?" alt='img'
                        className="aspect-square object-contain object-center w-[100px] fill-green-600 overflow-hidden self-center max-w-full"
                    />
                    <div className="text-green-600 text-xl font-medium self-center mt-10 max-md:max-w-full">
                        Congratulations! You have successfully booked tickets
                    </div>
                    <div className="text-zinc-500 text-center text-base font-medium self-center mt-2.5 max-md:max-w-full">
                        please carry ERS / VRM / SMS / Mail sent to your contact details,
                        along with a relavant ID proof while travelling
                    </div>
                    <div className="self-stretch mt-24 max-md:max-w-full max-md:mt-10">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch w-[70%] max-md:w-full max-md:ml-0">
                                <div className="bg-blue-950 grow w-[700px] pl-16 pr-20 py-12 rounded-2xl max-md:max-w-full max-md:mt-10 max-md:px-5">
                                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                        <div className="flex flex-col items-stretch w-[61%] max-md:w-full max-md:ml-0">
                                            <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                                                <div className="text-white text-2xl font-semibold self-stretch max-md:max-w-full">
                                                    Booking Detail
                                                </div>
                                                <div className="text-white text-xl font-medium leading-8 self-stretch mt-8 max-md:max-w-full">
                                                    Schedule
                                                </div>
                                                <div className="text-white text-md leading-7 self-stretch mt-7 max-md:max-w-full">
                                                    Movie Title
                                                </div>
                                                <div className="text-white text-xl font-medium leading-8 self-stretch mt-1.5 max-md:max-w-full">
                                                    SPIDERMAN NO WAY HOME
                                                </div>
                                                <div className="text-white text-md leading-7 mt-5">
                                                    Date
                                                </div>
                                                <div className="text-white text-xl font-medium leading-8 whitespace-nowrap mt-1.5 self-start">
                                                    Mon, 23 Oct 2023
                                                </div>
                                                <div className="text-neutral-400 text-md leading-7 mt-5">
                                                    Ticket (3)
                                                </div>
                                                <div className="text-white text-xl font-medium leading-8 whitespace-nowrap mt-1.5 self-start">
                                                    C8, C9, C10
                                                </div>
                                                <div className="text-white text-sm font-medium self-stretch mt-9 max-md:max-w-full">
                                                    Theater:
                                                </div>
                                                <div className="text-white text-xl font-semibold self-stretch mt-7 max-md:max-w-full">
                                                    HITEX Exhibition Centre
                                                </div>
                                                <div className="text-white text-md font-light self-stretch mt-5 max-md:max-w-full">
                                                    HITEX Exhibition Centre, Hitex Road, Izzathnagar,
                                                    Kothaguda, Telangana, India
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-stretch w-[39%] ml-5 max-md:w-full max-md:ml-0">
                                            <img
                                                srcSet={booking} alt='booking'
                                                className="aspect-[0.8] object-contain object-center w-full overflow-hidden mt-5 max-md:mt-10"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-stretch w-[30%] ml-5 max-md:w-full max-md:ml-0">
                                <div className="justify-center items-center flex flex-col mt-8 py-0.5 max-md:mt-10">
                                    <QRCode value='Angle' />
                                    <div className="text-zinc-500 text-right text-base font-medium self-center whitespace-nowrap mt-5">
                                        Scan the code to view in any device
                                    </div>
                                    <button className="text-black text-center text-base font-medium whitespace-nowrap justify-center items-center self-stretch border hover:bg-slate-100 bg-white mt-5 px-16 py-5 rounded-xl border-solid border-blue-600 max-md:px-5">
                                        Print Ticket{" "}
                                    </button>
                                    <button className="text-black text-center text-base font-medium whitespace-nowrap justify-center items-center self-stretch border hover:bg-slate-100 bg-white mt-5 px-16 py-5 rounded-xl border-solid border-blue-600 max-md:px-5">
                                        View Ticket{" "}
                                    </button>
                                    <button className="text-white text-center text-base font-medium whitespace-nowrap justify-center items-center self-stretch hover:bg-blue-800  bg-blue-600 mt-5 px-16 py-5 rounded-xl max-md:px-5">
                                        Book another ticket
                                    </button>
                                    <button className="text-white text-center text-base font-medium whitespace-nowrap justify-center items-center self-stretch hover:bg-blue-800 bg-blue-600 mt-5 px-16 py-5 rounded-xl max-md:px-5">
                                        Download Ticket
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Confirmbooking


