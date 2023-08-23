import { FormInputT } from "@/types/FormInputT";
import { TextareaT } from "@/types/TextareaT";
import { FieldValues } from "react-hook-form";

export interface IFormProps {
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
