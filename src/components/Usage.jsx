import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Box } from 'lucide-react';

const usageData = [
    {
        title: "Blog Post",
        description: "Write long-form content that provides value, drives traffic, and enhances SEO",
        popular: false,
    },
    {
        title: "Product Description",
        description: "Compose detailed descriptions that highlight the benefits and features of a product",
        popular: true,
    },
    {
        title: "Instagram Caption",
        description: "Boost engagement with captions that perfectly accompany your Instagram images",
        popular: true,
    },
    {
        title: "Landing Page",
        description: "Transform site traffic into valuable, engaging landing pages",
        popular: false,
    },
    {
        title: "Email Marketing",
        description: "Craft compelling email campaigns to boost customer engagement and conversions",
        popular: true,
    },
    {
        title: "SEO Optimization",
        description: "Enhance website visibility with AI-driven SEO strategies",
        popular: false,
    },
    {
        title: "Ad Copy Generator",
        description: "Generate high-converting ad copy for multiple platforms",
        popular: true,
    },
];

const Usage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);

    const nextSlide = () => {
        if (containerRef.current) {
            setCurrentIndex((prevIndex) => {
                const newIndex = prevIndex + 1;
                return newIndex < usageData.length - 0 ? newIndex : prevIndex; // Prevent exceeding length
            });
        }
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    };

    useEffect(() => {
        if (currentIndex < usageData.length - 1) {
            const interval = setInterval(() => {
                nextSlide();
            }, 3000);

            return () => clearInterval(interval);
        } else {
            const timeout = setTimeout(() => {
                setCurrentIndex(0);
            }, 3000);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex]);

    return (
        <div className="flex justify-center items-center sm:p-6 mb-10 bg-transparent">
            <div className="container flex flex-col justify-center">
                {/* Header Section */}
                <div className="flex justify-center items-center gap-2 px-4 py-1 border-b mb-4 mx-auto">
                    <Box strokeWidth={1.5} size={19} />
                    <h1>Usage</h1>
                </div>

                {/* Description and Controls */}
                <div className="w-full px-4 flex flex-col justify-center items-center text-center lg:flex-row lg:text-start lg:items-start gap-6 lg:gap-10 mx-auto">
                    <div className="w-full sm:w-[50%]">
                        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-white">
                            AI Apps for every marketer, across every function
                        </h2>
                    </div>
                    <div className="w-full sm:w-[50%]">
                        <p className="text-sm sm:text-base text-gray-300">
                            Timeless Tails (TLT) delivers the biggest library of AI Marketing Apps, with 90+ out-of-the-box Apps spanning every marketing function, and connected to marketing KPIs. Our purpose-built apps guide every marketer to success, right out of the gate.
                        </p>
                        <div className="flex flex-col lg:flex-row gap-3 items-center justify-between mt-6">
                            <button className="px-4 py-2 bg-btn cursor-pointer hover:bg-btnHover text-white rounded-lg">View All</button>
                            <div className="flex gap-2">
                                <button onClick={prevSlide} disabled={currentIndex === 0} className={`p-2 text-black bg-gray-200 rounded-full ${currentIndex === 0 ? ' opacity-50 cursor-not-allowed ' : ' cursor-pointer '} `}>
                                    <ArrowLeft />
                                </button>
                                <button onClick={nextSlide} disabled={currentIndex === usageData.length - 1} className={`p-2 text-black bg-gray-200 rounded-full ${currentIndex === usageData.length - 1 ? ' opacity-50 cursor-not-allowed ' : ' cursor-pointer '} `}>
                                    <ArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* App Cards Carousel */}
                <div ref={containerRef} className="overflow-hidden mt-4 p-4">
                    <div className="flex transition-transform duration-300 " style={{ transform: `translateX(-${currentIndex * 272}px)` }}>
                        {usageData.map((app, index) => (
                            <div
                                key={index}
                                className="w-64 p-6 relative bg-white rounded-xl m-2 flex-shrink-0"
                                style={{
                                    boxShadow: '0 0 10px .5px black',
                                }}>
                                {app.popular && (
                                    <span className="absolute top-1 right-3 bg-purple-500 text-white text-xs px-2 py-1 rounded-md">POPULAR</span>
                                )}
                                <h3 className="text-lg font-semibold text-gray-800">{app.title}</h3>
                                <p className="text-gray-600 mt-2 text-ellipsis line-clamp-2">{app.description}</p>
                                <button className="mt-4 text-blue-600 font-medium flex justify-center items-center gap-2 ">Use This App <ArrowRight strokeWidth={1.5} size={19} /> </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Usage;

