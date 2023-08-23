"use client";

import {IInputProps} from "@/interfaces/IInputProps";

const Input: React.FC<IInputProps> = ({ input, register, errors }) => {
  const { label, placeholder, prompt, type, name, error, required, pattern } =
    input;

  const usedPattern: RegExp = pattern ? pattern : /^.*$/;

  const hasError = errors[name];

  return (
    <label className="relative form-label">
      {label}

      <input
        className={`form-field ${
          prompt ? "pl-[40px] xl:pl-[58px]" : "pl-[8px]"
        } placeholder-white/20`}
        type={type ? type : "text"}
        placeholder={placeholder}
        {...register(name, {
          required,
          pattern: { value: usedPattern, message: error },
        })}
        aria-label={`Form input ${label}`}
      />

      <span
        className={`${
          prompt ? "absolute" : "hidden"
        } left-[8px] bottom-[0.2px] text-[13px] xl:text-[20px] leading-[1.84] xl:leading-[1.33] font-extralight tracking-normal`}
      >
        {prompt}
      </span>

      {hasError && <span className={`form-label form-error`}>{error}</span>}
    </label>
  );
};

export default Input;
