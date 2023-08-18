"use client";

import { useMediaQuery } from "react-responsive";
import { MediaContext } from "./MediaContext";

const Media = ({ children }: { children: React.ReactNode }) => {
  const isTn = useMediaQuery({ minWidth: 480 });
  const isMd = useMediaQuery({ minWidth: 768 });
  const isXl = useMediaQuery({ minWidth: 1280 });

  return (
    <MediaContext.Provider
      value={{
        isTn,
        isMd,
        isXl,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};

export default Media;
