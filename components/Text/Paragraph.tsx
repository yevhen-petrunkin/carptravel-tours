"use client";

import type { IParagraphProps } from "@/interfaces";

import { useTextProps } from "@/hooks";

const Paragraph: React.FC<IParagraphProps> = ({
  size,
  line,
  highlight,
  content,
  justify,
}) => {
  const { fontSize, lineHeight } = useTextProps({ size, line });

  return (
    <p
      style={{ fontSize, lineHeight }}
      className={`paragraph-content ${justify && "text-justify"} `}
    >
      <span className={`${highlight ? "inline" : "hidden"} font-normal`}>
        {highlight}{" "}
      </span>
      {content}
    </p>
  );
};

export default Paragraph;
