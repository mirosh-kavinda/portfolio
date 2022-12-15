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

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <>
          <div
            align="center"
            class="alert message alert-warning alert-dismissible fade show"
            role="alert"
          >
            <h4>This site is still under developing, but you can get a sense of who
            I am  </h4>
          </div>
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
