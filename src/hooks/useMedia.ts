import { useContext } from "react";
import { MediaContext } from "@/store/MediaContext";

export function useMedia() {
  const media = useContext(MediaContext);
  return media;
}
