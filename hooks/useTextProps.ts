"use client";

import type { TextPropsT } from "@/types";

import { useState, useEffect } from "react";
import { useMedia } from "@/hooks";

const useTextProps = ({ size, line }: TextPropsT) => {
  const [fontSize, setFontSize] = useState(
    size && size.length ? size[0] : "16px"
  );
  const [lineHeight, setLineHeight] = useState(
    line && line.length ? line[0] : 1
  );

  const { isMd, isXl } = useMedia();

  useEffect(() => {
    if (!size || !size.length) {
      console.log("Missing data on font size prop.");
      return;
    }

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
    if (!line || !line.length) {
      console.log("Missing data on line height prop.");
      return;
    }

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
