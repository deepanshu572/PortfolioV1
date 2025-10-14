import React from "react";
import laptop from "../assets/laptop.png";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";
import BlurText from "./DecryptedText";
import { motion } from "motion/react";


const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className=" font1 italic text-4xl text-center flex items-center justify-center gap-2 ">
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
            CONTACT ME
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
      <div className="flex items-center gap-10 py-10  justify-center flex-col-reverse sm:flex-row">
        <div className="left">
          <div className="contact_holder location">
            <h1 className=" pb-2 ">Address</h1>
            <BlurText
              text=" Dr colony rims J block bariatu ranchi ,India"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-[14px] text-gray-500 uppercase"
            />
            <BlurText
              text=" krdeepanshu572@gmail.com"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-[14px] text-gray-500"
              onClick={() =>
                (location.href = "mailto:krdeepanshu572@gmail.com")
              }
            />

            
          </div>
          <div className="mt-4">
            <h3>Links</h3>
            <div className="flex gap-2 py-2">
              
              <motion.div transition={{
                        ease: [0.22, 1, 0.36, 1],
                        duration: 1,
                      }}
                      initial={{ y: "80%", opacity: 0 }}
                      viewport={{once: "true"}}
                      whileInView={{ y: "0%", opacity: 1 }}
                onClick={() =>
                  (location.href = "https://github.com/deepanshu572/")
                }
                className="icon flex gap-2 pr-2"
              >
                <FaGithub />
                <p className="text-[14px] text-gray-500 uppercase">Github</p>
              </motion.div>
              <motion.div
              transition={{
                        ease: [0.22, 1, 0.36, 1],
                        duration: 1,
                      }}
                      initial={{ y: "80%", opacity: 0 }}
                      viewport={{once: "true"}}
                      whileInView={{ y: "0%", opacity: 1 }}
                onClick={() =>
                  (location.href =
                    "https://www.instagram.com/anuraag2308?igsh=MXd2Y2N1eGN6eW1kdg==")
                }
                className="icon flex gap-2 pr-2"
              >
                <AiFillInstagram />
                <p className="text-[14px] text-gray-500 uppercase">Instagram</p>
              </motion.div>
              <motion.div transition={{
                        ease: [0.22, 1, 0.36, 1],
                        duration: 1,
                      }}
                      initial={{ y: "80%", opacity: 0 }}
                      viewport={{once: "true"}}
                      whileInView={{ y: "0%", opacity: 1 }}
                onClick={() =>
                  (location.href =
                    "https://www.linkedin.com/in/deepanshu-kr-0852a92a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app")
                }
                className="icon flex gap-2 pr-2"
              >
                <TbBrandLinkedinFilled />
                <p className="text-[14px] text-gray-500 uppercase">Linkedin</p>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="right">
          <img className=" w-full sm:w-[355px] bg-remove" src={laptop} alt="" />
        </div>
      </div>
    
    </div>
  );
};

export default Contact;
