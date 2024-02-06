import React from "react";

function Hero() {
  return (
    <div className="w-full h-screen bg-zinc-100 pt-1 ">
      <div className="px-12 font-[FG] font-bold mt-36 tracking-tighter text-zinc-800">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div className="flex items-center">
              {index === 1 && (
                <div className="h-[6.1vw] w-[9.5vw] bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-cover rounded-lg mr-[.8vw] relative top-2"></div>
              )}
              <div className="text-9xl w-fit leading-[7vw]">{item}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hero;
