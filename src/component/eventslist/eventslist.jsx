import React, { useState } from "react";
import product1 from "../../assets/images/product1.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { likedData } from "../../utils/store";
import { useStore } from "../../utils/store";
import { useNavigate } from "react-router-dom";
import {axiosAuth} from "../../utils/axios";
const Eventslist = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  useEffect(() => {
    const upcomingDataNew = async () => {
      try {
        const upcomingEvents = await axios.get(
          `${process.env.REACT_APP_BACKENDURL}/events`
        );
        setItems(upcomingEvents.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    upcomingDataNew();
  }, []);

  const likedEvents = likedData((state) => state.likedEvents);
  const [likedEventsArr, setLikedEventsArr] = useState(likedEvents);
  const userData = useStore((state) => state.userData);

  const updateLikedEvents = likedData((state) => state.updateLikedEvents);
  const removeLikedEvents = likedData((state) => state.removeLikedEvents);
  const handleLikedEvent = async (id) => {
    if(!userData) {
      navigate("/login");
    }
    try{
      const res = await axiosAuth.put(`${process.env.REACT_APP_BACKENDURL}/users/${userData.id}`, {
        likedevent: JSON.stringify([...likedEventsArr, {id:id}])
      },
      )
      console.log(res);
      if(res.status === 200) {
        updateLikedEvents({id});
        setLikedEventsArr([...likedEventsArr, {id:id}]);
      }
    }
    catch{
      console.log("error")
    }
  }
  const handleDislikedEvent = async (id) => {

    if(!userData) {
      navigate("/login");
    }

    try{
      const res = await axiosAuth.put(`${process.env.REACT_APP_BACKENDURL}/users/${userData.id}`, {
        likedevent: JSON.stringify(likedEventsArr.filter((item) => item.id !== id))
      })
      if(res.status === 200){
        setLikedEventsArr(likedEventsArr.filter((item) => item.id !== id));
        removeLikedEvents({id}); // Pass an array
      }
    }
    catch{
      console.log("error")
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 w-full">
        {items.map((item) => (
         
            <div
              key={item.id}
              className="bg-white shadow-sm   shadow-slate-300 flex w-300  flex-col min-h-[300px] pb-6 rounded-2xl mb-5  transition duration-500 hover:scale-105 max-sm:w-170 max-sm-ml-2"
              style={{
                maxWidth: "300px",
                maxHeight: "300px",
                overflow: "hidden",
              }}
            >
             
             <div className="relative group">
                <img
                  loading="lazy"
                  srcSet={item?.attributes?.eventimg || product1}
                  alt="product1"
                  className="object-contain object-center w-full overflow-hidden"
                />
               {likedEvents &&
              likedEvents.find((likedEvent) => likedEvent.id === item.id) ? (
                <div className="absolute top-2 right-2 cursor-pointer heart-icon-wrapper opacity-0 group-hover:opacity-100 transition-opacity duration-300  ">
                  <button onClick={() => handleDislikedEvent(item.id)}>
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="2em"
                      width="2em"
                      className="bg-red-600 rounded-full p-1 text-white"
                    >
                      <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
                    </svg>
                  </button>
                </div>
              ) : (
                <div className="absolute top-2 right-2 cursor-pointer heart-icon-wrapper opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button onClick={() => handleLikedEvent(item.id)}>
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="2em"
                      width="2em"
                      className="bg-black/50 bg-opacity-50 rounded-full p-1 text-white"
                    >
                      <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
                    </svg>
                  </button>
                </div>
              )}
              </div>
              <Link to={`/eventselection?eventid=${item.id}`}>
              <div className="self-center flex justify-between gap-5 mt-0.5 items-start w-full">
                <div className="flex basis-0 flex-col self-center px-5 max-sm:w-12 max-sm-ml-2">
                  <h1 className="text-blue-950 text-center text-xs font-bold whitespace-nowrap max-sm:text-10px">
                    {item?.attributes?.month}
                  </h1>
                  <h3 className="text-black text-xl font-bold whitespace-nowrap mt-2">
                    {item?.attributes?.day}
                  </h3>
                </div>
                <div className="flex grow basis-0 max-sm-ml-2 flex-col px-5 max-sm:w-32">
                  <h1 className="text-black text-md font-bold   max-sm-w-32">
                    {item?.attributes?.eventtitle}
                  </h1>
                  <h3 className="text-neutral-500 text-sm   mt-1 ">
                    {item?.attributes?.description?.slice(0, 40) + "..."}
                  </h3>
                </div>
              </div>
              </Link>
            </div>
         
        ))}
   </div>
  );
};

export default Eventslist;
