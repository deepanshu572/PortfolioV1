import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Project from "./Components/Project";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  const wrapBox = useRef(null);
  const crs = useRef(null);
  function coursourAnimation() {
    document.addEventListener("mousemove", function (dets) {
      gsap.to(crs.current, {
        left: dets.x,
        top: dets.y,
      });
    });
  }
  useEffect(() => {
    coursourAnimation();
  }, []);
  const handleNav = (dets) => {
    console.log(dets);
    if (dets === true) {
      wrapBox.current.style.display = "block" 
    }
  };

  return (
    <>
      <div
        className="crsr w-8 h-8  rounded-full fixed z-[1090]"
        ref={crs}
      ></div>

      <Loader handleNav={handleNav} />
      <div className="main relative" ref={wrapBox}>
        <Navbar />
        <Hero />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
