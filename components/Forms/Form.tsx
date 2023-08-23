"use client";

import IFormProps from "@/interfaces/IFormProps";

import { useForm, FieldValues } from "react-hook-form";
import { useEffect } from "react";

import { Input, Textarea, Button } from "@/components";

const Form: React.FC<IFormProps> = ({
  form,
  messageHeight,
  uneven,
  onSubmit,
}) => {
  const { inputs, textarea } = form;

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FieldValues>();

  const needConfirm = form.confirmation ? true : false;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <form
      className="flex flex-col gap-[16px] md:gap-[9px] xl:gap-[24px]"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
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
          } w-full ${uneven && "md:w-[221px] md:shrink-0"} xl:w-full`}
        >
          {inputs.map((input) => (
            <li key={input.id} className="w-full">
              <Input input={input} register={register} errors={errors} />
            </li>
          ))}
        </ul>

        {/* Texarea */}

        <div className="w-full">
          <Textarea
            textarea={textarea}
            height={messageHeight}
            register={register}
          />
        </div>
      </div>

      <div className="flex flex-col gap-[16px] md:flex-row">
        {/* Confirmation */}

        <label
          className={`${
            needConfirm ? "flex" : "hidden"
          } gap-[8px] md:mt-[7px] xl:mt-[12px] md:w-[222px] xl:w-[290px] text-[12px] leading-[1.83] xl:leading-[2] font-extralight cursor-pointer `}
        >
          <input
            type="checkbox"
            className="visually-hidden form-checkbox"
            {...register("confirm", {
              required: needConfirm,
            })}
            aria-label="Confirmation checkbox"
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
