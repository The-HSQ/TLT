import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from "framer-motion";

const SolutionFAQ = ({ bgColor, txtColor, bdColor, data }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    
    return (
        <div className={` bg-${bgColor} flex justify-center py-20 px-[1rem] sm:px-[2rem] lg:px-[2.5rem] `} >
            <div className=" custom-container flex flex-col 2md:flex-row gap-10 2md:gap-[7%] ">
                {/* left side */}
                <div
                    className={` hidden border ${bgColor == 'white' ? 'bg-gray-200 border-gray-300 ' : 'bg-[#313033] border-gray-900'}  rounded-2xl px-8 py-8 2md:block relative w-[43%] h-auto shadow-xl `}
                    style={{ backgroundImage: "url('/solutions/bgGrid.svg')", backgroundPosition: "center" }}
                >
                    <div className=" sticky top-[5rem] -mt-[2.4rem] left-0 flex md:w-[100%] flex-col overflow-hidden py-8 items-start">
                        <motion.img
                            key={data[activeIndex].image}
                            src={data[activeIndex].image}
                            alt={data[activeIndex].title}
                            className="w-full h-auto object-cover z-10 rounded-2xl shadow-lg"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.img
                            key={data[activeIndex]['comment-image']}
                            src={data[activeIndex]['comment-image']}
                            alt={data[activeIndex].title}
                            className=" lg:w-[200px] xl:w-[250px] 2xl:w-[300px] h-full ml-3 -mt-20 object-cover z-20 "
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </div>
                {/* mobile left section */}
                <div className=" 2md:hidden ">
                    <img className=" w-full h-76 sm:h-auto object-cover z-10 rounded-lg shadow-lg"
                        src="/solutions/faqOne_1.avif" alt="" />
                    <img className=" w-[200px] h-auto ml-3 -mt-20 object-cover z-20 "
                        src="/solutions/faqOne_1.svg" alt="" />
                </div>

                {/* right side */}
                <div className=" w-[100%] 2md:w-[50%] flex flex-col justify-center ">
                    <h2 className={` text-${txtColor} text-5xl sm:text-6xl font-medium text-balance pb-10 `} >Solutions By Role</h2>
                    {data.map((item, index) => (
                        <div
                            onClick={() => { if (index >= 0 && index < data.length) setActiveIndex(index) }}
                            key={index}
                            className={` w-full py-8 flex flex-col gap-6 border-b border-gray-300 last:rounded-bl `}
                        >
                            <div className={` text-${txtColor} flex justify-between items-center `}>
                                <h3 className="text-xl md:text-3xl font-semibold">{item.title}</h3>
                                <span className={` px-1 rounded border border-${bdColor} flex justify-center items-center `} > <ChevronDown strokeWidth={1.3} /> </span>
                            </div>

                            {
                                activeIndex === index ?
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={activeIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className={` text-${txtColor} flex flex-col gap-6 `}>
                                        <p className=' text-base sm:text-lg ' >{item.description}</p>
                                        <button className=" text-base px-5 py-2 hover:cursor-pointer rounded border w-fit">
                                            {item.buttonName}
                                        </button>
                                    </motion.div> : ''
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SolutionFAQ
