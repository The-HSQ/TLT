import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const OurMission = () => {
    const [triggerAnimation, setTriggerAnimation] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setTriggerAnimation(false); // Stop animation
            setTimeout(() => setTriggerAnimation(true), 1000); // Restart animation smoothly
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    // Trigger animation on page load
    useEffect(() => {
        setTriggerAnimation(true);
    }, []);

    // Animation variants
    const popupVariant = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut", delay: i * 0.5 },
        }),
    };

    return (
        <div className="px-[1rem] sm:px-[2rem] lg:px-[2.5rem]"
            style={{
                backgroundImage: "url('/company/mission/bg.avif')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="text-[#262627] py-10 sm:py-34 custom-container mx-auto flex flex-col justify-center items-center gap-3">
                <h2 className="text-xl font-medium">Our Mission</h2>

                <div className="flex flex-col tracking-[-1px] text-xl ss:text-4xl sh:text-6xl lg:text-7xl items-center gap-2">
                    {/* First Line */}
                    <motion.div
                        className="flex items-center gap-1 px-3 py-1 rounded-xl bg-green-100 border border-green-300"
                        style={{
                            backgroundImage: "url('/company/mission/bg_txt.avif')",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                        initial="hidden"
                        animate={triggerAnimation ? "visible" : "hidden"}
                        variants={popupVariant}
                        custom={0}
                    >
                        <img className="w-8 ss:w-12 sh:w-13 lg:w-15" src="/company/mission/Mission_1.svg" alt="" />
                        <span className="text-black font-medium">Elevate all marketing</span>
                    </motion.div>

                    {/* Second Line */}
                    <motion.div
                        className="flex items-center gap-1 px-3 py-1 rounded-xl bg-blue-100 border border-blue-300"
                        style={{
                            backgroundImage: "url('/company/mission/bg_txt.avif')",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                        initial="hidden"
                        animate={triggerAnimation ? "visible" : "hidden"}
                        variants={popupVariant}
                        custom={1}
                    >
                        <span className="text-black font-medium"> & all </span>
                        <img className="w-8 ss:w-12 sh:w-13 lg:w-15" src="/company/mission/Mission_2.svg" alt="" />
                        <span className="text-black font-medium">marketers</span>
                    </motion.div>

                    {/* Third Line */}
                    <motion.div
                        className="flex items-center gap-1 px-3 py-1 rounded-xl bg-purple-100 border border-purple-300"
                        style={{
                            backgroundImage: "url('/company/mission/bg.avif')",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                        initial="hidden"
                        animate={triggerAnimation ? "visible" : "hidden"}
                        variants={popupVariant}
                        custom={2}
                    >
                        <span className="text-black font-medium">with the power of AI</span>
                        <img className="w-8 ss:w-12 sh:w-13 lg:w-15" src="/company/mission/Mission_3.svg" alt="" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default OurMission;
