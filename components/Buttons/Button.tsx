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
  const fontWeight = weight ? weight : 400;
  const textColor = color ? color : "#ffffff";

  return (
    <button
      style={{ fontSize: size, fontWeight, color: textColor, lineHeight: line }}
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
