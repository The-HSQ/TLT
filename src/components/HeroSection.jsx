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
        <main className="bg-gradient-to-b via-bgGradVia to-[#7E45DB] flex flex-col items-center justify-start px-2 min-h-screen ">
            <div className="container flex flex-col gap-6 items-center justify-center py-20 lg:py-32 2xl:py-46 ">
                <h1 className="text-center text-[#262626] md:text-7xl xs:text-5xl text-4xl font-medium flex flex-col ">
                    AI that writes
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
            </div>
        </main>
    );
};

export default HeroSection;
