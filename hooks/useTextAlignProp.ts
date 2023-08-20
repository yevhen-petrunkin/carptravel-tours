"use client";

import { textAlignT } from "@/types";

import { useState, useEffect } from "react";
import { useMedia } from "@/hooks";

const useTextAlignProp = (array: textAlignT[] | undefined) => {
  const [textAlign, setTextAlign] = useState(
    array && array.length ? array[0] : "left"
  );

  const { isMd, isXl } = useMedia();

  useEffect(() => {
    if (!array || !array.length) {
      console.log("Missing data on text align prop.");
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
