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
        <main className="bg-gradient-to-b via-bgGradVia to-[#7E45DB] md:px-[2rem] lg:px-[2.5rem] flex flex-col items-center justify-start min-h-screen ">
            <div className=" custom-container flex flex-col gap-6 items-center justify-center py-26 lg:py-32 2xl:py-46 ">
                <h1 className="md:tracking-[-3px] text-center text-balance text-[#262626] md:text-7xl xs:text-5xl text-4xl font-medium flex flex-col ">
                    The AI your
                    <span className=" text-balance ">
                        marketing deserves
                    </span>
                </h1>

                <div className="text">
                    <p className=" hidden xs:block text-[#2b2b2b] px-3 md:text-lg sm:text-lg text-base text-center text-pretty ">
                        Elevate your team, your brand, and your impact <br/> with AI that's built for marketing.
                    </p>
                    <p className=" xs:hidden text-[#2b2b2b] px-3 md:text-lg sm:text-lg text-base text-center text-pretty ">
                        Elevate your team, your brand, and your impact with AI that's built for marketing.
                    </p>
                </div>

                <div className="button">
                    {isAuthenticated ? (
                        <Link
                            to="/dashhome"
                            className="tracking-[1px] flex justify-center items-center sm:gap-3 gap-1 bg-green-600 text-white px-6 py-3 rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-green-700 font-semibold"
                        >
                            Go to Dashboard <ArrowRight size={22} />
                        </Link>
                    ) : (
                        <Link
                            to="/signup"
                            className="tracking-[1px] flex justify-center items-center sm:gap-3 gap-1 bg-btn text-white px-6 py-3 rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-0.5 font-semibold"
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
