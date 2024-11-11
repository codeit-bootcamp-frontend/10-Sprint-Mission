import {
  createContext,
  useState,
  useCallback,
  useEffect,
  useContext,
  ReactNode,
} from "react";

export type MediaType = "PC" | "TABLET" | "MOBILE";

const MediaContext = createContext<MediaType | undefined>(undefined);

interface MediaProviderProps {
  children: ReactNode;
}

export function MediaProvider({ children }: MediaProviderProps) {
  const [media, setMedia] = useState<MediaType>();

  const checkMedia = (width: number): MediaType => {
    if (width >= 1200) return "PC";
    if (width >= 768) return "TABLET";
    return "MOBILE";
  };

  const handleWindowResize = useCallback(() => {
    setMedia(checkMedia(window.innerWidth));
  }, []);

  useEffect(() => {
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  return (
    <MediaContext.Provider value={media}>{children}</MediaContext.Provider>
  );
}

export function useMedia() {
  const media = useContext(MediaContext);
  return media;
}
