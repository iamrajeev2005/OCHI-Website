import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Play from "./components/Play";
import Featured from "./components/Featured";
import Reviews from "./components/Reviews";
import LocomotiveScroll from "locomotive-scroll";
import Cards from "./components/Cards";
import ReadyStart from "./components/ReadyStart";
import Footer from "./components/Footer";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="h-screen w-full relative">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Play />
      <Featured />
      <Reviews />
      <Cards />
      <ReadyStart />
      <Footer />
    </div>
  );
}

export default App;
