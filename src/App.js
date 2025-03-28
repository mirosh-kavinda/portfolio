import { React, useEffect, } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import DotRing from "./components/DotRing";
import useAnimations from "./hooks/useAnimations";
import Spinner from "./components/Spinner/Spinner";
import AnimatedRoutes from "./components/AnimatedRoutes";


export default function App() {
  const { loading } = useAnimations();
  const location = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  return (
    <>
      {loading ? (
        <div className="App">
          <Spinner />
        </div>
      ) : (
        <div className="App">
          <DotRing style={{ zIndex: "10000000" }} />
          <Navbar />
          <div className="loading ">
            <AnimatedRoutes />
          </div>

          <Footer className="footer" />
        </div>
      )}
    </>
  );
}
