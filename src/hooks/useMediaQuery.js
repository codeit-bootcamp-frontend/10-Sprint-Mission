import { useState, useEffect } from "react";

function checkMedia(width) {
  if (width >= 1200) return "PC";
  if (width >= 768) return "TABLET";
  return "MOBILE";
}

export function useMediaQuery() {
  const [media, setMedia] = useState(checkMedia(window.innerWidth));

  useEffect(() => {
    const handleWindowResize = () => {
      setMedia(checkMedia(window.innerWidth));
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return [media];
}
