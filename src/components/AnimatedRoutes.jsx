import React from "react";
import { Route, Routes, useLocation } from "react-router";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Projects from "../pages/Projects";
import ProjView from "../components/ProjView/ProjView";
import { AnimatePresence } from "framer-motion";
import ContactForm from "./Contact/contactForm";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" id="home" element={<Home />}></Route>
        <Route path="/aboutme" id="contact" element={<AboutMe />}></Route>
        <Route path="/projects" id="projects" element={<Projects />}></Route>

        <Route
          path="/projects/projview"
          id="projects"
          element={<ProjView />}
        ></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<ContactForm />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
