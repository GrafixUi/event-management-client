import React from "react";
import filter from "../../assets/images/filter.png";
import Eventslist from "../../component/eventslist/eventslist";
import Headerswiper from "../../component/header-swiper/Header-swiper";
import Header from "../../component/header/Header";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import List from "../../pages/eventlist/list/List"

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
};

export default eventlist;
