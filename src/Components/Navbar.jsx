import React from "react";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">ThePortfolio</div>

        <div className="navbar">
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#Project" className="nav-link">
                Project
              </a>
            </li>
            <li className="nav-item">
              <a href="#Contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
