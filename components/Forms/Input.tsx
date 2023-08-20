"use client";

import { IInputProps } from "@/interfaces";

const Input: React.FC<IInputProps> = ({ input }) => {
  const { label, placeholder, prompt, name, error } = input;
  const isError = false;

  return (
    <label className="relative form-label">
      {label}

      <input
        className={`form-field ${
          prompt ? "pl-[40px] xl:pl-[58px]" : "pl-[8px]"
        } placeholder-white/20`}
        type="text"
        placeholder={placeholder}
        name={name}
      />

      <span
        className={`${
          prompt ? "absolute" : "hidden"
        } left-[8px] bottom-[0.2px] text-[13px] xl:text-[20px] leading-[1.84] xl:leading-[1.33] font-extralight tracking-normal`}
      >
        {prompt}
      </span>

      <span className={`${isError ? "block" : "hidden"} form-label form-error`}>
        {error}
      </span>
    </label>
  );
};

export default Input;
