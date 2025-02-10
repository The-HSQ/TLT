import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 bg-white z-[100000] w-full flex border-b border-gray-300 justify-center items-center px-5 py-4">
            <div className="container flex justify-between items-center">
                {/* Logo */}
                <Link to="/">
                    <h1 className="cursor-pointer text-4xl font-bold">TLT</h1>
                </Link>
            </div>
        </header>
    );
};

const Main_Container = () => {
    return (
        <div className=" flex flex-col justify-center items-center ">

            <div className=" container flex flex-col justify-between items-center ">

                <div className=" mt-[70px] flex flex-col lg:flex-row items-center justify-between p-5 lg:px-5 lg:py-20 bg-white ">
                    {/* Left Content */}
                    <div className="lg:w-1/2 text-left mb-10 lg:mb-0">
                        <h1 className="text-4xl text-balance lg:text-5xl font-bold text-gray-900">
                            Get a demo of the AI platform built exclusively for marketing teams
                        </h1>
                        <p className="text-gray-600 mt-4">
                            Get a demo to better understand how to:
                        </p>
                        <ul className="text-gray-600 list-disc list-inside mt-2">
                            <li>Use AI to create on-brand content wherever you work</li>
                            <li>Showcase practical AI use cases for your whole team</li>
                            <li>Better understand TLT’s capabilities & ROI</li>
                        </ul>
                        <p className="mt-6 text-gray-500 text-sm">Trusted by 20% of the Fortune 500</p>
                    </div>

                    {/* Right Form */}
                    <div className="lg:w-1/2 max-w-lg w-full border border-gray-300 bg-gray-100 p-6 rounded-lg shadow-md">
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-700">Business Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your work email"
                                    className="w-full p-3 border rounded-lg outline-none "
                                />
                            </div>
                            <div className="flex flex-col md:flex-row space-x-4 space-y-4">
                                <div className=" w-full md:w-1/2">
                                    <label className="block text-sm text-gray-700">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your first name"
                                        className="w-full p-3 border rounded-lg outline-none "
                                    />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <label className="block text-sm text-gray-700">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your last name"
                                        className="w-full p-3 border rounded-lg outline-none "
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-700">Company Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your company’s name"
                                    className="w-full p-3 border rounded-lg outline-none "
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-700">Marketing Team Size</label>
                                <select className="w-full p-3 border rounded-lg outline-none ">
                                    <option>Select marketing team size</option>
                                    <option>1-10</option>
                                    <option>11-50</option>
                                    <option>51-200</option>
                                    <option>201+</option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gray-400 text-white py-3 rounded-lg text-lg font-semibold cursor-not-allowed"
                            >
                                Get a Demo
                            </button>
                        </form>
                        <p className="text-xs text-gray-500 text-center mt-4">
                            By submitting this form, you agree to TLT’s <Link to="#" className="text-blue-500">Terms of Service</Link> and <Link to="#" className="text-blue-500">Privacy Policy</Link>.
                        </p>
                        <p className="text-center mt-4 text-gray-700">
                            Ready to get started with TLT? <Link to="/signup" className="text-blue-500">Start Free Trial →</Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

const Demo = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* Header */}
            < Header />

            {/* Main_Container */}
            <Main_Container />

            {/* Footer */}
            < Footer />
        </>
    );
};

export default Demo;
