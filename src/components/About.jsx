import React from "react";

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.2"
      className="w-full min-h-screen bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl"
    >
      <div className="pt-20 px-12 pb-10">
        <h1 className="text-[3.8vw] font-[NU] leading-[4vw] text-[#212121] w-[80vw]">
          Ochi is a strategic partner for fast-grow­ing tech businesses that
          need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire
          great peo­ple.
        </h1>
      </div>
      <div className="flex w-full border-t-[1px] border-[#99AD53] pt-4 pb-20">
        <div className="w-1/2 px-12 text-zinc-800 font-[NU]">
          <h4>What you can expect:</h4>
        </div>
        <div className="w-1/2 text-zinc-800 flex font-[NU] gap-32">
          <div className="flex flex-col gap-6">
            <p className="w-[21vw]">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </p>
            <p className="w-[20vw]">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className="text-zinc-800 font-[NU] flex flex-col gap-4 mt-[5vw]">
            <h4>S:</h4>
            <div className="flex flex-col">
              <a href="">Instagram</a>
              <a href="">Behance</a>
              <a href="">Facebook</a>
              <a href="">Linkedin</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-[#99AD53] px-12 pt-4 w-full flex">
        <h1 className="w-1/2 text-zinc-900 text-5xl font-[NU]">
          Our approach:
        </h1>
        <div className="w-1/2 h-fit pb-12">
          <img
            className="rounded-lg"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
