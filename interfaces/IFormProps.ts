import type { formInputT, textareaT } from "@/types";

interface IFormProps {
  form: {
    inputs: formInputT[];
    textarea: textareaT;
    confirmation?: string;
    btnText?: string;
  };
  messageHeight: string[];
  uneven?: boolean;
}

export default IFormProps;
