import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full bg-[#004D43] py-24 rounded-tl-2xl rounded-tr-2xl"
    >
      <div className="flex items-center border-t-[1px] border-b-[1px] border-zinc-400 whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: "0 " }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[30vw] -mt-[6.2vw] -mb-[2.8vw] tracking-normal font-[FG] text-white font-semibold leading-none pr-[2vw]"
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[30vw] -mt-[6.2vw] -mb-[2.8vw] tracking-normal font-[FG] text-white font-semibold leading-none pr-[2vw]"
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
