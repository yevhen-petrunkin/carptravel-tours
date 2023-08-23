"use client";

import { ISectionHeadingProps } from "@/interfaces/ISectionHeadingProps";

const SectionHeading: React.FC<ISectionHeadingProps> = ({
  highlight,
  content,
}) => {
  return (
    <h2 className="heading-content">
      {content} <span className="font-medium ">{highlight}</span>
    </h2>
  );
};

export default SectionHeading;
