import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Play from "./components/Play";
import Featured from "./components/Featured";
import Reviews from "./components/Reviews";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="h-screen w-full  relative">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Play />
      <Featured />
      <Reviews/>
    </div>
  );
}

export default App;
