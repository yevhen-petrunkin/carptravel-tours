import { createContext } from "react";

export const MediaContext = createContext({
  isTn: true,
  isMd: false,
  isXl: false,
});
