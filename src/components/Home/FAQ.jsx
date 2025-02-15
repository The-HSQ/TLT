import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { ArrowRight, Box, ChevronDown } from 'lucide-react';

const faqItems = [
    {
        title: "Brand Voice",
        content: "Ensure every AI-generated output aligns with your brand’s unique tone, style, and personality. Customize Timeless Tails (TLT) to maintain consistency effortlessly.",
        image: "./faq/sample.jpg",
    },
    {
        title: "Style Guide",
        content: "Define, store, and apply your brand’s style guide seamlessly across all content. Keep messaging uniform, professional, and on-brand every time.",
        image: "./faq/sample_1.jpg",
    },
    {
        title: "Timeless Tails (TLT) Chat",
        content: "Engage in real-time conversations with Timeless Tails (TLT) AI to generate high-quality content in seconds. Brainstorm ideas, draft copy, and refine text with ease.",
        image: "./faq/sample_2.jpg",
    },
    {
        title: "AI Image Suite",
        content: "Create, edit, and enhance images effortlessly with AI-powered tools. Generate high-quality visuals at scale in just a few clicks.",
        image: "./faq/sample_3.jpg",
    },
    {
        title: "AI Guide Suite",
        content: "Access AI-powered guides to streamline content creation and editing. Maintain brand consistency while producing high-quality, engaging content.",
        image: "./faq/sample_4.jpg",
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (activeIndex < faqItems.length - 1) {
            const interval = setInterval(() => {
                setActiveIndex(prevIndex => prevIndex + 1);
            }, 5000);

            return () => clearInterval(interval);
        } else {
            setTimeout(() => {
                setActiveIndex(0);
            }, 5000);
        }
    }, [activeIndex]);

    return (
        <div className=" bg-white mt-10 text-black w-full flex flex-col pb-20 px-[1rem] md:px-[2rem] lg:px-[2.5rem] overflow-hidden justify-center items-center ">
            <div className="flex justify-center items-center gap-2 px-4 py-1 border-b border-gray-400 mb-4 mx-auto">
                <Box strokeWidth={1.5} size={19} />
                <h1>FAQ's</h1>
            </div>

            {/* Desktop */}
            {/* <div className=" hidden bg-gray-200 border border-gray-300 container text-black rounded md:flex "> */}
            <div className=" hidden bg-gray-200 border border-gray-300 custom-container text-black rounded md:flex ">
                {/* Left: FAQ List */}
                <div className=" w-[40%] lg:w-[50%] flex flex-col justify-center items-center ">
                    {faqItems.map((item, index) => (
                        <motion.div
                            onClick={() => setActiveIndex(index)}
                            key={index}
                            className={` w-full border-b border-gray-400 cursor-pointer last:rounded-bl ${activeIndex === index + 1 ? ' rounded-br-xl ' : ''} ${activeIndex === index - 1 ? ' border-t rounded-tr-xl ' : ''} ${activeIndex === index ? ' border-none bg-gray-200 ' : ' bg-white '} ${index === 0 ? ' rounded-tl ' : ''} ${index === 3 ? ' rounded-bl ' : ''} `}
                        >
                            <div className="p-5 flex justify-between items-center">
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                {activeIndex === index ? "" : <span className=' px-1 rounded bg-gray-200 border flex justify-center items-center ' > <ChevronDown /> </span>}
                            </div>

                            {
                                activeIndex === index ?
                                    <div className="px-5 pb-4 text-gray-600">
                                        {item.content}
                                    </div> : ''
                            }
                            {
                                activeIndex === index ?
                                    <motion.div
                                        className="h-1 bg-blue-500 rounded-full"
                                        initial={{ width: "0%" }}
                                        animate={{ width: "98%" }}
                                        transition={{ duration: 5, ease: "easeInOut" }}
                                    /> : ''

                            }
                        </motion.div>
                    ))}
                </div>

                {/* Right: Image Preview */}
                <div className="w-[60%] lg:w-[50%] px-6 relative overflow-hidden py-8 flex justify-center items-center">
                    <motion.img
                        key={faqItems[activeIndex].image}
                        src={faqItems[activeIndex].image}
                        alt={faqItems[activeIndex].title}
                        className="w-full z-10 border-3 border-white max-w-sm rounded-lg shadow-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>

            {/* Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-6 max-w-6xl mx-auto">
                {faqItems.map((item, index) => (
                    <div key={index} className="bg-white border border-gray-400 rounded-lg shadow-lg">
                        <div className=" flex justify-center items-center p-4 rounded-t-lg bg-gray-300 ">
                            <img src={item.image} alt={item.title} className=" object-center w-2xs h-56 border-2 border-white rounded-md " />
                        </div>

                        <div className=" p-4 ">
                            <h3 className=" text-xl text-black font-semibold ">{item.title}</h3>
                            <p className="text-gray-600 text-ellipsis line-clamp-3 mt-2">{item.content}</p>
                            <a href={item.link} className=" flex justify-start items-center text-blue-500 mt-4 font-medium gap-2 ">
                                Explore {item.title} <ArrowRight strokeWidth={3} size={22} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQ
