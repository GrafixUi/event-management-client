import React, { useEffect, useRef, useState } from "react";
import product1 from "../../assets/images/product1.png";
import dropdown from "../../assets/icons/dropdown.svg";
import { Link } from "react-router-dom";
import { likedData } from "../../utils/store";
import { useStore } from "../../utils/store";
import { useNavigate } from "react-router-dom";
import { axiosAuth } from "../../utils/axios";

const Upcomingevents = () => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState();
  const likedEvents = likedData((state) => state.likedEvents);
  const [likedEventsArr, setLikedEventsArr] = useState(likedEvents);
  const navigate = useNavigate();
  useEffect(() => {
    const upcomingDataNew = async () => {
      try {
        const upcomingEvents = await axiosAuth.get(
          `${process.env.REACT_APP_BACKENDURL}/events?pagination[pageSize]=6&filters[category][$eq]=${category}`
        );
        setItems(upcomingEvents.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    const initialData = async () => {
      try {
        const upcomingEvents = await axiosAuth.get(
          `${process.env.REACT_APP_BACKENDURL}/events?pagination[pageSize]=6`
        );
        setItems(upcomingEvents.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (category) {
      upcomingDataNew();
    } else {
      initialData();
    }
  }, [category]);
  //dropdown for filter

  const [isShowOpen, setShowOpen] = useState(false);

  const handleShowToggle = () => {
    setShowOpen(!isShowOpen);
  };
  const [isSortOpen, setSortOpen] = useState(false);

  const handleSortToggle = () => {
    setSortOpen(!isSortOpen);
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSortOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const shopopen = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dropDownOpen = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const userData = useStore((state) => state.userData);

  const updateLikedEvents = likedData((state) => state.updateLikedEvents);
  const removeLikedEvents = likedData((state) => state.removeLikedEvents);

  const handleLikedEvent = async (id) => {
    if (!userData) {
      navigate("/login");
    }
    try {
      const res = await axiosAuth.put(
        `${process.env.REACT_APP_BACKENDURL}/users/${userData.id}`,
        {
          likedevent: JSON.stringify([...likedEventsArr, { id: id }]),
        }
      );
      console.log(res);
      if (res.status === 200) {
        updateLikedEvents({ id });
        setLikedEventsArr([...likedEventsArr, { id: id }]);
      }
    } catch {
      console.log("error");
    }
  };
  const handleDislikedEvent = async (id) => {
    if (!userData) {
      navigate("/login");
    }

    try {
      const res = await axiosAuth.put(
        `${process.env.REACT_APP_BACKENDURL}/users/${userData.id}`,
        {
          likedevent: JSON.stringify(
            likedEventsArr.filter((item) => item.id !== id)
          ),
        }
      );
      if (res.status === 200) {
        setLikedEventsArr(likedEventsArr.filter((item) => item.id !== id));
        removeLikedEvents({ id }); // Pass an array
      }
    } catch {
      console.log("error");
    }
  };

  return (
    <div className="flex flex-col">
      <div className="mx-4 mt-6 mb-8 text-center  flex justify-between items-center">
        <div className="text-blue-950 text-2xl font-bold mt-2.5">
          Upcoming Events
        </div>
        <div className="bg-violet-50 flex items-stretch gap-4 px-6 py-4 rounded-[50px] mt-4">
          <button
            type="button"
            onClick={handleDropdownToggle}
            className="flex items-center"
          >
            <span className="p-1 text-[#015464] text-sm">Any Category</span>
            <img
              src={dropdown}
              alt="Dropdown"
              className="w-3 h-3"
              width={3}
              height={3}
            />
          </button>
          {isDropdownOpen && (
            <ul className="absolute z-50 py-2 w-36 p-2 bg-[#ffffff] border border-gray-200 shadow-lg rounded-md flex flex-col">
              <button
                className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 "
                onClick={(e) => {
                  setCategory(e.target.innerText);
                  handleDropdownToggle();
                }}
              >
                Musical
              </button>
              <button
                className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 "
                onClick={(e) => {
                  setCategory(e.target.innerText);
                  handleDropdownToggle();
                }}
              >
                Dance
              </button>{" "}
              <button
                className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 "
                onClick={(e) => {
                  setCategory(e.target.innerText);
                  handleDropdownToggle();
                }}
              >
                Sports
              </button>{" "}
              <button
                className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 "
                onClick={(e) => {
                  setCategory(e.target.innerText);
                  handleDropdownToggle();
                }}
              >
                Meet Ups
              </button>{" "}
              <button
                className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 "
                onClick={(e) => {
                  setCategory(e.target.innerText);
                  handleDropdownToggle();
                }}
              >
                Others
              </button>{" "}
            </ul>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mx-4">
        {items.map((item) => (
          <div className="bg-white shadow-sm flex flex-col items-stretch rounded-2xl mb-5 transition duration-500 hover:scale-105 ">
            <div className="relative group">
              <div>
                <img
                loading="lazy"
                srcSet={ item?.attributes?.eventimg || product1}
                alt="product1"
                className=" object-center w-full overflow-hidden rounded-t-xl object-cover h-[200px] "
              />
              </div>

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
            <Link to="/eventslist" key={item.id}>
              <div className="flex flex-col">
              <div className="self-center flex justify-between gap-12 sm:gap-6 mt-0.5 items-start w-full">
                <div className="flex flex-col justify-center text-center self-center ml-5">
                  <div className="text-blue-950 max-sm:w-2 text-center text-lg max-sm:text-[10px] font-bold whitespace-nowrap">
                    {item.attributes.month}
                  </div>
                  <div className="text-black text-xl max-sm:w-2 font-bold whitespace-nowrap mt-2">
                    {item.attributes.day}
                  </div>
                </div>
                <div className="self-stretch flex-grow flex-col items-stretch py-2 px-5 max-sm:-ml-2">
                  <div className="text-black text-md  font-bold leading-5 max-sm:leading-2">
                    {item.attributes.eventtitle}
                  </div>
                  <div className="text-neutral-500 text-sm leading-2 mt-1 max-sm:leading-2">
                    {item?.attributes?.description?.slice(0, 40) + "..."}
                  </div>
                </div>
              </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upcomingevents;
