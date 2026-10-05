import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const frame = requestAnimationFrame(() => {
      const id = decodeURIComponent(hash.slice(1));
      const element = document.getElementById(id);

      element?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}

export default ScrollToHash;
