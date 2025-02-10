import React, { useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import KnowledgeData from './api/knowledge.json'
import { Home } from 'lucide-react';

const KnowledgeDetails = () => {
    const { slug } = useParams();
    const location = useLocation();
    const knowledge = KnowledgeData.find((post) => post.slug === slug); // Find the blog post
    
    function getRandomCards(data, count = 3) {
        const filteredData = data.filter((item) => item.slug !== slug); // Exclude the current post
        const shuffled = [...filteredData].sort(() => 0.5 - Math.random()); // Shuffle the array
        return shuffled.slice(0, count); // Pick the first 'count' elements
    }
    const selectedCards = getRandomCards(KnowledgeData, 3);

    if (!knowledge) {
        return <p>BLog not found</p>; // Handle invalid slug case
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className=' flex justify-center ' >
            <div className="container flex flex-col gap-4 md:gap-6 items-center justify-center py-7 md:py-10 ">
                <div className=" w-full lg:w-[70%] text-black px-3 flex gap-4 md:gap-6 flex-col justify-center items-start md:items-center ">
                    {/* home and knowledge icons */}
                    <div className=' flex justify-center items-center text-[#979591] '>
                        <Link to='/' >
                            <Home className=' hover:cursor-pointer hover:text-black ' size={22} />
                        </Link>
                    </div>
                    {/* heading */}
                    <h1 className=' md:text-center text-3xl md:text-4xl text-balance font-semibold ' >{knowledge.title}</h1>
                    {/* description */}
                    <p className=' md:text-center text-base text-balance text-gray-800 ' >{knowledge.description}</p>
                    {/* publish and author name */}
                    <div className=' flex flex-col md:flex-row gap-2 md:gap-5 md:text-center text-[14px] text-balance text-gray-400 '>
                        <p>Published on {knowledge.publishedDate}</p>
                        <p>By the {knowledge.author}</p>
                    </div>
                    {/* image */}
                    <img className=' w-full rounded-3xl border border-gray-300 ' src={knowledge.image} alt={knowledge.title} />
                    {/* line */}
                    <div className=" w-full h-[1px] bg-gray-300 "></div>
                    {/* content */}
                    <div className=" flex flex-col gap-4 ">
                        {knowledge.content.map((paragraph, index) => (
                            <p key={index} >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
                {/* line */}
                <div className=" w-full h-[1px] bg-gray-300 "></div>
                {/* More knowledge */}
                <div className="">
                    <h2 className=' text-center text-balance text-3xl font-medium ' >More from the TLT knowledge:</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 pt-6 md:px-6">
                        {selectedCards.map((data, index) => (
                            <Link key={index} to={`/knowledge/${data.slug}`} className="bg-kCardBg transition-all transform hover:scale-101 hover:cursor-pointer text-black flex flex-col gap-4 p-5 rounded-2xl shadow-lg border border-kBorderClr">
                                <div className=" border border-kBorderClr rounded flex justify-center items-center">
                                    <img className='rounded w-full h-56 object-cover' src={data.image} alt={data.title} />
                                </div>
                                <div className="flex items-start gap-3">
                                    <img className="w-6 h-10" src={data.icon} alt="icon" />
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-lg font-semibold">{data.title}</h3>
                                        <p className="text-kTxtClr text-ellipsis line-clamp-3">{data.description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KnowledgeDetails
