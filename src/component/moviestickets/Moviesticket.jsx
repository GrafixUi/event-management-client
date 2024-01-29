import React from "react";
import header from "../../assets/images/header2.png";
import header2 from "../../assets/images/booking.png";
import vendor from "../../assets/images/vendorlogo.png";

import { Link } from "react-router-dom";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { SeatsioSeatingChart } from "@seatsio/seatsio-react";
import { useStore } from "../../utils/store";
import { useNavigate } from "react-router-dom";
const Moviesticket = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const movieid = searchParams.get("movieid");
  const [items, setItems] = useState([]);
  const setMovieOrderDetails = useStore((state) => state.setMovieOrderDetails);
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  const navigate = useNavigate();
  useEffect(() => {
    const upcomingDataNew = async () => {
      try {
        const upcomingEvents = await axios.get(
          `${process.env.REACT_APP_BACKENDURL}/movies/${movieid}`
        );
        setItems(upcomingEvents.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    upcomingDataNew();
  }, []);

  const jwt = useStore((state) => state.jwt);
  if(jwt === null) navigate('/login')

  const pricing = [
    { category: "RedCircle", price: 30 },
    { category: "PinkCircle", price: 40 },
    { category: "OrangeCircle", price: 50 },
  ];
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleObjectSelected = (e) => {
    const id = e.id;
    const pricing = e.pricing.price;
    setSelectedSeats((prevSelectedSeats) => [
      ...prevSelectedSeats,
      { id, pricing },
    ]);
  };

  const handleObjectDeselected = (e) => {
    const { id } = e;
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.filter((seat) => seat.id !== id)
    );
  };

  console.log(items);
  const selectedSeatsName = selectedSeats.map((seat) => seat.id).join(", ");
  const selectedSeatsPrice = selectedSeats
    .map((seat) => seat.pricing)
    .reduce((a, b) => a + b, 0);
  const selectedSeatsPriceWithVat = Math.round(selectedSeatsPrice * 1.8) / 10;
  const selectedSeatsPriceWithPlatformFee =
    Math.round(selectedSeatsPrice * 1) / 10;
  const totalPrice =
    selectedSeatsPrice +
    selectedSeatsPriceWithVat +
    selectedSeatsPriceWithPlatformFee;

  const handleMovieBooking = () => {
    if (isAuthenticated === true) {
      setMovieOrderDetails({
        movieid: items?.id,
        movietitle: items?.attributes?.movietitle,
        month: items?.attributes?.month,
        day: items?.attributes?.day,
        year: items?.attributes?.year,
        theater: items?.attributes?.theater,
        address: items?.attributes?.address,
        selectedSeatsName: selectedSeatsName,
        selectedSeatsQuantity: selectedSeats.length,
        selectedSeatsPrice: selectedSeatsPrice,
        selectedSeatsPriceWithVat: selectedSeatsPriceWithVat,
        selectedSeatsPriceWithPlatformFee: selectedSeatsPriceWithPlatformFee,
        totalPrice: totalPrice,
        organiserid: items?.attributes?.userid,
      });
      navigate("/confirmmovieticket");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="bg-white flex flex-col items-stretch">
      <Navbar />
      <div className="flex-col overflow-hidden relative flex min-h-[550px] w-full justify-center items-center self-center px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <img
          loading="lazy"
          srcSet={header}
          alt="header"
          className="absolute h-[500px] max-sm:h-full w-full object-cover flex items-center self-center justify-center object-center inset-0"
        />
        <div className="relative flex w-full max-w-[1300px] max-sm:self-center max-sm:items-center items-stretch justify-between gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
          <div className="max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 ">
              <div className="flex flex-col items-stretch w-[44%] max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet={header2}
                  alt="header2"
                  className="aspect-[0.8] object-contain object-center w-[300px] overflow-hidden grow max-md:mt-9 max-sm:ml-6"
                />
              </div>
              <div className="flex flex-col items-stretch w-[40%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col items-stretch my-auto max-md:mt-10">
                  <h1 className="text-white text-3xl whitespace-nowrap max-md:text-4xl">
                    {items?.attributes?.movietitle}
                  </h1>
                  <p className="text-neutral-400 text-justify text-base mt-7 max-md:mt-10">
                    <br />
                    {items?.attributes?.moviedesc}
                  </p>
                  <h2 className="text-white text-lg whitespace-nowrap mt-5">
                    Movie Type : {items?.attributes?.genre}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="backdrop-blur-[13.899999618530273px] self-center flex grow basis-[0%] flex-col justify-center my-auto px-10 py-10 rounded-3xl items-end max-md:max-w-full max-md:px-5">
            <Link
              to="/confirmticket"
              class="relative group overflow-hidden  px-16 h-16 rounded-md flex space-x-2 items-center bg-gradient-to-r bg-blue-950"
            >
              <span class="relative text-white font-bold text-xl w-32">
                Book Now
              </span>
              <div class="flex items-center -space-x-3 translate-x-3">
                <div class="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="self-center w-full max-w-[1300px] max-md:max-w-full max-md:mt-10">
        <div className="max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 max-sm:p-5">
            <div className="flex flex-col items-stretch w-[68%] max-md:w-full max-md:ml-0 shadow-sm shadow-slate-300 rounded-lg ">
              <div className="bg-white flex w-full grow items-stretch justify-between gap-5 mx-auto pl-16 pr-20 py-10 rounded-2xl max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:px-5">
                <div className="flex items-stretch justify-between gap-5">
                  <div className="backdrop-blur-[3.950000047683716px] bg-blue-950 flex grow basis-[0%] flex-col items-center pl-3 pr-5 rounded-xl">
                    <h2 className="text-white text-xl mt-5 font-semibold leading-6 uppercase whitespace-nowrap">
                      {items?.attributes?.month}
                    </h2>
                    <h1 className="text-white text-4xl pr-4 pl-4 font-bold self-stretch whitespace-nowrap mt-4 max-md:text-4xl">
                      {items?.attributes?.day}
                    </h1>
                  </div>
                  <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                    <div className="items-stretch flex justify-between gap-3">
                      <h3 className="text-black text-sm">Released:</h3>
                      <h3 className="text-black text-sm">
                        {items?.attributes?.year}
                      </h3>
                    </div>
                    <div className="items-stretch flex justify-between gap-3 mt-5">
                      <h3 className="text-black text-sm">Genre:</h3>
                      <h3 className="text-black text-sm">
                        {items?.attributes?.genre}
                      </h3>
                    </div>
                    <div className="items-stretch flex justify-between gap-3 mt-5">
                      <h3 className="text-black text-sm">PG Rating:</h3>
                      <h3 className="text-black text-sm">AM</h3>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch mt-3 self-start">
                  <h3 className="text-black text-sm font-medium">Theater:</h3>
                  <h3 className="text-blue-950 text-lg font-semibold mt-3">
                    {items?.attributes?.theater}
                  </h3>
                  <h3 className="text-blue-950 text-md font-light mt-4">
                    {items?.attributes?.address}
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[32%] ml-5 max-md:w-full max-md:ml-0 shadow-sm shadow-slate-300 rounded-lg max-sm:mt-6">
              <div className="bg-white grow w-full pl-16 pr-20 py-9 rounded-2xl max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 max-sm:-mt-10">
                  <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0 max-sm:items-center">
                    <img
                      loading="lazy"
                      srcSet={vendor}
                      alt="vendor"
                      className="aspect-square object-contain object-center w-[110px] justify-center items-center overflow-hidden shrink-0 max-w-full max-md:mt-10"
                    />
                  </div>
                  <div className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0 max-sm:items-center ">
                    <div className="flex grow flex-col items-stretch max-md:mt-10">
                      <h3 className="text-neutral-500 text-base font-bold leading-5">
                        {items?.attributes?.organiser}
                      </h3>
                      {/* <h2 className="text-neutral-500 text-base leading-5 whitespace-nowrap mt-2.5 max-md:mr-1">
                                                Premium Digital Studio
                                            </h2> */}
                      <div className="flex justify-between gap-1 mt-1.5 items-start max-md:mr-1">
                        <div className="items-stretch flex gap-1 pr-3 py-0.5">
                      
                        </div>
                      </div>
                      <Link
                        to="/contact"
                        className="text-neutral-500 text-center text-sm font-semibold leading-4 items-stretch rounded border justify-center mt-5 px-7 py-3.5 border-solid border-neutral-500 max-md:px-5"
                      >
                        Contact Me
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center w-full max-w-[1300px] mt-12 mb-10 max-md:max-w-full max-md:my-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 max-sm:p-5">
          <div className="w-full">
            <SeatsioSeatingChart
              workspaceKey="10f391a9-8bc8-4ce1-8c5e-d7a4532a5b3d"
              event="e4df854b-2f9a-4dfa-89e8-975338706d67"
              pricing={pricing}
              showSeatLabels={true}
              onObjectSelected={handleObjectSelected}
              onObjectDeselected={handleObjectDeselected}
              region="eu"
            />
          </div>
          <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0 shadow-sm shadow-slate-300 rounded-lg max-sm:mt-6">
            <div className="flex flex-col px-5 mt-4 max-md:max-w-full max-md:mt-8">
              <div className="bg-blue-950  self-stretch flex flex-col pl-14 pr-20 py-11 rounded-xl items-start max-md:max-w-full max-md:px-5 ">
                <h2 className="text-zinc-300 text-md leading-7">Movie Title</h2>
                <h2 className="text-white text-xl font-bold uppercase whitespace-nowrap mt-3.5">
                  {items?.attributes?.movietitle}
                </h2>
                <h2 className="text-zinc-300 text-md mt-7">Seat No </h2>
                <h1 className="text-white text-lg font-semibold mt-3.5">
                  {selectedSeatsName}
                </h1>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4672bdf0d884350fffc7229ebea2f1d26f4e52a26b93bf07fd4d1bf9816fc7a?"
                alt="img"
                className="aspect-[498] object-contain object-center w-full stroke-[1px] stroke-zinc-500 stroke-opacity-50 overflow-hidden self-stretch mt-8 max-md:max-w-full"
              />
              {/* <div className="justify-center items-stretch bg-white self-stretch flex flex-col mt-5 p-8 rounded-3xl border-2 border-dashed border-blue-950 max-md:max-w-full max-md:px-5">
                <div className="text-blue-950 text-2xl font-medium max-md:max-w-full">
                  Offers
                </div>
                <div className="justify-between items-stretch flex flex-col gap-2 mt-3 max-md:max-w-full max-md:flex-wrap">
                  <div className="flex flex-col max-md:flex-row gap-2.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/93e2f9a3ab332727d07dceec0d7d91924df0a1bce654f8e4f84ece11c0d38c0e?"
                      alt="img"
                      className="aspect-square object-contain object-center w-12 h-12 fill-blue-950 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <div className="text-neutral-800 text-sm font-medium self-stretch grow">
                      50% off up to ₹100 | Use code BOOKNOW
                    </div>
                  </div>
                  <Link className="text-blue-950 text-base font-medium">
                    Apply
                  </Link>
                </div>
                <div className="justify-between items-stretch flex flex-col gap-2 mt-2 max-md:max-w-full max-md:flex-wrap">
                  <div className="flex flex-col max-md:flex-row gap-2.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/93e2f9a3ab332727d07dceec0d7d91924df0a1bce654f8e4f84ece11c0d38c0e?"
                      alt="img"
                      className="aspect-square object-contain object-center w-12 h-12 fill-blue-950 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <div className="text-neutral-800 text-sm font-medium self-stretch grow">
                      20% off up to ₹100 | Use code FIRSTTIME
                    </div>
                  </div>
                  <Link className="text-blue-950 text-base font-medium">
                    Apply
                  </Link>
                </div>
              </div> */}

              {/* <div className="justify-center items-stretch border bg-white self-stretch flex flex-col mt-5 px-8 py-4 rounded-xl border-solid border-zinc-500 border-opacity-50 max-md:max-w-full max-md:px-5">
                <div className="justify-between items-start flex flex-col gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="items-stretch flex flex-col gap-2.5 my-auto">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/93c146497e8165cb89e62d813ff44ceaae8089be958bef572eb8b97e70731be6?"
                      alt="img"
                      className="aspect-square object-contain object-center w-12 h-12 fill-blue-950 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-neutral-800 text-lg font-medium grow whitespace-nowrap self-start">
                      Apply Code
                    </div>
                  </div>
                  <input
                    className="text-zinc-500 text-opacity-50 w-full md:w-36 text-sm font-medium whitespace-nowrap items-stretch self-stretch grow justify-center px-6 py-3 md:py-5 border-b-zinc-500 border-b-opacity-50 border border-none max-md:px-5"
                    type="text"
                    placeholder="Enter code"
                  />
                </div>
              </div> */}

              <div className="justify-center items-stretch border bg-white self-stretch flex flex-col mt-5 p-8 rounded-xl border-solid border-zinc-500 border-opacity-50 max-md:max-w-full max-md:px-5">
                <h2 className="text-neutral-800 text-xl font-medium max-md:max-w-full">
                  Bill details
                </h2>
                <div className="justify-between items-stretch flex gap-5 mt-3 max-md:max-w-full max-md:flex-wrap">
                  <h3 className="text-zinc-500 text-xs font-medium">
                    Base Ticket Fare
                  </h3>
                  <h3 className="text-zinc-500 text-xs font-medium">
                    ${selectedSeatsPrice}
                  </h3>
                </div>
                <div className="justify-between items-stretch flex gap-5 mt-2.5 max-md:max-w-full max-md:flex-wrap">
                  <h3 className="text-zinc-500 text-xs font-medium">
                    Total Travellers
                  </h3>
                  <h3 className="text-zinc-500 text-xs font-medium">
                    {selectedSeats.length}
                  </h3>
                </div>
                <div className="justify-between items-stretch flex gap-5 mt-2.5 max-md:max-w-full max-md:flex-wrap">
                  <h3 className="text-zinc-500 text-xs font-medium">VAT</h3>
                  <h3 className="text-zinc-500 text-xs font-medium">
                    ${selectedSeatsPriceWithVat}
                  </h3>
                </div>
                <div className="justify-between items-stretch flex gap-5 mt-2.5 max-md:max-w-full max-md:flex-wrap">
                  <h3 className="text-zinc-500 text-xs font-medium">
                    Platform Fee
                  </h3>
                  <h3 className="text-zinc-500 text-xs font-medium">
                    ${selectedSeatsPriceWithPlatformFee}
                  </h3>
                </div>
                <div className="justify-between items-stretch flex gap-5 mt-4 max-md:max-w-full max-md:flex-wrap">
                  <h3 className="text-neutral-700 text-xl font-medium">
                    Total Charge
                  </h3>
                  <h3 className="text-neutral-700 text-xl font-medium">
                    ${totalPrice}
                  </h3>
                </div>
              </div>
              <h2 className="text-zinc-500 text-xs font-medium self-center mt-5 max-md:max-w-full">
                Discounts, offers and price concessions will be applied later
                during payment
              </h2>
              <button
                onClick={handleMovieBooking}
                className="text-white text-base text-center font-bold whitespace-nowrap justify-center items-center bg-blue-950 self-center w-[300px] max-w-full mt-11 px-16 py-5 rounded-xl max-md:mt-10 max-md:px-5"
              >
                Book Now
              </button>
              <button className="text-pink-600 text-base font-semibold self-center whitespace-nowrap mt-5">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Moviesticket;
