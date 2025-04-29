import React from 'react'
import reactLogo from '../assets/react.svg'
import people from '../assets/portolio.jpeg'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import bootstrap from '../assets/bootstrap.jpg'
import talwind from '../assets/talwind.png'
import Gsap from '../assets/Gsap.png'
import hand from '../assets/hand.png'
import materialUi from '../assets/materialUi.png'
import Particles from './Particles';

const Hero = () => {

  return (
    <>
  <Particles
    particleColors={['#ffffff', '#ffffff']}
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
                <div className="circle circle1">
                </div>
                <div className="circle circle2">
                </div>
                <div className="flex-img">
                     <img src={people} alt=""/>
                </div>
                <div className="flex-name">
                    <div className="main-text">
                        <div className="head">
                            <div className="head1">
                           <h1> Front-End <img src={hand} alt=""/> </h1> 
                        </div>
                        <div className="head2">
                         <h1>Developer (UI/UX) </h1>
                        </div> </div>
                    </div>
                    <p>Hi, I'm Deepanshu kumar. A passionate Front-end Developer (UI/UX) based in Ranchi,India. 🚩</p>
                   <div className="flex-span">
                    <div>
                    <i className="fa-brands fa-linkedin"></i>
                </div>
                <div>
                    <i className="fa-brands fa-github"></i>
                </div>
                   </div>
                    
                </div>
                
            </div>

        </div>
        <div className="skills">
            <p>Tech Stack</p> <span></span>
            <div className="image-flex">
            <div className="img1">
                <img src={html} alt=""/>
            </div>
            <div className="img1">
                <img src={css} alt=""/>
            </div>
            <div className="img1">
                <img src={js} alt=""/>
            </div>
            <div className="img1">
                <img src={bootstrap} alt=""/>
            </div>
            <div className="img1">
                <img src={talwind} alt=""/>
            </div>
            
            <div className="img1">
                <img src={Gsap} alt=""/>
            </div>
            <div className="img1">
                <img src={reactLogo} alt=""/>
            </div>
            <div className="img1">
                <img src={materialUi} alt=""/>
            </div>
        </div>
        </div>
    </>
  )
}

export default Hero