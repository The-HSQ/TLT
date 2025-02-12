import { ArrowRight, ChevronRight, Home, List } from 'lucide-react'
import React, { useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import usageData from './api/usage.json'

const UsageDetails = () => {
    const { slug } = useParams();
    const location = useLocation();
    const usage = usageData.find((post) => post.slug === slug); // Find the usage post

    function getRandomCards(data, count = 3) {
        const filteredData = data.filter((item) => item.slug !== slug); // Exclude the current post
        const shuffled = [...filteredData].sort(() => 0.5 - Math.random()); // Shuffle the array
        return shuffled.slice(0, count); // Pick the first 'count' elements
    }
    const selectedCards = getRandomCards(usageData, 3);

    if (!usage) {
        return <p>usage not found</p>; // Handle invalid slug case
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className=' flex justify-center ' >
            {/* <div className="container flex flex-col gap-4 md:gap-6 items-center justify-center py-7 md:py-10 "> */}
            <div className=" custom-container flex flex-col gap-4 md:gap-6 items-center justify-center py-7 md:py-10 ">
                <div className=" w-full lg:w-[70%] text-black px-3 flex gap-4 md:gap-6 flex-col justify-center items-start md:items-center ">
                    {/* home and usage icons */}
                    <div className=' flex flex-wrap gap-3 justify-center items-center text-[#979591] '>
                        <Link to='/' >
                            <Home className=' hover:cursor-pointer hover:text-black ' size={22} />
                        </Link>

                        <ChevronRight size={20} />

                        <Link to='/usage' >
                            <span className=' text-[13px] hover:cursor-pointer hover:text-black '>Usage</span>
                        </Link>

                        <ChevronRight size={20} />

                        <Link to='/usage' >
                            <span className=' text-[13px] hover:cursor-pointer text-black '>{usage.title}</span>
                        </Link>
                    </div>
                    {/* heading */}
                    <h1 className=' md:text-center text-3xl md:text-4xl text-balance font-semibold ' >{usage.title}</h1>
                    {/* description */}
                    <p className=' md:text-center text-base text-balance text-gray-800 ' >{usage.description}</p>
                    {/* publish and author name */}
                    <div className=' flex flex-col md:flex-row gap-2 md:gap-5 md:text-center text-[14px] text-balance text-gray-400 '>
                        <p>Published on {usage.publishedDate}</p>
                        <p>By the {usage.author}</p>
                    </div>
                    {/* image */}
                    {/* <img className=' w-full rounded-3xl border border-gray-300 ' src={usage.image} alt={usage.title} /> */}
                    {/* line */}
                    <div className=" w-full h-[1px] bg-gray-300 "></div>
                    {/* content */}
                    <div className=" flex flex-col gap-4 ">
                        {usage.content.map((paragraph, index) => (
                            <p key={index} >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
                {/* line */}
                <div className=" w-full h-[1px] bg-gray-300 "></div>
                {/* More usage */}
                <div className="">
                    <h2 className=' text-center text-balance text-3xl font-medium ' >More from the TLT usage:</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 pt-6 md:px-0">
                        {selectedCards.map((app, index) => (
                            <Link
                                to={`/usage/${app.slug}`}
                                key={index}
                                className=" group border border-gray-100 hover:cursor-pointer w-full p-6 relative bg-[#F9F9F9] rounded-xl flex-shrink-0 flex flex-col items-stretch "
                            >
                                <div className=" mb-3 flex justify-between items-center ">
                                    <span className=" flex bg-[#D3E5F0] text-black px-2 py-2 rounded-full"><List strokeWidth={1.5} size={30} /></span>
                                    <div className=" flex gap-2 justify-center items-center ">
                                        <span className=" bg-[#C1F1BA] text-[#005930] text-sm font-medium px-2 py-1 rounded-md">NEW</span>
                                        <span className=" bg-[#E9DAFF] text-[#5816B8] text-sm font-medium px-2 py-1 rounded-md">POPULAR</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">{app.title}</h3>
                                <p className="text-gray-600 mt-1 text-ellipsis line-clamp-2">{app.description}</p>
                                <button className="mt-4 relative w-fit text-gray-800 font-medium text-sm flex justify-start items-center gap-2 hover:cursor-pointer ">
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
    )
}

export default UsageDetails
