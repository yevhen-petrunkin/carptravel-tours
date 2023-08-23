export type FormInputT = {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  prompt?: string;
  required?: boolean | string | undefined;
  name: string;
  pattern?: RegExp;
  error: string;
};
