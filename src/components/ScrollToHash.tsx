import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash;
      // Defer to ensure target is in the DOM
      const timeoutId = window.setTimeout(() => {
        const el = document.querySelector(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);
      return () => window.clearTimeout(timeoutId);
    }
  }, [location.hash, location.pathname]);

  return null;
};

export default ScrollToHash;


