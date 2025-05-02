import React from "react";
import about from "../assets/about.webp";
import contact from "../assets/contact.png";

const About = () => {
  return (
    <>
      <div className="about" id="about">
 
      <div className="wrap_about">
        <div className="about-img">
          <img className="first-img" src={contact} alt="" /> 
        </div>
        <div className="box_eduction">
          <div className="education">
          <b>Education 🚩</b>
            <div className="box_content">
              <h4>Dr. Shyama Prasad Mukherjee University, Ranchi</h4>
              <p>
                Bachelor of Science (Information Technology) <br />
                Semester 4, Part 2 (Ongoing)
              </p>
            </div>
            <div className="box_content">
              <h4>Ram Lakhan Singh Yadav College, Ranchi</h4>
            <p>
                Intermediate (12th Grade) <br />
                Completed: [Add Year]
              </p>
            </div>
            <div className="box_content">
              <h4>Star International School, Ranchi</h4>
              <p>Matriculation (10th Grade) Completed: [Add Year]</p>
            </div>
            </div>
            <div className="other_education">
            <b>Certificate Courses 🚩</b>
            <div className="box_content">
              <h4>Web Development Course – Kalam Academy, Ranchi</h4>
              <p>
              Completed a comprehensive Web Development Course at Kalam Academy, Ranchi, gaining hands-on experience in HTML, CSS, JavaScript, and modern frontend technologies.
              </p>
            </div>
            </div>
            <div className="job">
            <b>Job 🚩</b>
            <div className="box_content">
              <h4>Sysroot Solution – Front-End Developer (UI/UX), Ranchi 🚩</h4>
              <p>
              Worked as a Junior Front-End Developer for 1.5 years, building responsive and user-friendly web interfaces using HTML, CSS, JavaScript, Bootstrap, and Material UI (basic). Specialized in clean, optimized code and dynamic UI design, collaborating closely with teams to deliver quality web applications.
              </p>
            </div>
            </div>
            <div className="achievment">
            <b className="head_box">Acievements 🚩</b>
            <div className="box_content">
              <h4>UI Design Selected – React Frontend Developer Interview, Cordiela IT Company, Mumbai</h4>
              <p>My UI design was selected in the first round of the React Frontend Developer interview at Cordiela, a Mumbai-based IT company, highlighting my skills in UI/UX and component-based design.]</p>
            </div>
            </div>
            {/* <div className="contact_info">
                <b className="head_box">Contact  🚩</b>
            <div className="box_content">
              <h4>Don't be shy! Hit me up! 👇</h4>
              <p>github - https://github.com/deepanshu572/</p>
              <p>Linkdin - https://github.com/deepanshu572/</p>
              <p>facebook - https://github.com/deepanshu572/</p>
            </div>
            </div> */}
          </div>
          </div>
        {/* <div className="about-text">
          <small>ABOUT ME</small>
          <br />
         
         
          <b>
            {" "}
            A dedicated Front-end Developer (UI/UX) based in India, Ranchi 🚩
          </b>
          <br />
          <p>
            As a Junior Front-End Developer at Sysro ot Solution in Ranchi, with
            1.5 years of expe rience, I possess an impressive arsenal of skills
            in HTML, CSS, JavaScript, React, Tailwind, Bootstrap, and basic
            knowledge of Material UI. I excel in designing and maintaining
            responsive websites that offer a smooth user experience. My
            expertise lies in crafting dynamic, engaging interfaces by writing
            clean and optimized code, while utilizing cutting-edge development
            tools and techniques. I am a team player who thrives when
            collaborating with cross-functional teams to build outstanding web
            applications.{" "}
          </p>
        </div> */}
      </div>
    </>
  );
};

export default About;
