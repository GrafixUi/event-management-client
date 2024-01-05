import React from 'react';
import header from "../../assets/images/header.png";
import filter from "../../assets/images/filter.png";
import Movielist from '../../component/movielist/Movieslist';
import Headerswiper from '../../component/header-swiper/Header-swiper';
import Navbar from "../../component/navbar/Navbar"
import Footer from "../../component/footer/Footer"
import List from "../../pages/movieslist/list/List"
const eventlist = () => {
    return (
        <div className="bg-white flex flex-col items-stretc">
            <Navbar />
            <div className=" mt-[55px] max-sm:hidden">
                <Headerswiper />
            </div>
            <List />
            <Footer />
        </div>
    )
}

export default eventlist


