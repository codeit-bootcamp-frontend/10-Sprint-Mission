import { createContext, useState, useEffect, ReactNode } from "react";

export type MediaType = "PC" | "TABLET" | "MOBILE";

export const MediaContext = createContext<MediaType | undefined>(undefined);

interface MediaProviderProps {
  children: ReactNode;
}

export function MediaProvider({ children }: MediaProviderProps) {
  const [media, setMedia] = useState<MediaType>();

  useEffect(() => {
    const checkMedia = (width: number): MediaType => {
      if (width >= 1200) return "PC";
      if (width >= 768) return "TABLET";
      return "MOBILE";
    };

    const handleWindowResize = () => {
      setMedia(checkMedia(window.innerWidth));
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <MediaContext.Provider value={media}>{children}</MediaContext.Provider>
  );
}
