import React from "react";
import { motion } from "framer-motion";

const AnimatedGrid = () => {
  return (
    <div className="relative w-full h-[250px] overflow-hidden bg-[#1C1C1C]">
      <div className=" absolute -left-12 w-[110%] inset-0 bg-grid-two "></div>
      <motion.div
        className="absolute -left-6 rotate-5 -top-[50px] w-[110%] h-[450px] inset-0 bg-grid "
        animate={{ backgroundPosition: ["0% 0%", "90px 90px"] }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
      ></motion.div>
      <style>
        {`
          .bg-grid {
            background-image: 
              repeating-linear-gradient(
                to top,
                rgba(61, 42, 102, 1),
                rgba(61, 42, 102, 1),
                transparent 2px,
                transparent 90px
              );
            // transform: rotate(3deg);
            }
            
            .bg-grid-two {
              background-image: 
              repeating-linear-gradient(
                to right,
                rgba(61, 42, 102, 1),
                rgba(61, 42, 102, 1),
                transparent 2px,
                transparent 90px
                );
                // transform: rotate(3deg);
          }
        `}
      </style>
    </div>
  );
};

export default AnimatedGrid;
