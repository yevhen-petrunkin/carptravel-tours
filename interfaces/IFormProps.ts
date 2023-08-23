import type { FormInputT, TextareaT } from "@/types";
import { SubmitHandler, FieldValues } from "react-hook-form";

interface IFormProps {
  form: {
    inputs: FormInputT[];
    textarea: TextareaT;
    confirmation?: string;
    btnText?: string;
  };
  messageHeight: string[];
  uneven?: boolean;
  onSubmit: (formData: FieldValues) => void;
}

export default IFormProps;
