import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <Link to="/">
            <li className="navbar-item">
              <button className="navbar-link  active" data-nav-link="">
                About
              </button>
            </li>
          </Link>
          <Link to="/resume">
            <li className="navbar-item">
              <button className="navbar-link" data-nav-link="">
                Resume
              </button>
            </li>
          </Link>
          <Link to="/portfolio">
            <li className="navbar-item">
              <button className="navbar-link" data-nav-link="">
                Portfolio
              </button>
            </li>
          </Link>
          {/* <li className="navbar-item">
            <button className="navbar-link" data-nav-link="">
              Blog
            </button>
          </li> */}
          <Link to="/contact">
            <li className="navbar-item">
              <button className="navbar-link" data-nav-link="">
                Contact
              </button>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
