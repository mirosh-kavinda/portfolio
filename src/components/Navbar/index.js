import brandImg from "../../images/brand.png";
import { Link } from "react-router-dom";
import "../../css/navbar.css";
import { motion } from "framer-motion";
import { ReactComponent as DarkIcon } from "../../images/svg/dark.svg";
import { ReactComponent as LightIcon } from "../../images/svg/light.svg"; 
import { useState,useContext } from "react";
import { MenuToggle, Menu } from "../ToggleMenu/index";
import useMenuAnimation from "../../hooks/useMenuAnimation";
import { THEME_TYPE } from "../../constants";
import {ThemeContext} from "../../hooks/ThemeProvider";

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
  const [themeMode, setTheme] = useContext(ThemeContext);


  const handleThemeChange = (e) => {

    if(themeMode.theme === THEME_TYPE.LIGHT) {
      setTheme({ theme:THEME_TYPE.DARK });
    }
    else {
      setTheme({ theme:THEME_TYPE.LIGHT });
    }
    console.log("new Value: "+ themeMode.theme);
  };

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
                  <Link className="nav-link is-active exact mx-2" to="/aboutme">
                    AboutMe
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
              </ul>
              {/* <button className="nav-link is-active mx-2" onClick={handleThemeChange}>
            {themeMode.theme === THEME_TYPE.DARK ? <DarkIcon width="35" height="35" /> : <LightIcon width="35" height="35" />}
          </button> */}
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
