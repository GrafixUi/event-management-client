import React from 'react';
import Headerswiper from '../../component/header-swiper/Header-swiper';
import List from "../../pages/movieslist/list/List"
const eventlist = () => {
    return (
        <div className="bg-white flex flex-col items-stretc">
          
            <div className=" mt-[35px] max-sm:hidden">
                <Headerswiper />
            </div>
            <List />
            
        </div>
    )
}

export default eventlist


