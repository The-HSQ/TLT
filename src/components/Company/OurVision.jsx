import React from 'react'
import AnimatedGrid from '../animation/AnimatedGrid'

const OurVision = () => {
    return (
        <div className=' overflow-x-hidden relative flex flex-col justify-center items-center gap-4 py-16 w-full h-full perspective-[1000px] px-[1rem] sm:px-[2rem] lg:px-[2.5rem] ' >
            {/* Grid */}
            <div className=" -mt-32 w-[120%] opacity-35 " style={{ transform: "rotateX(-50deg) rotateY(0deg) translateZ(50px)" }}>
                <AnimatedGrid />
            </div>


            <div className="text-[#262627] -mt-32 custom-container mx-auto flex flex-col justify-center items-center gap-3">
                <h2 className="text-xl font-medium">Our Mission</h2>
                <h3 className=' tracking-[-1px] sm:tracking-[-4px] text-4xl sm:text-5xl md:text-6xl text-center text-pretty max-w-lg mb-4 font-semibold ' >At TLT, we’re closing the gap between "idea" and "impact"</h3>
                <p className='tracking-[-1px] max-w-lg text-pretty text-xl font-medium mb-4 ' >We’re giving marketers the power to turn vision into reality with newfound ease. The days of slow, cumbersome processes are fading, as we clear the path for creativity to thrive and innovation to accelerate.</p>
                <p className='tracking-[-1px] max-w-lg text-pretty text-xl font-medium mb-4 ' >TLT is your catalyst, allowing you to move faster, think smarter, and amplify your impact—all while staying true to the voice and values that make your brand unique. With streamlined workflows and fewer barriers, you’re free to focus on what matters most: crafting stories that resonate, building connections that last, and driving real, lasting results.</p>
                <p className='tracking-[-1px] max-w-lg text-pretty text-xl font-medium mb-4 ' >But TLT is more than just a tool; it’s a community. A space where marketers and creators gather to inspire one another, solve problems together, and push the boundaries of what’s possible. We’re not here to replace your creativity, but to unlock it—empowering teams to think boldly, act decisively, and grow into their full potential. With TLT, you’re not just keeping up with the pace of change—you’re leading it.</p>
                <p className='tracking-[-1px] max-w-lg text-pretty text-2xl font-bold ' >Together, we’re transforming the future of marketing, one idea, one story, one brand at a time.</p>
            </div>


            {/* Grid */}
            <div className=" -mt-52 w-[130%] opacity-35 " style={{ transform: "rotateX(50deg) rotateY(0deg) translateZ(-50px)" }}>
                <AnimatedGrid />
            </div>
        </div>
    )
}

export default OurVision
