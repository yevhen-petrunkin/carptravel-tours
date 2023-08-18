import { useContext } from "react";
import { MediaContext } from "./MediaContext";

const useMedia = () => {
  const media = useContext(MediaContext);
  return media;
};

export default useMedia;
