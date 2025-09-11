import brandImg from "../../images/brand.png";
import { Link } from "react-router-dom";
import "../../css/navbar.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { MenuToggle, Menu } from "../ToggleMenu/index";
import useMenuAnimation from "../../hooks/useMenuAnimation";

export const MyComponent = () => (
  
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  />
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  return (
    <>
      <nav className="navbar navbar-dark bg-black navbar-expand-lg fixed-top">
        <div className="container">
          <motion.div
            animate={{
              scale: [0.5, 1.3, 1],
            }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
          >
            <Link className="mx-2 " to="/">
              <img src={brandImg} alt="  " />
            </Link>
          </motion.div>
          <div>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  ">
                <li>
                  <Link className="nav-link is-active exact mx-2 " to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link is-active exact mx-2"
                    to="/projects"
                  >
                    Works
                  </Link>
                </li>
                <li>
                  <Link className="nav-link is-active exact mx-2" to="/blog">
                    Writings
                  </Link>
                </li>
                <li className="border rounded ">
                  <Link className="nav-link is-active exact mx-2" to="/aboutme">
                  Get in Touch
                  </Link>
                </li>
              </ul>
        
            </div>
          </div>
          <div ref={scope} className="navbar-toggler">
            
            <Menu  toggle={() => setIsOpen(!isOpen)}/>
            <MenuToggle toggle={() => setIsOpen(!isOpen)} />
          
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
