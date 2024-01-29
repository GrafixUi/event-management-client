import React from "react";
import header from "../../assets/images/header.png";
import filter from "../../assets/images/filter.png";
import Venuelist from "../../component/venuelist/Venuelist";
import Headerswiper from "../../component/header-swiper/Header-swiper";
import Header from "../../component/header/Header";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import List from "../../pages/venuelist/list/List";
const venuelist = () => {
  return (
    <div className="bg-white flex flex-col items-stretc">
      <Navbar />
      <div className=" max-sm:hidden mt-12">
        <Header />
      </div>
      <List />
      <Footer />
    </div>
  );
};

export default venuelist;
