import React, { useEffect, useState } from 'react'
import useAxiosAuth from '../../../utils/useAxiosAuth'

const faqDatas = [
    {
        question: 'What’s the difference between the Free plan and the Unlimited plan?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.',
    },
    {
        question: 'Do you offer live support?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.',
    },
    {
        question: 'Can I suggest new features?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.',
    },
    {
        question: 'Is my data secure? Are my clients protected?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.',
    },
    {
        question: 'In which countries can I use Fiverr Workspace?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.',
    },
    {
        question: 'What’s the difference between the Free plan and the Unlimited plan?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.',
    },
    {
        question: 'Which currencies does Fiverr Workspace support?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.',
    },
    {
        question: 'When will I be billed?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus impedit totam nulla, dolorum numquam recusandae facere modi mollitia? Eveniet sunt quas voluptas iure facere nesciunt dolor corporis illum voluptate.',
    }
]



const FAQ = () => {
   
    return (
        <div className='self-center items-center justify-center max-sm:w-96 mt-8'>
        {faqDatas.map((faq, index) => (
            <div key={index} className="justify-between items-stretch self-center flex w-full max-w-[1115px] gap-5 px-5 py-7 border-b-zinc-300 border-b border-solid max-md:flex-wrap max-md:mt-10">
                <div className="relative w-full overflow-hidden pb-3">
                    <input
                        className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                        type="checkbox"
                    />
                    <div className="w-full flex items-center">
                        <h1 className="text-lg font-semibold text-[#404145] max-sm:text-sm max-sm:w-72 max-sm:text-[18px]">
                            {faq.question}
                        </h1>
                    </div>
                    <div className="max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40 max-sm:text-sm">
                        <div className="text-[#404145] p-4">
                            {faq.answer}
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
    
    )
}

export default FAQ
