import React from "react";

function Reviews() {
  const data = [
    {
      name: "Planetly",
      author: "Nina Walloch",
      read: "READ",
    },
    {
      name: "Workiz Easy",
      author: "Tomer Levy",
      read: "READ",
    },
    {
      name: "Premium Blend",
      author: "Ellen Kim",
      read: "READ",
    },
    {
      name: "Hypercare Systems",
      author: "Brendan Goss",
      read: "READ",
    },
    {
      name: "Officevibe",
      author: "Raff Labrie",
      read: "READ",
    },
    {
      name: "Orderlion",
      author: "Stefan Strohmer",
      read: "READ",
    },
    {
      name: "Black Book",
      author: "Jaci Smith",
      read: "READ",
    },
    {
      name: "Trawa Energy",
      author: "David Budde",
      read: "READ",
    },
  ];
  return (
    <div className="min-h-screen w-full bg-zinc-100 pt-32 ">
      <h1 className="text-5xl font-[NU] px-12 text-[#181616]">
        Clients' reviews
      </h1>
      <div className="w-full border-t-[1px] border-[#9c9c9c] mt-10"></div>
      <div className="flex px-12 py-4 font-[NU]">
        <h3 className="text-zinc-700 whitespace-nowrap">Karman Ventures</h3>
        <div className="flex flex-col gap-3 ml-[15vw]">
          <h3 className="text-zinc-800 pb-10">Services:</h3>
          {["INVESTOR DECK", "SALES DECK"].map((item, index) => (
            <a className="text-sm text-center text-zinc-800 px-3 w-fit whitespace-nowrap py-1 border rounded-full border-[#5e5e5e]">
              {item}
            </a>
          ))}
        </div>
        <div className="flex flex-col ml-[15vw]">
          <h3 className="text-zinc-700 pb-16">William Barnes</h3>
          <div className="h-24 w-24  rounded-lg overflow-hidden">
            <img
              className="h-full w-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
              alt=""
            />
          </div>
          <p className="font-[NU] text-zinc-800 w-[74%] pt-6">
            They were transparent about the time and the stages of the project.
            The end product is high quality, and I feel confident about how they
            were handholding the client through the process. I feel like I can
            introduce them to someone who needs to put a sales deck together
            from scratch, and they would be able to handhold the client
            experience from 0 to 100 very effectively from story to design. 5/5
          </p>
        </div>
        <h5 className="text-zinc-400">READ</h5>
      </div>
      <div className="w-full border-t-[1px] border-[#9c9c9c] mt-10"></div>
      {data.map((item, index) => {
        return (
          <div className="flex px-12 py-2 text-zinc-800 font-[NU] items-center justify-between border-b-[1px] border-[#9c9c9c]">
            <h2>{item.name}</h2>
            <h2>{item.author}</h2>
            <h2>{item.read}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Reviews;
