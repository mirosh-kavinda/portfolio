import { React, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import DotRing from "./components/DotRing";
import ProjView from "./components/ProjView/ProjView";
import "aos/dist/aos.css";
import useAnimations from "./hooks/useAnimations";
import Spinner from "./components/Spinner/Spinner";

export default function App() {
  const { loading } = useAnimations();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      {loading ? (
        <div className="App">
         
          <Spinner />
        </div>
      ) : (
        <div className="App"> 
          <DotRing />
          <Navbar />
         
          <div className="loading ">
            <Routes>
              <Route exact path="/" id="home" element={<Home />}></Route>
              <Route path="/aboutme" id="contact" element={<AboutMe />}></Route>
              <Route
                path="/projects"
                id="projects"
                element={<Projects />}
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
