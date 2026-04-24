import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import DotRing from "./components/DotRing";
import useAnimations from "./hooks/useAnimations";
import Spinner from "./components/Spinner/Spinner";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { SiteDataProvider } from "./context/SiteDataContext";

export default function App() {
  const { loading } = useAnimations();
  const location = useLocation();

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 992); // Desktop breakpoint
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  return (
    <SiteDataProvider>
      {loading ? (
        <div className="App">
          <Spinner />
        </div>
      ) : (
        <div className="App">
          {/* Only show DotRing on desktop */}
          {isDesktop && <DotRing style={{ zIndex: "10000000" }} />}

          <Navbar />
          <div className="loading ">
            <AnimatedRoutes />
          </div>

          <Footer className="footer" />
        </div>
      )}
    </SiteDataProvider>
  );
}
