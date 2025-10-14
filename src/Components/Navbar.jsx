import { motion } from "motion/react";

const Navbar = () => {

  return (
    <>
      <motion.nav initial={{opacity :0 , y : 10}} animate={{opacity: 1 ,y :0}} transition={{delay: 4 , duration :1}} className={` flex z-9 items-center w-full fixed m-auto p-2 pt-7  `}>
      <div className=" shadow_nav bg-[#9695952d] gap-[20px] sm:gap-15 rounded-full m-auto flex items-center justify-between p-3 px-5 ">
        <div className="logo font1 font-semi-bold italic">ThePortfolio</div>

        <div className={`navbar flex items-center justify-center `}>
          <ul className="nav-menu flex items-center text-gray-300 font2 font-light text-[13px] gap-5 ">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#project" className="nav-link">
                Project
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
          </div>
        </div>

      
      </motion.nav>
    </>
  );
};

export default Navbar;
