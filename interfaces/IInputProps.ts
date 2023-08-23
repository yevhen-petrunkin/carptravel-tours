import FormInputT from "@/types/FormInputT";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface IInputProps {
  input: FormInputT;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

export default IInputProps;
