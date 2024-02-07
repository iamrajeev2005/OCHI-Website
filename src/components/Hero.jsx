import { motion } from "framer-motion";
import React from "react";
import { IoMdArrowUp } from "react-icons/io";

function Hero() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-100 pt-1 "
    >
      <div className="px-12 font-[FG] font-bold mt-36 tracking-tighter text-zinc-800">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div className="flex items-center">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9.5vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="h-[6.1vw] w-[9.5vw] bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-cover rounded-lg mr-[.8vw] relative top-2"
                ></motion.div>
              )}
              <div className="text-9xl w-fit leading-[7vw]">{item}</div>
            </div>
          );
        })}
      </div>
      <div className="w-full border-t-[1px] mt-24 font-[NU] border-zinc-400 flex items-center justify-between px-12 py-3">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <h3
              className={`text-zinc-800 ${index === 1 && "ml-36"}  font-medium`}
            >
              {item}
            </h3>
          );
        })}
        <div className="flex items-center gap-1">
          <button className="px-3 py-1 border border-zinc-800 text-zinc-700 rounded-full text-sm">
            START THE PROJECT
          </button>
          <button className="p-2 border border-zinc-800 text-zinc-700 rounded-full text-md font-thin rotate-45">
            <IoMdArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
