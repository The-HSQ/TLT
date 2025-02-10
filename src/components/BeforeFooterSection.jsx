import { Bold, ChevronDown, CircleCheck, CircleHelp, Ellipsis, EllipsisVertical, FileText, Home, Image, Italic, List, Logs, Megaphone, MessageCircle, Pen, Redo2, Shuffle, Star, Underline, Undo2 } from 'lucide-react'
import React from 'react'
import FloatingCardImage from './animation/FloatingCardImage'
import FloatingCardLock from './animation/FloatingCardLock'
import FloatingCardMegaPhone from './animation/FloatingCardMegaPhone'
import FloatingCardGlobe from './animation/FloatingCardGlobe'
import { Link } from 'react-router-dom'


const BeforeFooterSection = () => {
    return (
        <div className=' container flex flex-col relative justify-center px-4 hover:cursor-default items-center ' >
            <div className="absolute top-20 left-0 z-100 ">
                <FloatingCardImage />
            </div>
            <div className="absolute bottom-20 -right-6 z-100 ">
                <FloatingCardLock />
            </div>
            <div className="absolute -top-10 md:-top-12 right-10 md:right-44 z-40 opacity-95 ">
                <FloatingCardMegaPhone />
            </div>
            <div className="absolute rotate -bottom-14 z-40 opacity-95 ">
                <FloatingCardGlobe />
            </div>

            {/* Full Container */}
            <div className=" z-90 w-full bg-white text-sm md:rounded-xl rounded-t-xl text-black flex ">
                {/* sideBar */}
                {/* Desktop Navigation */}
                <nav className="hidden md:block w-auto px-3 py-6 rounded-tl-xl rounded-bl-xl bg-gray-100 border-gray-400 border-r ">
                    <ul className="flex flex-col justify-center items-center gap-6 ">
                        <li className="cursor-default flex flex-col justify-center items-center ">
                            <Home size={18} />
                            Home
                        </li>
                        <li className="cursor-default flex flex-col justify-center items-center ">
                            <Pen size={18} />
                            Create
                        </li>
                        <li className="cursor-default flex flex-col justify-center items-center ">
                            <Shuffle size={18} />
                            Remix
                        </li>
                        <li className="cursor-default flex flex-col justify-center items-center ">
                            <MessageCircle size={18} />
                            Chat
                        </li>
                        <li className="cursor-default flex flex-col justify-center items-center ">
                            <Star size={18} />
                            Favorites
                        </li>
                    </ul>
                </nav>

                {/* menuSection */}
                <div className=" flex flex-col w-full ">
                    {/* header_one */}
                    <div className=" sm:px-6 font-semibold bg-gray-100 w-full py-2 px-4 border-gray-400 border-b flex justify-between items-center md:rounded-tr-xl rounded-tl-xl rounded-tr-xl ">
                        <p className=' text-base ' >Closing Section CTA</p>
                        <div className=' flex justify-center items-center gap-3 ' >
                            <CircleCheck />
                            <div className=' border bg-transparent p-1 rounded border-gray-400 ' >
                                <CircleHelp />
                            </div>
                        </div>
                    </div>
                    {/* header_two */}
                    <div className=" sm:px-4 py-2 font-normal bg-white w-full h-auto px-2 border-gray-400 border-b flex justify-between items-center rounded-tr-xl ">
                        {/* left */}
                        <div className=' hidden lg:flex justify-center items-center gap-3 ' >
                            <div className=' flex justify-center items-center gap-2 ' >Normal text <ChevronDown size={18} /> </div>
                            <div className=' w-[1px] h-5 bg-gray-400 ' ></div>
                            <div className=" flex justify-center items-center gap-3 ">
                                <Bold strokeWidth='1.5px' size={16} />
                                <Italic strokeWidth='1.5px' size={16} />
                                <Underline strokeWidth='1.5px' size={16} />
                            </div>
                            <div className=' w-[1px] h-5 bg-gray-400 ' ></div>
                            <div className=" flex justify-center items-center gap-3 ">
                                <List strokeWidth='1.5px' size={16} />
                                <Logs strokeWidth='1.5px' size={16} />
                                <Link strokeWidth='1.5px' size={16} />
                                <Image strokeWidth='1.5px' size={16} />
                            </div>
                            <div className=' w-[1px] h-5 bg-gray-400 ' ></div>
                            <div className=" flex justify-center items-center gap-2 ">
                                <Undo2 strokeWidth='1.5px' size={16} />
                                <Redo2 opacity={0.5} strokeWidth='1.5px' size={16} />
                            </div>
                        </div>
                        {/* left_mobile */}
                        <div className=' flex lg:hidden justify-center items-center gap-1 sm:gap-3 ' >
                            <p className=' text-[10px] sm:text-sm ' >File</p>
                            <div className=' w-[1px] h-5 bg-gray-400 ' ></div>
                            <div className=" flex justify-center items-center gap-3 ">
                                <Ellipsis strokeWidth='1.5px' size={16} />
                            </div>

                        </div>

                        {/* right */}
                        <div className=' flex justify-center items-center sm:gap-3 gap-2 ' >
                            <div className=' bg-gray-300 p-0.5 rounded text-[10px] sm:text-sm flex justify-center items-center gap-1 ' >
                                <Megaphone strokeWidth='1.5px' size={14} />
                                <p>Select a voice</p>
                            </div>
                            <div className=' bg-gray-300 p-0.5 rounded text-[10px] sm:text-sm flex justify-center items-center gap-1 ' >
                                <FileText strokeWidth='1.5px' size={14} />
                                <p>Style Guide</p>
                            </div>
                            <div className=' bg-gray-300 p-0.5 rounded ' >
                                <EllipsisVertical strokeWidth='1.5px' size={16} />
                            </div>
                        </div>
                    </div>
                    {/* hearSection */}
                    <div className=' flex justify-center items-center sm:py-30 px-2 py-20 ' >
                        <div className=" container flex flex-col gap-6 items-center justify-center ">
                            <h1 className=' text-center lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-normal flex flex-col items-center ' >
                                Get started with <br /> TLT today
                            </h1>

                            <div className="button sm:text-xl text-normal flex flex-col justify-center items-center sm:flex-row gap-2 sm:gap-4 ">
                                <Link to='/signup' className=" tracking-[1px] flex justify-center items-center sm:gap-3 gap-1 border text-black px-4 py-2 rounded cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-300 hover:-translate-y-[-1px] font-semibold ">
                                    Start Free Trial
                                </Link>
                                <Link to='/demo' className=" tracking-[1px] flex justify-center items-center sm:gap-3 gap-1 bg-[#705b99] text-white px-4 py-2 rounded cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#4f4268] hover:-translate-y-[-1px] font-semibold ">
                                    Get A Demo
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            
            {/* Mobile Navigation */}
            <nav className=" z-90 md:hidden text-black w-full mx-4 -bottom-16 left-0 px-2 py-6 rounded-b-xl bg-gray-100 border-gray-400 border-t ">
                <ul className="flex justify-around items-center gap-6 ">
                    <li className="cursor-none ">
                        <Home size={18} />
                    </li>
                    <li className="cursor-none ">
                        <Pen size={18} />
                    </li>
                    <li className="cursor-none ">
                        <Shuffle size={18} />
                    </li>
                    <li className="cursor-none ">
                        <MessageCircle size={18} />
                    </li>
                    <li className="cursor-none ">
                        <Star size={18} />
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default BeforeFooterSection
