// import React, { useState, useEffect, useRef } from "react";
// import { ArrowLeft, ArrowRight, Box, List } from 'lucide-react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import cardr from "react-slick";
// import { Link } from "react-router-dom";
// import usageData from './../components/api/usage.json';

// const Usage = () => {
//     const cardrRef = useRef(null);
//     const cardrMobRef = useRef(null);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [cardsToShow, setcardsToShow] = useState(3);
//     const [screenWidth, setScreenWidth] = useState(window.innerWidth);

//     useEffect(() => {
//         const updateScreenWidth = () => {
//             setScreenWidth(window.innerWidth);
//         };

//         window.addEventListener("resize", updateScreenWidth);
//         return () => {
//             window.removeEventListener("resize", updateScreenWidth);
//         };
//     }, []);

//     useEffect(() => {
//         if (screenWidth < 580) {
//             setcardsToShow(1);
//         } else if (screenWidth < 1024) {
//             setcardsToShow(2);
//         } else {
//             setcardsToShow(3);
//         }
//     }, [screenWidth]);

//     useEffect(() => {
//         setCurrentIndex(0);
//         if (cardrRef.current) {
//             cardrRef.current.slickGoTo(0);
//         }
//         if (cardrMobRef.current) {
//             cardrMobRef.current.slickGoTo(0);
//         }
//     }, [cardsToShow]);

//     const settings = {
//         speed: 500,
//         cardsToShow,
//         cardsToScroll: 1,
//         arrows: false,
//         afterChange: (index) => setCurrentIndex(index),
//         responsive: [
//             { breakpoint: 1024, settings: { cardsToShow: 2, cardsToScroll: 1 } },
//             { breakpoint: 580, settings: { cardsToShow: 1, cardsToScroll: 1 } }
//         ]
//     };

//     const isFirstcard = currentIndex === 0;
//     const isLastcard = currentIndex >= usageData.length - cardsToShow;

//     return (
//         <div className=" bg-white mt-10 text-black flex flex-col justify-center items-center px-[1rem] md:px-[2rem] lg:px-[2.5rem] sm:py-6 ">
//             {/* <div className=" container flex flex-col justify-center "> */}
//             <div className=" custom-container flex flex-col justify-center ">
//                 {/* Header Section */}
//                 <div className="flex justify-center items-center gap-2 px-2 py-1 border-b border-gray-400 mb-4 mx-auto">
//                     <Box strokeWidth={1.5} size={19} />
//                     <h1>Usage</h1>
//                 </div>

//                 {/* Description and Controls */}
//                 <div className="w-full px-0 flex flex-col justify-center items-center text-center lg:flex-row lg:text-start lg:items-start gap-6 lg:gap-10 mx-auto">
//                     <div className="w-full sm:w-[50%]">
//                         <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold ">
//                             AI Apps for every marketer, across every function
//                         </h2>
//                     </div>
//                     <div className="w-full sm:w-[50%]">
//                         <p className="text-sm sm:text-base text-STxtClr">
//                             Timeless Tails (TLT) delivers the biggest library of AI Marketing Apps, with 90+ out-of-the-box Apps spanning every marketing function, and connected to marketing KPIs. Our purpose-built apps guide every marketer to success, right out of the gate.
//                         </p>
//                         <div className=" relative flex flex-col lg:flex-row gap-3 items-center justify-between mt-6">
//                             <Link to='/usage' className="px-4 py-2 bg-btn cursor-pointer hover:translate-y-0.5 transition-all duration-300 ease-in-out text-white rounded-lg">View All</Link>
//                             <div className=" hidden md:flex gap-2">
//                                 <button
//                                     className={`p-2 text-black bg-gray-200 rounded-full ${isFirstcard ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
//                                     onClick={() => cardrRef.current.slickPrev()}
//                                     disabled={isFirstcard}
//                                 >
//                                     <ArrowLeft size={20} />
//                                 </button>
//                                 <button
//                                     className={`p-2 text-black bg-gray-200 rounded-full ${isLastcard ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
//                                     onClick={() => cardrRef.current.slickNext()}
//                                     disabled={isLastcard}
//                                 >
//                                     <ArrowRight size={20} />
//                                 </button>
//                             </div>
//                             <div className=" md:hidden flex gap-2">
//                                 <button
//                                     className={`p-2 text-black bg-gray-200 rounded-full ${isFirstcard ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
//                                     onClick={() => cardrMobRef.current.slickPrev()}
//                                     disabled={isFirstcard}
//                                 >
//                                     <ArrowLeft size={20} />
//                                 </button>
//                                 <button
//                                     className={`p-2 text-black bg-gray-200 rounded-full ${isLastcard ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
//                                     onClick={() => cardrMobRef.current.slickNext()}
//                                     disabled={isLastcard}
//                                 >
//                                     <ArrowRight size={20} />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                     {/* App Cards Carousel */}
//                 </div>
//                 <div className=" hidden md:block h-auto w-full overflow-hidden mt-4 ">
//                     <cardr ref={cardrRef} {...settings}>
//                         {usageData.map((app, index) => (
//                             <Link
//                                 to={`/usage/${app.slug}`}
//                                 key={index}
//                                 className=" group border border-gray-100 hover:cursor-pointer p-5 relative bg-[#F9F9F9] rounded-xl flex-shrink-0 flex flex-col items-stretch "
//                             >
//                                 <div className=" mb-3 flex justify-between items-center ">
//                                     <span className=" flex bg-[#D3E5F0] text-black px-2 py-2 rounded-full"><List strokeWidth={1.5} size={30} /></span>
//                                     <div className=" flex gap-2 justify-center items-center ">
//                                         <span className=" bg-[#C1F1BA] text-[#005930] text-sm font-medium px-2 py-1 rounded-md">NEW</span>
//                                         <span className=" bg-[#E9DAFF] text-[#5816B8] text-sm font-medium px-2 py-1 rounded-md">POPULAR</span>
//                                     </div>
//                                 </div>
//                                 <h3 className="text-xl font-semibold text-gray-800">{app.title}</h3>
//                                 <p className="text-gray-600 mt-1 text-ellipsis line-clamp-2">{app.description}</p>
//                                 <button className="mt-4 relative text-gray-800 font-medium text-sm flex justify-center items-center gap-2 hover:cursor-pointer ">
//                                     Use This App
//                                     <ArrowRight strokeWidth={1.9} size={19} className="transition-transform duration-400 group-hover:translate-x-2" />
//                                     <span className="absolute -bottom-0.5 left-0 w-[80%] h-[1px] group-hover:bg-gray-400 transition-all duration-400 group-hover:w-full"></span>
//                                 </button>
//                             </Link>
//                         ))}
//                     </cardr>
//                 </div>
//             </div>

//             {/* Mob App Cards Carousel */}
//             <div className=" block md:hidden h-auto w-full overflow-hidden mt-4 ">
//                 <cardr ref={cardrMobRef} {...settings}>
//                     {usageData.map((app, index) => (
//                         <Link
//                             to={`/usage/${app.slug}`}
//                             key={index}
//                             className=" group border border-gray-100 hover:cursor-pointer w-64 p-6 relative bg-[#F9F9F9] rounded-xl flex-shrink-0 flex flex-col items-stretch "
//                         >
//                             <div className=" mb-3 flex justify-between items-center ">
//                                 <span className=" flex bg-[#D3E5F0] text-black px-2 py-2 rounded-full"><List strokeWidth={1.5} size={30} /></span>
//                                 <div className=" flex gap-2 justify-center items-center ">
//                                     <span className=" bg-[#C1F1BA] text-[#005930] text-sm font-medium px-2 py-1 rounded-md">NEW</span>
//                                     <span className=" bg-[#E9DAFF] text-[#5816B8] text-sm font-medium px-2 py-1 rounded-md">POPULAR</span>
//                                 </div>
//                             </div>
//                             <h3 className="text-xl font-semibold text-gray-800">{app.title}</h3>
//                             <p className="text-gray-600 mt-1 text-ellipsis line-clamp-2">{app.description}</p>
//                             <button className="mt-4 relative text-gray-800 font-medium text-sm flex justify-center items-center gap-2 hover:cursor-pointer ">
//                                 Use This App
//                                 <ArrowRight strokeWidth={1.9} size={19} className="transition-transform duration-400 group-hover:translate-x-2" />
//                                 <span className="absolute -bottom-0.5 left-0 w-[80%] h-[1px] group-hover:bg-gray-400 transition-all duration-400 group-hover:w-full"></span>
//                             </button>
//                         </Link>
//                     ))}
//                 </cardr>
//             </div>
//         </div>
//     );
// };

// export default Usage;

import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Box, List } from 'lucide-react';
import { Link } from "react-router-dom";
import usageData from './../components/api/usage.json';

const Usage = () => {
    const scrollRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(360);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

   
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setCardWidth(260);
            else if (window.innerWidth < 1024) setCardWidth(360);
            
            if (scrollRef.current) {
                scrollRef.current.scrollLeft = 0;
                setShowLeft(false);
                setShowRight(true);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.style.overflowX = "hidden";
        }
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            current.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
            setTimeout(() => {
                setShowLeft(current.scrollLeft > 0);
                setShowRight(current.scrollLeft + current.clientWidth < current.scrollWidth);
            }, 300);
        }
    };

    return (
        <div className=" bg-white mt-10 text-black flex flex-col justify-center items-center px-[1rem] md:px-[2rem] lg:px-[2.5rem] sm:py-6 ">
            {/* <div className=" container flex flex-col justify-center "> */}
            <div className=" custom-container flex flex-col justify-center ">
                {/* Header Section */}
                <div className="flex justify-center items-center gap-2 px-2 py-1 border-b border-gray-400 mb-4 mx-auto">
                    <Box strokeWidth={1.5} size={19} />
                    <h1>Usage</h1>
                </div>

                {/* Description and Controls */}
                <div className="w-full px-0 flex flex-col justify-center items-center text-center lg:flex-row lg:text-start lg:items-start gap-6 lg:gap-10 mx-auto">
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
                            <Link to='/usage' className="px-4 py-2 bg-btn cursor-pointer hover:translate-y-0.5 transition-all duration-300 ease-in-out text-white rounded-lg">View All</Link>
                            <div className=" flex gap-2 ">
                                <button
                                    className={`p-2 text-black bg-gray-200 rounded-full ${showLeft == 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
                                    onClick={() => scroll("left")}
                                    disabled={showLeft == 0}
                                >
                                    <ArrowLeft size={20} />
                                </button>

                                <button
                                    className={`p-2 text-black bg-gray-200 rounded-full ${showRight == 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer opacity-100'}`}
                                    onClick={() => scroll("right")}
                                    disabled={showRight == 0}
                                >
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* App Cards Carousel */}
                <div className="relative mt-4 w-full mx-auto overflow-hidden">
                    <div
                        ref={scrollRef}
                        className="flex gap-2 sm:gap-4 "
                        style={{ scrollBehavior: "smooth" }}
                    >
                        {usageData.map((app, index) => (
                            <Link
                                to={`/usage/${app.slug}`}
                                key={index}
                                className={` ${"min-w-["+ cardWidth+"px]"} group border border-gray-100 hover:cursor-pointer p-5 relative bg-[#F9F9F9] rounded-xl `}
                            >
                                <div className=" mb-3 w-full flex justify-between items-center ">
                                    <span className=" flex bg-[#D3E5F0] text-black px-2 py-2 rounded-full"><List strokeWidth={1.5} size={30} /></span>
                                    <div className=" flex gap-2 justify-center items-center ">
                                        <span className=" bg-[#C1F1BA] text-[#005930] text-sm font-medium px-2 py-1 rounded-md">NEW</span>
                                        <span className=" bg-[#E9DAFF] text-[#5816B8] text-sm font-medium px-2 py-1 rounded-md">POPULAR</span>
                                    </div>
                                </div>
                                <h3 className="text-xl w-full font-semibold text-gray-800">{app.title}</h3>
                                <p className="text-gray-600 w-full mt-1 text-ellipsis line-clamp-2">{app.description}</p>
                                <button className="mt-4 w-fit relative text-gray-800 font-medium text-sm flex justify-center items-center gap-2 hover:cursor-pointer ">
                                    Use This App
                                    <ArrowRight strokeWidth={1.9} size={19} className="transition-transform duration-400 group-hover:translate-x-2" />
                                    <span className="absolute -bottom-0.5 left-0 w-[80%] h-[1px] group-hover:bg-gray-400 transition-all duration-400 group-hover:w-full"></span>
                                </button>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Usage;




