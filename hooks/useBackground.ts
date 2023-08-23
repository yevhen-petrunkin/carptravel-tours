"use client";

import type { ServiceBackgroundT } from "@/types";

import { useState, useEffect } from "react";
import { useMedia } from "@/hooks";

const useBackground = (bg: ServiceBackgroundT) => {
  const [background, setBackground] = useState(bg?.urlSm);

  const { isMd, isXl } = useMedia();

  useEffect(() => {
    if (!bg) {
      return;
    }

    if (!isMd && !isXl) {
      if (!bg.urlSm) {
        return;
      }
      setBackground(bg.urlSm);
    }

    if (isMd) {
      if (!bg.urlMd) {
        return;
      }
      setBackground(bg.urlMd);
    }

    if (isXl) {
      if (!bg.urlXl) {
        if (!bg.urlXl) {
          return;
        }
      }
      setBackground(bg.urlXl);
    }
  }, [isMd, isXl, bg, setBackground]);

  return background;
};

export default useBackground;
