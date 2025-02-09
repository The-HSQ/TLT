import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check if user is logged in
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);
    }, [isAuthenticated]);

    return (
        <main className="bg-gradient-to-b min-h-screen via-bgGradVia to-[#7E45DB] flex justify-center px-2 ">
            <div className="container flex flex-col gap-6 items-center justify-center py-20 md:py-0 ">
                <h1 className="text-center text-[#262626] md:text-5xl text-4xl font-bold flex flex-col ">
                    AI that writes
                    {/* <span className=" bg-gradient-to-r from-txtGradFrom to-txtGradTo bg-clip-text text-transparent"> */}
                    <span className="">
                        YouTube Scripts
                    </span>
                </h1>

                <div className="text">
                    <p className=" text-[#2b2b2b] md:text-lg sm:text-lg text-base text-center">
                        AI-generated YouTube scripts for fast, <br /> engaging, and viral content creation.
                    </p>
                </div>

                <div className="button">
                    {isAuthenticated ? (
                        <Link
                            to="/dashhome"
                            className="tracking-[1px] flex justify-center items-center sm:gap-3 gap-1 bg-green-600 text-white px-6 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-green-700 font-semibold"
                        >
                            Go to Dashboard <ArrowRight size={22} />
                        </Link>
                    ) : (
                        <Link
                            to="/signup"
                            className="tracking-[1px] flex justify-center items-center sm:gap-3 gap-1 bg-btn text-white px-6 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-0.5 font-semibold"
                        >
                            Sign up with email <ArrowRight size={22} />
                        </Link>
                    )}
                </div>

                {/* <div className="icons">
                    <img src="./icons.svg" alt="" />
                </div> */}
            </div>
        </main>
    );
};

export default HeroSection;
