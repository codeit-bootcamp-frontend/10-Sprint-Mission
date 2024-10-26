import { useState, useEffect } from "react";

export type MediaType = "PC" | "TABLET" | "MOBILE";

function checkMedia(width: number): MediaType {
  if (width >= 1200) return "PC";
  if (width >= 768) return "TABLET";
  return "MOBILE";
}

export function useMediaQuery() {
  const [media, setMedia] = useState<MediaType>("PC");

  useEffect(() => {
    setMedia(checkMedia(window.innerWidth));

    const handleWindowResize = () => {
      setMedia(checkMedia(window.innerWidth));
    };

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return media;
}
