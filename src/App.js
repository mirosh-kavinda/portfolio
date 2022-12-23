import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import DotRing from "./components/DotRing";
import Contact from "./pages/Contact";
import ProjView from "./components/ProjView/ProjView";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 20, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom",
    });
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <>
         
          <div
            className="d-flex justify-content-center align-content-center"
            style={{ marginTop: "40vh", height: "200px" }}
          >
            <div
              className="spinner-border "
              style={{ width: "4rem", height: "4rem" }}
              role="status"
            >
              <span className="sr-only "></span>
            </div>
          </div>
        </>
      ) : (
        <div>
          <DotRing />
          <Navbar />

          <div className="App">
            <Routes>
              <Route exact path="/" id="home" element={<Home />}></Route>
              <Route path="/aboutme" id="contact" element={<AboutMe />}></Route>
              <Route
                path="/projects"
                id="projects"
                element={<Projects />}
              ></Route>
              <Route
                path="/contact"
                id="projects"
                element={<Contact />}
              ></Route>
              <Route
                path="/projects/projview"
                id="projects"
                element={<ProjView />}
              ></Route>
            </Routes>
          </div>
          <Footer className="footer" />
        </div>
      )}
    </>
  );
}
