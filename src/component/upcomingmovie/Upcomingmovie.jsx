import React, { useEffect, useRef, useState } from "react";
import product1 from "../../assets/images/product1.png";
import dropdown from "../../assets/icons/dropdown.svg";
import { upcomingData } from "./upcomingmovie.data";
import { Link } from "react-router-dom";
import axios from "axios";
import { likedData } from "../../utils/store";
import { useStore } from "../../utils/store";
import { useNavigate } from "react-router-dom";
import {axiosAuth} from "../../utils/axios";

const Upcomingevents = () => {
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
  const [genre, setGenre] = useState(null);

  const [items, setItems] = useState(upcomingData);
  useEffect(() => {
    const upcomingDataNew = async () => {
      try {
        const upcomingMovies = await axios.get(
          `${process.env.REACT_APP_BACKENDURL}/movies?pagination[pageSize]=6&filters[genre][$eq]=${genre}`
        );
        setItems(upcomingMovies.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    const initialData = async () => {
      try {
        const upcomingMovies = await axios.get(
          `${process.env.REACT_APP_BACKENDURL}/movies?pagination[pageSize]=6`
        );
        setItems(upcomingMovies.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (genre) {
      upcomingDataNew();
    } else {
      initialData();
    }
  }, [genre]);
  const likedMovies = likedData((state) => state.likedMovies);
  const [likedMoviesArr, setLikedMoviesArr] = useState(likedMovies);
  const navigate = useNavigate();
  const userData = useStore((state) => state.userData);
 
  const updateLikedMovies = likedData((state) => state.updateLikedMovies);
  const removeLikedMovies = likedData((state) => state.removeLikedMovies);

  const handleLikedMovies = async (id) => {
    if(!userData) {
      navigate("/login");
    }
    try{
      const res = await axiosAuth.put(`${process.env.REACT_APP_BACKENDURL}/users/${userData.id}`, {
        likedmovie: JSON.stringify([...likedMoviesArr, {id:id}])
      },
      )
      console.log(res);
      if(res.status === 200) {
        updateLikedMovies({id});
        setLikedMoviesArr([...likedMoviesArr, {id:id}]);
      }
    }
    catch{
      console.log("error")
    }
  }
  const handleDislikedMovies = async (id) => {

    if(!userData) {
      navigate("/login");
    }

    try{
      const res = await axiosAuth.put(`${process.env.REACT_APP_BACKENDURL}/users/${userData.id}`, {
        likedevent: JSON.stringify(likedMoviesArr.filter((item) => item.id !== id))
      })
      if(res.status === 200){
        setLikedMoviesArr(likedMoviesArr.filter((item) => item.id !== id));
        removeLikedMovies({id}); // Pass an array
      }
    }
    catch{
      console.log("error")
    }
  }
  console.log("Array",likedMoviesArr);
  console.log("Store",likedMovies);

  return (
    <div className="flex flex-col">
      <div className="mx-4 mt-6 mb-8 text-center  flex justify-between items-center">
        <div className="text-blue-950 text-2xl font-bold mt-2.5">
          Upcoming Movies
        </div>
        <div className="flex items-center justify-center gap-5 max-md:w-full max-sm:w-full">
          <div
            ref={dropDownOpen}
            className="bg-violet-50 flex items-stretch justify-between gap-4 px-6 py-4 rounded-[50px] max-md:px-5"
          >
            <div ref={dropdownRef}>
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
                <ul className="absolute mt-5 right-0 z-50 py-2 w-36 p-2 bg-[#ffffff] border border-gray-200 shadow-lg rounded-md flex flex-col">
                  {/* Dropdown options */}
                  <button
                    className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 "
                    onClick={(e) => {
                      setGenre(e.target.innerText);
                      handleDropdownToggle();
                    }}
                  >
                    Action
                  </button>
                  <button
                    className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 "
                    onClick={(e) => {
                      setGenre(e.target.innerText);
                      handleDropdownToggle();
                    }}
                  >
                    Adventure
                  </button>{" "}
                  <button
                    className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 "
                    onClick={(e) => {
                      setGenre(e.target.innerText);
                      handleDropdownToggle();
                    }}
                  >
                    Comedy
                  </button>{" "}
                  <button
                    className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 "
                    onClick={(e) => {
                      setGenre(e.target.innerText);
                      handleDropdownToggle();
                    }}
                  >
                    Crime
                  </button>
                  <button
                    className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 "
                    onClick={(e) => {
                      setGenre(e.target.innerText);
                      handleDropdownToggle();
                    }}
                  >
                    Drama
                  </button>
                  <button
                    className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 "
                    onClick={(e) => {
                      setGenre(e.target.innerText);
                      handleDropdownToggle();
                    }}
                  >
                    Fantasy
                  </button>
                  <button
                    className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 "
                    onClick={(e) => {
                      setGenre(e.target.innerText);
                      handleDropdownToggle();
                    }}
                  >
                    Historical
                  </button>
                  <button
                    className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 "
                    onClick={(e) => {
                      setGenre(e.target.innerText);
                      handleDropdownToggle();
                    }}
                  >
                    Historical fiction
                  </button>
                  <button
                    className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 "
                    onClick={(e) => {
                      setGenre(e.target.innerText);
                      handleDropdownToggle();
                    }}
                  >
                    Horror
                  </button>
                  <button
                    className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 "
                    onClick={(e) => {
                      setGenre(e.target.innerText);
                      handleDropdownToggle();
                    }}
                  >
                    Magical realism
                  </button>
                  <button
                    className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 "
                    onClick={(e) => {
                      setGenre(e.target.innerText);
                      handleDropdownToggle();
                    }}
                  >
                    Mystery
                  </button>
                  <button
                    className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 "
                    onClick={(e) => {
                      setGenre(e.target.innerText);
                      handleDropdownToggle();
                    }}
                  >
                    Paranoid
                  </button>
                  <button
                    className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 "
                    onClick={(e) => {
                      setGenre(e.target.innerText);
                      handleDropdownToggle();
                    }}
                  >
                    Philosophical
                  </button>
                  <button
                    className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 "
                    onClick={(e) => {
                      setGenre(e.target.innerText);
                      handleDropdownToggle();
                    }}
                  >
                    Political
                  </button>
                  <button
                    className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 "
                    onClick={(e) => {
                      setGenre(e.target.innerText);
                      handleDropdownToggle();
                    }}
                  >
                    Romance
                  </button>
                  <button
                    className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 "
                    onClick={(e) => {
                      setGenre(e.target.innerText);
                      handleDropdownToggle();
                    }}
                  >
                    Saga
                  </button>
                  <button
                    className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 "
                    onClick={(e) => {
                      setGenre(e.target.innerText);
                      handleDropdownToggle();
                    }}
                  >
                    Satire
                  </button>
                  <button
                    className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 "
                    onClick={(e) => {
                      setGenre(e.target.innerText);
                      handleDropdownToggle();
                    }}
                  >
                    Science fiction
                  </button>
                  <button
                    className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 "
                    onClick={(e) => {
                      setGenre(e.target.innerText);
                      handleDropdownToggle();
                    }}
                  >
                    Social
                  </button>
                  <button
                    className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 "
                    onClick={(e) => {
                      setGenre(e.target.innerText);
                      handleDropdownToggle();
                    }}
                  >
                    Speculative
                  </button>
                  <button
                    className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 "
                    onClick={(e) => {
                      setGenre(e.target.innerText);
                      handleDropdownToggle();
                    }}
                  >
                    Thriller
                  </button>
                  <button
                    className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 "
                    onClick={(e) => {
                      setGenre(e.target.innerText);
                      handleDropdownToggle();
                    }}
                  >
                    Urban
                  </button>
                  <button
                    className=" text-[#015464] text-sm my-3 hover:bg-indigo-100 rounded p-2 "
                    onClick={(e) => {
                      setGenre(e.target.innerText);
                      handleDropdownToggle();
                    }}
                  >
                    Western
                  </button>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mx-4">
        {items.map((item) => (
          <div className="bg-white shadow-sm flex flex-col items-stretch rounded-2xl mb-5 transition duration-500 hover:scale-105">
            <div className="relative group">
              <img
                loading="lazy"
                srcSet={product1}
                alt="product1"
                className="object-contain object-center w-full overflow-hidden"
              />
              {likedMovies &&
              likedMovies.find((likedMovie) => likedMovie.id === item.id) ? (
                <div className="absolute top-2 right-2 cursor-pointer heart-icon-wrapper opacity-0 group-hover:opacity-100 transition-opacity duration-300  ">
                  <button onClick={() => handleDislikedMovies(item.id)}>
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
                  <button onClick={() => handleLikedMovies(item.id)}>
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
            <Link to="/movieslist" key={item?.id}>
              <div className="self-center flex justify-between gap-5 mt-0.5 items-start w-full">
                <div className="flex basis-[0%] flex-col max-sm:w-12 justify-center align-middle  items-center self-center px-5">
                  <div className="text-blue-950 max-sm:w-2 text-center text-xs max-sm:text-[10px] font-bold whitespace-nowrap">
                    {item?.attributes?.month}
                  </div>
                  <div className="text-black text-xl max-sm:w-2 font-bold whitespace-nowrap mt-2">
                    {item?.attributes?.day}
                  </div>
                </div>
                <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5 max-sm:-ml-2">
                  <div className="text-black text-md  font-bold leading-5 max-sm:leading-2">
                    {item?.attributes?.movietitle}
                  </div>
                  <div className="text-neutral-500 text-md  leading-2 mt-1 max-sm:leading-2">
                    {item?.attributes?.moviedesc?.slice(0, 25) + "..."}
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
