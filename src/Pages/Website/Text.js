import { useEffect, useState } from "react";

export default function Text() {
  const texts = [
    "WE SOLVE THE HARDEST BUSINESS CHALLENGES",
    "SMART INNOVATION STARTS HERE",
    "INNOVATION FULL OF TRUST",
    "GO FAR WITH INNOVATION",
    "SOLUTIONS THAT TURN TO SUCCESS"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [current, setCurrent] = useState(texts[0]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newIndex = (currentIndex + 1) % texts.length;
      setCurrentIndex(newIndex);
      setCurrent(texts[newIndex]);
    }, 8000);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="center-container">
      <div className="animated-text">
        <h5 key={`title-${currentIndex}`}>ALGORIONIX</h5>
        <h2 key={`text-${current}`}>{current}</h2>
      </div>
    </div>
  );
}
