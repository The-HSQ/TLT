import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className=' bg-[#1C1C1C] text-white flex justify-center items-center py-4 px-[1rem] md:px-[2rem] lg:px-[2.5rem] ' >
            {/* <div className="container flex flex-col md:flex-col md:justify-between md:items-center gap-4 "> */}
            <div className=" custom-container flex flex-col md:flex-col md:justify-between md:items-center gap-4 ">
                {/* Top Side */}
                <div className=" w-full flex flex-col md:flex-row gap-10 py-6 ">
                    {/* Left */}
                    <div className=" w-full md:w-[50%] flex flex-col justify-start items-start gap-1 ">
                        <Link to='/' className=" cursor-pointer text-6xl font-bold ">
                            TLT
                        </Link>

                        <Link
                            to="/signup"
                            className=" flex justify-center text-sm items-center gap-2 border border-gray-400 px-6 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-0.5 font-semibold"
                        >
                            Sign Up to get started
                        </Link>
                    </div>

                    {/* Right */}
                    <div className=" w-full md:w-[50%] pr-3 flex flex-col md:flex-row gap-8 justify-between text-sm">
                        {/* Features */}
                        <div>
                            <h3 className="text-lg font-bold mb-4">FEATURES</h3>
                            <ul className="space-y-2 text-gray-400 flex flex-col ">
                                <Link to='#' className=' hover:text-[#6724C9] hover:cursor-pointer ' >On Premise</Link>
                                <Link to='#' className=' hover:text-[#6724C9] hover:cursor-pointer ' >Chat Support</Link>
                                <Link to='#' className=' hover:text-[#6724C9] hover:cursor-pointer ' >Agents</Link>
                                <Link to='#' className=' hover:text-[#6724C9] hover:cursor-pointer ' >Knowledge Base</Link>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="text-lg font-bold mb-4">RESOURCES</h3>
                            <ul className="space-y-2 text-gray-400 flex flex-col ">
                                <Link to='/blog' className=' hover:text-[#6724C9] hover:cursor-pointer ' >Blog</Link>
                                <Link to='#' className=' hover:text-[#6724C9] hover:cursor-pointer ' >Guides</Link>
                                <Link to='#' className=' hover:text-[#6724C9] hover:cursor-pointer ' >APIs</Link>
                                <Link to='#' className=' hover:text-[#6724C9] hover:cursor-pointer ' >FAQ</Link>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="text-lg font-bold mb-4">COMPANY</h3>
                            <ul className="space-y-2 text-gray-400 flex flex-col ">
                                <Link to='/' className=' hover:text-[#6724C9] hover:cursor-pointer ' >Home</Link>
                                <Link to='#' className=' hover:text-[#6724C9] hover:cursor-pointer ' >Privacy Policy</Link>
                                <Link to='#' className=' hover:text-[#6724C9] hover:cursor-pointer ' >Terms of Service</Link>
                                <Link to='#' className=' hover:text-[#6724C9] hover:cursor-pointer ' >Cookie Policy</Link>
                                <Link to='#' className=' hover:text-[#6724C9] hover:cursor-pointer ' >Contact Us</Link>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* line */}
                <div className=" w-[96%] h-[1px] bg-gray-400 "></div>

                {/* Bottom Side */}
                <div className=" flex flex-col md:flex-row gap-4 w-full py-6 ">
                    {/* Right Side */}
                    <div className=" w-full md:w-[50%] flex justify-start ">
                        <p className=' text-sm text-gray-400 ' >&copy; 2024 Copyright One Realm, Inc</p>
                    </div>

                    {/* Left Side */}
                    <div className=" w-full md:w-[50%] flex md:justify-end gap-4 text-gray-400 ">
                        <Facebook className=' hover:text-[#6724C9] transition-all duration-300 hover:translate-y-0.5 hover:cursor-pointer ' size={22} />
                        <Instagram className=' hover:text-[#6724C9] transition-all duration-300 hover:translate-y-0.5 hover:cursor-pointer ' size={22} />
                        <Twitter className=' hover:text-[#6724C9] transition-all duration-300 hover:translate-y-0.5 hover:cursor-pointer ' size={22} />
                        <Linkedin className=' hover:text-[#6724C9] transition-all duration-300 hover:translate-y-0.5 hover:cursor-pointer ' size={22} />
                        <Youtube className=' hover:text-[#6724C9] transition-all duration-300 hover:translate-y-0.5 hover:cursor-pointer ' size={22} />
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer
