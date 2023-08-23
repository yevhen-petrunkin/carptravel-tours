import { FormInputT } from "@/types/FormInputT";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface IInputProps {
  input: FormInputT;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}
