"use client";

import { IFormProps } from "@/interfaces";

import { Input, Textarea, Button } from "@/components";

const Form: React.FC<IFormProps> = ({ form, messageHeight, uneven }) => {
  const { inputs, textarea } = form;

  return (
    <form className="flex flex-col gap-[16px] md:gap-[9px] xl:gap-[24px]">
      <div
        className={`flex flex-col gap-[16px] md:flex-row md:gap-[20px] md:justify-center ${
          inputs.length > 2
            ? "xl:flex-row xl:gap-[24px]"
            : "xl:flex-col xl:gap-[40px]"
        }`}
      >
        {/* Inputs */}

        <ul
          className={`flex flex-col gap-[16px] ${
            inputs.length > 2 ? "xl:gap-[24px]" : "xl:flex-row xl:gap-[20px]"
          } w-full ${uneven && "md:w-[221px]"} xl:w-full`}
        >
          {inputs.map((input) => (
            <li key={input.id} className="w-full">
              <Input input={input} />
            </li>
          ))}
        </ul>

        {/* Texarea */}

        <div className="w-full">
          <Textarea textarea={textarea} height={messageHeight} />
        </div>
      </div>

      <div className="flex flex-col gap-[16px] md:flex-row">
        {/* Confirmation */}

        <label
          className={`${
            form?.confirmation ? "flex" : "hidden"
          } gap-[8px] text-[12px] leading-[1.83] xl:leading-[2] font-extralight cursor-pointer md:mt-[7px] xl:mt-[12px]`}
        >
          <input
            type="checkbox"
            className="visually-hidden form-checkbox"
            name="confirm"
          />

          <span className="relative shrink-0 w-[22px] h-[22px] xl:w-[24px] xl:h-[24px] border-white border-[1px] cursor-pointer form-custom-checkbox" />

          {form.confirmation}
        </label>

        {/* Button */}

        <div className="ml-auto">
          <Button
            text={form.btnText}
            size={["30px", "30px", "32px"]}
            line={[1.21]}
            type="submit"
            weight={500}
            onClick={() => {}}
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
