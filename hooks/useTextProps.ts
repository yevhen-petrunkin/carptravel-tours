"use client";

import type { textPropsT } from "@/types";

import { useState, useEffect } from "react";
import { useMedia } from "@/hooks";

const useTextProps = ({ size, line }: textPropsT) => {
  const [fontSize, setFontSize] = useState(size[0]);
  const [lineHeight, setLineHeight] = useState(line[0]);

  const { isMd, isXl } = useMedia();

  useEffect(() => {
    if (size.length === 1) {
      return;
    }

    if (!isMd && !isXl) {
      setFontSize(size[0]);
    }

    if (isMd) {
      setFontSize(size[1]);
    }

    if (isXl) {
      setFontSize(size[2]);
    }
  }, [isMd, isXl, size, setFontSize]);

  useEffect(() => {
    if (line.length === 1) {
      return;
    }

    if (!isMd && !isXl) {
      setLineHeight(line[0]);
    }

    if (isMd) {
      setLineHeight(line[1]);
    }

    if (isXl) {
      setLineHeight(line[2]);
    }
  }, [isMd, isXl, line, setLineHeight]);

  return { fontSize, lineHeight };
};

export default useTextProps;
