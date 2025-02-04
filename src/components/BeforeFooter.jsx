import React from 'react'
import AnimatedGrid from './animation/AnimatedGrid'
import BeforeFooterSection from './BeforeFooterSection'

const BeforeFooter = () => {
    return (
        <div className=' relative bg-black flex flex-col justify-center overflow-hidden py-24 sm:py-36 ' >
            {/* Background Animated Grid - Positioned Properly */}
            <div className="absolute top-0 w-full opacity-100">
                <AnimatedGrid />
            </div>

            <div className=' flex justify-center items-center lg:px-20 z-10 ' >
                <BeforeFooterSection />
            </div>

            {/* Bottom Background Animated Grid */}
            <div className="absolute bottom-0 w-full opacity-100 z-0 ">
                <AnimatedGrid />
            </div>
        </div>
    )
}

export default BeforeFooter
