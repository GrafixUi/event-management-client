import React from 'react';
import Headerswiper from '../../component/header-swiper/Header-swiper';
import List from "../../pages/movieslist/list/List"
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
const eventlist = () => {
    return (
        <div className="bg-white flex flex-col">
          <Navbar />
          <div className="mt-[35px] max-sm:hidden">
            <Headerswiper />
          </div>
          <List />
          <Footer />
        </div>
      );
}

export default eventlist


