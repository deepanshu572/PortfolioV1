import React from 'react'
import reactLogo from '../assets/react.svg'
import talwind from '../assets/talwind.svg'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import robot from '../assets/robot.png'
import kalam from '../assets/kalam.png'
import mygalla from '../assets/mygalla.png'
import yt from '../assets/yt.png'
import mygallaApp from '../assets/mygallaApp.png'
import myntra from '../assets/myntra.png'


const Project = () => {

  return (
    <div className="project" id="Project">
            <div className="project_about">
            <h3>PORTFOLIO</h3>
            </div>
            <br />
            <div className="bold_div">
            <b className="bold">Each project is a unique piece of development 🧩</b>
        </div>
            <div className="projects-box" >
                <div className="project1"  id="project6">
                    <div className="circle circle1">
                </div>
                    <div className="left">
                     <a  target="_blank" href="https://myntra-umber.vercel.app/"><img className="myntra" src={myntra} alt=""/></a>   
                    </div>
                    <div className="right">
                        <b>🧩 Myntra Clone – React + Core CSS </b>
                        <p>Developed a responsive e-commerce website using React.js and Core CSS, replicating Myntra’s UI and core features like product listing, cart, and wishlist. Focused on clean components and state management with React hooks.</p>
                        <div className="needs">
                            <div className="needs_skills_img react">
                                <img src={reactLogo} alt=""/>
                                <p>React</p>
                            </div>
                            <div className="needs_skills_img">
                                <img src={css} alt=""/>
                                <p>core css</p>
                            </div>
                        
                        </div>
                        <div className="source">
                        
                        <a target="_blank" href="https://myntra-umber.vercel.app/">
                            <span>
                                Live demo
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="tabler-icon tabler-icon-external-link">
                                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                                    <path d="M11 13l9 -9"></path>
                                    <path d="M15 4h5v5"></path>
                                </svg>
                            </span></a>
                        </div>
                    </div>
                </div>
                <div className="project1" id="project1">
                
                <div className="circle circle2">
                </div>
                    <div className="right">
                        
                        <div className="head_name">
                        <h1>🤖 Robotic Branding Website  </h1>
                    </div>
                        <p> I developed a responsive and optimized website for Robotic Branding using React.js and Tailwind CSS, focused on modern web design, clean UI, and a smooth user experience..</p>
                        <div className="needs ">
                            <div className="needs_skills_img react">
                                <img src={reactLogo} alt=""/>

                                <p>React</p>
                            </div>
                            <div className="needs_skills_img">
                                <img src={talwind} alt=""/>
                                <p>Talwind css</p>
                            </div>
                        </div>
                        <div className="source">
                        
                        <a  target="_blank" href="https://robotbranding-v3.vercel.app/">
                            <span>
                                Live demo
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="tabler-icon tabler-icon-external-link">
                                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                                    <path d="M11 13l9 -9"></path>
                                    <path d="M15 4h5v5"></path>
                                </svg>
                            </span></a>
                        </div>
                    </div>
                    <div className="left">
                        <a  target="_blank" href="https://robotbranding-v3.vercel.app/"><img className="rob" src={robot} alt=""/></a>   
                       </div>
                </div>
                <div className="project1"  id="project2">
                    <div className="circle circle1">
                </div>
                    <div className="left">
                     <a  target="_blank" href="https://www.kalamacademy.org/"><img className="imdb" src={kalam} alt=""/></a>   
                    </div>
                    <div className="right">
                        <b>🏫 KALAM ACADEMY </b>
                        <p> I built a responsive and optimized website for Kalam Academy, an IT company offering courses like Digital Marketing (DM) and Web Development (WDC), using HTML, core CSS without using any library, and Vanilla JavaScript.</p>
                        <div className="needs">
                            <div className="needs_skills_img">
                                <img src={html} alt=""/>
                                <p>HTML</p>
                            </div>
                            <div className="needs_skills_img">
                                <img src={css} alt=""/>
                                <p>core css</p>
                            </div>
                            <div className="needs_skills_img">
                                <img src={js} alt=""/>
                                <p>Js</p>
                            </div>
                        </div>
                        <div className="source">
                        
                        <a target="_blank" href="https://www.kalamacademy.org/">
                            <span>
                                Live demo
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="tabler-icon tabler-icon-external-link">
                                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                                    <path d="M11 13l9 -9"></path>
                                    <path d="M15 4h5v5"></path>
                                </svg>
                            </span></a>
                        </div>
                    </div>
                </div>
                <div className="project1"  id="project3">
                <div className="circle circle2">
                </div>
                    <div className="right">
                        <b>🛒myGalla </b>
                        <p> I built a responsive app branding website for myGalla using HTML, Core CSS, and Vanilla JavaScript, without using any libraries. The project focused on clean design, performance optimization, and a smooth user experience.</p>
                        <div className="needs">
                            <div className="needs_skills_img">
                                <img src={html} alt=""/>
                                <p>HTML</p>
                            </div>
                            <div className="needs_skills_img">
                                <img src={css} alt=""/>
                                <p>core css</p>
                            </div>
                            <div className="needs_skills_img">
                                <img src={js} alt=""/>
                                <p>Js</p>
                            </div>
                        </div>
                        <div className="source">
                     
                        <a  target="_blank" href="https://mygalla.com/">
                            <span>
                                Live demo
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="tabler-icon tabler-icon-external-link">
                                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                                    <path d="M11 13l9 -9"></path>
                                    <path d="M15 4h5v5"></path>
                                </svg>
                            </span></a>
                        </div>
                    </div>
                    <div className="left">
                        <a  target="_blank" href="https://mygalla.com/"><img className="myGalla galla" src={mygalla} alt=""/></a>   
                       </div>
                </div>
                <div className="project1"  id="project4">
                <div className="circle circle1">
                </div>
                    <div className="left">
                     <a  target="_blank" href="https://you-tube-v3.vercel.app/"><img className="yt" src={yt} alt=""/></a>   
                    </div>
                    <div className="right">
                        <b>🎬 Youtube Clone </b>
                        <p> Developed a fully responsive YouTube Clone using React and the YouTube API. Implemented key features such as video search, video playback, channel details, and related video suggestions. Focused on clean UI, efficient state management, and API integration to mimic the core functionalities of YouTube.</p>
                            <div className="needs">
                                <div className="needs_skills_img">
                                    <img src={reactLogo} alt=""/>
    
                                    <p>React</p>
                                </div>
                                <div className="needs_skills_img">
                                    <img src={talwind} alt=""/>
                                    <p>Talwind css</p>
                                </div>
                            </div>
                        <div className="source">
                        
                        <a  target="_blank" href="https://you-tube-v3.vercel.app/">
                            <span>
                                Live demo
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="tabler-icon tabler-icon-external-link">
                                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                                    <path d="M11 13l9 -9"></path>
                                    <path d="M15 4h5v5"></path>
                                </svg>
                            </span></a>
                        </div>
                    </div>
                </div>
                   <div className="project1" id="project5">
                    <div className="circle circle1">
                </div>
                   
                    <div className="right">
                        <b>🛍️ MyGalla – Responsive E-Commerce Website with Admin Panel</b>
                        <p>MyGalla is a fully responsive, modern, and user-centric e-commerce web application designed to offer a seamless shopping experience across all devices. This project includes both a customer-facing storefront and a fully integrated admin panel for managing the platform efficiently.</p>
                        <div className="needs">
                            <div className="needs_skills_img">
                                <img src={html} alt=""/>
                                <p>HTML</p>
                            </div>
                            <div className="needs_skills_img">
                                <img src={css} alt=""/>
                                <p>css</p>
                            </div>
                            <div className="needs_skills_img">
                                <img src={js} alt=""/>
                                <p>Js</p>
                            </div>
                        </div>
                        <div className="source">
                        
                        <a target="_blank" href="https://ecommerce-mg-seven.vercel.app/">
                            <span>
                                Live demo
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="tabler-icon tabler-icon-external-link">
                                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                                    <path d="M11 13l9 -9"></path>
                                    <path d="M15 4h5v5"></path>
                                </svg>
                            </span></a>
                        </div>
                    </div>
                     <div className="left">
                     <a  target="_blank" href="https://ecommerce-mg-seven.vercel.app/"><img className="gallaApp" src={mygallaApp} alt=""/></a>   
                    </div>
                </div>
             </div>
            
        </div>
  )
}

export default Project