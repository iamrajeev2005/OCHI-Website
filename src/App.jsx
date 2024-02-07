import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Play from "./components/Play";

function App() {
  return (
    <div className="h-screen w-full  relative">
      <Navbar />
      <Hero/>
      <Marquee/>
      <About/>
      <Play/>
    </div>
  );
}

export default App;
