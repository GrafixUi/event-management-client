import React from 'react';
import logo from "../../assets/images/logo.png";
import Navbar from "../../component/navbar/Navbar"
import Footer from "../../component/footer/Footer"
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
const [formData , setFormData] = useState({
    username : "",
    email: "",
    password: "",
    checkbox: false
})
const navigate = useNavigate()

const {username, email, password, checkbox} = formData;

const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

const onSubmit = async e => {
    e.preventDefault();
    if(checkbox === false){
        alert("Please accept the terms and conditions")
    }
    else if(username === "" || email === "" || password === ""){
        alert("Please fill all the fields")
    }
    else{
        try{
            const newUser = await axios.post(`${process.env.REACT_APP_BACKENDURL}/auth/local/register`, {
                username,
                email,
                password,
            })

            if(newUser.data){

            try{
                const updateId = await axios.put(`${process.env.REACT_APP_BACKENDURL}/users/${newUser.data.user.id}`, {
                    role: 4
                })
                console.log(updateId)
                if(updateId.status === 200){
                    navigate('/')
                }
                else{
                    alert('Registration failed, Try Again')
                }
            }
            catch(err){
                alert('Registration failed, Try Again')
            }
        }
            else{
                alert(newUser.error)
            }
        }
        catch(err){
            alert("User Already Exists")
        }
    }
}
    return (
        <div>
            <Navbar />
            <div className="bg-white bg-opacity-90 flex flex-col justify-center items-center px-16 py-12 max-md:px-5">
                <div className="w-[929px] max-w-full mt-8 mb-16 max-md:my-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 shadow-sm shadow-slate-500 rounded-3xl">
                        <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0 bg-[#1D275F] rounded-l-3xl max-sm:hidden">
                            <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                                <img
                                    loading="lazy"
                                    srcSet={logo} alt='logo'
                                    className="aspect-[3.11] object-contain object-center self-center w-[300px] overflow-hidden  max-md:max-w-full"
                                />
                                <div className="text-white text-center text-xl font-semibold tracking-[5.2px] uppercase self-center max-w-[200px] mt-5 max-md:text-4xl max-md:mt-10">
                                    <span className="font-[275] text-2xl">Register as</span>
                                    <br />
                                    <span className="font-bold text-lg tracking-[5.2px] uppercase">
                                        Attendee{" "}
                                    </span>
                                </div>
                                <div className="text-white text-xl font-semibold self-center whitespace-nowrap mt-10 max-md:mt-10">
                                    <span className="font-bold">Existing User</span>
                                    <span className="text-xl ">?</span>
                                </div>
                                <div className="text-white text-center text-sm mt-5">
                                    Make your events visible by
                                    <br /> ticketverse
                                </div>
                                <Link to="/login" className="text-blue-950 text-center text-base font-bold whitespace-nowrap bg-white self-center justify-center items-stretch mt-6 px-12 py-3.5 rounded-[45px] max-md:px-5">
                                    Sign In
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[52%] max-sm:-mt-24 ml-5 max-md:w-full max-md:ml-0 p-3">
                            <div className="grow max-md:max-w-full max-md:mt-10">
                                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                    <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
                                        <div className="flex-col overflow-hidden relative flex min-h-[300px] grow py-12 max-md:max-w-full">

                                            <div className="relative text-slate-700 text-xl font-bold leading-10 tracking-normal self-stretch mt-12 max-md:max-w-full max-sm: items-center max-md:mt-10">
                                                Create an Account
                                            </div>
                                            <div className="text-zinc-400 text-xs w-[450px] leading-5 self-stretch max-md:max-w-full">
                                                Your personal data will be used to support your experience
                                                throughout this website, to manage access to your account,
                                                and for other purposes described in our privacy policy
                                            </div>
                                            <div className="relative flex flex-col items-stretch ml-9 self-start max-md:ml-2.5 max-md:mt-10">

                                                <input className="justify-center w-72 text-zinc-400 text-base leading-6 mt-5 max-md:mt-10 border border-[#E5E5E5] pr-40 pl-2 py-3 rounded-md" onChange={onChange} type='text' placeholder='UserName' name="username" />

                                                <input className="justify-center w-72 text-zinc-400 text-base leading-6 mt-5 max-md:mt-10 border border-[#E5E5E5] pr-40 pl-2 py-3 rounded-md" onChange={onChange} type='email' placeholder='Email' name="email" />

                                                <input className="justify-center w-72 text-zinc-400 text-base leading-6 mt-5 max-md:mt-10 border border-[#E5E5E5] pr-40 pl-2 py-3 rounded-md" onChange={onChange} type='password' placeholder='Password' name="password" />
                                            </div>
                                            <div className="relative self-centre flex items-centre justify-between gap-2.5 mt-8 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                                                <input type="checkbox" onChange={onChange} className=' w-4 items-center justify-center' name="checkbox" />
                                                <div className="text-zinc-500 text-sm leading-5 grow shrink basis-auto mt-2 self-start max-md:max-w-full">
                                                    I agree to terms & Policy.
                                                </div>
                                            </div>
                                            <button className="relative w-52 text-white text-sm font-bold  tracking-normal bg-stone-950 self-stretch justify-center items-stretch mt-6 px-7 py-4 rounded-xl max-md:max-w-full max-md:px-5" onClick={onSubmit}>
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
            <Footer />
        </div>
    )
}

export default Register
