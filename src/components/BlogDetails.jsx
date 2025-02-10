import { ArrowRight, ChevronRight, Home } from 'lucide-react'
import React, { useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import cards from './api/blog.json'

const BlogDetails = () => {
  const { slug } = useParams();
  const location = useLocation();
  const blog = cards.find((post) => post.slug === slug); // Find the blog post
  
  function getRandomCards(data, count = 3) {
    const filteredData = data.filter((item) => item.slug !== slug); // Exclude the current post
    const shuffled = [...filteredData].sort(() => 0.5 - Math.random()); // Shuffle the array
    return shuffled.slice(0, count); // Pick the first 'count' elements
  }
  const selectedCards = getRandomCards(cards, 3);
  
  if (!blog) {
    return <p>Blog not found</p>; // Handle invalid slug case
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className=' flex justify-center ' >
      <div className="container flex flex-col gap-4 md:gap-6 items-center justify-center py-7 md:py-10 ">
        <div className=" w-full lg:w-[70%] text-black px-3 flex gap-4 md:gap-6 flex-col justify-center items-start md:items-center ">
          {/* home and blog icons */}
          <div className=' flex gap-3 justify-center items-center text-[#979591] '>
            <Link to='/' >
              <Home className=' hover:cursor-pointer hover:text-black ' size={22} />
            </Link>

            <ChevronRight size={20} />

            <Link to='/blog' >
              <span className=' text-[13px] hover:cursor-pointer hover:text-black '>Blog</span>
            </Link>
          </div>
          {/* heading */}
          <h1 className=' md:text-center text-3xl md:text-4xl text-balance font-semibold ' >{blog.title}</h1>
          {/* description */}
          <p className=' md:text-center text-base text-balance text-gray-800 ' >{blog.description}</p>
          {/* publish and author name */}
          <div className=' flex flex-col md:flex-row gap-2 md:gap-5 md:text-center text-[14px] text-balance text-gray-400 '>
            <p>Published on {blog.publishedDate}</p>
            <p>By the {blog.author}</p>
          </div>
          {/* image */}
          <img className=' w-full rounded-3xl border border-gray-300 ' src={blog.image} alt={blog.title} />
          {/* line */}
          <div className=" w-full h-[1px] bg-gray-300 "></div>
          {/* content */}
          <div className=" flex flex-col gap-4 ">
            {blog.content.map((paragraph, index) => (
              <p key={index} >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        {/* line */}
        <div className=" w-full h-[1px] bg-gray-300 "></div>
        {/* More blog */}
        <div className="">
          <h2 className=' text-center text-balance text-3xl font-medium ' >More from the TLT blog:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 pt-6 md:px-6">
            {selectedCards.map((card, index) => (
              <Link to={`/blog/${card.slug}`} key={index} className=" border border-gray-400 hover:cursor-pointer group p-4 md:p-6 bg-white text-black rounded-2xl shadow-md transition-all transform hover:scale-101 hover:shadow-lg">
                <img src={card.image} alt={card.title} className=" border border-gray-400 mb-4 w-full h-40 object-cover rounded-lg" />
                <h2 className="text-xl font-semibold">{card.title}</h2>
                <p className="text-gray-700 mt-2 text-ellipsis line-clamp-2 ">{card.description}</p>
                <div className=" mt-4 flex justify-start items-center gap-2 group-hover:underline ">
                  <button href="#" className=" font-medium ">
                    {card.linkText}
                  </button>
                  <ArrowRight strokeWidth={2} size={18} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetails
