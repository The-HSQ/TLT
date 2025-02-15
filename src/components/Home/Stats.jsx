import { ArrowRight, Box } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import customerStories from '../api/stats.json';

const Stats = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    const location = useLocation();
    const stat = location.pathname === '/stats'

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 < customerStories.length ? prevIndex + 1 : 0
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : customerStories.length - 1
        );
    };

    return (
        <div className=" flex bg-white text-black flex-col justify-center items-center px-[1rem] md:px-[2rem] lg:px-[2.5rem] py-6 mt-4 ">
            {stat ? '' :
                <div className="flex justify-center items-center gap-2 py-1 border-b border-gray-400 mb-4 mx-auto">
                    <Box strokeWidth={1.5} size={19} />
                    <h1>Stats / Achievements</h1>
                </div>
            }
            {/* <div className=" container flex flex-col items-center justify-center px-2 md:px-0 "> */}
            <div className=" custom-container flex flex-col items-center justify-center ">
                {/* Heading */}
                <div className=" w-full text-center md:text-start flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 ">
                    <div className=" w-[100%] flex justify-center md:justify-start ">
                        <h2 className=" text-3xl md:text-4xl lg:text-5xl font-semibold">Real marketers, surreal results</h2>
                    </div>
                    <div className=" w-[100%] flex flex-col justify-center items-center md:items-start ">
                        <p className=" md:mt-4 text-gray-800">Thrive alongside other members of the 125k+ strong Jasper community.</p>
                        <Link to='/stats' className=" cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-0.5 mt-3 px-6 py-2 border text-black rounded-lg">Explore Customer Stories</Link>
                    </div>
                </div>

                {/* Cards Desktop */}
                <div className=" hidden sm:grid text-black mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {customerStories.map((story) => (
                        <Link to={`/stats/${story.slug}`} key={story.id} className={` group flex justify-between items-center gap-4 transition-all duration-400 ${story && story.hoverColor} relative border p-4 border-gray-300 hover:cursor-pointer rounded-lg shadow-sm ${story.color} ${story.size === 'large' ? 'col-span-2' : 'col-span-1'}`}>
                            {/* Left */}
                            {story.quote && (
                                <div className=" relative flex h-full w-[35%] ">
                                    <div className=" w-full h-full overflow-hidden ">
                                        <img src={story.image} alt={story.name} className="w-full h-54 transition-all duration-400 group-hover:scale-105 object-cover mr-3" />
                                    </div>
                                    <div className=' absolute bottom-0 left-0 p-2 bg-gradient-to-t from-black to-black/5    w-full h-auto ' >
                                        <p className=" text-base text-white">{story.name}</p>
                                        <p className="text-white text-base ">{story.title}</p>
                                    </div>
                                </div>
                            )}
                            {/* Right */}
                            <div className=" flex flex-col justify-between w-[65%] h-full ">
                                <div className="">
                                    {story.quote && <p className="italic text-xl ">"{story.quote}"</p>}
                                    {story.stat && <h3 className="text-5xl font-medium">{story.stat}</h3>}
                                    {story.desc && <p className="mt-2 text-gray-700 text-ellipsis line-clamp-2 ">{story.desc}</p>}
                                </div>

                                <div className=" w-full ">
                                    {story.company && <p className="mt-4 w-full font-semibold">{story.company}</p>}
                                    {!story.quote &&
                                        <button className="cursor-pointer absolute bottom-5 right-5">
                                            <ArrowRight size={26} className=" transition-transform duration-300 group-hover:scale-125" />
                                        </button>}
                                </div>
                            </div>
                        </Link>
                    ))
                    }
                </div>

                {/* Cards Mobile */}
                <div className=" block sm:hidden relative w-full overflow-hidden mt-4 text-black">
                    <div
                        ref={carouselRef}
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {customerStories.map((story) => (
                            <div
                                key={story.id}
                                className={`min-w-[100%] border-y border-gray-400 p-6 rounded-lg shadow-sm ${story.color}`}
                            >
                                {story.stat && <h3 className="text-3xl font-bold">{story.stat}</h3>}
                                {story.desc && <p className="mt-2 text-gray-700">{story.desc}</p>}
                                {story.company && <p className="mt-4 font-semibold">{story.company}</p>}
                                {story.quote && (
                                    <div className="mt-4">
                                        <p className="italic">"{story.quote}"</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 h-full bg-transparent text-black p-2 "
                    >
                        ❮
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 h-full bg-transparent text-black p-2 "
                    >
                        ❯
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Stats
