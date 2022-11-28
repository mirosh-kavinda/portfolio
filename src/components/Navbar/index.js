import React from "react";
import brandImg from "./brand.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-black navbar-expand-lg fixed-top">
        <div className="container-md">
          <Link className="navbar-brand  " to="/">
            <img src={brandImg} alt="brand logo" />
          </Link>

          <div>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  ">
                <li>
                  <Link
                    className="nav-link is-active exact"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-link is-active exact" to="/aboutme">
                    About Me
                  </Link>
                </li>
                <li>
                  <Link className="nav-link is-active exact" to="/projects">
                    My Works
                  </Link>
                </li>
                <li>
                  <Link className="nav-link is-active exact" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
