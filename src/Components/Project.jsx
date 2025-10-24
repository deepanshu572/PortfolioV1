import React from "react";
import reactLogo from "../assets/react.svg";
import talwind from "../assets/talwind.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import robot from "../assets/robot.png";
import kalam from "../assets/kalam.png";
import mygalla from "../assets/mygalla.png";
import yt from "../assets/yt.png";
import portfolio from "../assets/portfolio.png";
import Cyber from "../assets/cyber.png";

import mygallaApp from "../assets/mygallaApp.png";
import myntra from "../assets/myntra.png";
import expoApe from "../assets/expo.png";
import framer from "../assets/framer.png";
import Gsap from "../assets/Gsap.png";
import { motion } from "motion/react";

const Project = () => {
  const projectData = [
    {
      id: 1,
      class: "Expo",
      name: "ExpoApe - agency website",
      desc: "Developed a responsive e-commerce website using React.js and Core CSS, replicating Myntra’s UI and core features like product listing, cart, and wishlist. Focused on clean components and state management with React hooks.",
      img: expoApe,
      link: "https://expoace.vercel.app/",
      skills: [
        { name: "React", img: reactLogo },
        { name: "talwind", img: talwind },
        { name: "framer", img: framer },
        { name: "Gsap", img: Gsap },
      ],
    },
    {
      id: 2,
      class : "yt",
      name: " Youtube Clone",
      desc: " I built a responsive and optimized website for Kalam Academy, an IT company offering courses like Digital Marketing (DM) and Web Development (WDC), using HTML, core CSS without using any library, and Vanilla JavaScript",
      img: yt,
      link: "https://you-tube-v3.vercel.app/",
      skills: [
        { name: "React", img: reactLogo },
        { name: "css", img: css },
        { name: "talwind", img: talwind },

      ],
    },
    {
      id: 3,
      class :"portfolio",
      name: "Portfolio",
      desc: " I built a responsive and optimized website for Kalam Academy, an IT company offering courses like Digital Marketing (DM) and Web Development (WDC), using HTML, core CSS without using any library, and Vanilla JavaScript",
      img: portfolio,
      link: "https://portfolio-v1-wine-eight.vercel.app/",
      skills: [
         { name: "React", img: reactLogo },
        { name: "talwind", img: talwind },
        { name: "framer", img: framer },
        { name: "Gsap", img: Gsap },
      ],
    },
    {
      id: 4,
      class: "myntra",
      name: "Myntra Clone – React + Core CSS",
      desc: "Developed a responsive e-commerce website using React.js and Core CSS, replicating Myntra’s UI and core features like product listing, cart, and wishlist. Focused on clean components and state management with React hooks.",
      img: myntra,
      link: "https://myntra-umber.vercel.app/",
      skills: [
        { name: "React", img: reactLogo },
        { name: "css", img: css },
      ],
    },
    {
      id: 5,
      class :"kalam",
      name: "KALAM ACADEMY",
      desc: " I built a responsive and optimized website for Kalam Academy, an IT company offering courses like Digital Marketing (DM) and Web Development (WDC), using HTML, core CSS without using any library, and Vanilla JavaScript",
      img: kalam,
      link: "https://www.kalamacademy.org/",
      skills: [
        { name: "html", img: html },
        { name: "css", img: css },
        { name: "js", img: js },
      ],
    },

    // {
    //   id: 6,
    //   class :"robot",
    //   name: "Robotic Branding Website",
    //   desc: " I built a responsive and optimized website for Kalam Academy, an IT company offering courses like Digital Marketing (DM) and Web Development (WDC), using HTML, core CSS without using any library, and Vanilla JavaScript",
    //   img: robot,
    //   link: "https://robotbranding-v3.vercel.app/",
    //   skills: [
    //     { name: "React", img: reactLogo },
    //     { name: "talwind", img: talwind },
    //   ],
    // },
    {
      id: 6,
      class :"Cyber",
      name: "CYBERFICTION ANIMATED WEBSITE",
      desc: " I built a responsive and optimized website for Kalam Academy, an IT company offering courses like Digital Marketing (DM) and Web Development (WDC), using HTML, core CSS without using any library, and Vanilla JavaScript",
      img: Cyber,
      link: "https://cyberfiction-ruddy.vercel.app/",
      skills: [
        { name: "React", img: reactLogo },
        { name: "talwind", img: talwind },
      ],
    },
    
    
  ];

  return (
    <div className="project_wrapper sm:w-[80%] m-auto my-20" id="project">
      <div className="projects_sec font1 italic text-4xl text-center flex items-center justify-center gap-2 ">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{
            ease: [0.22, 1, 0.36, 1],
            duration: 3,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          className="bgleft"
        ></motion.div>
        <div className="overflow-hidden">
          <motion.h3
            transition={{
              ease: [0.22, 1, 0.36, 1],
              duration: 3,
            }}
            initial={{ y: "80%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
          >
            PROJECTS
          </motion.h3>
        </div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          transition={{
            ease: [0.22, 1, 0.36, 1],
            duration: 3,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          className="bgright"
        ></motion.div>
      </div>

      <motion.p
        className="text-center mb-10 text-sm"
        transition={{
          ease: [0.22, 1, 0.36, 1],
          duration: 3,
        }}
        initial={{ y: "80%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
      >
        Each project is a unique piece of development 🧩
      </motion.p>
      <div className="projects-box flex items-center justify-center gap-5 flex-wrap p-2 mb-5">
        {projectData.map((item, index) => {
          return (
            <div className="main_box shadow">
              <motion.div viewport={{once: "true"}}  transition={{
              ease: [0.22, 1, 0.36, 1],
              duration: 2,
              delay : 1
            }}
            initial={{  opacity: 0 }}
            whileInView={{  opacity: 1 }}  className="sm:w-70 sm:h-45 w-86 h-52 overflow-hidden rounded-2xl smooth ">
                <a target="_blank" href={item.link}>
                  <img className={` w-full ${item.class} `} src={item.img} alt="" />
                </a>
              </motion.div>
              <div className="py-3">
                <div className="overflow-hidden">
                <motion.p className="text-xs  pb-1" viewport={{once: "true"}} transition={{
              ease: [0.22, 1, 0.36, 1],
              duration: 1
            }}
            initial={{ y: "80%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }} >{item.name} </motion.p>
            </div>
                {/* <p className="text-sm text_cover">{item.desc}</p> */}
                <div className="flex items-center gap-1">
                  <motion.p viewport={{once: "true"}}  transition={{
              ease: [0.22, 1, 0.36, 1],
              duration: 1,
            }}
            initial={{ y: "80%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }} className="text-[10px] text-gray-500 uppercase">
                    tech stack |{" "}
                  </motion.p>
                  {item.skills.map((item, index) => {
                    return (
                      <motion.div
                      viewport={{once: "true"}} 
                      transition={{
              ease: [0.22, 1, 0.36, 1],
              duration: 1,
               delay : 1
            }}
            initial={{ y: "80%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
                        className={` w-7 h-7 p-1.5 bg-[#fdf9f92b] ml-1 rounded-full ${
                          item.name === "React" ? "react" : ""
                        }`}
                      >
                        <img
                          className="w-full h-full object-contain"
                          src={item.img}
                          alt=""
                        />
                      </motion.div>
                    );
                  })}
                </div>
                {/* <div className="">
                  <a target="_blank" href={item.link}>
                    <span>
                      Live demo
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-external-link"
                      >
                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                        <path d="M11 13l9 -9"></path>
                        <path d="M15 4h5v5"></path>
                      </svg>
                    </span>
                  </a>
                </div> */}
              </div>
            </div>
          );
        })}
        {/* <div className="project1" id="project6">
          <div className="circle circle1"></div>
          <div className="left">
            <a target="_blank" href="https://myntra-umber.vercel.app/">
              <img className="myntra" src={myntra} alt="" />
            </a>
          </div>
          <div className="right">
            <b>🧩 Myntra Clone – React + Core CSS </b>
            <p>
              Developed a responsive e-commerce website using React.js and Core
              CSS, replicating Myntra’s UI and core features like product
              listing, cart, and wishlist. Focused on clean components and state
              management with React hooks.
            </p>
            <div className="needs">
              <div className="needs_skills_img react">
                <img src={reactLogo} alt="" />
                <p>React</p>
              </div>
              <div className="needs_skills_img">
                <img src={css} alt="" />
                <p>core css</p>
              </div>
            </div>
            <div className="source">
              <a target="_blank" href="https://myntra-umber.vercel.app/">
                <span>
                  Live demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-external-link"
                  >
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="project1" id="project1">
          <div className="circle circle2"></div>
          <div className="right">
            <div className="head_name">
              <h1>🤖 Robotic Branding Website </h1>
            </div>
            <p>
              {" "}
              I developed a responsive and optimized website for Robotic
              Branding using React.js and Tailwind CSS, focused on modern web
              design, clean UI, and a smooth user experience..
            </p>
            <div className="needs ">
              <div className="needs_skills_img react">
                <img src={reactLogo} alt="" />

                <p>React</p>
              </div>
              <div className="needs_skills_img">
                <img src={talwind} alt="" />
                <p>Talwind css</p>
              </div>
            </div>
            <div className="source">
              <a target="_blank" href="https://robotbranding-v3.vercel.app/">
                <span>
                  Live demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-external-link"
                  >
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="left">
            <a target="_blank" href="https://robotbranding-v3.vercel.app/">
              <img className="rob" src={robot} alt="" />
            </a>
          </div>
        </div>
        <div className="project1" id="project2">
          <div className="circle circle1"></div>
          <div className="left">
            <a target="_blank" href="https://www.kalamacademy.org/">
              <img className="imdb" src={kalam} alt="" />
            </a>
          </div>
          <div className="right">
            <b>🏫 KALAM ACADEMY </b>
            <p>
              {" "}
              I built a responsive and optimized website for Kalam Academy, an
              IT company offering courses like Digital Marketing (DM) and Web
              Development (WDC), using HTML, core CSS without using any library,
              and Vanilla JavaScript.
            </p>
            <div className="needs">
              <div className="needs_skills_img">
                <img src={html} alt="" />
                <p>HTML</p>
              </div>
              <div className="needs_skills_img">
                <img src={css} alt="" />
                <p>core css</p>
              </div>
              <div className="needs_skills_img">
                <img src={js} alt="" />
                <p>Js</p>
              </div>
            </div>
            <div className="source">
              <a target="_blank" href="https://www.kalamacademy.org/">
                <span>
                  Live demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-external-link"
                  >
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="project1" id="project3">
          <div className="circle circle2"></div>
          <div className="right">
            <b>🛒myGalla </b>
            <p>
              {" "}
              I built a responsive app branding website for myGalla using HTML,
              Core CSS, and Vanilla JavaScript, without using any libraries. The
              project focused on clean design, performance optimization, and a
              smooth user experience.
            </p>
            <div className="needs">
              <div className="needs_skills_img">
                <img src={html} alt="" />
                <p>HTML</p>
              </div>
              <div className="needs_skills_img">
                <img src={css} alt="" />
                <p>core css</p>
              </div>
              <div className="needs_skills_img">
                <img src={js} alt="" />
                <p>Js</p>
              </div>
            </div>
            <div className="source">
              <a target="_blank" href="https://mygalla.com/">
                <span>
                  Live demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-external-link"
                  >
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="left">
            <a target="_blank" href="https://mygalla.com/">
              <img className="myGalla galla" src={mygalla} alt="" />
            </a>
          </div>
        </div>
        <div className="project1" id="project4">
          <div className="circle circle1"></div>
          <div className="left">
            <a target="_blank" href="https://you-tube-v3.vercel.app/">
              <img className="yt" src={yt} alt="" />
            </a>
          </div>
          <div className="right">
            <b>🎬 Youtube Clone </b>
            <p>
              {" "}
              Developed a fully responsive YouTube Clone using React and the
              YouTube API. Implemented key features such as video search, video
              playback, channel details, and related video suggestions. Focused
              on clean UI, efficient state management, and API integration to
              mimic the core functionalities of YouTube.
            </p>
            <div className="needs">
              <div className="needs_skills_img">
                <img src={reactLogo} alt="" />

                <p>React</p>
              </div>
              <div className="needs_skills_img">
                <img src={talwind} alt="" />
                <p>Talwind css</p>
              </div>
            </div>
            <div className="source">
              <a target="_blank" href="https://you-tube-v3.vercel.app/">
                <span>
                  Live demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-external-link"
                  >
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="project1" id="project5">
          <div className="circle circle1"></div>

          <div className="right">
            <b>🛍️ MyGalla – Responsive E-Commerce Website with Admin Panel</b>
            <p>
              MyGalla is a fully responsive, modern, and user-centric e-commerce
              web application designed to offer a seamless shopping experience
              across all devices. This project includes both a customer-facing
              storefront and a fully integrated admin panel for managing the
              platform efficiently.
            </p>
            <div className="needs">
              <div className="needs_skills_img">
                <img src={html} alt="" />
                <p>HTML</p>
              </div>
              <div className="needs_skills_img">
                <img src={css} alt="" />
                <p>css</p>
              </div>
              <div className="needs_skills_img">
                <img src={js} alt="" />
                <p>Js</p>
              </div>
            </div>
            <div className="source">
              <a target="_blank" href="https://ecommerce-mg-seven.vercel.app/">
                <span>
                  Live demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-external-link"
                  >
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="left">
            <a target="_blank" href="https://ecommerce-mg-seven.vercel.app/">
              <img className="gallaApp" src={mygallaApp} alt="" />
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Project;
