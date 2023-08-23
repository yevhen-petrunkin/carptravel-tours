"use client";

import { ICounterProps } from "@/interfaces/ICounterProps";

const Counter: React.FC<ICounterProps> = ({ number, length }) => {
  return (
    <p className="mt-[24px] md:mt-0 md:pl-[20px] text-[43px] md:text-[67px] xl:text-[98px] leading-[1.21] md:leading-[1.16] xl:leading-[1.21] font-thin text-right md:text-left">
      {number}/<span className="font-extralight text-white/20">{length}</span>
    </p>
  );
};

export default Counter;
