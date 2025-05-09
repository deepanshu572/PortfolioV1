import React, { useEffect, useState } from "react";
import Particles from "./Particles";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [nav, setnav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <nav className={`${scrolled ? 'topActive' : ''}`}>
        <div className="logo">ThePortfolio</div>

        <div className={`navbar ${nav ? 'navActive' : ''}`}>
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={250}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
          <ul className="nav-menu">
            <li className="nav-item">
             
              <a href="/" className="nav-link">Home</a>

            </li>
            <li className="nav-item">
            <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
            <a href="#Project" className="nav-link">Project</a>
            </li>
            <li className="nav-item">
            <a href="#Contact" className="nav-link">Contact</a>

             
            </li>
          </ul>
        </div>

        <div className={`hamburger ${nav ? 'active' : ''}`} onClick={()=>setnav(!nav)} >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
