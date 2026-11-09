import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import DotRing from "./components/DotRing";
import Spinner from "./components/Spinner/Spinner";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { SiteDataProvider, useSiteData } from "./context/SiteDataContext";
import { ThemeProvider } from "./context/ThemeContext";

// Keep the loader up at least this long so it doesn't just flash on cached visits
const MIN_LOADER_MS = 800;

function AppShell() {
  const { loading: dataLoading } = useSiteData();
  const location = useLocation();
  const [minElapsed, setMinElapsed] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const t = setTimeout(() => setMinElapsed(true), MIN_LOADER_MS);
    return () => clearTimeout(t);
  }, []);

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

  // The loader closes once the Firebase content has arrived
  if (dataLoading || !minElapsed) {
    return (
      <div className="App">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="App">
      {/* Only show DotRing on desktop */}
      {isDesktop && <DotRing style={{ zIndex: "10000000" }} />}

      <Navbar />
      <div className="loading ">
        <AnimatedRoutes />
      </div>

      <Footer className="footer" />
    </div>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <SiteDataProvider>
          <AppShell />
        </SiteDataProvider>
      </ThemeProvider>
    </MotionConfig>
  );
}
