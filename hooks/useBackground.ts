"use client";

import type { ServiceBackgroundT } from "@/types";

import { useState, useEffect } from "react";
import { useMedia } from "@/hooks";

const useBackground = (bg: ServiceBackgroundT) => {
  const [background, setBackground] = useState(bg?.urlSm);

  const { isMd, isXl } = useMedia();

  useEffect(() => {
    if (!bg) {
      console.log("Missing data on background.");
      return;
    }

    if (!isMd && !isXl) {
      if (!bg.urlSm) {
        console.log("Missing data on sm background.");
        return;
      }
      setBackground(bg.urlSm);
    }

    if (isMd) {
      if (!bg.urlMd) {
        console.log("Missing data on md background.");
        return;
      }
      setBackground(bg.urlMd);
    }

    if (isXl) {
      if (!bg.urlXl) {
        if (!bg.urlXl) {
          console.log("Missing data on xl background.");
          return;
        }
      }
      setBackground(bg.urlXl);
    }
  }, [isMd, isXl, bg, setBackground]);

  return background;
};

export default useBackground;
