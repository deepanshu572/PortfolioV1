import React from "react";
import reactLogo from "../assets/react.svg";
import people from "../assets/portolio.jpeg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import bootstrap from "../assets/bootstrap.svg";
import talwind from "../assets/talwind.svg";
import Gsap from "../assets/Gsap.png";
import hand from "../assets/hand.png";
import materialUi from "../assets/materialUi.png";
import Particles from "./Particles";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const Hero = () => {
  return (
    <>
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
      <div className="name">
        <div className="name1">
          {/* <div className="circle circle1"></div> */}
          <div className="circle circle2"></div>
          <div className="flex-img">
            <img src={people} alt="" />
          </div>
          <div className="flex-name">
            <div className="main-text">
              <div className="head">
                <div className="head1">
                  <h1>
                    {" "}
                    Front-End <img src={hand} alt="" />{" "}
                  </h1>
                </div>
                <div className="head2">
                  <h1>Developer (UI/UX) </h1>
                </div>{" "}
              </div>
            </div>
            <p>
              Hi, I'm Deepanshu kumar. A passionate Front-end Developer (UI/UX)
              based in Ranchi,India. 🚩
            </p>
            <div className="flex-span">
              <div >
                <a href="https://www.linkedin.com/in/deepanshu-kr-0852a92a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <FaLinkedin />
              </a>
              </div>
              <div>
                <a href="https://github.com/deepanshu572/">
              <FaGithub />
              </a>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skills">
        <p>Tech Stack</p> <span></span>
        <div className="image-flex">
          <div className="img_box">
            <div className="img1">
              <img src={html} alt="" />
            </div>
            <h6>HTML</h6>
          </div>
          <div className="img_box">
            <div className="img1">
              <img src={css} alt="" />
            </div>
            <h6>CSS</h6>
          </div>
          <div className="img_box">
            <div className="img1">
              <img src={js} alt="" />
            </div>
            <h6>JS</h6>
          </div>
          <div className="img_box">
            <div className="img1">
              <img src={bootstrap} alt="" />
            </div>
            <h6>BOOTSTRAP</h6>
          </div>
          <div className="img_box">
            <div className="img1">
              <img src={talwind} alt="" />
            </div>
            <h6>TALWIND CSS</h6>
          </div>
          <div className="img_box">
            <div className="img1">
              <img src={Gsap} alt="" />
            </div>
            <h6>GSAP</h6>
          </div>
          <div className="img_box">
            <div className="img1 react">
              <img src={reactLogo} alt="" />
            </div>
            <h6>REACT</h6>
          </div>
          <div className="img_box">
            <div className="img1">
              <img src={materialUi} alt="" />
            </div>
            <h6>MATERIAL UI</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
