import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Faculty from "./pages/Faculty";
import Testimonials from "./pages/Testimonials";
import TopNavBar from "./components/TopNavBar";
import Socialbar from "./components/Socialbar";
import "./index.css";


const App: React.FC = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [fadeClass, setFadeClass] = useState<'fade-enter' | 'fade-enter-active' | 'fade-exit' | 'fade-exit-active'>('fade-enter');

  // Handle animation state transitions
  useEffect(() => {
    if (fadeClass === 'fade-enter') {
      const timer = setTimeout(() => setFadeClass('fade-enter-active'), 1);
      return () => clearTimeout(timer);
    } else if (fadeClass === 'fade-exit') {
      const timer = setTimeout(() => setFadeClass('fade-exit-active'), 1);
      return () => clearTimeout(timer);
    }
  }, [fadeClass]);

  // Handle location changes with fade animation
  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      const timer = setTimeout(() => {
        setFadeClass('fade-exit');
      }, 0);
      const timer2 = setTimeout(() => {
        setDisplayLocation(location);
        setFadeClass('fade-enter');
      }, 500);
      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
      };
    }
  }, [location.pathname, displayLocation.pathname, location]);

  return (
    <div>
      <TopNavBar />
      <div className={`fade-container ${fadeClass}`}>
        <Routes location={displayLocation}>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/about" element={<About />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Socialbar />
    </div>
  );
};

export default App;
