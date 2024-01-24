import React from "react";

const SubFAQ = () => {
  return (
    <div className=" self-center items-center justify-center max-sm:w-96 mt-8">
      <div className="justify-between items-stretch self-center flex w-[1115px] max-w-full gap-5  px-5 py-7 border-b-zinc-300 border-b border-solid max-md:flex-wrap max-md:mt-10">
        <div className=" relative w-[1115px] overflow-hidden pb-3">
          <input
            className=" peer absolute top-0 inset-x-0 w-[1115px] max-w-full h-12 opacity-0 z-10 cursor-pointer"
            type="checkbox"
          />
          <div className=" w-full flex items-center">
            <h1 className=" text-lg font-semibold text-[#404145] max-sm:w-64 max-sm:text-sm">
              How will I receive my tickets
            </h1>
          </div>
          <div className=" max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40 max-sm:text-sm">
            <div className=" text-[#404145] p-4">
              By booking online, you will receive an email with a link to your
              account and QR will be generated at the end of the booking
              porcess.
            </div>
          </div>
          <div className=" absolute top-3 right-3 text-[#404145] peer-checked:rotate-180 transition-transform duration-500 rotate-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="justify-between items-stretch self-center flex w-[1115px] max-w-full gap-5 px-5 py-7 border-b-zinc-300 border-b border-solid max-md:flex-wrap max-md:mt-10">
        <div className=" relative w-[1115px] overflow-hidden pb-3">
          <input
            className=" peer absolute top-0 inset-x-0 w-[1115px] max-w-full h-12 opacity-0 z-10 cursor-pointer"
            type="checkbox"
          />
          <div className="  w-full flex items-center">
            <h1 className=" text-lg font-semibold text-[#404145] max-sm:w-64 max-sm:text-sm">
              What are the payment methods available?
            </h1>
          </div>
          <div className=" max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40 max-sm:text-sm">
            <div className=" text-[#404145] p-4">
              We accept all major credit and debit cards, as well as PayPal. We
              also accept payments in a range of local currencies.
            </div>
          </div>
          <div className=" absolute top-3 right-3 text-[#404145] peer-checked:rotate-180 transition-transform duration-500 rotate-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="justify-between items-stretch self-center flex w-[1115px] max-w-full gap-5 px-5 py-7 border-b-zinc-300 border-b border-solid max-md:flex-wrap max-md:mt-10">
        <div className=" relative w-[1115px] overflow-hidden pb-3">
          <input
            className=" peer absolute top-0 inset-x-0 w-[1115px] max-w-full h-12 opacity-0 z-10 cursor-pointer"
            type="checkbox"
          />
          <div className=" w-full flex items-center">
            <h1 className=" text-lg font-semibold text-[#404145] max-sm:text-sm max-sm:w-72 max-sm:text-[18px]">
                How do I get a refund?
            </h1>
          </div>
          <div className=" max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40 max-sm:text-sm">
            <div className=" text-[#404145] p-4">
                Refunds are available in certain circumstances. Please contact us
                for more information.
            </div>
          </div>
          <div className=" absolute top-3 right-3 text-[#404145] peer-checked:rotate-180 transition-transform duration-500 rotate-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFAQ;
