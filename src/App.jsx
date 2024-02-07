import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Play from "./components/Play";
import Featured from "./components/Featured";
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
    </div>
  );
}

export default App;
