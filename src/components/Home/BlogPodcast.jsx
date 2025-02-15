import { ArrowRight, Box, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cards from './../api/blog.json';

const BlogPodcast = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const postsPerPage = isHomePage ? 6 : 12; // Set max posts per page
    const [currentPage, setCurrentPage] = useState(1);
    const totalPosts = cards.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    // Slice data for pagination
    const startIndex = (currentPage - 1) * postsPerPage;
    const displayedPosts = cards.slice(startIndex, startIndex + postsPerPage);

    // Pagination handlers
    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage, location.pathname]);

    return (
        <div className="flex mt-10 bg-white text-black justify-center px-[1rem] md:px-[2rem] lg:px-[2.5rem] items-center">
            {/* <div className="container"> */}
            <div className=" custom-container ">
                <div className="w-fit flex justify-center items-center gap-2 py-1 border-b border-gray-400 mx-auto">
                    <Box strokeWidth={1.5} size={19} />
                    <h1>Blog / Podcast</h1>
                </div>

                {/* Blog Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 ">
                    {displayedPosts.map((card, index) => (
                        <Link to={`/blog/${card.slug}`} key={index} className="border border-gray-300 hover:cursor-pointer group p-4 bg-white text-black rounded-2xl shadow-md transition-all transform hover:scale-101 hover:shadow-lg">
                            <img src={card.image} alt={card.title} className=" mb-4 w-full object-cover " />
                            <h2 className="text-xl font-semibold">{card.title}</h2>
                            <p className="text-gray-700 mt-2 text-sm text-ellipsis line-clamp-2">{card.description}</p>
                            <button className="mt-4 relative text-gray-800 font-medium text-sm flex justify-center items-center gap-2 hover:cursor-pointer ">
                                {card.linkText}
                                <ArrowRight strokeWidth={1.9} size={19} className="transition-transform duration-400 group-hover:translate-x-2" />
                                <span className="absolute -bottom-0.5 left-0 w-[80%] h-[1px] group-hover:bg-gray-400 transition-all duration-400 group-hover:w-full"></span>
                            </button>
                        </Link>
                    ))}
                </div>

                {/* Pagination Controls */}
                {isHomePage ? "" : totalPages > 1 && (
                    <div className="flex justify-center items-center mt-6 gap-4">
                        <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 border border-gray-400 rounded-lg transition-all ${currentPage === 1 ? "opacity-50 hover:cursor-not-allowed" : "hover:cursor-pointer hover:bg-gray-200"}`}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <span className="font-semibold">Page {currentPage} of {totalPages}</span>
                        <button
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 border border-gray-400 rounded-lg transition-all ${currentPage === totalPages ? "opacity-50 hover:cursor-not-allowed" : "hover:cursor-pointer hover:bg-gray-200"}`}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogPodcast;
