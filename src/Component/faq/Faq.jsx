import React, { useState } from 'react';
import "./faq.css";
const Faq = () => {

    const data = [
        {
            title: "What’s the difference between the Free plan and the Unlimited plan?",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deserunt id iusto asperiores numquam eligendi, quo sunt aperiam perferendis voluptas veritatis! Accusamus, impedit excepturi corrupti debitis saepe odio sit. Est."
        },
        {
            title: "Do you offer live support?",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deserunt id iusto asperiores numquam eligendi, quo sunt aperiam perferendis voluptas veritatis! Accusamus, impedit excepturi corrupti debitis saepe odio sit. Est."
        },
        {
            title: "Can I suggest new features?",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deserunt id iusto asperiores numquam eligendi, quo sunt aperiam perferendis voluptas veritatis! Accusamus, impedit excepturi corrupti debitis saepe odio sit. Est."
        },
        {
            title: "Is my data secure? Are my clients protected?",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deserunt id iusto asperiores numquam eligendi, quo sunt aperiam perferendis voluptas veritatis! Accusamus, impedit excepturi corrupti debitis saepe odio sit. Est."
        },
        {
            title: "What is your refund policy?",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deserunt id iusto asperiores numquam eligendi, quo sunt aperiam perferendis voluptas veritatis! Accusamus, impedit excepturi corrupti debitis saepe odio sit. Est."
        },
        {
            title: "In which countries can I use Fiverr Workspace?",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deserunt id iusto asperiores numquam eligendi, quo sunt aperiam perferendis voluptas veritatis! Accusamus, impedit excepturi corrupti debitis saepe odio sit. Est."
        },
        {
            title: "Which currencies does Fiverr Workspace support?",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deserunt id iusto asperiores numquam eligendi, quo sunt aperiam perferendis voluptas veritatis! Accusamus, impedit excepturi corrupti debitis saepe odio sit. Est."
        },
        {
            title: "When will I be billed?",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deserunt id iusto asperiores numquam eligendi, quo sunt aperiam perferendis voluptas veritatis! Accusamus, impedit excepturi corrupti debitis saepe odio sit. Est."
        }

    ]
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return (
        <div className='wrapper'>
            <div className='faqtop'>
                <p>FAQ</p>
                <h2>Common questions</h2>
            </div>
            <div className='accordion'>
                {data.map((item, i) => (
                    <div className='wrapperitem'>
                        <div className='itemtitle' onClick={() => toggle(i)}>
                            <h2>{item.title}</h2>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={selected === i ? 'itemcontent show' : 'itemcontent'}>{item.content}</div>
                    </div>
                ))}
            </div>
            <div className='bottom'>.</div>
            <div className='faqdown'>
                <h4>I’ve got more questions!,</h4>
                <p>
                        We can’t wait to hear them.
                        <span>Chat with us</span>
                        or<span>drop us a message</span>
                        any time.
                </p>
            </div>
        </div>
    )
}

export default Faq
