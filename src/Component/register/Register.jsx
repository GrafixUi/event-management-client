import React from 'react';
import logo from "../../assets/images/logo.png";

const Register = () => {
    return (
        <div className="bg-white bg-opacity-90 flex flex-col justify-center items-center px-16 py-12 max-md:px-5">
            <div className="w-[1029px] max-w-full mt-60 mb-96 max-md:my-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 shadow-sm shadow-slate-500 rounded-3xl">
                    <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0 bg-[#1D275F] rounded-l-3xl">
                        <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                            <img
                                loading="lazy"
                                srcSet={logo} alt='logo'
                                className="aspect-[3.11] object-contain object-center self-center w-[300px] overflow-hidden  max-md:max-w-full"
                            />
                            <div className="text-white text-center text-6xl font-semibold tracking-[5.2px] uppercase self-center max-w-[274px] mt-8 max-md:text-4xl max-md:mt-10">
                                <span className="font-[275] text-2xl">Register as</span>
                                <br />
                                <span className="font-extrabold text-4xl tracking-[5.2px] uppercase">
                                    Organizer{" "}
                                </span>
                            </div>
                            <div className="text-white text-4xl font-semibold self-center whitespace-nowrap mt-28 max-md:mt-10">
                                <span className="font-bold">Existing User</span>
                                <span className="text-5xl">?</span>
                            </div>
                            <div className="text-white text-center text-base mt-5">
                                Make your events visible by
                                <br /> ticketverse
                            </div>
                            <div className="text-blue-950 text-center text-base font-bold whitespace-nowrap bg-white self-center justify-center items-stretch mt-6 px-12 py-3.5 rounded-[45px] max-md:px-5">
                                Sign In
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="grow max-md:max-w-full max-md:mt-10">
                            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
                                    <div className="flex-col overflow-hidden relative flex min-h-[756px] grow py-12 max-md:max-w-full">

                                        <div className="relative text-slate-700 text-4xl font-bold leading-10 tracking-normal self-stretch mt-12 max-md:max-w-full max-md:mt-10">
                                            Create an Account
                                        </div><div className="text-zinc-400 text-xs leading-5 self-stretch max-md:max-w-full">
                                            Your personal data will be used to support your experience
                                            throughout this website, to manage access to your account,
                                            and for other purposes described in our privacy policy
                                        </div>
                                        <div className="relative flex flex-col items-stretch ml-9 self-start max-md:ml-2.5 max-md:mt-10">

                                            <input className="justify-center text-zinc-400 text-base leading-6 mt-10 max-md:mt-10 border border-[#E5E5E5] pr-40 pl-2 py-3 rounded-md" type='text' placeholder='UserName' />

                                            <input className="justify-center text-zinc-400 text-base leading-6 mt-10 max-md:mt-10 border border-[#E5E5E5] pr-40 pl-2 py-3 rounded-md" type='text' placeholder='Email' />

                                            <input className="justify-center text-zinc-400 text-base leading-6 mt-10 max-md:mt-10 border border-[#E5E5E5] pr-40 pl-2 py-3 rounded-md" type='text' placeholder='password' />
                                            <input className="justify-center text-zinc-400 text-base leading-6 mt-10 max-md:mt-10 border border-[#E5E5E5] pr-40 pl-2 py-3 rounded-md" type='text' placeholder='confirm password' />
                                        </div>
                                        <div className="relative self-stretch flex items-stretch justify-between gap-2.5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                                            <input type="checkbox" checked="checked" className=' w-4 items-center justify-center' />
                                            <div className="text-zinc-500 text-sm leading-5 grow shrink basis-auto mt-2 self-start max-md:max-w-full">
                                                I agree to terms & Policy.
                                            </div>
                                        </div>
                                        <button className="relative w-60 text-white text-base font-bold leading-5 tracking-normal bg-stone-950 self-stretch justify-center items-stretch mt-6 px-12 py-6 rounded-xl max-md:max-w-full max-md:px-5">
                                            Submit & Register
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
