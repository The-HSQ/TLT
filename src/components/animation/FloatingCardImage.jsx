import React from "react";
import { Image } from "lucide-react";
import './style.css'

const FloatingCardImage = () => {
    return (
        <div className=" floating relative rounded flex justify-center items-center w-20 h-20 sm:w-28 sm:h-28 lg:w-30 lg:h-30">
            {/* Bottom Layer of Card (Shadowed Layer) */}
            <div className="absolute w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 bg-[#F5F0FF] rounded border-2 border-gray-800 transform rotate-x-45 rotate-y-0 rotate-z-28 translate-y-2 sm:translate-y-4 translate-x-1 shadow-md "></div>

            {/* Bottom Glowing Effect */}
            <div className="absolute w-12 h-12 sm:w-18 sm:h-18 md:w-18 md:h-18 left-[18px] top-[12px] lg:w-22 lg:h-22 bg-purple-900 transform rotate-x-45 rotate-y-0 rotate-z-28 translate-y-4 translate-x-1 opacity-100 blur-sm rounded-md "></div>

            {/* Top Layer of Card (Main Card) */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 bg-white rounded border-2 border-gray-800 transform rotate-x-45 rotate-y-0 rotate-z-28 
            flex justify-center items-center shadow-lg ">
                {/* Icon Inside */}
                <Image className="text-black w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16" />
            </div>
        </div>
    );
};

export default FloatingCardImage;