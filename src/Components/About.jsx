import React from 'react'
import about from '../assets/about.webp'

const About = () => {
  return (
    <>
       <div className="about" id="about">
            <div className="about-img">
                <img className="first-img" src={about} alt=""/>
                {/* <span>
                    <img className="second-img" src="./assests/img/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg" alt=""/>
                    <img className="third-img" src="./assests/img/working-emoji.c5325f52b5be329995a5.png" alt=""/>
                </span> */}
            </div>
            <div className="about-text">
                <small>ABOUT ME</small>
                <br/>
                <b> A dedicated Front-end Developer (UI/UX)
                    based in India, Ranchi 🚩</b>
                <br/>
                <p>
                    As a Junior Front-End Developer at Sysro
                    ot Solution in Ranchi, with 1.5 years of expe
                    rience, I possess an impressive arsenal of skills 
                    in HTML, CSS, JavaScript, React, Tailwind, Bootstrap, 
                    and basic knowledge of Material UI. I excel in designing
                     and maintaining responsive websites that offer a smooth user
                      experience. My expertise lies in crafting dynamic, engaging 
                      interfaces by writing clean and optimized code, while utilizing cutting-edge
                       development tools and techniques. I am a team player who thrives when 
                       collaborating with cross-functional teams to build outstanding web applications.  </p>
          </div>
           </div>
    </>
  )
}

export default About