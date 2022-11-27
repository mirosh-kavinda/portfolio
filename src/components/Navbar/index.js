import React from "react";
import brandImg from "./brand.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-black navbar-expand-lg fixed-top">
        <div className="container-md">
          <a className="navbar-brand  " href="/">
            <img src={brandImg} alt="brand logo" />
          </a>
          
          <div>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav  ">
              <li >
                <a
                  className="nav-link is-active exact"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li >
                <a className="nav-link is-active exact" href="/aboutme">
                  About Me
                </a>
              </li>
              <li >
                <a className="nav-link is-active exact" href="/projects">
                  My Works
                </a>
              </li>
              <li >
                <a className="nav-link is-active exact" href="/contact">
                  Contact
                </a>
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
