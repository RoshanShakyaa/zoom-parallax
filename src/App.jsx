import React, { useEffect } from "react";
import ZoomParallax from "./components/ZoomParallax";
import Lenis from "@studio-freight/lenis";
const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <ZoomParallax />
    </>
  );
};

export default App;
