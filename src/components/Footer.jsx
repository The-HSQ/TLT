import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className=' bg-black flex justify-center items-center px-5 py-4 ' >
            <div className="container flex flex-col md:flex-row md:justify-between md:items-center gap-4 ">
                {/* Left Side */}
                <div className="flex items-center gap-10">
                    {/* Logo */}
                    <Link to='/' className=" cursor-pointer text-6xl font-bold ">
                        TLT
                    </Link>
                </div>
                {/* Right Side */}
                <div className=" flex flex-col gap-4 ">
                    {/* Top */}
                    <div className=" flex md:justify-end gap-4 ">
                        <Facebook size={22} />
                        <Instagram size={22} />
                        <Twitter size={22} />
                        <Linkedin size={22} />
                        <Youtube size={22} />
                    </div>

                    {/* bottom */}
                    <div className=" flex flex-wrap gap-2 text-[12px] ">
                        <p>&copy; 2025 Timeless Tails(TLT).</p>

                        {/* footer Navigation */}
                        <nav className=" flex flex-wrap ">
                            <ul className="flex flex-wrap items-center gap-2 ">
                                <li className="cursor-pointer ">Privacy Policy</li>
                                <li className="cursor-pointer">Terms of Service</li>
                                <li className="cursor-pointer">Legal Center</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
