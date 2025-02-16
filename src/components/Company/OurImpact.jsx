import React from 'react'

const stats = [
    { value: "100k+", label: "Customers" },
    { value: "20%", label: "of the Fortune 500" },
    { value: "547k+", label: "brand configurations created" },
    { value: "49 billion+", label: "words generated" },
];

const OurImpact = () => {
    return (
        <div className=' px-[1rem] sm:px-[2rem] lg:px-[2.5rem] py-10 '>
            {/* Main Container */}
            <div className=" custom-container mx-auto w-full h-full flex flex-col gap-4 ">
                <h3 className=' tracking-[-0.4px] text-xl text-center font-medium ' >Our Impact</h3>
                <h2 className=' tracking-[-3px] text-5xl text-center text-pretty font-medium ' >How we show up</h2>
                <div className="mt-4 grid grid-cols-2 2md:grid-cols-4 gap-4 ">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-300 rounded-2xl shadow-md text-center p-6 2md:p-10 flex flex-col justify-center items-center "
                        >
                            <p className="text-pretty text-3xl xs:text-4xl md:text-4xl font-semibold">{stat.value}</p>
                            <p className="text-gray-500 text-sm md:text-base">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurImpact

