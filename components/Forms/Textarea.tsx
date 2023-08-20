"use client";

import type { ITextareaProps } from "@/interfaces";

import { useSizingProp } from "@/hooks";

const Textarea: React.FC<ITextareaProps> = ({ textarea, height }) => {
  const sizing = useSizingProp(height);

  return (
    <label className="form-label">
      {textarea.label}
      <textarea
        style={{ height: sizing }}
        className="form-field resize-none"
        name={textarea.name}
      />
    </label>
  );
};

export default Textarea;
