"use client";

import type { IParagraphProps } from "@/interfaces";

import { useTextProps, useTextAlignProp } from "@/hooks";

const Paragraph: React.FC<IParagraphProps> = ({
  size,
  line,
  highlight,
  content,
  align,
}) => {
  const { fontSize, lineHeight } = useTextProps({ size, line });
  const textAlign = useTextAlignProp(align);

  return (
    <p
      style={{ fontSize, lineHeight, textAlign }}
      className="paragraph-content"
    >
      <span className={`${highlight ? "inline" : "hidden"} font-normal`}>
        {highlight}{" "}
      </span>
      {content}
    </p>
  );
};

export default Paragraph;
