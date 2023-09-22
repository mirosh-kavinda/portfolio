import {React ,useEffect} from "react";
import { Route, Routes ,useLocation} from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import DotRing from "./components/DotRing";
import ProjView from "./components/ProjView/ProjView";
import useAnimations from "./hooks/useAnimations";
import Spinner from "./components/Spinner/Spinner";
import Blog from "./pages/Blog/Blog";

export default function App() {
  const { loading } = useAnimations();
  const location = useLocation();

  useEffect(() => {
    window.scroll(0,0);
  }, [location]);
  return (
    <>
      {loading ? (
        <div className="App">
          <Spinner />
        </div>
      ) : (
        <div className="App">
          <DotRing style={{ zIndex: '10000000'}} />
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
              <Route path="/blog" element={<Blog />}></Route>
            </Routes>
          </div>

          <Footer className="footer" />
        </div>
      )}
    </>
  );
}
