import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Home } from 'lucide-react';
import customerStories from './../components/api/stats.json';

const StatPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=' flex justify-center items-center gap-4 flex-col mt-10 mb-10 px-[1rem] md:px-[2rem] lg:px-[2.5rem] ' >
      {/* home and blog icons */}
      <div className=' flex gap-3 justify-center items-center text-[#979591] '>
        <Link to='/' >
          <Home className=' hover:cursor-pointer hover:text-black ' size={22} />
        </Link>

        <ChevronRight size={20} />

        <Link to='/stats' >
          <span className=' text-[13px] hover:cursor-pointer text-black '>Customer Stories</span>
        </Link>
      </div>
      {/* <div className=" container flex flex-col items-center justify-center gap-4 px-5 md:px-6 "> */}
      <div className=" custom-container flex flex-col items-center justify-center gap-4 ">
        {/* heading */}
        <h1 className=' md:text-center text-3xl md:text-5xl text-balance font-semibold ' >Jasper helps 100,000+ customers transform how they work</h1>
        {/* description */}
        <p className=' md:text-center text-base text-balance text-gray-800 ' >With Jasper users are transforming how they work – and finding remarkable results. Don't just take our word for it – hear from our collection of compelling case studies of current Jasper customers.</p>
        <div className="button sm:text-xl text-normal flex flex-col justify-center items-center sm:flex-row gap-2 sm:gap-4 ">
          <Link to='/signup' className=" tracking-[1px] flex justify-center items-center sm:gap-3 gap-1 border text-black px-4 py-2 rounded cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-300 hover:-translate-y-[-1px] font-semibold ">
            Start Free Trial
          </Link>
          <Link to='/demo' className=" tracking-[1px] flex justify-center items-center sm:gap-3 gap-1 bg-[#705b99] text-white px-4 py-2 rounded cursor-pointer transition-all duration-300 ease-in-out border border-[#705b99] hover:border-[#4f4268] hover:bg-[#4f4268] hover:-translate-y-[-1px] font-semibold ">
            Get A Demo
          </Link>
        </div>
      </div>

      {/* <div className=" container flex flex-col items-center justify-center px-2 md:px-6 "> */}
      <div className=" custom-container flex flex-col items-center justify-center ">
        {/* Cards Desktop */}
        <div className=" grid text-black mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {customerStories.map((story) => (
            <Link to={`/stats/${story.slug}`} key={story.id} className={` transition-all transform hover:scale-101 hover:${story.hoverColor} relative p-6 border border-gray-300 hover:cursor-pointer rounded-lg shadow-sm ${story.color} md:${story.size === 'large' ? 'col-span-2' : 'col-span-1'}`}>
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
  )
}

export default StatPage
