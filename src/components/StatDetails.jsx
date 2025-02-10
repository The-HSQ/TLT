import React, { useEffect } from 'react'
import { ArrowRight, ChevronRight, Home } from 'lucide-react';
import { Link, useLocation, useParams } from 'react-router-dom';
import customerStories from './api/stats.json';

const StatDetails = () => {
    const { slug } = useParams();
    const location = useLocation();
    const stats = customerStories.find((post) => post.slug === slug); // Find the stats post

    function getRandomCards(data, count = 3) {
        const filteredData = data.filter((item) => item.slug !== slug); // Exclude the current post
        const shuffled = [...filteredData].sort(() => 0.5 - Math.random()); // Shuffle the array
        return shuffled.slice(0, count); // Pick the first 'count' elements
    }
    const selectedCards = getRandomCards(customerStories, 3);

    if (!stats) {
        return <p>stats not found</p>; // Handle invalid slug case
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className=' flex justify-center items-center gap-4 flex-col mt-10 mb-10 ' >
            <div className="container flex flex-col gap-4 md:gap-6 items-center justify-center ">
                {/* home and stats icons */}
                <div className=' flex flex-wrap gap-1 md:gap-3 justify-center items-center text-[#979591] '>
                    <Link to='/' >
                        <Home className=' hover:cursor-pointer hover:text-black ' size={22} />
                    </Link>

                    <ChevronRight size={20} />

                    <Link to='/stats' >
                        <span className=' text-[13px] hover:cursor-pointer hover:text-black '>Customer Stories</span>
                    </Link>

                    <ChevronRight size={20} />

                    <button>
                        <span className=' text-[13px] hover:cursor-pointer text-black '>{stats.company}</span>
                    </button>
                </div>
                <div className="container px-4 flex flex-col gap-4 md:gap-6 items-center justify-center ">
                    <div className=" bg-gray-300 rounded-xl p-3 flex gap-4 flex-col md:flex-row ">
                        <p className=' w-full md:w-[80%] text-4xl ' >"{stats.comment}"</p>
                        <div className=" w-full md:w-[20%] flex flex-row md:flex-col justify-start mt-4 ">
                            <img src={stats.image} alt={stats.name} className="w-12 h-12 object-cover rounded-full mr-3" />
                            <div className=' flex flex-col' >
                                <p className="font-bold">{stats.name}</p>
                                <p className="text-gray-500 text-sm">{stats.company}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* line */}
                <div className=" w-full h-[1px] bg-gray-300 "></div>
                {/* More stats */}
                <div className="">
                    <h2 className=' text-center text-balance text-3xl font-medium ' >More from the TLT stats:</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 pt-6 md:px-6">
                        {selectedCards.map((story) => (
                            <Link to={`/stats/${story.slug}`} key={story.id} className={` transition-all transform hover:scale-101 hover:${story.hoverColor} relative p-6 border border-gray-300 hover:cursor-pointer rounded-lg shadow-sm ${story.color} ${story.size === 'large' ? 'col-span-1' : 'col-span-1'}`}>
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
                </div>
            </div>
        </div>
    )
}

export default StatDetails
