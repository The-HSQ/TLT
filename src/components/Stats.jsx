import { ArrowRight, Box } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import customerStories from './api/stats.json';

const Stats = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    const location = useLocation();
    const stat = location.pathname === '/stats'
    console.log(location.pathname)

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
        <div className=" flex bg-white text-black flex-col justify-center items-center py-6 mt-4 ">
            {stat ? '' :
                <div className="flex justify-center items-center gap-2 px-4 py-1 border-b border-gray-400 mb-4 mx-auto">
                    <Box strokeWidth={1.5} size={19} />
                    <h1>Stats / Achievements</h1>
                </div>
            }
            <div className=" container flex flex-col items-center justify-center px-2 md:px-0 ">
                {/* Heading */}
                <div className=" w-full text-center md:text-start flex flex-col md:flex-row justify-center items-center gap-2 ">
                    <div className=" w-[100%] md:w-[50%] flex justify-center ">
                        <h2 className=" text-3xl md:text-4xl lg:text-5xl font-semibold">Real marketers, surreal results</h2>
                    </div>
                    <div className=" w-[100%] md:w-[50%] flex flex-col justify-center items-center md:items-start ">
                        <p className="mt-4 text-gray-800">Thrive alongside other members of the 125k+ strong Jasper community.</p>
                        <Link to='/stats' className=" cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-0.5 mt-3 px-6 py-2 border text-black rounded-lg">Explore Customer Stories</Link>
                    </div>
                </div>

                {/* Cards Desktop */}
                <div className=" hidden sm:grid text-black mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {customerStories.map((story) => (
                        <Link to={`/stats/${story.slug}`} key={story.id} className={` transition-all transform hover:scale-101 hover:${story.hoverColor} relative p-6 border border-gray-300 hover:cursor-pointer rounded-lg shadow-sm ${story.color} ${story.size === 'large' ? 'col-span-2' : 'col-span-1'}`}>
                            {story.stat && <h3 className="text-3xl font-bold">{story.stat}</h3>}
                            {story.desc && <p className="mt-2 text-gray-700">{story.desc}</p>}
                            {story.company && <p className="mt-4 font-semibold">{story.company}</p>}
                            {story.quote && (
                                <div className="mt-4">
                                    <p className="italic">"{story.quote}"</p>
                                    <div className="flex items-center mt-4">
                                        <img src={story.image} alt={story.name} className="w-12 h-12 object-cover rounded-full mr-3" />
                                        <div>
                                            <p className="font-bold">{story.name}</p>
                                            <p className="text-gray-500 text-sm">{story.title}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <button className=' cursor-pointer absolute bottom-5 right-5 ' >
                                <ArrowRight />
                            </button>
                        </Link>
                    ))}
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
