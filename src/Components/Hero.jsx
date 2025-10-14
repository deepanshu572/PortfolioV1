import React from "react";
import reactLogo from "../assets/react.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import bootstrap from "../assets/bootstrap.svg";
import talwind from "../assets/talwind.svg";
import Gsap from "../assets/Gsap.png";
import hand from "../assets/hand.png";
import materialUi from "../assets/materialUi.png";
import framer from "../assets/framer.png";

import { motion } from "motion/react";
const Hero = () => {
  const skills = [
    {
      img: html,
    },
    {
      img: css,
    },
    {
      img: js,
    },
    {
      img: bootstrap,
    },
    {
      img: talwind,
    },
    {
      img: Gsap,
    },
    {
      img: reactLogo,
    },
    {
      img: materialUi,
    },
    {
      img: framer,
    },
  ];

  return (
    <div className="hero_Sec pt-5 sm:pb-20 relative  " id="home">
   
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="circle circle1"
      ></motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="circle circle2"
      ></motion.div>
      <div className="">
        <div className=" w-[80%] m-auto flex items-center flex-col pt-40">
          <div className="flex-img">{/* <img src={people} alt="" /> */}</div>
          <div className="text-center flex items-center justify-center flex-col">
            <div className="heading_hero">
              <div className="font1 text-5xl text-center italic mb-4 font-bold">
                <div className=" flex overflow-hidden  items-center justify-center ">
                  <motion.h1
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: 1,
                      delay: 4,
                    }}
                    initial={{ y: "40%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                  >
                    Front-End
                  </motion.h1>
                  <motion.img
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: 1,
                      delay: 4,
                    }}
                    initial={{ y: "40%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    className="w-5"
                    src={hand}
                    alt=""
                  />
                </div>
                <div>
                  <div className="overflow-hidden">
                    <motion.h1
                      className="relative"
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        duration: 1,
                        delay: 4.1,
                      }}
                      initial={{ y: "40%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                    >
                      Developer (UI/UX){" "}
                    </motion.h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden sm:w-2/3">
              <motion.p
                className=" text-[16px] text-gray-400 font2 font-light "
                transition={{
                  ease: [0.22, 1, 0.36, 1],
                  duration: 1,
                  delay: 4.1,
                }}
                initial={{ y: "40%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
              >
                Hi, I'm Deepanshu kumar. A passionate Front-end Developer
                (UI/UX) based in Ranchi,India. 🚩
              </motion.p>
            </div>

            {/* <div className="mt-2 flex gap-2">
              <div>
                <a href="https://www.linkedin.com/in/deepanshu-kr-0852a92a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <FaLinkedin  className="w-8 hidden h-8" />
                </a>
              </div>
              <div>
                <a href="https://github.com/deepanshu572/">
                  <FaGithub  className="w-8 hidden h-8" />
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="flex gap-2 p-5 flex-col sm:flex-row justify-center items-center font2">
        <motion.p
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: [0.22, 1, 0.36, 1],
            duration: 1,
            delay: 4.1,
          }}
        >
          Tech Stack
        </motion.p>
        <motion.span
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: [0.22, 1, 0.36, 1],
            duration: 1,
            delay: 4.1,
          }}
        >
          {" "}
          |{" "}
        </motion.span>
        <div className="image-flex">
          {skills.map((item, index) => {
            return (
              <motion.div
                className="img_box"
                key={index}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  ease: [0.22, 1, 0.36, 1],
                  duration: 1,
                  delay: 4.1,
                }}
              >
                <div className="img1 p-[10px] w-10 h-10 flex items-center gap-2 bg-[#ffffff14] rounded-full ">
                  <img
                    className="w-full h-full object-contain"
                    src={item.img}
                    alt=""
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
