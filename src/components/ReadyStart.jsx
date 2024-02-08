import React, { useEffect, useState } from "react";

function ReadyStart() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let x = e.clientX;
      let y = e.clientY;

      let deltaX = x - window.innerWidth / 2;
      let deltaY = y - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  }, []);
  return (
    <div
      className=" relative w-full min-h-screen bg-[#CDEA68] flex items-center justify-center flex-col font-[FG] leading-none"
    >
      <h1 className="text-[17vw] leading-[13vw] text-[#212121]">READY</h1>
      <h1 className="text-[17vw] leading-[13vw] text-[#212121]">TO START</h1>
      <h1 className="text-[17vw] leading-[13vw] text-[#212121]">
        THE PROJECT ?
      </h1>
      <button className="font-[NU] mt-8 py-4 text-sm px-5 bg-zinc-800 text-white rounded-full">
        START THE PROJECT
      </button>
      <div className="w-fit h-fit absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[40%] flex gap-10">
        <div className=" relative rounded-full w-[14vw] h-[14vw] bg-white">
          <div className="rounded-full absolute w-[8vw] h-[8vw] bg-zinc-900 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <h5 className="text-white text-xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              Play
            </h5>
            <div
              style={{
                transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
              }}
              className="line w-full relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
            >
              <div className="bg-white rounded-full w-[1.3vw] h-[1.3vw]"></div>
            </div>
          </div>
        </div>
        <div className=" relative rounded-full w-[14vw] h-[14vw] bg-white">
          <div className="rounded-full absolute w-[8vw] h-[8vw] bg-zinc-900 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <h5 className="text-white text-xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              Play
            </h5>
            <div
              style={{
                transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
              }}
              className="line w-full relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
            >
              <div className="bg-white rounded-full w-[1.3vw] h-[1.3vw]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadyStart;
