import brandImg from "../../images/brand.png";
import { Link, NavLink } from "react-router-dom";
import "../../css/navbar.css";
import { motion } from "framer-motion";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { useState } from "react";
import { MenuToggle, Menu } from "../ToggleMenu/index";
import useMenuAnimation from "../../hooks/useMenuAnimation";
import { useTheme } from "../../context/ThemeContext";

export const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/aboutme", label: "About" },
  { to: "/projects", label: "Works" },
  { to: "/blog", label: "Writings" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar page-bg navbar-expand-lg fixed-top">
      <div className="container">
        <motion.div
          animate={{ scale: [0.5, 1.3, 1] }}
          transition={{ ease: "linear", duration: 2 }}
        >
          <Link className="mx-2" to="/" aria-label="Home">
            <img src={brandImg} alt="" />
          </Link>
        </motion.div>
        <div className="d-flex align-items-center">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-row">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <NavLink className="nav-link mx-2" to={l.to} end={l.end}>
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink className="nav-link nav-cta mx-2" to="/contact">
                  Get in Touch
                </NavLink>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <BsSun size={20} /> : <BsMoonStars size={20} />}
          </button>
          <div ref={scope} className="navbar-toggler">
            <Menu toggle={() => setIsOpen(!isOpen)} />
            <MenuToggle toggle={() => setIsOpen(!isOpen)} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
