import React from 'react'
import AnimatedGrid from '../animation/AnimatedGrid'

const HeroSection = () => {
    return (
        <div className=' overflow-x-hidden flex flex-col justify-center items-center gap-4 py-16 w-full h-full perspective-[1000px] ' >
            <div className=' custom-container z-[1000] flex flex-col 2md:flex-row gap-10 md:gap-5 justify-center items-center px-[1rem] sm:px-[2rem] lg:px-[2.5rem] ' >
                {/* Left */}
                <div className=" w-[100%] sm:w-[50%] md:w-[80%] lg:w-[50%] flex flex-col items-center 2md:items-start justify-center gap-4 ">
                    <h1 className=' text-5xl md:text-7xl font-medium text-[#262627] text-center 2md:text-start text-balance ' >AI solutions for every kind of marketer</h1>
                    <div className=" flex gap-4 ">
                        <button className=' border text-sm bg-transparent p-4 rounded-md ' >Start Free Trial</button>
                        <button className=' border border-[#9146FF] text-sm bg-[#9146FF] p-4 rounded-md text-white ' >Get A Demo</button>
                    </div>
                </div>
                {/* Right */}
                <div className=" flex justify-center 2md:justify-start relative w-[90%] 2md:w-[50%] h-auto 2md:h-[358px] perspective-dramatic ">
                    {/* Main image */}
                    <div className=" relative w-[100%] md:[50%] h-auto ">
                        <img className=' rounded-xl w-[full] ' src="./solutions/solutions_img.avif" alt="solution" />

                        {/* icon 1 */}
                        <div className=" absolute top-10 -right-3 z-[2] w-16 h-16 sm:w-22 sm:h-22 lg:w-26 lg:h-26 floating ">
                            <img className=' w-full h-full ' src="/animation/icon-1.svg" alt="icon" />
                        </div>
                        {/* icon 2 */}
                        <div className=" absolute -bottom-10 right-5 md:right-10 z-[2] w-18 h-18 sm:w-28 sm:h-28 lg:w-32 lg:h-32 floating ">
                            <img className=' w-full h-full ' src="/animation/icon-2.svg" alt="icon" />
                        </div>
                        {/* icon 3 */}
                        <div className=" absolute -bottom-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2] w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 floating ">
                            <img className=' w-full h-full ' src="/animation/icon-3.svg" alt="icon" />
                        </div>
                        {/*  */}
                        <div className=" absolute -bottom-20 md:-bottom-33 -left-5 md:-left-10 z-[2] w-22 h-22 sm:w-28 sm:h-28 lg:w-32 lg:h-32 floating ">
                            <img className=' w-full h-full ' src="/animation/icon-4.svg" alt="icon" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Grid */}
            <div className=" -mt-28 w-[120%] h-full " style={{ transform: "rotateX(50deg) rotateY(0deg) translateZ(-50px)" }}>
                <AnimatedGrid />
            </div>
        </div>
    )
}

export default HeroSection
