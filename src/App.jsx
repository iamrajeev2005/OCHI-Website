import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";

function App() {
  return (
    <div className="h-screen w-full  relative">
      <Navbar />
      <Hero/>
      <Marquee/>
    </div>
  );
}

export default App;
