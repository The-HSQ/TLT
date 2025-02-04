import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className=" relative flex justify-center items-center px-5 py-4 ">
            <div className="container flex justify-between items-center">
                {/* Left Section */}
                <div className="flex items-center gap-10">
                    {/* Logo */}
                    <Link to='/'>
                        <h1 className="cursor-pointer text-4xl font-bold ">TLT</h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden sm:block">
                        <ul className="flex items-center gap-6 ">
                            <li className="cursor-pointer font-bold text-activePage ">Home</li>
                            <li className="cursor-pointer">Features</li>
                            <li className="cursor-pointer">Pricing</li>
                            <li className="cursor-pointer">Resources</li>
                        </ul>
                    </nav>
                </div>

                {/* Right Section */}
                <div className="flex items-center">
                    <Link to='/login' className=" tracking-[1px] hidden text-center sm:flex justify-center items-center gap-2  bg-btn text-white px-6 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-btnHover hover:-translate-y-[-1px] font-semibold ">
                        Sign In <ArrowRight size={17} />
                    </Link>


                    {/* Mobile Menu Toggle */}
                    <button
                        className="sm:hidden ml-4 text-[#9A9AB3] "
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={40} /> : <Menu size={40} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <nav
                className={`absolute z-10 top-18 left-0 w-full flex flex-col justify-center items-center gap-6 bg-[#070113] text-white transition-all duration-300 ease-in-out ${isOpen ? "h-auto opacity-100 py-6" : "h-0 opacity-0 overflow-hidden"
                    } sm:hidden`}
            >
                <ul className="flex flex-col items-center gap-6">
                    <li className="cursor-pointer font-bold text-activePage">Home</li>
                    <li className="cursor-pointer">Features</li>
                    <li className="cursor-pointer">Pricing</li>
                    <li className="cursor-pointer">Resources</li>
                </ul>

                <div className=" w-full flex gap-6 justify-center ">

                    <Link to='/login' className=" tracking-[1px] flex justify-center items-center gap-1 bg-btn text-white px-6 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-btnHover hover:-translate-y-[-1px] font-semibold ">
                        Sign In <ArrowRight size={18} />
                    </Link>
                    <Link to='/signup' className=" tracking-[1px] flex justify-center items-center gap-1 bg-btn text-white px-6 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-btnHover hover:-translate-y-[-1px] font-semibold ">
                        Sign Up <ArrowRight size={18} />
                    </Link>

                </div>
            </nav>
        </header>
    );
};

export default Header;
