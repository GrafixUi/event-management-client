import React from 'react';
import Headerswiper from '../../component/header-swiper/Header-swiper';
import Header from '../../component/header/Header';
import List from "../../pages/movieslist/list/List"
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
const eventlist = () => {
    return (
        <div className="bg-white flex flex-col">
          <Navbar />
          <div className=" max-sm:hidden mt-12">
        <Header />
      </div>
          <List />
          <Footer />
        </div>
      );
}

export default eventlist


