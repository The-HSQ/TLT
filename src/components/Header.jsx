import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const location = useLocation();
    const [scrollWidth, setScrollWidth] = useState(0);

    const navItems = [
        { to: "/", label: "Home" },
        { to: "/blog", label: "Blog" },
        { to: "/features", label: "Features" },
        { to: "/resources", label: "Resources" },
    ];

    console.log(location.pathname)


    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setScrollWidth(scrollPercent);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        window.location.reload();
    };

    return (
        // <header className=" flex flex-col ">
        <header className="fixed top-0 left-0 w-full z-50 bg-white ">
            <div className=" flex border-b border-gray-300 justify-center items-center px-[1rem] md:px-[2rem] lg:px-[2.5rem] py-4">
                {/* <div className=" container flex justify-between items-center"> */}
                <div className=" custom-container flex justify-between items-center">
                    {/* Left Section */}
                    <div className="flex items-center gap-10">
                        <Link to="/">
                            <h1 className="cursor-pointer text-4xl font-bold">TLT</h1>
                        </Link>
                        <nav className="hidden md:block">
                            <ul className="flex items-center gap-6">
                                {navItems.map(({ to, label }) => (
                                    <Link
                                        key={to}
                                        to={to}
                                        className={`cursor-pointer ${location.pathname === to || (to === "/blog" && location.pathname.startsWith("/blog")) ? "text-activePage font-bold" : ""}`}
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center">
                        {isAuthenticated ? (
                            <button
                                onClick={handleLogout}
                                className="tracking-[1px] hidden sm:flex justify-center items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-red-700 font-semibold"
                            >
                                Logout
                            </button>
                        ) : (
                            <div className=" flex gap-2 ">
                                <Link
                                    to="/demo"
                                    className="tracking-[1px] text-sm border flex justify-center items-center gap-2 bg-transparent text-black px-2 py-2 rounded cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-0.5 font-semibold"
                                >
                                    Get Demo
                                </Link>
                                <Link
                                    to="/login"
                                    className="tracking-[1px] hidden sm:flex justify-center items-center gap-2 bg-btn text-white px-6 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-0.5 font-semibold"
                                >
                                    Sign In <ArrowRight size={17} />
                                </Link>
                            </div>
                        )}

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden cursor-pointer ml-4 rounded-lg bg-black text-white"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={35} /> : <Menu size={35} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <nav
                    className={`absolute z-10 top-18 left-0 w-full flex flex-col justify-center items-center gap-6 bg-[#F2F2F3] text-black transition-all duration-300 ease-in-out ${isOpen ? "h-auto opacity-100 py-6" : "h-0 opacity-0 overflow-hidden"
                        } md:hidden`}
                >
                    <ul className="flex flex-col items-center gap-6">
                        {navItems.map(({ to, label }) => (
                            <Link
                                key={to}
                                to={to}
                                className={`cursor-pointer ${location.pathname === to || (to === "/blog" && location.pathname.startsWith("/blog")) ? "text-activePage font-bold" : ""}`}
                            >
                                {label}
                            </Link>
                        ))}
                    </ul>

                    <div className="w-full flex gap-6 justify-center">
                        {isAuthenticated ? (
                            <button
                                onClick={handleLogout}
                                className="tracking-[1px] flex justify-center items-center gap-1 bg-red-600 text-white px-6 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-red-700 font-semibold"
                            >
                                Logout
                            </button>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="tracking-[1px] flex justify-center items-center gap-1 bg-btn text-white px-6 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-btnHover font-semibold"
                                >
                                    Sign In <ArrowRight size={18} />
                                </Link>
                                <Link
                                    to="/signup"
                                    className="tracking-[1px] flex justify-center items-center gap-1 bg-btn text-white px-6 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-btnHover font-semibold"
                                >
                                    Sign Up <ArrowRight size={18} />
                                </Link>
                            </>
                        )}
                    </div>
                </nav>
            </div>
            {/* Scroll Progress Bar */}
            {location.pathname !== "/" && (
                <div
                    className="fixed top-[70px] left-0 w-full h-1 bg-[#6724C5] "
                    style={{ width: `${scrollWidth}%` }}
                ></div>
            )}
        </header>
    );
};

export default Header;
