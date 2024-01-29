import React from "react";
import Booking from "../../assets/images/booking.png";
import UPI from "../../assets/images/upi.png";
import Credit from "../../assets/images/credit.png";
import Paylater from "../../assets/images/paylater.png";
import Net from "../../assets/images/net.png";
import MWallets from "../../assets/images/m-wallets.png";
import { Link } from "react-router-dom";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useStore } from "../../utils/store";
import { useNavigate } from "react-router-dom";
import { axiosAuth } from "../../utils/axios";
import vector from "../../assets/icons/Vector.svg";

const Confirmticket = () => {
  const isAuth = useStore((state) => state.isAuthenticated);
  const navigate = useNavigate();
  if(isAuth === false){
    navigate('/login')
}
  const searchParams = new URLSearchParams(window.location.search);
  const eventid = searchParams.get("eventid");
  const [eventData, setEventData] = useState([]);
  const [couponData, setCouponData] = useState([]);
  const [couponCode, setCouponCode] = useState("");
  const userid = useStore((state) => state.userData.id);
  const orderDetails = useStore((state) => state.orderDetails);

  console.log(isAuth);
  const jwt = useStore((state) => state.jwt);
  if(jwt === null) navigate('/login')

  useEffect(() => {
    const eventDataNew = async () => {
      try {
        const events = await axios.get(
          `${process.env.REACT_APP_BACKENDURL}/events/${eventid}`
        );
        if(events.status === 200){
          setEventData(events.data.data.attributes);
          try {
            const couponData = await axiosAuth.get(
              `/coupons?filters[eventid]=${eventid}`
            );
            console.log(couponData);
            setCouponData(couponData.data.data);
          } catch (err) {
            console.log("Error in fetching Coupon Data", err);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    eventDataNew();
  }, []);
  
  const handlePaySubmit = async () => {
    try {
      const newOrder = await axios.post(
        `${process.env.REACT_APP_BACKENDURL}/orders`,
        {
            data: {
              eventid: eventid,
              name: eventData.eventtitle,
              userid: userid,
              ticketdetails:JSON.stringify(orderDetails.ticketdetails),
              ticketquantity: orderDetails.ticketquantity,
              ticketprice: orderDetails.ticketprice,
              totalprice: orderDetails.totalprice,
              organiserid:eventData.userid,
              type:"event"
            }
          }
      );
      if (newOrder.data) {
        
        navigate("/confirmbooking?type=event")
      } else {
        alert("Payment failed, Try Again");
      }
    } catch (err) {
      alert("Payment failed, Try Again");
    }
  };
  

  return (
    <div>
      <Navbar />
      <div className="bg-white flex flex-col justify-center items-center px-16 max-md:px-5">
        <div className="flex w-full max-w-[1493px] flex-col mt-24 max-md:max-w-full max-md:my-10">
          <div className="text-blue-950 text-xl font-bold self-center whitespace-nowrap font-[Poppins] max-sm:mt-16">
            Pay to confirm booking
          </div>
          <div className="self-stretch mt-10 max-md:max-w-full max-md:mt-10 max-sm:-mt-4">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch pl-28 w-[65%] max-md:w-full max-md:ml-0 max-sm:pl-0">
                <div className="bg-blue-950 grow w-[650px] pl-16 pr-20 py-12 rounded-2xl max-md:max-w-full max-md:mt-10 max-md:px-5">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
                      <div className="flex flex-col items-stretch my-auto max-md:max-w-full max-md:mt-10">
                        <h1 className="text-white text-2xl font-semibold max-md:max-w-full">
                          BOOKING DETAIL
                        </h1>
                        <h2 className="text-white text-xl font-medium leading-8 mt-8 max-md:max-w-full">
                          Schedule
                        </h2>
                        <h3 className="text-white font-thin text-md leading-7 mt-7">
                          Event Title
                        </h3>
                        <h1 className="text-white text-xl font-medium leading-8 whitespace-nowrap mt-1.5 self-start">
                          {eventData?.eventtitle}
                        </h1>
                        <h2 className="text-white font-thin text-md leading-7 mt-5">
                          Date
                        </h2>
                        <h2 className="text-white text-xl font-medium leading-8 whitespace-nowrap mt-1.5 self-start">
                          {eventData?.day} {eventData?.month} {eventData?.year}
                        </h2>
                        <h3 className="text-neutral-400 text-lg leading-7 mt-5">
                          Ticket :{" "}
                          {orderDetails?.ticketdetails.map((ticket) => {
                            if (ticket.attributes.quantity > 0) {
                              return (
                                <div>
                                  {ticket.attributes.tickettitle} -{" "}
                                  {ticket.attributes.quantity} - $
                                  {ticket.attributes.price *
                                    ticket.attributes.quantity}
                                </div>
                              );
                            }
                          })}
                        </h3>

                        <p className="text-white text-sm font-thin mt-5 max-md:max-w-full">
                          Location:
                        </p>
                        <h1 className="text-white text-xl font-semibold mt-7 max-md:max-w-full">
                          {eventData?.locationname}
                        </h1>
                        <p className="text-white text-md font-thin mt-3 max-md:max-w-full">
                          {eventData?.locationname}
                          {eventData?.address}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[39%] ml-5 max-md:w-full max-md:ml-0">
                      <img
                        srcSet={Booking}
                        alt="booking"
                        className="aspect-[0.8] object-contain object-center w-full overflow-hidden mt-5 max-md:mt-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[30%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col max-md:max-w-full max-md:mt-10">
                  {/* <div className="justify-center items-stretch bg-white self-stretch flex flex-col p-8 rounded-3xl border-2 border-dashed border-blue-950 max-md:max-w-full max-md:px-5">
                    <h1 className="text-blue-950 text-xl font-medium max-md:max-w-full">
                      Offers
                    </h1>
                    <div className="justify-between items-stretch flex gap-5 mt-2 max-md:max-w-full max-md:flex-wrap">
                      <div className="justify-between items-center self-center flex gap-2.5">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/93e2f9a3ab332727d07dceec0d7d91924df0a1bce654f8e4f84ece11c0d38c0e?"
                          alt="img"
                          className="aspect-square object-contain object-center w-5 fill-blue-950 overflow-hidden shrink-0 max-w-full my-auto"
                        />
                        <h3 className="text-neutral-800 text-xs font-medium self-stretch grow whitespace-nowrap">
                          50% off up to ₹100 | Use code BOOKNOW
                        </h3>
                      </div>
                      <Link className="text-blue-950 text-base font-bold">
                        Apply
                      </Link>
                    </div>
                    <div className="justify-between items-stretch flex w-full gap-5 mt-3 max-md:max-w-full max-md:flex-wrap">
                      <div className="justify-between items-center self-center flex gap-2.5">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/93e2f9a3ab332727d07dceec0d7d91924df0a1bce654f8e4f84ece11c0d38c0e?"
                          alt="img"
                          className="aspect-square object-contain object-center w-5 fill-blue-950 overflow-hidden shrink-0 max-w-full my-auto"
                        />
                        <h3 className="text-neutral-800 text-xs font-medium self-stretch grow whitespace-nowrap">
                          20% off up to ₹100 | Use code FIRSTTIME
                        </h3>
                      </div>
                      <Link className="text-blue-950 text-base font-bold">
                        Apply
                      </Link>
                    </div>
                  </div> */}
                  <div className="md:flex md:justify-center md:items-stretch border bg-white self-stretch flex flex-col mt-3 md:px-8 px-4 py-4 rounded-xl border-solid border-zinc-500 border-opacity-50 max-md:max-w-full max-md:px-5">
                  <div className="md:flex md:justify-between md:items-center flex flex-col gap-5 max-md:max-w-full max-md:flex-wrap">
                    <div className="flex gap-2.5 my-auto flex-grow">
                      {" "}
                      {/* Added flex-grow */}
                      <img
                        loading="lazy"
                        src={vector}
                        alt="vector"
                        className="aspect-square object-contain object-center w-6 fill-blue-950 overflow-hidden shrink-0 max-w-full"
                      />
                      <h2 className="text-neutral-800 text-md font-medium grow whitespace-nowrap self-start">
                        Apply Code
                      </h2>
                    </div>
                    <div className="mt-4 md:mt-0 text-zinc-500 flex-shrink">
                      {" "}
                      {/* Added flex-shrink */}
                      <input
                        type="text"
                        placeholder="Enter Code"
                        onChange={(e) => {setCouponCode(e.target.value)}} // Added onChange
                        className="w-full md:w-auto border-gray-400 border rounded-md py-2 px-4"
                      />
                    </div>
                  </div>
                </div>
                  <div className="justify-center items-stretch border bg-white self-stretch flex flex-col mt-5 p-8 rounded-xl border-solid border-zinc-500 border-opacity-50 max-md:max-w-full max-md:px-5">
                    <h1 className="text-neutral-800 text-xl font-medium max-md:max-w-full">
                      Bill details
                    </h1>
                    <div className="justify-between items-stretch flex gap-5 mt-3 max-md:max-w-full max-md:flex-wrap">
                      <h3 className="text-zinc-500 text-xs font-medium">
                        Base Ticket Fare
                      </h3>
                      <h3 className="text-zinc-500 text-xs font-medium">
                        ${orderDetails?.ticketprice}
                      </h3>
                    </div>
                    <div className="justify-between items-stretch flex gap-5 mt-2.5 max-md:max-w-full max-md:flex-wrap">
                      <h3 className="text-zinc-500 text-xs font-medium">
                        Total Travellers
                      </h3>
                      <h3 className="text-zinc-500 text-xs font-medium">
                        {orderDetails?.ticketquantity}
                      </h3>
                    </div>
                    <div className="justify-between items-stretch flex gap-5 mt-2.5 max-md:max-w-full max-md:flex-wrap">
                      <h3 className="text-zinc-500 text-xs font-medium">
                       VAT
                      </h3>
                      <h3 className="text-zinc-500 text-xs font-medium">
                        ${orderDetails?.ticketprice * 0.18}
                      </h3>
                    </div>
                    <div className="justify-between items-stretch flex gap-5 mt-2.5 max-md:max-w-full max-md:flex-wrap">
                      <h3 className="text-zinc-500 text-xs font-medium">
                       Platform Fee
                      </h3>
                      <h3 className="text-zinc-500 text-xs font-medium">
                        ${orderDetails?.ticketprice * 0.1}
                      </h3>
                    </div>
                    {
                     couponData.map((coupon) => {
                      if (coupon.attributes.code === couponCode)  {
                        return (
                          <div className="justify-between items-stretch flex gap-5 mt-2.5 max-md:max-w-full max-md:flex-wrap">
                            <h3 className="text-zinc-500 text-xs font-medium">
                              Discount
                            </h3>
                            <h3 className="text-zinc-500 text-xs font-medium">
                              -${(orderDetails?.totalprice * coupon.attributes.discount) / 100}
                            </h3>
                          </div>
                        )
                      }
                    })
                  }
                    <div className="justify-between items-stretch flex gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
                      <h2 className="text-neutral-700 text-xl font-medium">
                        Total Charge
                      </h2>
                      <h2 className="text-neutral-700 text-xl font-medium">
                      {
                        couponData.map((coupon) => {
                          if (coupon.attributes.code === couponCode) {
                            return (
                              <div>
                                ${orderDetails?.totalprice - (orderDetails?.totalprice * coupon.attributes.discount) / 100}
                              </div>
                            )
                          }
                          else{
                            return (
                              <div>
                                ${orderDetails?.totalprice}
                              </div>
                            )
                          }
                        })
                      }
                      {
                        couponData.length === 0 && (
                          <div>
                                ${orderDetails?.totalprice}
                              </div>
                        )
                      }
                      </h2>
                    </div>
                  </div>
                  <button
                    onClick={handlePaySubmit}
                    className="bg-[#0A075F] rounded-xl
                                     text-white text-bold font-semibold self-center whitespace-nowrap mt-10 max-md:mt-10 py-5 px-20"
                  >
                    Pay Now
                  </button>
                  <button className="text-pink-600 text-bold font-semibold self-center whitespace-nowrap mt-10 max-md:mt-10">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex max-w-[686px] flex-col px-5 pl-28 mt-10 mb-10 max-sm:pl-0">
            <div className="text-neutral-800 text-xl font-medium whitespace-nowrap self-start max-md:ml-1.5">
              All Payment Options
            </div>
            <div className="justify-between items-stretch bg-white flex max-w-[934px] gap-5 p-6 border-b-zinc-500 border-b-opacity-50 border-b border-solid max-md:flex-wrap max-md:px-5 mt-10 hover:bg-slate-100 cursor-pointer">
              <div className="flex justify-between gap-5 items-start">
                <img
                  srcSet={UPI}
                  alt="upi"
                  className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                />
                <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                  <div className="text-neutral-800 text-base font-medium">
                    UPI Payment
                  </div>
                  <div className="text-zinc-500 text-xs font-medium whitespace-nowrap">
                    Pay instantly with UPI Apps
                  </div>
                </div>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca78962ae7e140872f25e9fa10c6b8a4d1b99760ba9116ba004892f21d629bb9?"
                alt="img"
                className="aspect-[0.8] object-contain object-center w-2 fill-neutral-800 overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="justify-between items-stretch bg-white flex max-w-[934px] gap-5 p-6 border-b-zinc-500 border-b-opacity-50 border-b border-solid max-md:flex-wrap max-md:px-5 hover:bg-slate-100 cursor-pointer">
              <div className="flex justify-between gap-5 items-start">
                <img
                  srcSet={Credit}
                  alt="credit"
                  className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                />
                <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                  <div className="text-neutral-800 text-base font-medium">
                    Credit / Debit Card
                  </div>
                  <div className="text-zinc-500 text-xs font-medium whitespace-nowrap max-sm:w-16">
                    Visa, Mastercard, amex, Rupay and more
                  </div>
                </div>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca78962ae7e140872f25e9fa10c6b8a4d1b99760ba9116ba004892f21d629bb9?"
                alt="img"
                className="aspect-[0.8] object-contain object-center w-2 fill-neutral-800 overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="justify-between items-stretch bg-white flex max-w-[934px] gap-5 p-6 border-b-zinc-500 border-b-opacity-50 border-b border-solid max-md:flex-wrap max-md:px-5 hover:bg-slate-100 cursor-pointer">
              <div className="flex justify-between gap-5 items-start">
                <img
                  srcSet={Paylater}
                  alt="paylater"
                  className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                />
                <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                  <div className="text-neutral-800 text-base font-medium">
                    Paylater
                  </div>
                  <div className="text-zinc-500 text-xs font-medium whitespace-nowrap">
                    LazyPay, Simpl, ZestMoney.
                  </div>
                </div>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca78962ae7e140872f25e9fa10c6b8a4d1b99760ba9116ba004892f21d629bb9?"
                alt="img"
                className="aspect-[0.8] object-contain object-center w-2 fill-neutral-800 overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="justify-between items-stretch bg-white flex max-w-[934px] gap-5 p-6 border-b-zinc-500 border-b-opacity-50 border-b border-solid max-md:flex-wrap max-md:px-5 hover:bg-slate-100 cursor-pointer">
              <div className="flex justify-between gap-5 items-start">
                <img
                  srcSet={Net}
                  alt="net"
                  className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                />
                <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                  <div className="text-neutral-800 text-base font-medium">
                    Net Banking
                  </div>
                  <div className="text-zinc-500 text-xs font-medium whitespace-nowrap">
                    We Support all major banks
                  </div>
                </div>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca78962ae7e140872f25e9fa10c6b8a4d1b99760ba9116ba004892f21d629bb9?"
                alt="img"
                className="aspect-[0.8] object-contain object-center w-2 fill-neutral-800 overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="justify-between items-stretch bg-white flex max-w-[934px] gap-5 p-6 border-b-zinc-500 border-b-opacity-50 border-b border-solid max-md:flex-wrap max-md:px-5 hover:bg-slate-100 cursor-pointer">
              <div className="flex justify-between gap-5 items-start">
                <img
                  srcSet={MWallets}
                  alt="MWallets"
                  className="aspect-squa re object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                />
                <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                  <div className="text-neutral-800 text-base font-medium">
                    Mobile Wallets
                  </div>
                  <div className="text-zinc-500 text-xs w-10 font-medium whitespace-nowrap max-sm:w-10">
                    Amazonpay, Mobikwik, Payzapp, PayPal
                  </div>
                </div>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca78962ae7e140872f25e9fa10c6b8a4d1b99760ba9116ba004892f21d629bb9?"
                alt="img"
                className="aspect-[0.8] object-contain object-center w-2 fill-neutral-800 overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Confirmticket;
