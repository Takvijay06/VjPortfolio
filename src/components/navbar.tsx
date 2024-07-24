import React from "react";
import { Link, NavLink } from "react-router-dom";
import DarkMode from "./DarkMode/DarkMode";

const Navbar = () => {
  return (
    <nav>
      <div className="container main-nav flex">
        <div className="title">
          <span className="title-first-letter">V</span>ijay{" "}
          <span className="title-first-letter">T</span>ak
        </div>

        <div className="flex">
          <a href="#" className="nav-toggle">
            <i className="fa-solid fa-bars"></i>
          </a>
          <ul className="nav-list flex">
            <li>
              <Link to="/" className="nav-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="nav-item">
                Projects
              </Link>
            </li>
            <li>My Shop</li>
            <li>
              <Link to="/mywork" className="nav-item">
                My Work
              </Link>
            </li>
            <li>Login</li>
          </ul>
          <div className="media-links flex">
            <p>|</p>
            <a href="https://www.linkedin.com/in/takvijay06" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/Takvijay06" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" target="_blank">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <DarkMode />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
