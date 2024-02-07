import React, { useEffect } from "react";

function Play() {

useEffect(() => {
    window.addEventListener("mousemove",)
},[])

  return (
    <div className=' relative h-screen w-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
      <div className="w-fit h-fit absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[40%] flex gap-10">
        <div className=" relative rounded-full w-[14vw] h-[14vw] bg-white">
          <div className="rounded-full absolute w-[8vw] h-[8vw] bg-zinc-900 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <div className="line w-full relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              <div className="bg-white rounded-full w-[1.3vw] h-[1.3vw]"></div>
            </div>
          </div>
        </div>
        <div className=" relative rounded-full w-[14vw] h-[14vw] bg-white">
          <div className="rounded-full absolute w-[8vw] h-[8vw] bg-zinc-900 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <div className="line w-full relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              <div className="bg-white rounded-full w-[1.3vw] h-[1.3vw]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Play;
