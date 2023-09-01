"use client";

import { IStylishButtonProps } from "@/interfaces";

import { useTextProps } from "@/hooks";

import { Link } from "react-scroll";

const StylishButton: React.FC<IStylishButtonProps> = ({
  text,
  size,
  line,
  type,
  wider,
  lowercase,
  weight,
  color,
  customClass,
  onClick,
  link,
}) => {
  const { fontSize, lineHeight } = useTextProps({ size, line });

  const fontWeight = weight ? weight : 400;
  const textColor = color ? color : "#ffffff";

  return (
    <Link
      href={link}
      to={link}
      spy={true}
      smooth={true}
      offset={0}
      duration={1000}
      style={{ fontSize, fontWeight, color: textColor, lineHeight }}
      className={`flex center-center stylish-btn ${
        lowercase ? "lowercase" : "uppercase"
      } ${wider && "tracking-[0.1em]"} ${customClass && customClass}`}
      onClick={onClick}
      aria-label={`${text} button`}
    >
      {text}
    </Link>
  );
};

export default StylishButton;
