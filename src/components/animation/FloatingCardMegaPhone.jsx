import React from "react";
import { Megaphone } from "lucide-react";
import './style.css'

const FloatingCardMegaPhone = () => {
    return (
        <div className=" floating relative rounded flex justify-center items-center w-20 h-20 ">
            {/* Bottom Layer of Card (Shadowed Layer) */}
            <div className="absolute w-16 h-16 bg-[#F5F0FF] rounded border-2 border-gray-800 transform rotate-x-45 rotate-y-0 rotate-z-28 translate-y-2 translate-x-1 shadow-md "></div>

            {/* Bottom Glowing Effect */}
            <div className="absolute w-12 h-12 left-[18px] top-[12px] bg-purple-900 transform rotate-x-45 rotate-y-0 rotate-z-28 translate-y-3 translate-x-1 opacity-100 blur-sm rounded-md "></div>

            {/* Top Layer of Card (Main Card) */}
            <div className="relative w-16 h-16 bg-white rounded border-2 border-gray-800 transform rotate-x-45 rotate-y-0 rotate-z-28 
            flex justify-center items-center shadow-lg ">
                {/* Icon Inside */}
                <Megaphone className="text-black w-8 h-8 " />
            </div>
        </div>
    );
};

export default FloatingCardMegaPhone;