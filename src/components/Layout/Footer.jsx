import { ArrowRight, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className=' bg-[#1C1C1C] text-white flex justify-center items-center py-4 px-[1rem] md:px-[2rem] lg:px-[2.5rem] ' >
            <div className=" custom-container flex flex-col md:flex-col md:justify-between md:items-center gap-4 ">
                {/* Top Side */}
                <div className=" w-full flex flex-col 2md:flex-row gap-10 py-6 ">
                    {/* Right Side */}
                    <div className=" w-full 2md:w-[30%] flex flex-col gap-4 ">
                        <Link to='/signup' className=' w-[180px] text-center border border-[#DDDDDD] text-sm bg-[#DDDDDD] p-4 rounded-md text-black ' >Start Free Trial</Link>
                        <Link to='/demo' className=' w-[180px] text-center border text-sm bg-transparent p-4 rounded-md ' >Get A Demo</Link>
                    </div>

                    {/* Left Side */}
                    <div className=" w-full 2md:w-[70%] pr-3 flex flex-col md:flex-row gap-8 justify-between text-sm">
                        {/* Features */}
                        <div className=' w-full flex flex-col gap-3 ' >
                            <Link to='/solutions' className=" group hover:cursor-pointer text-lg flex items-center gap-2 font-medium pb-3 mb-4 border-b border-gray-400">Solutions <ArrowRight size={16} className='transition-transform duration-400 group-hover:translate-x-2' /> </Link>
                            <ul className="space-y-2 text-[#A0A0A0] flex flex-col ">
                                <Link to='#' className=' hover:text-white hover:cursor-pointer ' >On Premise</Link>
                                <Link to='#' className=' hover:text-white hover:cursor-pointer ' >Chat Support</Link>
                                <Link to='#' className=' hover:text-white hover:cursor-pointer ' >Agents</Link>
                                <Link to='#' className=' hover:text-white hover:cursor-pointer ' >Knowledge Base</Link>
                            </ul>
                        </div>

                        {/* Company */}
                        <div className=' w-full flex flex-col gap-3 ' >
                            <Link to='/company' className=" text-lg flex items-center gap-2 font-medium pb-3 mb-4 border-b border-gray-400">Company <ArrowRight size={16} className='transition-transform duration-400 group-hover:translate-x-2' /> </Link>
                            <ul className="space-y-2 text-[#A0A0A0] flex flex-col ">
                                <Link to='/' className='w-fit hover:text-white hover:cursor-pointer ' >Home</Link>
                                <Link to='#' className='w-fit hover:text-white hover:cursor-pointer ' >Privacy Policy</Link>
                                <Link to='#' className='w-fit hover:text-white hover:cursor-pointer ' >Terms of Service</Link>
                                <Link to='#' className='w-fit hover:text-white hover:cursor-pointer ' >Cookie Policy</Link>
                                <Link to='#' className='w-fit hover:text-white hover:cursor-pointer ' >Contact Us</Link>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className=' w-full flex flex-col gap-3 ' >
                            <h3 className=" group hover:cursor-pointer text-lg flex items-center gap-2 font-medium pb-3 mb-4 border-b border-gray-400">Resources <ArrowRight size={16} className='transition-transform duration-400 group-hover:translate-x-2' /> </h3>
                            <ul className="space-y-2 text-[#A0A0A0] flex flex-col ">
                                <Link to='/blog' className=' hover:text-white hover:cursor-pointer ' >Blog</Link>
                                <Link to='#' className=' hover:text-white hover:cursor-pointer ' >Guides</Link>
                                <Link to='#' className=' hover:text-white hover:cursor-pointer ' >APIs</Link>
                                <Link to='#' className=' hover:text-white hover:cursor-pointer ' >FAQ</Link>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* line */}
                {/* <div className=" w-[96%] h-[1px] bg-gray-400 "></div> */}

                {/* Bottom Side */}
                <div className=" flex flex-col 2md:flex-row gap-4 w-full py-5 2md:py-16 ">
                    {/* Right Side */}
                    <div className=" w-full md:w-[50%] flex justify-start items-center ">
                        <Link to='/' className=" cursor-pointer text-4xl md:text-6xl font-bold ">
                            TLT
                        </Link>
                    </div>

                    {/* Left Side */}
                    <div className=" w-full 2md:w-[50%] flex flex-col md:justify-end gap-4 text-white ">
                        <div className=" flex gap-5 justify-start 2md:justify-end ">
                            <Facebook className=' hover:text-[#A0A0A0] transition-all duration-300 hover:translate-y-0.5 hover:cursor-pointer ' size={22} />
                            <Instagram className=' hover:text-[#A0A0A0] transition-all duration-300 hover:translate-y-0.5 hover:cursor-pointer ' size={22} />
                            <Twitter className=' hover:text-[#A0A0A0] transition-all duration-300 hover:translate-y-0.5 hover:cursor-pointer ' size={22} />
                            <Linkedin className=' hover:text-[#A0A0A0] transition-all duration-300 hover:translate-y-0.5 hover:cursor-pointer ' size={22} />
                            <Youtube className=' hover:text-[#A0A0A0] transition-all duration-300 hover:translate-y-0.5 hover:cursor-pointer ' size={22} />
                        </div>
                        <ul className=" text-[13px] md:text-[12px] text-[#A0A0A0] flex flex-wrap gap-2 md:gap-3 justify-start 2md:justify-end ">
                            <li className=' ' >&copy; 2025 TLT AI, INC.</li>
                            <li className=' cursor-pointer hover:text-white ' >Privacy Policy</li>
                            <li className=' cursor-pointer hover:text-white ' >Terms of Services</li>
                            <li className=' cursor-pointer hover:text-white ' >Legal Center</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer
