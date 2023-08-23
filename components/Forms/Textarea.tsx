"use client";

import type { ITextareaProps } from "@/interfaces";

import { useSizingProp } from "@/hooks";

const Textarea: React.FC<ITextareaProps> = ({ textarea, height, register }) => {
  const sizing = useSizingProp(height);

  return (
    <label className="form-label">
      {textarea.label}
      <textarea
        style={{ height: sizing }}
        className="form-field resize-none"
        {...register(textarea.name, { required: textarea.required })}
        aria-label={`Text input ${textarea.label}`}
      />
    </label>
  );
};

export default Textarea;
