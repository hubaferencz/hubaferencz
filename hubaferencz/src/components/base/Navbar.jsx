import React from "react";
import { NavLink } from "react-router-dom";

import about from "./../images/huba ferencz about.png";
import resume from "./../images/huba ferencz resume.png";
import portfolio from "./../images/huba ferencz portfolio.png";
import contact from "./../images/huba ferencz contact.png";

function Navbar(props) {
  
  
  
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navbar-link  active" : "navbar-link"
            }
            onClick={() => props.setProfileImage(about)}
          >
            <li className="navbar-item">About</li>
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive ? "navbar-link  active" : "navbar-link"
            }
            onClick={() => props.setProfileImage(resume)}
          >
            <li className="navbar-item">Resume</li>
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? "navbar-link  active" : "navbar-link"
            }
            onClick={() => props.setProfileImage(portfolio)}
          >
            <li className="navbar-item">Portfolio</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "navbar-link  active" : "navbar-link"
            }
            onClick={() => props.setProfileImage(contact)}
          >
            <li className="navbar-item">Contact</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
