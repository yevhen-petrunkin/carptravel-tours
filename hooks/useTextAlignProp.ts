"use client";

import { TextAlignT } from "@/types";

import { useState, useEffect } from "react";
import { useMedia } from "@/hooks";

const useTextAlignProp = (array: TextAlignT[] | undefined) => {
  const [textAlign, setTextAlign] = useState(
    array && array.length ? array[0] : "left"
  );

  const { isMd, isXl } = useMedia();

  useEffect(() => {
    if (!array || !array.length) {
      return;
    }

    if (array.length === 1) {
      return;
    }

    if (!isMd && !isXl) {
      setTextAlign(array[0]);
    }

    if (isMd) {
      setTextAlign(array[1]);
    }

    if (isXl) {
      setTextAlign(array[2]);
    }
  }, [isMd, isXl, array, setTextAlign]);

  return textAlign;
};

export default useTextAlignProp;
