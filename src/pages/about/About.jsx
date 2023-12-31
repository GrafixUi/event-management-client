import React from 'react';
import about from "../../assets/images/about1.png";
import about2 from "../../assets/images/about2.png";
import slide from "../../assets/images/about3.png";
import slide2 from "../../assets/images/about4.png";
import slide3 from "../../assets/images/about5.png";
import Navbar from "../../component/navbar/Navbar"
import Footer from "../../component/footer/Footer"
const About = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-white flex flex-col justify-center items-center px-16 py-12 max-md:px-5">
                <div className="flex w-full max-w-[1634px] flex-col items-stretch mt-8 max-md:max-w-full max-md:my-10">
                    <div className="max-md:max-w-full ">
                        <div className="gap-5 mt-20 flex max-md:flex-col max-md:items-stretch max-md:gap-0 max-sm:-mt-4">
                            <div className="flex flex-col items-center self-center justify-center w-6/12 max-md:w-full max-md:ml-0">
                                <img
                                    loading="lazy"
                                    srcSet={about} alt='about'
                                    className="aspect-[1.2] object-contain object-center w-[400px]  rounded-lg overflow-hidden grow max-md:max-w-full max-md:mt-10"
                                />
                            </div>
                            <div className="flex flex-col items-stretch w-[600px] ml-5 max-md:w-full max-md:ml-0">
                                <div className="flex flex-col items-stretch my-auto max-md:max-w-full max-md:mt-10">
                                    <div className="text-black font-[Poppins] text-3xl font-bold max-md:max-w-full max-md:text-4xl">
                                        About Us
                                    </div>
                                    <div className="text-black font-semibold text-lg mt-8 max-md:max-w-full">
                                        We guarantee the highest quality of
                                        <br />
                                        the products we sell.
                                    </div>
                                    <div className="text-black text-xl font-[275] mt-7 max-md:max-w-full">
                                        Our company is dedicated to creating unique and
                                        <br />
                                        comfortable clothing for men and women. <br />
                                        Since our establishment in 2010, Fashion's activity has <br />
                                        extended from developing designer clothes to training <br />
                                        new designers and stylists at our school, participation <br />
                                        of our trainees at the world's leading fashion shows and{" "}
                                        <br />
                                        writing articles about fashion.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-32 max-md:max-w-full max-md:mt-10">
                        <div className="gap-52 flex items-center self-center justify-center max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch self-center max-md:w-full max-md:ml-0">
                                <div className="flex flex-col items-stretch my-auto max-md:max-w-full max-md:mt-10">
                                    <div className="text-black font-[Poppins] text-2xl font-bold max-md:max-w-full max-md:text-4xl">
                                        Our Story
                                    </div>
                                    <div className="text-black font-semibold text-xl mt-10 max-md:max-w-full max-md:mt-10">
                                        Catering to your requirements, handling your needs <br />
                                        with care.
                                    </div>
                                    <div className="text-black text-lg font-[275] mt-11 max-md:max-w-full max-md:mt-10">
                                        Our store is more than just another average online retailer.{" "}
                                        <br />
                                        We sell not only top quality products, but give our customers{" "}
                                        <br />a positive online shopping experience.
                                        <br />
                                        Forget about struggling to do everything at once: taking care{" "}
                                        <br />
                                        of the family, running your business, walking your dog,
                                        cleaning <br />
                                        the house, doing the shopping, etc.
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-stretch  ml-5 max-md:w-full max-md:ml-0">
                                <img
                                    loading="lazy"
                                    srcSet={about2} alt='about2'
                                    className="aspect-[1.2] object-contain object-center w-[400px] rounded-lg overflow-hidden grow max-md:max-w-full max-md:mt-10"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch mt-20 px-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
                        <div className="text-black text-3xl font-[Poppins] font-bold max-md:max-w-full max-md:text-4xl">
                            Fresh from blog
                        </div>
                        <div className="mt-16 px-0.5 max-md:max-w-full mx-auto max-md:mt-10 ">
                            <div className="gap-8 flex max-md:flex-col self-center items-center justify-center max-md:items-stretch max-md:gap-0">
                                <div className="flex flex-col  w-[30%] max-md:w-full max-md:ml-0">
                                    <div className="flex grow flex-col items-stretch w-full pb-4 border-2 border-solid border-black border-opacity-10 max-md:max-w-full max-md:mt-6">
                                        <img
                                            loading="lazy"
                                            srcSet={slide} alt='slide'
                                            className="aspect-[1.48] object-contain object-center w-full overflow-hidden max-md:max-w-full"
                                        />
                                        <div className="flex flex-col items-stretch mt-3 pl-3.5 max-md:max-w-full">
                                            <h2 className="text-black text-base font-[275] max-md:max-w-full">
                                                MAR 12, 2023 | 0 COMMENTS | POSTED BY TicketVerse
                                            </h2>
                                            <h2 className="text-black text-md font-medium mt-5 max-md:max-w-full">
                                                Things to do while attending a Music Festival
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center self-center justify-center w-[30%] max-md:w-full max-md:ml-0">
                                    <div className="flex grow flex-col items-stretch w-full pb-4 border-2 border-solid border-black border-opacity-10 max-md:max-w-full max-md:mt-6">
                                        <img
                                            loading="lazy"
                                            srcSet={slide2} alt='slide'
                                            className="aspect-[1.48] object-contain object-center w-full overflow-hidden max-md:max-w-full"
                                        />
                                        <div className="flex flex-col items-stretch mt-3 pl-3.5 max-md:max-w-full">
                                            <h2 className="text-black text-base font-[275] max-md:max-w-full">
                                                MAR 12, 2023 | 0 COMMENTS | POSTED BY TicketVerse
                                            </h2>
                                            <h2 className="text-black text-md font-medium mt-5 max-md:max-w-full">
                                                Things to do while attending a Music Festival
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center self-center justify-center w-[30%] max-md:w-full max-md:ml-0">
                                    <div className="flex grow flex-col items-stretch w-full pb-4 border-2 border-solid border-black border-opacity-10 max-md:max-w-full max-md:mt-6">
                                        <img
                                            loading="lazy"
                                            srcSet={slide3} alt='slide'
                                            className="aspect-[1.48] object-contain object-center w-full overflow-hidden max-md:max-w-full"
                                        />
                                        <div className="flex flex-col items-stretch mt-3 pl-3.5 max-md:max-w-full">
                                            <h2 className="text-black text-base font-[275] max-md:max-w-full">
                                                MAR 12, 2023 | 0 COMMENTS | POSTED BY TicketVerse
                                            </h2>
                                            <h2 className="text-black text-md font-medium mt-5 max-md:max-w-full">
                                                Things to do while attending a Music Festival
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About


