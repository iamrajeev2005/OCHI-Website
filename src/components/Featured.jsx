import React from "react";

function Featured() {
  const data = [
    {
      name: "FYDE",
      src: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
      tags: {
        tag1: "AUDIT",
        tag2: "COPYWRITING",
        tag3: "SALES DECK",
        tag4: "SLIDES DESIGN",
      },
    },
    {
      name: "VISE",
      src: "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg",
      tags: {
        tag1: "AGENCY",
        tag2: "COMPANY PRESENTATION",
      },
    },
    {
      name: "TRAWA",
      src: "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg",
      tags: {
        tag1: "BRAND IDENTITY",
        tag2: "DESIGN RESEARCH",
        tag3: "INVESTOR DECK",
      },
    },
    {
      name: "PREMUIM BLEND",
      src: "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png",
      tags: {
        tag1: "BRANDED TEMPLATE",
      },
    },
  ];

  return (
    <div className="w-full min-h-screen bg-zinc-100  pt-28">
      <h1 className="text-5xl font-[NU] px-12 text-[#181616]">
        Featured projects
      </h1>
      <div className="w-full border-t-[1px] border-[#9c9c9c] mt-10"></div>
      <div className="card-container w-full px-12 py-10 flex gap-4">
        <div className="card w-1/2 ">
          <h5 className="text-sm">
            <span className="inline-block h-3 w-3 bg-zinc-900 rounded-full mr-2"></span>
            FYDE
          </h5>
          <div className="card-img w-full py-3 hover:scale-[.98] transition ease-out duration-800 overflow-hidden rounded-lg">
            <img
              className="card-img h-full w-full object-cover rounded-lg"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt=""
            />
          </div>
          <div className="tag flex items-center gap-3 text-sm">
            <a
              className="py-1 px-3 border border-zinc-900 rounded-full"
              href=""
            >
              AUDIT
            </a>
            <a
              className="py-1 px-3 border border-zinc-900 rounded-full"
              href=""
            >
              COPYWRITING
            </a>
            <a
              className="py-1 px-3 border border-zinc-900 rounded-full"
              href=""
            >
              SALES DECK
            </a>
            <a
              className="py-1 px-2 border border-zinc-900 rounded-full"
              href=""
            >
              SLIDES DESIGN
            </a>
          </div>
        </div>
        <div className="card w-1/2 ">
          <h5 className="text-sm">
            <span className="inline-block h-3 w-3 bg-zinc-900 rounded-full mr-2"></span>
            FYDE
          </h5>
          <div className="card-img w-full py-3 ">
            <img
              className="h-full w-full object-cover  rounded-lg"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt=""
            />
          </div>
          <div className="tag flex items-center gap-3 text-sm">
            <a
              className="py-1 px-3 border border-zinc-900 rounded-full"
              href=""
            >
              AUDIT
            </a>
            <a
              className="py-1 px-3 border border-zinc-900 rounded-full"
              href=""
            >
              COPYWRITING
            </a>
            <a
              className="py-1 px-3 border border-zinc-900 rounded-full"
              href=""
            >
              SALES DECK
            </a>
            <a
              className="py-1 px-2 border border-zinc-900 rounded-full"
              href=""
            >
              SLIDES DESIGN
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
