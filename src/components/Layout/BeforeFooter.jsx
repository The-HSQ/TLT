import React from 'react'
import AnimatedGrid from '../animation/AnimatedGrid'
import BeforeFooterSection from '../BeforeFooterSection'

const BeforeFooter = () => {
    return (
        <div className=' relative perspective-[1000px] bg-[#1C1C1C] flex flex-col justify-center overflow-hidden py-24 sm:py-36 ' >
            {/* Background Animated Grid - Positioned Properly */}
            <div className=" absolute -top-10 -left-24 opacity-100 w-[120%] " style={{ transform: "rotateX(-50deg) rotateY(0deg) translateZ(50px)" }}>
                <AnimatedGrid />
            </div>

            <div className=' flex justify-center items-center lg:px-20 z-10 ' >
                <BeforeFooterSection />
            </div>

            {/* Bottom Background Animated Grid */}
            <div className=" absolute bottom-10 -left-10 md:-left-24 opacity-100 w-[120%] " style={{ transform: "rotateX(50deg) rotateY(0deg) translateZ(-50px)" }} >
                <AnimatedGrid />
            </div>
        </div>
    )
}

export default BeforeFooter
