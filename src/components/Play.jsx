import React, { useEffect, useState } from "react";

function Play() {
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
    <div className=' relative h-screen w-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
      <div className="w-fit h-fit absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[40%] flex gap-10">
        <div className=" relative rounded-full w-[14vw] h-[14vw] bg-white">
          <div className="rounded-full absolute w-[8vw] h-[8vw] bg-zinc-900 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <h5 className="text-white text-xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              Play
            </h5>
            <div
              style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
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
              style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
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

export default Play;
