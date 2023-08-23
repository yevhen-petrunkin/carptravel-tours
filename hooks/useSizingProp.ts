"use client";

import { useState, useEffect } from "react";
import { useMedia } from "@/hooks";

const useSizingProp = (array: string[]) => {
  const [sizing, setSizing] = useState(
    array && array.length ? array[0] : "16px"
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
      setSizing(array[0]);
    }

    if (isMd) {
      setSizing(array[1]);
    }

    if (isXl) {
      setSizing(array[2]);
    }
  }, [isMd, isXl, array, setSizing]);

  return sizing;
};

export default useSizingProp;
