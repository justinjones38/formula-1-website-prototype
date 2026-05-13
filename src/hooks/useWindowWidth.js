import { useState, useEffect } from "react";

export default function useWindowWidth() {
  const [windowWidth, setWindowWith] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWith(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return { windowWidth };
}
