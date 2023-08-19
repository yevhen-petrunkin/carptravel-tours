"use client";

import { useTextProps } from "@/hooks";

import type { IButtonProps } from "@/interfaces";

const StylishButton: React.FC<IButtonProps> = ({
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
  const { fontSize, lineHeight } = useTextProps({ size, line });

  const fontWeight = weight ? weight : 400;
  const textColor = color ? color : "#ffffff";

  return (
    <button
      style={{ fontSize, fontWeight, color: textColor, lineHeight }}
      className={`${lowercase ? "lowercase" : "uppercase"} ${
        wider && "tracking-[0.1em]"
      } stylish-btn`}
      type={type ? type : "button"}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default StylishButton;
