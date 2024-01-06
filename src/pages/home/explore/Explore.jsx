import React from "react";
import { Link } from "react-router-dom";
import { IoIosMicrophone } from "react-icons/io";
import { SiYourtraveldottv } from "react-icons/si";
import {
    MdSportsVolleyball,
    MdWorkspacesOutline,
    MdOutlineFestival,
    MdLocalMovies,
} from "react-icons/md";

const Marketplace = () => {
    return (
        <section className="py-14 bg-white flex flex-row">
            <div className="container  mx-auto">
                <div className="grid   gap-9">

                    <div className="w-full grid grid-cols-6 max-sm:grid-cols-2 items-center justify-center gap-10 mt-6">

                        <Link
                            to="/"
                            className="w-full flex items-center justify-center flex-col gap-4 group transition duration-500 hover:scale-125"
                        >
                            <div className="w-20 h-18 relative items-center justify-center flex after:content-[''] after:absolute after:-bottom-2 after:w-full after:h-[2px] after:bg-[#DF0068] group-hover:after:bg-primary group-hover:after:w-20 group-hover:after:translate-x-[5%] after:transition-all after:duration-300 max-sm:w-10">
                                <IoIosMicrophone size={60} />
                            </div>
                            <h2 className="text-lg font-light text-center">
                                Conference 
                            </h2>
                        </Link>
                        <Link
                            to="/"
                            className="w-full flex items-center justify-center flex-col gap-4 group transition duration-500 hover:scale-125"
                        >
                            <div className="w-20 h-18 relative items-center justify-center flex after:content-[''] after:absolute after:-bottom-2 after:w-full after:h-[2px] after:bg-[#F33A00] group-hover:after:bg-primary group-hover:after:w-20 group-hover:after:translate-x-[5%] after:transition-all after:duration-300 max-sm:w-10">
                                <MdLocalMovies  size={60}/>
                            </div>
                            <h2 className="text-lg font-light text-center">
                                Entertainment
                            </h2>
                        </Link>

                        <Link
                            to="/"
                            className="w-full flex items-center justify-center flex-col gap-4 group transition duration-500 hover:scale-125"
                        >
                            <div className="w-20 h-18 relative items-center justify-center flex after:content-[''] after:absolute after:-bottom-2 after:w-full after:h-[2px] after:bg-[#A500F2] group-hover:after:bg-primary group-hover:after:w-20 group-hover:after:translate-x-[5%] after:transition-all after:duration-300 max-sm:w-10">
                                <SiYourtraveldottv size={60} />
                            </div>
                            <h2 className="text-lg font-light text-center  ">
                                Travel
                            </h2>
                        </Link>

                        <Link
                            to="/"
                            className="w-full flex items-center justify-center flex-col gap-4 group transition duration-500 hover:scale-125"
                        >
                            <div className="w-20 h-18 relative items-center justify-center flex after:content-[''] after:absolute after:-bottom-2 after:w-full after:h-[2px] after:bg-[#FCB808] group-hover:after:bg-primary group-hover:after:w-20 group-hover:after:translate-x-[5%] after:transition-all after:duration-300 max-sm:w-10">
                                <MdOutlineFestival size={60} />
                            </div>
                            <h2 className="text-lg font-light text-center ">
                                Festivals
                            </h2>
                        </Link>

                        <Link
                            to="/"
                            className="w-full flex items-center justify-center flex-col gap-4 group transition duration-500 hover:scale-125"
                        >
                            <div className="w-20 h-18 relative items-center justify-center flex after:content-[''] after:absolute after:-bottom-2 after:w-full after:h-[2px] after:bg-[#1AAB18] group-hover:after:bg-primary group-hover:after:w-20 group-hover:after:translate-x-[5%] after:transition-all after:duration-300 max-sm:w-10">
                                <MdWorkspacesOutline size={60} />
                            </div>
                            <h2 className="text-lg font-light text-center ">
                                Workshop
                            </h2>
                        </Link>

                        <Link
                            to="/"
                            className="w-full flex items-center justify-center flex-col gap-4 group transition duration-500 hover:scale-125 "
                        >
                            <div className="w-20 h-18 relative items-center justify-center flex after:content-[''] after:absolute after:-bottom-2 after:w-full after:h-[2px] after:bg-[#1D1A1B] group-hover:after:bg-primary group-hover:after:w-20 group-hover:after:translate-x-[5%] after:transition-all after:duration-300 max-sm:w-10">
                                <MdSportsVolleyball size={60} />
                            </div>
                            <h2 className="text-lg font-light text-center ">
                                Sport
                            </h2>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Marketplace;

{/* <div className="flex items-center justify-center my-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
          <CardComponent
            // imageSrc="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D"
            title="Conference"
            icon={<IoIosMicrophone size={30} color="white" />}
            description="___________"
            bgColor="bg-red-500"
          />
          <CardComponent
            // imageSrc="https://images.unsplash.com/photo-1603190287605-e6ade32fa852?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW50ZXJ0YWlubWVudHxlbnwwfHwwfHx8MA%3D%3D"
            title="Entertainment"
            icon={<MdLocalMovies size={30} color="white" />}
            description="___________"
            bgColor="bg-purple-500"
          />
          <CardComponent
            // imageSrc="https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
            title="Travel"
            icon={<SiYourtraveldottv size={30} color="white" />}
            description="___________"
            bgColor="bg-indigo-500"
          />
          <CardComponent
            // imageSrc="https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmVzdGl2YWxzfGVufDB8fDB8fHww"
            title="Festivals"
            icon={<MdOutlineFestival size={30} color="white" />}
            description="___________"
            bgColor="bg-pink-500"
          />
          <CardComponent
            // imageSrc="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V29ya3Nob3BzfGVufDB8fDB8fHww"
            title="Workshops"
            icon={<MdWorkspacesOutline size={30} color="white" />}
            description="___________"
            bgColor="bg-blue-500"
          />
          <CardComponent
            // imageSrc="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Sports"
            icon={<MdSportsVolleyball size={30} color="white" />}
            description="___________"
            bgColor="bg-yellow-400"
          />
        </div>
      </div> */}