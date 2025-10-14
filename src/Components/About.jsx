import React from "react";
import dk from "../assets/dk.png";
import cv from "../assets/document/CV.pdf";
import { motion } from "motion/react";
import BlurText from "./DecryptedText";

import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className="about_page my-20 " id="about">
      <div className="font1  flex items-center justify-center  text-4xl mt-10 my-3 italic text-center ">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{
            ease: [0.22, 1, 0.36, 1],
            duration: 2,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          className="bgleft"
        ></motion.div>
        <div className="overflow-hidden">
          <motion.h3
            transition={{
              ease: [0.22, 1, 0.36, 1],
              duration: 2,
            }}
            initial={{ y: "80%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
          >
            About Me
          </motion.h3>
        </div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          transition={{
            ease: [0.22, 1, 0.36, 1],
            duration: 2,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          className="bgright"
        ></motion.div>
      </div>
      <div className="box_about flex px-10 pr-5 gap-15 py-5 sm:gap-2 sm:px-20 flex-col-reverse sm:flex-row-reverse items-center justify-center">
        <div className="one_wrap flex flex-row-reverse ">
          <div className="left_sec_about font2 px-7 pr-0 sm:w-3/4">
            <motion.h2
              initial={{ y: 10, opacity: 0 }}
              transition={{
                ease: [0.22, 1, 0.36, 1],
                duration: 2,
              }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-3xl font-bold pb-2"
            >
              ✌ Hello!
            </motion.h2>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              transition={{
                ease: [0.22, 1, 0.36, 1],
                duration: 2,
              }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-sm pb-2 pl-4"
            >
              I am Deepanshu Kumar
            </motion.p>
            <BlurText
              text="I’m a Frontend Developer with 1.6 years of experience at Sysroot Solution and Kalam Academy, skilled in HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, Framer Motion, and GSAP, creating responsive and engaging user interfaces."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-[13px] pl-4 text-gray-400 font2 font-light"
            />
            <div className="job">
              <div className="pb-2">
                <h3 className="py-2 pt-3">💻 Exprience</h3>
                <BlurText
                  text=" Sysroot Solution [1 year]"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-xs pl-4"
                />
                <BlurText
                  text=" Front-End Developer (UI/ UX)"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-[11px] pt-1 pl-4 text-gray-400 font2 font-light"
                />
              </div>
              <div className="pb-2">
                <BlurText
                  text="Kalam academy [6 month job + 3 month internship]"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-xs pl-4"
                />
                <BlurText
                  text=" Front-End Developer (UI/ UX)"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-[11px] pl-4 pt-1 text-gray-400 font2 font-light"
                />
              </div>
            </div>
            <div className="job">
              <div className="pb-2">
                <BlurText
                  text="🏅Acievements"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="py-2 pt-3"
                />
                <BlurText
                  text="Cordiela - Mumbai"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-xs pl-4"
                />
                <BlurText
                  text=" UI Design Selected – React Frontend Developer Interview"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-[11px] pl-4 pt-1 text-gray-400 font2 font-light"
                />
                <BlurText
                  text="Certificate - Kalam academy"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-xs pl-4 pt-2"
                />
                <BlurText
                  text="Full stack web developer "
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-[11px] pl-4 pt-1 text-gray-400 font2 font-light"
                />
                <BlurText
                  text="Certificate - Sheryians Coding School"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-xs pl-4 pt-2"
                />
                <BlurText
                  text="Advanced Fronted Development"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-[11px] pl-4 pt-1 text-gray-400 font2 font-light"
                />
              </div>
            </div>

            <motion.a
              href={cv}
              download="cv.pdf"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                ease: [0.22, 1, 0.36, 1],
                duration: 2,
              }}
              className="download text-xs mt-2 flex gap-1 px-0 py-3 sm:px-2 sm:py-2 bg-black border-1 border-gray-400 active:scale-[0.8] w-2/3 sm:w-1/3 text-center justify-center rounded-full  "
            >
              <FaDownload />
              <p>Download CV</p>
            </motion.a>
          </div>
          <motion.div
            initial={{ height: "0" }}
            whileInView={{ height: "500px" }}
            viewport={{ once: "true" }}
            transition={{ duration: 2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="line bg-gray-400 w-[1px] relative flex flex-col gap-20 "
          >
            <div className="circ absolute top-[27px] sm:top-[15px] left-[-5px] border-gray-200 bg-black rounded-full border-3 w-3 h-3"></div>
            <div className="circ absolute top-[41%] sm:top-[33%] left-[-5px] border-gray-200 bg-black rounded-full border-3 w-3 h-3"></div>
            <div className="circ absolute top-[71%] sm:top-[60%] left-[-5px] border-gray-200 bg-black rounded-full border-3 w-3 h-3"></div>
          </motion.div>
        </div>
        <div className="right_sec_about w-[26rem] sm:w-[35rem]">
          <img
            className="w-full h-full object-cover bg-remove"
            src={dk}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
