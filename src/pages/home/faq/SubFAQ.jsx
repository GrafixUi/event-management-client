import React, { useEffect, useState } from "react";
import useAxiosAuth from "../../../utils/useAxiosAuth";
import { axiosAuth } from "../../../utils/axios";

const faqDatas = [
  {
    question: "How will I receive my tickets",
    answer:
      "By booking online, you will receive an email with a link to your account and QR will be generated at the end of the booking porcess.",
  },
  {
    question: "What are the payment methods available?",
    answer:
      "We accept all major credit and debit cards, as well as PayPal. We also accept payments in a range of local currencies.",
  },
  {
    question: "How do I get a refund?",
    answer:
      "Refunds are available in certain circumstances. Please contact us for more information.",
  },
];

const SubFAQ = (type) => {
  const [faqData, setFaqData] = useState([]);
  // const axiosAuth = useAxiosAuth();

  useEffect(() => {
    const faqDataNew = async () => {
      try {
        const faqData = await axiosAuth.get(
          `${process.env.REACT_APP_BACKENDURL}/faqs?filters[${type.type}id]=${type?.id}`
        );
        setFaqData(faqData.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    faqDataNew();
  }, []);
  console.log(faqData);
  return (
    <div className="self-center items-center justify-center max-sm:w-96 mt-8">
      {faqData.length !== 0 && (
        <h1 className="text-center text-2xl font-semibold">
          {type.type === "event" ? "Event" : "Venue"} FAQs
        </h1>
      )}
      {faqData.map((faq, index) => (
        <div
          key={index}
          className="justify-between items-stretch self-center flex w-full max-w-[1115px] gap-5 px-5 py-7 border-b-zinc-300 border-b border-solid max-md:flex-wrap max-md:mt-10"
        >
          <div className="relative w-full overflow-hidden pb-3">
            <input
              className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              type="checkbox"
            />
            <div className="w-full flex items-center">
              <h1 className="text-lg font-semibold text-[#404145] max-sm:text-sm max-sm:w-72 max-sm:text-[18px]">
                {faq?.attributes?.question}
              </h1>
            </div>
            <div className="max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40 max-sm:text-sm">
              <div className="text-[#404145] p-4">
                {faq?.attributes?.answer}
              </div>
            </div>
            <div className="absolute top-3 right-3 text-[#404145] peer-checked:rotate-180 transition-transform duration-500 rotate-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubFAQ;
