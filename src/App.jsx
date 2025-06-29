// import { useState } from 'react'

// import viteLogo from '/vite.svg'
import "./App.css";
import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Project from "./Components/Project";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function App() {


  useGSAP(() => {
    var tl = gsap.timeline();
    tl.from(".top_loader h3", {
      duration: 2,
      opacity: 0,
      scrub: 1,
      y: 10,
    }),
      tl.from(".bottom_left h3", {
        opacity: 0,
        scrub: 1,
        y: 10,
      }),
      tl.from(".bottom_left span", {
        opacity: 0,
        scrub: 1,
        y: 10,
      }),
      tl.from(".count", {
        opacity: 0,
        onStart: function () {
          var counter = document.querySelector(".count");
          let timer = 0;
          var counterStart = setInterval(function () {
            timer++;
            if (timer >= 100) {
              counterStoper();
            }
            counter.textContent = timer;
          }, 10);
          function counterStoper() {
            clearInterval(counterStart);
          }
        },
      }),
      tl.to(".loader_wrap", {
        delay: 1,
        duration: 0.71,
        scrub: 1,
        y: "-100vh",
        onComplete: () => {
          document.body.style.overflowY = "scroll";
        }
      }),
      
      tl
        .from(".flex-img img", { opacity: 0, y: 3, duration: 1 }, "sameTime")
        .from(".head1 h1", { y: 100, duration: 1, opacity: 0 }, "sameTime")
        .from(".head2 h1", { y: 100, duration: 1 }, "sameTime")
        .from(".flex-span div", { opacity: 0, y: 10, stagger: 0.1 }, "sameTime")
        .from(".flex-name p", { opacity: 0, y: 10, duration: 1 }, "sameTime")
        .from(".skills p", { opacity: 0, x: -10, duration: 1 }, "sameTime")
        .from(".img1", {opacity: 0,  y: 15, duration: 1.2, stagger: 0.2 }, "sameTime")
        .to(".img1", {opacity: 2 , y: 0,duration: 1.2, stagger: 0.2 }, "sameTime")
        // .from(
        //   ".img_box h6",
        //   { opacity: 0, y: 15, duration: 1.2, stagger: 0.2 },
        //   "sameTime"
        // )


    gsap.from(".box_content h4 , .box_content p , .box_eduction b , .education b , .cv_btn a", {
      opacity: 0,
      duration: 1.2,
      x : 50,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".box_eduction",
        scroller: "body",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    }),
      gsap.from(".first-img", {
        opacity: 0,
        duration: 0.91,
        x: -50,
        scrollTrigger: {
          trigger: ".first-img",
          scroller: "body",
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      });

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".project_about h3",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        // markers: true
      },
    });

    tl2
      .from(".project_about h3", { y: 100, duration: 1 }, "sameTime")
      .from(".bold_div", { opacity: 0, y: 10, duration: 1 }, "sameTime");

    function createProjectAnimation(projectId) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: projectId,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          // markers: true
        },
      });

      tl.from(`${projectId} .right`, { opacity: 0, y: 10 }, "sameTime")
        .from(`${projectId} .left`, { opacity: 0, x: 10, scale: 0 }, "sameTime")
        .from(
          `${projectId} .right p`,
          { opacity: 0, delay: 1, y: 10 },
          "sameTime"
        )
        .from(
          `${projectId} .head_name h1`,
          { y: 100, delay: 1, opacity: 0 },
          "sameTime"
        )
        .from(
          `${projectId} .needs .needs_skills_img`,
          { opacity: 0, delay: 1, y: -10, stagger: 0.2 },
          "sameTime"
        )
        .from(
          `${projectId} .source a`,
          { opacity: 0, delay: 1, y: -10, stagger: 0.2 },
          "sameTime"
        );
    }
    ["#project1", "#project2", "#project3", "#project4" , "#project5","#project6"].forEach(
      createProjectAnimation
    );

    gsap.from(".contact_holder p , .contact_holder h1", {
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".contact_holder",
        scroller: "body",
        start: "top 80%",
        end: "top 20%",
        marker : true,
      },
    }),

    gsap.from(".additional svg , .additional h3", {
      opacity: 0,
      // duration: 1.2,
      stagger: 0.2,
      x: -50,
      scrollTrigger: {
        trigger: ".additional",
        scroller: "body",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    }),
      gsap.from(".right_contact img", {
        opacity: 0,
        duration: 0.91,
        x: 50,
        scrollTrigger: {
          trigger: ".right_contact",
          scroller: "body",
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      });
  });

  function coursourAnimation() {
    document.addEventListener("mousemove", function (dets) {
      gsap.to(".crsr", {
        left: dets.x,
        top: dets.y,
      });
    });
  }
  coursourAnimation();
 

  return (
    <>
  
      <Loader />
      <div className="main">
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
