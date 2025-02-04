import React from 'react'
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <main className=' bg-gradient-to-b via-bgGradVia flex justify-center items-center sm:pt-36 px-2 py-20 ' >
            <div className=" container flex flex-col gap-6 items-center justify-center ">
                <h1 className=' text-center lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-bold flex flex-col items-center ' >
                    AI that writes
                    <span className=" bg-gradient-to-r from-txtGradFrom to-txtGradTo bg-clip-text text-transparent">
                        YouTube Scripts
                    </span>
                </h1>

                <div className="text">
                    <p className=' text-[#dadbe9] md:sm-text-xl sm:text-lg text-base text-center ' >AI-generated YouTube scripts for fast, <br /> engaging, and viral content creation.</p>
                </div>

                <div className="button">
                    <Link to='/signup' className=" tracking-[1px] flex justify-center items-center sm:gap-3 gap-1 bg-btn text-white px-6 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-btnHover hover:-translate-y-[-1px] font-semibold ">
                        Sign up with email <ArrowRight size={22} />
                    </Link>
                </div>

                <div className="icons">
                    <img src="./icons.svg" alt="" />
                </div>
            </div>
        </main>
    )
}

export default HeroSection
