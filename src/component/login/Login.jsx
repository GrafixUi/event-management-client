import React from 'react';
import logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';
import Navbar from "../../component/navbar/Navbar"
import Footer from "../../component/footer/Footer"
import { useStore } from '../../utils/store';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const setIsAuthenticated = useStore((state) => state.setIsAuthenticated);
    const setJwt = useStore((state) => state.setJwt);
    const setUserData = useStore((state) => state.setUserData);
    const navigate = useNavigate()
  
    const [formData, setFormData] = useState({
        identifier: "",
        password: "",
    })

    const { identifier, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const newUser = await axios.post(`${process.env.REACT_APP_BACKENDURL}/auth/local`, {
                identifier,
                password,
            })
          
            if (newUser.data) {
              
                setIsAuthenticated(true)
                setJwt(newUser.data.jwt)
                setUserData(newUser.data.user)
                navigate('/')
            }
            else {
                alert('Check your credentials')
            }
        }
        catch (err) {
            alert("Server Error. Please try again later")
        }
    }



    return (
        <div>
            <Navbar />
            <div className="bg-white bg-opacity-90 flex flex-col justify-center items-center px-16 py-12 max-md:px-5">
                <div className="w-[1029px] max-w-full mt-20 mb-16 max-md:my-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 shadow-sm shadow-slate-500 rounded-3xl">
                        <div className="flex flex-col items-stretch  w-[48%] max-md:w-full max-md:ml-0 bg-[#1D275F] rounded-l-3xl max-sm:hidden">
                            <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                                <img
                                    loading="lazy"
                                    srcSet={logo} alt='logo'
                                    className="aspect-[3.11] object-contain object-center  self-center w-[300px] overflow-hidden  max-md:max-w-full"
                                />
                                <div className="text-white text-center text-2xl font-semibold tracking-[5.2px] uppercase self-center max-w-[274px] mt- max-md:text-4xl max-md:mt-10">
                                    <span className="font-[275] text-2xl">Login as</span>
                                    <br />
                                    <span className="font-extrabold text-lg tracking-[5.2px] uppercase">
                                        Attendee{" "}
                                    </span>
                                </div>
                                <div className="text-white text-xl font-semibold self-center whitespace-nowrap mt-10 max-md:mt-10">
                                    <span className="font-bold">New User ?</span>
                                    {/* <span className="text-5xl">?</span> */}
                                </div>
                                {/* <div className="text-white text-center text-base mt-5">
                                    Make your events visible by
                                    <br /> ticketverse
                                </div> */}
                                <Link to="/register" className="text-blue-950 text-center text-base font-bold whitespace-nowrap bg-white self-center justify-center items-stretch mt-6 px-12 py-3.5 rounded-[45px] max-md:px-5">
                                    Sign up
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="grow max-md:max-w-full max-md:mt-10 ">
                                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 ">
                                    <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0 ">
                                        <div className="flex-col overflow-hidden relative flex min-h-[48px] grow py-12 max-md:max-w-full max-sm:-mt-10 max-sm:p-4">
                                            <div className="relative text-slate-700 text-2xl font-bold leading-10 tracking-normal self-stretch  max-md:max-w-full max-md:mt-10">
                                                Login
                                            </div>
                                            <div className="text-zinc-400 text-sm leading-5 self-stretch max-md:max-w-full">
                                            Make your events visible by
                                  ticketverse
                                            </div>
                                            <div className="relative flex flex-col items-stretch self-start  max-md:mt-10 ">

                                                <input className="justify-center text-zinc-400 text-base leading-6 mt-10 max-md:mt-10 border border-[#E5E5E5] pr-28 pl-2 py-3 rounded-md w-72" type='text' placeholder='Username or Email *' name='identifier' onChange={onChange} />

                                                <input className="justify-center text-zinc-400 text-base leading-6 mt-10 max-md:mt-10 border border-[#E5E5E5] pr-40 pl-2 py-3 rounded-md w-72" type='password' placeholder='Your password *' name='password' onChange={onChange} />
                                            </div>
                                            {/* <div className="relative self-stretch flex items-center justify-between gap-2.5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                                                <input type="checkbox" checked="checked" className=' w-4 items-center justify-center' />
                                                <div className="text-zinc-500 text-sm leading-5 grow shrink basis-auto mt-2 self-start max-md:max-w-full">
                                                    Remember me
                                                </div>
                                                <Link className=' mr-7 text-[#B6B6B6]'>Forgot password</Link>
                                            </div> */}
                                            <button type='button' className="relative w-52 text-white text-sm font-bold leading-5 tracking-normal bg-stone-950 self-stretch justify-center items-stretch mt-6 px-8 py-4 rounded-xl max-md:max-w-full max-md:px-5" 
                                            onClick={onSubmit}>
                                                Login
                                            </button>
                                        </div>
                                    </div>
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

export default Login
