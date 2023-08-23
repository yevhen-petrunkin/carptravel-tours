import TextareaT from "@/types/TextareaT";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface ITextareaProps {
  textarea: TextareaT;
  height: string[];
  register: UseFormRegister<FieldValues>;
}

export default ITextareaProps;
