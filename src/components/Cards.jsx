import React from "react";

function Cards() {
  const data = [
    {
      src: "https://ochi.design/wp-content/uploads/2022/04/logo002.svg",
      text: "RATING 5.0 ON CLUTCH",
    },
    {
      src: "https://ochi.design/wp-content/uploads/2022/04/logo003.png",
      text: "BUSINESS BOOTCAMP ALUMNI",
    },
  ];
  return (
    <div className="w-full min-h-screen bg-zinc-100 flex items-center justify-between  px-12">
      <div className="bg-[#004D43] w-[44vw] h-[55vh] rounded-lg flex items-center gap-2 justify-center relative">
        <img
          className="w-[10vw] h-[4vw]"
          src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          alt=""
        />
        <div className="py-1 font-[NU] absolute bottom-5 left-8 px-2 border-[#A2C960] border rounded-full">
          <h2 className="text-[#A2C960]">©2019-2022</h2>
        </div>
      </div>
      {data.map((item, index) => {
        return (
          <div className="bg-[#212121] h-[55vh] w-[23vw] rounded-lg gap-2 flex items-center justify-center relative">
            <img
              className={`${
                index === 1 ? "h-[10vw]" : "h-[5.1vw]"
              } w-[10vw] object-cover`}
              src={item.src}
              alt=""
            />
            <div className="py-1 font-[NU] absolute bottom-5 left-8 px-2 border-[#fff] border rounded-full">
              <h2 className="text-[#fff] text-sm">{item.text}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
