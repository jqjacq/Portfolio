import { useEffect, useState } from "react";

const iconImages = ["/teacup.svg", "/bubbletea.svg", "/orange.svg", "/airplane.svg", "/puzzle.svg"];

const useIconEffect = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % iconImages.length);
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const link = document.querySelector(".favicon");
    if (link) {
      link.href = iconImages[index];
    }
  }, [index]);
};

export default useIconEffect;
