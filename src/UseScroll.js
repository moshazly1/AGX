import { useEffect, useState } from "react";

export function UseScroll(triggerPoint) {
  const [showclass, setShowclass] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const scrolled = window.scrollY;
      if (scrolled > triggerPoint) {
        setShowclass(true);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return showclass;
}
