import { ArrowRight, ChevronRight, Home } from 'lucide-react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import usageData from './../components/api/usage.json'

const UsagePage = () => {
    const isAuthenticated = localStorage.getItem('token')

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className=' flex justify-center items-center gap-4 flex-col mt-10 mb-10 ' >
            {/* home and blog icons */}
            <div className=' flex gap-3 justify-center items-center text-[#979591] '>
                <Link to='/' >
                    <Home className=' hover:cursor-pointer hover:text-black ' size={22} />
                </Link>

                <ChevronRight size={20} />

                <Link to='/usage' >
                    <span className=' text-[13px] hover:cursor-pointer text-black '>Usage</span>
                </Link>
            </div>
            {isAuthenticated ? "" : 
            <div className=" container flex flex-col items-center justify-center gap-4 px-5 md:px-6 ">
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
            </div>}

            <div className=" container flex flex-col items-center justify-center px-5 md:px-6 ">
                {/* Cards Desktop */}
                <div className=" grid text-black mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {usageData.map((app, index) => (
                        <Link
                            to={`/usage/${app.slug}`}
                            key={index}
                            className=" group border border-gray-400 hover:cursor-pointer w-full p-6 relative bg-[#E5E7EB] rounded-xl flex-shrink-0 mr-10 "
                        >
                            {app.popular && (
                                <span className="absolute top-1 right-3 bg-purple-500 text-white text-xs px-2 py-1 rounded-md">POPULAR</span>
                            )}
                            <h3 className="text-lg font-semibold text-gray-800">{app.title}</h3>
                            <p className="text-gray-600 mt-2 text-ellipsis line-clamp-2">{app.description}</p>
                            <button className=" mt-4 text-blue-600 font-medium flex justify-center items-center gap-2 group-hover:underline ">Use This App <ArrowRight strokeWidth={1.9} size={19} className="transition-transform duration-200 group-hover:scale-125 group-hover:stroke-[2.5] " /> </button>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UsagePage
