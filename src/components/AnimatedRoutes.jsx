import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
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
        <Route exact path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/experience" element={<Navigate to="/aboutme#experience" replace />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/projview" element={<ProjView />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/contact"
          element={
            <main className="pf-page">
              <div className="pf-container">
                <ContactForm />
              </div>
            </main>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
