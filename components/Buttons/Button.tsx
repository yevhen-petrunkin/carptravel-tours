"use client";

import useMedia from "@/hooks/media/useMedia";
import { useState, useEffect } from "react";

import type { IButtonProps } from "@/interfaces";

const Button: React.FC<IButtonProps> = ({
  text,
  size,
  line,
  type,
  wider,
  lowercase,
  weight,
  color,
  onClick,
}) => {
  const [fontSize, setFontSize] = useState(size[0] || "16px");
  const [lineHeight, setLineHeight] = useState(line[0] || 1.1);

  const { isMd, isXl } = useMedia();

  useEffect(() => {
    if (size.length === 1) {
      return;
    }

    if (isMd) {
      setFontSize(size[1]);
      return;
    }

    if (isXl) {
      setFontSize(size[2]);
      return;
    }
  }, [isMd, isXl, size, setFontSize]);

  useEffect(() => {
    if (line.length === 1) {
      return;
    }

    if (isMd) {
      setLineHeight(line[1]);
      return;
    }

    if (isXl) {
      setLineHeight(line[2]);
      return;
    }
  }, [isMd, isXl, line, setLineHeight]);

  const fontWeight = weight ? weight : 400;
  const textColor = color ? color : "#ffffff";

  return (
    <button
      style={{ fontSize, fontWeight, color: textColor, lineHeight }}
      className={`${lowercase ? "lowercase" : "uppercase"} ${
        wider && "tracking-[0.1em]"
      }`}
      type={type ? type : "button"}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
