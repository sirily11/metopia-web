import React from "react";

interface WindowSize {
  width: number;
  height: number;
}

export default function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState<WindowSize>({
    width: 300,
    height: 300,
  });

  React.useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
