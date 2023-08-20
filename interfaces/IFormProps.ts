import type { FormInputT, TextareaT } from "@/types";

interface IFormProps {
  form: {
    inputs: FormInputT[];
    textarea: TextareaT;
    confirmation?: string;
    btnText?: string;
  };
  messageHeight: string[];
  uneven?: boolean;
}

export default IFormProps;
