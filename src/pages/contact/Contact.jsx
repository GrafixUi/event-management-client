import React from 'react';
import conatct from "../../assets/images/conatct.png";
import slide from "../../assets/images/about3.png";
import slide2 from "../../assets/images/about4.png";
import slide3 from "../../assets/images/about5.png";
import phone from "../../assets/images/phone.png";
import email from "../../assets/images/email.png";
import mark from "../../assets/images/mark.png";
import clock from "../../assets/images/Clock.png";
const Contact = () => {
    return (
        <div>
            <div className="flex-col overflow-hidden self-stretch relative flex min-h-[582px] w-full justify-center items-center px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
                <img
                    loading="lazy"
                    srcSet={conatct} alt='header'
                    className="absolute h-[450px] w-full object-cover object-center inset-0"
                />
                <div className="relative flex w-full max-w-[1489px] items-center justify-center gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
                    <h1 className=' text-white text-[60px] font-bold top-24'>Contact</h1>
                </div>
            </div>
            <div className="bg-white flex flex-col justify-center items-center px-16 max-md:px-5">
                <div className="flex w-full max-w-[1530px] flex-col items-center mb-[589px] max-md:max-w-full max-md:my-10">
                    <div className="flex justify-between gap-28 px-5 items-start max-md:flex-wrap ">
                        <div className="flex grow basis-[0%] flex-col items-stretch mt-2 max-md:max-w-full max-sm:self-center max-sm:items-center max-sm:ml-10">
                            <div className="text-black text-3xl font-bold max-md:max-w-full max-md:text-4xl max-sm:self-center max-sm:items-center">
                                We’re here to help you!
                            </div>
                            <div className="text-black text-md font-[275] mt-7 max-md:max-w-full">
                                Have a question, comment, or brilliant idea you'd like to share?{" "}
                                <br />
                                Send us a little note below - we love to hear from you and will always
                                reply!
                            </div>{" "}
                            <div className="flex flex-col items-stretch mt-20 max-md:max-w-full max-md:mt-10">
                                <div className="max-md:max-w-full max-md:pr-5">
                                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                        <div className="flex flex-col items-stretch w-[63%] max-md:w-full max-md:ml-0">
                                            <div className="flex flex-col items-start my-auto max-md:mt-10">
                                                <img
                                                    loading="lazy"
                                                    srcSet={phone} alt='phone'
                                                    className="aspect-square object-contain object-center w-16 overflow-hidden max-w-full"
                                                />{" "}
                                                <div className="text-black text-xl font-medium self-stretch whitespace-nowrap mt-6">
                                                    Phone Number
                                                </div>{" "}
                                                <div className="text-black text-xl font-[275] self-stretch whitespace-nowrap mt-5">
                                                    Call Us : 800-123-4567
                                                </div>
                                            </div>
                                        </div>{" "}
                                        <div className="flex flex-col items-stretch w-[37%] ml-5 max-md:w-full max-md:ml-0">
                                            <div className="flex grow flex-col items-start max-md:mt-10">
                                                <img
                                                    loading="lazy"
                                                    srcSet={email} alt='email'
                                                    className="aspect-square object-contain object-center w-16 shadow-sm overflow-hidden max-w-full"
                                                />{" "}
                                                <div className="text-black text-xl font-medium self-stretch whitespace-nowrap mt-7">
                                                    Email
                                                </div>{" "}
                                                <div className="text-black text-xl font-[275] self-stretch whitespace-nowrap mt-5">
                                                    demo@demo.com
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>{" "}
                                <div className="mt-16 max-md:max-w-full max-md:mt-10">
                                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                        <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
                                            <div className="flex flex-col items-start max-md:mt-10">
                                                <img
                                                    loading="lazy"
                                                    srcSet={mark} alt='mark'
                                                    className="aspect-square object-contain object-center w-16 overflow-hidden max-w-full ml-10 max-md:ml-2.5"
                                                />{" "}
                                                <div className="text-black text-xl font-medium self-stretch mt-10">
                                                    Location
                                                </div>{" "}
                                                <div className="text-black text-xl font-[275] self-stretch mt-5">
                                                    2972 Westheimer Rd. Santa <br />
                                                    Ana, Illinois 85486
                                                </div>
                                            </div>
                                        </div>{" "}
                                        <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
                                            <div className="flex grow flex-col items-start max-md:mt-10">
                                                <img
                                                    loading="lazy"
                                                    srcSet={clock} alt='clock'
                                                    className="aspect-square object-contain object-center w-16 overflow-hidden max-w-full ml-9 max-md:ml-2.5"
                                                />{" "}
                                                <div className="text-black text-xl font-medium self-stretch mt-9">
                                                    Opening Hours
                                                </div>{" "}
                                                <div className="text-black w-[250px] text-xl font-[275] self-stretch mt-4">
                                                    Mon-Fri: 9:00 am -6:00 pm
                                                    <br />
                                                    Sat: 9:00 am - 4:00 pm
                                                    <br />
                                                    Sun: 9:00 am - 2:00 pm
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{" "}
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f863485c8eadeecd08c3813dd34ec8ae73d00bcb7ccc89041b2a72c6fde361e0?" alt='img'
                            className=" bg-black opacity-15 aspect-[0.01] object-contain object-center w-1 stroke-[4px] stroke-neutral-400 stroke-opacity-10 overflow-hidden self-stretch shrink-0 max-w-full max-sm:hidden"
                        />{" "}
                        <div className="self-stretch flex grow basis-[0%] flex-col mt-1.5 max-md:max-w-full">
                            <div className="text-black text-3xl font-bold self-center items-center max-md:max-w-full max-md:text-4xl max-md:ml-28 max-sm:ml-2">
                                Do you want to get in touch?
                            </div>{" "}
                            <div className="text-black text-xl font-[275] self-stretch mt-8 max-md:max-w-full max-sm:ml-2">
                                Let us know how we can help you.
                            </div>{" "}
                            <input className="text-zinc-500 text-opacity-90 text-xl font-medium whitespace-nowrap border self-stretch justify-center mt-10 pl-9 pr-16 py-5 rounded-xl border-solid border-black border-opacity-30 items-start max-md:max-w-full max-md:mr-1.5 max-md:px-5" type='text' placeholder='Name' />
                            <input className="text-zinc-500 text-opacity-90 text-xl font-medium whitespace-nowrap border self-stretch justify-center mt-14 pl-9 pr-16 py-5 rounded-xl border-solid border-black border-opacity-30 items-start max-md:max-w-full max-md:mr-1.5 max-md:mt-10 max-md:px-5" type='text' placeholder='Email' />
                            <input className="text-zinc-500 text-opacity-90 text-xl font-medium whitespace-nowrap border self-stretch mt-12 pl-9 pr-16 pt-7 pb-36 rounded-xl border-solid border-black border-opacity-30 items-start max-md:max-w-full max-md:mr-1.5 max-md:mt-10 max-md:pb-10 max-md:px-5" type='text' placeholder='Message' />
                            <button className="text-zinc-50 text-2xl font-medium whitespace-nowrap bg-black self-center w-[385px] max-w-full justify-center items-center mt-16 px-10 py-5 max-md:mt-10 max-md:px-5 rounded">
                                Submit
                            </button>
                        </div>
                    </div>
                    <div className="text-black mt-16 text-3xl font-semibold self-stretch max-md:max-w-full max-md:text-4xl max-md:mt-10">
                        Fresh from blog
                    </div>
                    <div className="self-stretch mt-16 max-md:max-w-full max-md:mt-10">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                                <div className="flex grow flex-col items-stretch w-full pb-4 border-2 border-solid border-black border-opacity-10 max-md:max-w-full max-md:mt-6">
                                    <img
                                        loading="lazy"
                                        srcSet={slide} alt='slidde'
                                        className="aspect-[1.48] object-contain object-center w-full overflow-hidden max-md:max-w-full"
                                    />
                                    <div className="flex flex-col items-stretch mt-3 pl-3.5 max-md:max-w-full">
                                        <div className="text-black text-base font-[275] max-md:max-w-full">
                                            MAR 12, 2023 | 0 COMMENTS | POSTED BY TicketVerse
                                        </div>
                                        <div className="text-black text-xl font-medium mt-5 max-md:max-w-full">
                                            Things to do while attending a Music Festival
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                                <div className="flex grow flex-col items-stretch w-full pb-4 border-2 border-solid border-black border-opacity-10 max-md:max-w-full max-md:mt-6">
                                    <img
                                        loading="lazy"
                                        srcSet={slide2} alt='slidde'
                                        className="aspect-[1.47] object-contain object-center w-full overflow-hidden max-md:max-w-full"
                                    />
                                    <div className="flex flex-col items-stretch mt-3 pl-3.5 pr-16 max-md:max-w-full max-md:pr-5">
                                        <div className="text-black text-base font-[275] max-md:max-w-full">
                                            MAR 10, 2023 | 0 COMMENTS | POSTED BY TicketVerse
                                        </div>
                                        <div className="text-black text-xl font-medium mt-5 max-md:max-w-full">
                                            15 Great Ideas for Additional Music Festival Activities
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                                <div className="flex grow flex-col items-stretch w-full pb-3 border-2 border-solid border-black border-opacity-10 max-md:max-w-full max-md:mt-6">
                                    <img
                                        loading="lazy"
                                        srcSet={slide3} alt='slidde'
                                        className="aspect-[1.48] object-contain object-center w-full overflow-hidden max-md:max-w-full"
                                    />
                                    <div className="flex flex-col items-stretch mt-3 pl-3.5 pr-20 max-md:max-w-full max-md:pr-5">
                                        <div className="text-black text-base font-[275] max-md:max-w-full">
                                            MAR 10, 2023 | 0 COMMENTS | POSTED BY TicketVerse
                                        </div>
                                        <div className="text-black text-xl font-medium mt-5 max-md:max-w-full">
                                        Venue Floor Plans May Put Events at Risk
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/44f564d3c72d74a365f348493f9483ed99c8fe8b98161f09f8288ffdd4f17ae9?" alt='img'
                            className="aspect-[1944] object-contain object-center w-full stroke-[1px] stroke-black stroke-opacity-10 overflow-hidden max-md:max-w-full"
                        />
                        <div className="self-center w-full max-w-[1450px] mt-28 max-md:max-w-full max-md:mt-10">
                            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0">
                                    <div className="flex flex-col items-stretch mt-3 px-5 max-md:max-w-full max-md:mt-10">
                                        <div className="text-black text-3xl font-semibold max-md:max-w-full">
                                            SUBSCRIBE TO OUR NEWSLETTER
                                        </div>
                                        <div className="text-black text-opacity-30 text-sm font-light mt-9 max-md:max-w-full max-md:mt-10">
                                            Join our mailing list for the latest product updates!
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0">
                                    <div className="grow max-md:max-w-full max-md:mt-10">
                                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                            <div className="flex flex-col items-stretch w-[74%] max-md:w-full max-md:ml-0">
                                                <input className="text-black text-base font-[275] whitespace-nowrap border grow justify-center w-full pl-5 pr-16 pt-5 pb-5 rounded-lg border-solid border-black border-opacity-10 items-start max-md:max-w-full max-md:mt-2 max-md:px-5" type='text' placeholder='Email Address' />
                                            </div>
                                            <div className="flex flex-col items-stretch w-[26%] max-md:w-full max-md:ml-0">
                                                <button className="text-white text-xl font-[] whitespace-nowrap bg-black grow justify-center items-stretch w-full my-auto px-5 py-5 rounded-lg max-md:mt-3.5 max-md:px-5">
                                                    Subscribe
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
