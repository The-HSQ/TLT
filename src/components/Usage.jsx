import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Box } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
    const sliderRef = useRef(null);
    const sliderMobRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(4);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const updateScreenWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", updateScreenWidth);
        return () => {
            window.removeEventListener("resize", updateScreenWidth);
        };
    }, []);

    useEffect(() => {
        if (screenWidth < 540) {
            setSlidesToShow(1);
        } else if (screenWidth < 768) {
            setSlidesToShow(2);
        } else if (screenWidth < 1024) {
            setSlidesToShow(3);
        } else {
            setSlidesToShow(4);
        }
    }, [screenWidth]);

    useEffect(() => {
        setCurrentIndex(0);
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(0);
        }
        if (sliderMobRef.current) {
            sliderMobRef.current.slickGoTo(0);
        }
    }, [slidesToShow]);

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        arrows: false,
        afterChange: (index) => setCurrentIndex(index),
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 540, settings: { slidesToShow: 1, slidesToScroll: 1 } }
        ]
    };

    const isFirstSlide = currentIndex === 0;
    const isLastSlide = currentIndex >= usageData.length - slidesToShow;

    return (
        <div className=" bg-white mt-10 text-black flex flex-col justify-center items-center sm:p-6 ">
            <div className="container flex flex-col justify-center">
                {/* Header Section */}
                <div className="flex justify-center items-center gap-2 px-4 py-1 border-b border-gray-400 mb-4 mx-auto">
                    <Box strokeWidth={1.5} size={19} />
                    <h1>Usage</h1>
                </div>

                {/* Description and Controls */}
                <div className="w-full px-4 flex flex-col justify-center items-center text-center lg:flex-row lg:text-start lg:items-start gap-6 lg:gap-10 mx-auto">
                    <div className="w-full sm:w-[50%]">
                        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold ">
                            AI Apps for every marketer, across every function
                        </h2>
                    </div>
                    <div className="w-full sm:w-[50%]">
                        <p className="text-sm sm:text-base text-STxtClr">
                            Timeless Tails (TLT) delivers the biggest library of AI Marketing Apps, with 90+ out-of-the-box Apps spanning every marketing function, and connected to marketing KPIs. Our purpose-built apps guide every marketer to success, right out of the gate.
                        </p>
                        <div className=" relative flex flex-col lg:flex-row gap-3 items-center justify-between mt-6">
                            <button className="px-4 py-2 bg-btn cursor-pointer hover:translate-y-0.5 transition-all duration-300 ease-in-out text-white rounded-lg">View All</button>
                            <div className=" hidden md:flex gap-2">
                                <button
                                    className={`p-2 text-black bg-gray-200 rounded-full ${isFirstSlide ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                    onClick={() => sliderRef.current.slickPrev()}
                                    disabled={isFirstSlide}
                                >
                                    <ArrowLeft size={20} />
                                </button>
                                <button
                                    className={`p-2 text-black bg-gray-200 rounded-full ${isLastSlide ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                    onClick={() => sliderRef.current.slickNext()}
                                    disabled={isLastSlide}
                                >
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                            <div className=" md:hidden flex gap-2">
                                <button
                                    className={`p-2 text-black bg-gray-200 rounded-full ${isFirstSlide ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                    onClick={() => sliderMobRef.current.slickPrev()}
                                    disabled={isFirstSlide}
                                >
                                    <ArrowLeft size={20} />
                                </button>
                                <button
                                    className={`p-2 text-black bg-gray-200 rounded-full ${isLastSlide ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                    onClick={() => sliderMobRef.current.slickNext()}
                                    disabled={isLastSlide}
                                >
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* App Cards Carousel */}
                </div>
                <div className=" hidden md:block h-auto w-full overflow-hidden mt-4 px-2 ">
                    <Slider ref={sliderRef} {...settings}>
                        {usageData.map((app, index) => (
                            <div
                                key={index}
                                className=" group border border-gray-400 hover:cursor-pointer w-64 p-6 relative bg-[#E5E7EB] rounded-xl flex-shrink-0 mr-10 "
                            >
                                {app.popular && (
                                    <span className="absolute top-1 right-3 bg-purple-500 text-white text-xs px-2 py-1 rounded-md">POPULAR</span>
                                )}
                                <h3 className="text-lg font-semibold text-gray-800">{app.title}</h3>
                                <p className="text-gray-600 mt-2 text-ellipsis line-clamp-2">{app.description}</p>
                                <button className=" mt-4 text-blue-600 font-medium flex justify-center items-center gap-2 group-hover:underline ">Use This App <ArrowRight strokeWidth={1.5} size={19} /> </button>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* Mob App Cards Carousel */}
            <div className=" block md:hidden h-auto w-full overflow-hidden mt-4 px-2 ">
                <Slider ref={sliderMobRef} {...settings}>
                    {usageData.map((app, index) => (
                        <div
                            key={index}
                            className=" group border border-gray-400 hover:cursor-pointer w-64 p-6 relative bg-[#E5E7EB] rounded-xl flex-shrink-0 mr-10 "
                        >
                            {app.popular && (
                                <span className="absolute top-1 right-3 bg-purple-500 text-white text-xs px-2 py-1 rounded-md">POPULAR</span>
                            )}
                            <h3 className="text-lg font-semibold text-gray-800">{app.title}</h3>
                            <p className="text-gray-600 mt-2 text-ellipsis line-clamp-2">{app.description}</p>
                            <button className=" mt-4 text-blue-600 font-medium flex justify-center items-center gap-2 group-hover:underline ">Use This App <ArrowRight strokeWidth={1.5} size={19} /> </button>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Usage;




