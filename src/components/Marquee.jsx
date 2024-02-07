import React from "react";

function Marquee() {
  return (
    <div className="w-full bg-[#004D43] py-24 rounded-tl-2xl rounded-tr-2xl">
      <div className="flex items-center gap-2 border-t-[1px] border-b-[1px] border-zinc-400 whitespace-nowrap overflow-hidden">
        <h1 className="text-[30vw] -mt-[6.2vw] -mb-[2.8vw] tracking-normal font-[FG] text-white font-semibold leading-none">
          WE ARE OCHI
        </h1>
        <h1 className="text-[30vw] -mt-[6.2vw] -mb-[2.8vw] tracking-normal font-[FG] text-white font-semibold leading-none">
          WE ARE OCHI
        </h1>
      </div>
    </div>
  );
}

export default Marquee;
